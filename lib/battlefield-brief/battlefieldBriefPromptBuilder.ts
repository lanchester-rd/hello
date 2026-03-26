import {
  BATTLEFIELD_BRIEF_MODEL_PURPOSE,
  BATTLEFIELD_BRIEF_PROMPT_VERSION,
} from "./battlefieldBriefConstants";
import type { BattlefieldBriefSubmissionRecord } from "./battlefieldBriefTypes";

export type BattlefieldBriefPromptInput = Pick<
  BattlefieldBriefSubmissionRecord,
  | "name"
  | "email"
  | "companyName"
  | "ideaSummary"
  | "targetUser"
  | "problemSolved"
  | "competitors"
  | "differentiator"
  | "market"
  | "stage"
  | "resources"
  | "biggestQuestion"
>;

export interface BattlefieldBriefPromptPayload {
  promptVersion: string;
  modelPurpose: string;
  systemPrompt: string;
  userPrompt: string;
  schemaTemplate: Record<string, unknown>;
}

export const BATTLEFIELD_BRIEF_AI_JSON_SCHEMA_TEMPLATE = {
  projectName: "string",
  oneLinePitch: "string",
  elevatorPitch30: "string",
  battlefieldDefinition: "string",
  incumbentStronghold: "string",
  exposedFlank: "string",
  recommendedWedge: "string",
  strategicEntryRecommendation: "string",
  expansionPath: "string",
  closingRecommendation: "string",
  define: {
    coreFriction: "string",
    userPain: "string",
    operationalFailure: "string",
    emotionalTension: "string",
    measurableSuccessCondition: "string",
  },
  map: {
    keyActors: ["string"],
    workflow: ["string"],
    bottlenecks: ["string"],
    marketStructure: "string",
    pressurePoints: ["string"],
  },
  validate: {
    assumptions: ["string"],
    risks: ["string"],
    evidenceNeeded: ["string"],
    fastestValidationTests: ["string"],
  },
  execute: {
    mvpScope: ["string"],
    notNow: ["string"],
    bestFirstSegment: "string",
    bestLaunchChannel: "string",
    first306090Plan: {
      days30: ["string"],
      days60: ["string"],
      days90: ["string"],
    },
  },
  measure: {
    leadingIndicators: ["string"],
    wedgeSuccessMetrics: ["string"],
    expansionTriggers: ["string"],
  },
  ruleApplication: {
    intellectualRigor: {
      appliedBy: ["string"],
      evidence: ["string"],
    },
    tacticalExecution: {
      appliedBy: ["string"],
      evidence: ["string"],
    },
    humanCalibration: {
      appliedBy: ["string"],
      evidence: ["string"],
    },
    machineLeverage: {
      appliedBy: ["string"],
      evidence: ["string"],
    },
  },
  ideaStrengths: ["string"],
  ideaRisks: ["string"],
  viabilitySignals: ["string"],
  broadnessWarning: "string",
  headOnAttackWarning: "string",
  confidenceNotes: "string",
};

const SYSTEM_PROMPT = [
  "You are the strategy engine for Lanchester R&D.",
  "",
  "Your job is to transform a rough startup, product, service, or business idea into a focused market-entry brief using:",
  "1. Lanchester's Laws as business concentration logic",
  "2. Lanchester R&D's 5-step method",
  "3. Lanchester R&D's 4 operational rules",
  "",
  "You are not a generic startup advisor.",
  "You are a strategic concentration engine.",
  "",
  "Lanchester principle:",
  "A smaller challenger should not attack the strongest incumbent across the full front.",
  "Identify the incumbent's stronghold, find the weakly defended flank, recommend the narrowest viable wedge, concentrate resources there, and define an expansion path after local superiority is achieved.",
  "",
  "Lanchester R&D method:",
  "01 Define - Identify friction",
  "02 Map - Visualize the system",
  "03 Validate - Data Driven Design",
  "04 Execute - Build tactical solutions",
  "05 Measure - Calculate impact",
  "",
  "Lanchester R&D rules:",
  "01_INT - Intellectual Rigor",
  "Map the system before recommending action. Use measurable logic. Avoid unsupported assumptions.",
  "",
  "02_TAC - Tactical Execution",
  "Prioritize the smallest high-impact move. Sequence actions. Avoid broad unfocused recommendations.",
  "",
  "03_HUM - Human Calibration",
  "Design recommendations around real user behavior, adoption friction, and cognitive reality.",
  "",
  "04_AI - Machine Leverage",
  "Use AI to accelerate synthesis and strategic framing while staying explainable and structured.",
  "",
  "Reasoning standards:",
  "- If the idea is too broad, say so and narrow it.",
  "- If the idea attacks the market head-on, redirect it to a wedge.",
  "- If the idea lacks a defensible angle, identify the closest plausible one.",
  "- Do not invent fake market facts.",
  "- Make grounded strategic inferences from the supplied information.",
  "- Do not produce hype language or startup cliches.",
  "- Every recommendation must have a reason.",
  "- Focus on concentration, wedge strategy, friction, and measurable entry.",
  "",
  "Writing style:",
  "- sharp",
  "- intelligent",
  "- tactical",
  "- calm",
  "- credible",
  "- concise but useful",
  "- branded to Lanchester R&D",
  "",
  "Output rules:",
  "- Return only valid JSON",
  "- Follow the exact schema provided",
  "- Do not wrap JSON in markdown",
  "- Do not include commentary outside JSON",
].join("\n");

function safeValue(value: string): string {
  const normalized = value.replace(/\s+/g, " ").trim();
  return normalized || "Not provided.";
}

function buildSubmissionSnapshot(input: BattlefieldBriefPromptInput) {
  return {
    submitterName: safeValue(input.name),
    submitterEmail: safeValue(input.email),
    companyName: safeValue(input.companyName),
    ideaSummary: safeValue(input.ideaSummary),
    targetUser: safeValue(input.targetUser),
    problemSolved: safeValue(input.problemSolved),
    competitors: safeValue(input.competitors),
    differentiator: safeValue(input.differentiator),
    market: safeValue(input.market),
    stage: safeValue(input.stage),
    resources: safeValue(input.resources),
    biggestQuestion: safeValue(input.biggestQuestion),
  };
}

export function buildBattlefieldBriefPromptPayload(
  input: BattlefieldBriefPromptInput,
): BattlefieldBriefPromptPayload {
  const snapshot = buildSubmissionSnapshot(input);

  const userPrompt = [
    "Build a Lanchester R&D Battlefield Brief from the submission below.",
    "",
    "Objectives:",
    "1. Convert the idea into a concentrated market-entry strategy.",
    "2. Identify the incumbent stronghold, exposed flank, and narrowest viable wedge.",
    "3. Apply the 5-step method and all 4 operational rules in practical terms.",
    "4. Avoid generic startup advice and unsupported claims.",
    "5. If the concept is broad, explicitly narrow it to a wedge.",
    "6. If the concept attacks incumbents head-on, redirect toward concentrated local superiority.",
    "",
    "Submission:",
    JSON.stringify(snapshot, null, 2),
    "",
    "Return JSON only using this exact schema shape:",
    JSON.stringify(BATTLEFIELD_BRIEF_AI_JSON_SCHEMA_TEMPLATE, null, 2),
  ].join("\n");

  return {
    promptVersion: BATTLEFIELD_BRIEF_PROMPT_VERSION,
    modelPurpose: BATTLEFIELD_BRIEF_MODEL_PURPOSE,
    systemPrompt: SYSTEM_PROMPT,
    userPrompt,
    schemaTemplate: BATTLEFIELD_BRIEF_AI_JSON_SCHEMA_TEMPLATE,
  };
}
