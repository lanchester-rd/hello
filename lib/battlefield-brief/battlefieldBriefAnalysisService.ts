import { BATTLEFIELD_BRIEF_GENERATOR_TYPES } from "./battlefieldBriefConstants";
import { generateBattlefieldBriefFallback } from "./battlefieldBriefFallbackGenerator";
import {
  generateBattlefieldBriefFromProvider,
  getBattlefieldBriefGenerationRuntimeConfig,
  shouldUseBattlefieldBriefMockMode,
} from "./battlefieldBriefGenerationProvider";
import { parseBattlefieldBriefOutput } from "./battlefieldBriefOutputParser";
import { validateAndNormalizeBattlefieldBriefOutput } from "./battlefieldBriefOutputValidator";
import { buildBattlefieldBriefPromptPayload } from "./battlefieldBriefPromptBuilder";
import type {
  BattlefieldBriefGenerationMetadata,
  BattlefieldBriefGeneratorType,
  BattlefieldBriefOutput,
  BattlefieldBriefParserStatus,
  BattlefieldBriefSubmissionRecord,
} from "./battlefieldBriefTypes";

export interface BattlefieldBriefAnalysisResult {
  output: BattlefieldBriefOutput;
  generatorType: BattlefieldBriefGeneratorType;
  renderedSummary: string;
  viabilityScore: number;
  isMock: boolean;
  generationMetadata: BattlefieldBriefGenerationMetadata;
}

function nowIso(): string {
  return new Date().toISOString();
}

function dedupeWarnings(warnings: string[]): string[] {
  return Array.from(new Set(warnings.map((item) => item.trim()).filter(Boolean)));
}

function safeErrorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  return "Unknown generation error.";
}

export async function generateBattlefieldBriefAnalysis(
  submission: BattlefieldBriefSubmissionRecord,
): Promise<BattlefieldBriefAnalysisResult> {
  const generatedAt = nowIso();
  const prompt = buildBattlefieldBriefPromptPayload(submission);
  const config = getBattlefieldBriefGenerationRuntimeConfig();
  const warnings: string[] = [];
  const mode = shouldUseBattlefieldBriefMockMode(config);

  let parserStatus: BattlefieldBriefParserStatus = "not_run";
  let providerName = config.provider;
  let modelName = config.model;
  let rawResponseAvailable = false;

  if (mode.enabled) {
    const fallback = generateBattlefieldBriefFallback(
      submission,
      mode.reason || "Mock mode enabled for Battlefield Brief generation.",
    );

    return {
      output: fallback.output,
      generatorType: BATTLEFIELD_BRIEF_GENERATOR_TYPES.mock,
      renderedSummary: fallback.renderedSummary,
      viabilityScore: fallback.viabilityScore,
      isMock: true,
      generationMetadata: {
        promptVersion: prompt.promptVersion,
        modelPurpose: prompt.modelPurpose,
        providerName,
        modelName,
        parserStatus,
        validationPassed: true,
        isFallback: true,
        rawResponseAvailable,
        generationWarnings: dedupeWarnings(fallback.warnings),
        generatedAt,
      },
    };
  }

  try {
    const providerResult = await generateBattlefieldBriefFromProvider(
      {
        systemPrompt: prompt.systemPrompt,
        userPrompt: prompt.userPrompt,
      },
      config,
    );

    providerName = providerResult.providerName;
    modelName = providerResult.modelName;
    rawResponseAvailable = providerResult.rawResponseText.trim().length > 0;

    const parsed = parseBattlefieldBriefOutput(providerResult.rawResponseText);
    parserStatus = parsed.parserStatus;
    warnings.push(...parsed.warnings);

    if (!parsed.ok) {
      throw new Error(parsed.errorMessage);
    }

    const validated = validateAndNormalizeBattlefieldBriefOutput(parsed.data);
    warnings.push(...validated.warnings);

    if (!validated.ok) {
      throw new Error(
        `Validation failed: ${JSON.stringify(validated.errors)}`,
      );
    }

    return {
      output: validated.data,
      generatorType: BATTLEFIELD_BRIEF_GENERATOR_TYPES.ai,
      renderedSummary: validated.data.closingRecommendation,
      viabilityScore: fallbackViability(submission, validated.data),
      isMock: false,
      generationMetadata: {
        promptVersion: prompt.promptVersion,
        modelPurpose: prompt.modelPurpose,
        providerName,
        modelName,
        parserStatus,
        validationPassed: true,
        isFallback: false,
        rawResponseAvailable,
        generationWarnings: dedupeWarnings(warnings),
        generatedAt,
      },
    };
  } catch (error) {
    const message = safeErrorMessage(error);
    warnings.push(message);

    const fallback = generateBattlefieldBriefFallback(
      submission,
      `AI generation failed: ${message}`,
    );

    return {
      output: fallback.output,
      generatorType: BATTLEFIELD_BRIEF_GENERATOR_TYPES.mock,
      renderedSummary: fallback.renderedSummary,
      viabilityScore: fallback.viabilityScore,
      isMock: true,
      generationMetadata: {
        promptVersion: prompt.promptVersion,
        modelPurpose: prompt.modelPurpose,
        providerName,
        modelName,
        parserStatus,
        validationPassed: false,
        isFallback: true,
        rawResponseAvailable,
        generationWarnings: dedupeWarnings([...warnings, ...fallback.warnings]),
        generatedAt,
      },
    };
  }
}

function fallbackViability(
  submission: BattlefieldBriefSubmissionRecord,
  output: BattlefieldBriefOutput,
): number {
  const stageBase: Record<BattlefieldBriefSubmissionRecord["stage"], number> = {
    idea: 50,
    validating: 60,
    building: 68,
    launched: 74,
  };

  const signalBoost = Math.min(10, (output.viabilitySignals?.length ?? 0) * 2);
  const riskPenalty = Math.min(8, output.ideaRisks?.length ?? 0);

  const raw = stageBase[submission.stage] + signalBoost - Math.floor(riskPenalty / 2);
  return Math.max(40, Math.min(90, raw));
}
