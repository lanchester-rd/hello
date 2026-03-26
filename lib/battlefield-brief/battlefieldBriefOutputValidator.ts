import { validateBattlefieldBriefOutput } from "./battlefieldBriefSchema";
import type {
  BattlefieldBriefOutput,
  BattlefieldBriefRuleApplicationDetail,
  BattlefieldBriefRuleApplicationDetails,
} from "./battlefieldBriefTypes";

export type BattlefieldBriefOutputValidationResult =
  | {
      ok: true;
      data: BattlefieldBriefOutput;
      warnings: string[];
      validationPassed: true;
    }
  | {
      ok: false;
      errors: Record<string, string>;
      warnings: string[];
      validationPassed: false;
    };

type AnyRecord = Record<string, unknown>;

function asRecord(value: unknown): AnyRecord {
  if (!value || typeof value !== "object") return {};
  return value as AnyRecord;
}

function asText(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim();
}

function splitListText(value: string): string[] {
  return value
    .split(/\n|,|;|\|/g)
    .map((item) => item.replace(/^[-*\d.)\s]+/, "").trim())
    .filter(Boolean);
}

function toList(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value
      .map((item) => asText(item))
      .filter(Boolean);
  }

  if (typeof value === "string") {
    const normalized = asText(value);
    if (!normalized) return [];
    return splitListText(normalized);
  }

  return [];
}

function toOptionalList(value: unknown): string[] | undefined {
  const list = toList(value);
  return list.length > 0 ? list : undefined;
}

function firstNonEmpty(...candidates: unknown[]): string {
  for (const candidate of candidates) {
    const text = asText(candidate);
    if (text) return text;
  }
  return "";
}

function normalizePlan(input: unknown): {
  flat: string[];
  detailed?: {
    days30: string[];
    days60: string[];
    days90: string[];
  };
  warnings: string[];
} {
  if (Array.isArray(input) || typeof input === "string") {
    return { flat: toList(input), warnings: [] };
  }

  const obj = asRecord(input);
  const days30 = toList(obj.days30 ?? obj.day30 ?? obj.d30 ?? obj["30"]);
  const days60 = toList(obj.days60 ?? obj.day60 ?? obj.d60 ?? obj["60"]);
  const days90 = toList(obj.days90 ?? obj.day90 ?? obj.d90 ?? obj["90"]);

  const flat = [
    ...days30.map((item) => `30 days: ${item}`),
    ...days60.map((item) => `60 days: ${item}`),
    ...days90.map((item) => `90 days: ${item}`),
  ];

  if (flat.length > 0) {
    return {
      flat,
      detailed: {
        days30,
        days60,
        days90,
      },
      warnings: ["Normalized execute.first306090Plan object into list format."],
    };
  }

  return {
    flat: toList(obj.plan),
    warnings: [],
  };
}

function buildRuleSummary(
  label: string,
  detail: BattlefieldBriefRuleApplicationDetail,
  fallbackSummary: string,
): string {
  if (fallbackSummary) return fallbackSummary;

  const applied = detail.appliedBy.slice(0, 2).join("; ");
  const evidence = detail.evidence.slice(0, 2).join("; ");

  if (applied && evidence) {
    return `${label}: ${applied}. Evidence: ${evidence}.`;
  }

  if (applied) {
    return `${label}: ${applied}.`;
  }

  if (evidence) {
    return `${label}: Evidence includes ${evidence}.`;
  }

  return "";
}

function normalizeRule(
  label: string,
  input: unknown,
): {
  summary: string;
  detail: BattlefieldBriefRuleApplicationDetail;
  warnings: string[];
} {
  if (typeof input === "string") {
    return {
      summary: asText(input),
      detail: { appliedBy: [], evidence: [] },
      warnings: [],
    };
  }

  const obj = asRecord(input);
  const detail: BattlefieldBriefRuleApplicationDetail = {
    appliedBy: toList(obj.appliedBy ?? obj.applied_by),
    evidence: toList(obj.evidence ?? obj.proof),
  };

  const summary = buildRuleSummary(
    label,
    detail,
    firstNonEmpty(obj.summary, obj.statement, obj.rationale),
  );

  const hasStructuredData = detail.appliedBy.length > 0 || detail.evidence.length > 0;

  return {
    summary,
    detail,
    warnings: hasStructuredData
      ? [`Normalized structured ruleApplication.${label} into summary + details.`]
      : [],
  };
}

function maybeRuleDetails(
  details: BattlefieldBriefRuleApplicationDetails,
): BattlefieldBriefRuleApplicationDetails | undefined {
  const hasAny =
    details.intellectualRigor.appliedBy.length > 0 ||
    details.intellectualRigor.evidence.length > 0 ||
    details.tacticalExecution.appliedBy.length > 0 ||
    details.tacticalExecution.evidence.length > 0 ||
    details.humanCalibration.appliedBy.length > 0 ||
    details.humanCalibration.evidence.length > 0 ||
    details.machineLeverage.appliedBy.length > 0 ||
    details.machineLeverage.evidence.length > 0;

  return hasAny ? details : undefined;
}

function normalizeWarnings(warnings: string[]): string[] {
  return Array.from(new Set(warnings.map((item) => item.trim()).filter(Boolean)));
}

export function validateAndNormalizeBattlefieldBriefOutput(
  input: unknown,
): BattlefieldBriefOutputValidationResult {
  const warnings: string[] = [];

  const body = asRecord(input);
  const define = asRecord(body.define);
  const map = asRecord(body.map);
  const validate = asRecord(body.validate);
  const execute = asRecord(body.execute);
  const measure = asRecord(body.measure);
  const ruleApplication = asRecord(body.ruleApplication);

  const plan = normalizePlan(execute.first306090Plan);
  warnings.push(...plan.warnings);

  const ruleIntellectual = normalizeRule("intellectualRigor", ruleApplication.intellectualRigor);
  const ruleTactical = normalizeRule("tacticalExecution", ruleApplication.tacticalExecution);
  const ruleHuman = normalizeRule("humanCalibration", ruleApplication.humanCalibration);
  const ruleMachine = normalizeRule("machineLeverage", ruleApplication.machineLeverage);

  warnings.push(...ruleIntellectual.warnings);
  warnings.push(...ruleTactical.warnings);
  warnings.push(...ruleHuman.warnings);
  warnings.push(...ruleMachine.warnings);

  const normalized: BattlefieldBriefOutput = {
    projectName: firstNonEmpty(body.projectName, body.companyName),
    oneLinePitch: firstNonEmpty(body.oneLinePitch),
    elevatorPitch30: firstNonEmpty(body.elevatorPitch30),
    battlefieldDefinition: firstNonEmpty(body.battlefieldDefinition),
    incumbentStronghold: firstNonEmpty(body.incumbentStronghold),
    exposedFlank: firstNonEmpty(body.exposedFlank),
    recommendedWedge: firstNonEmpty(body.recommendedWedge),
    strategicEntryRecommendation: firstNonEmpty(body.strategicEntryRecommendation),
    expansionPath: firstNonEmpty(body.expansionPath),
    define: {
      coreFriction: firstNonEmpty(define.coreFriction),
      userPain: firstNonEmpty(define.userPain),
      operationalFailure: firstNonEmpty(define.operationalFailure),
      emotionalTension: firstNonEmpty(define.emotionalTension),
      measurableSuccessCondition: firstNonEmpty(define.measurableSuccessCondition),
    },
    map: {
      keyActors: toList(map.keyActors),
      workflow: toList(map.workflow),
      bottlenecks: toList(map.bottlenecks),
      marketStructure: firstNonEmpty(map.marketStructure),
      pressurePoints: toList(map.pressurePoints),
    },
    validate: {
      assumptions: toList(validate.assumptions),
      risks: toList(validate.risks),
      evidenceNeeded: toList(validate.evidenceNeeded),
      fastestValidationTests: toList(validate.fastestValidationTests),
    },
    execute: {
      mvpScope: toList(execute.mvpScope),
      notNow: toList(execute.notNow),
      bestFirstSegment: firstNonEmpty(execute.bestFirstSegment),
      bestLaunchChannel: firstNonEmpty(execute.bestLaunchChannel),
      first306090Plan: plan.flat,
      first306090PlanDetailed: plan.detailed,
    },
    measure: {
      leadingIndicators: toList(measure.leadingIndicators),
      wedgeSuccessMetrics: toList(measure.wedgeSuccessMetrics),
      expansionTriggers: toList(measure.expansionTriggers),
    },
    ruleApplication: {
      intellectualRigor: ruleIntellectual.summary,
      tacticalExecution: ruleTactical.summary,
      humanCalibration: ruleHuman.summary,
      machineLeverage: ruleMachine.summary,
    },
    ruleApplicationDetails: maybeRuleDetails({
      intellectualRigor: ruleIntellectual.detail,
      tacticalExecution: ruleTactical.detail,
      humanCalibration: ruleHuman.detail,
      machineLeverage: ruleMachine.detail,
    }),
    closingRecommendation: firstNonEmpty(body.closingRecommendation),
    ideaStrengths: toOptionalList(body.ideaStrengths),
    ideaRisks: toOptionalList(body.ideaRisks),
    viabilitySignals: toOptionalList(body.viabilitySignals),
    broadnessWarning: firstNonEmpty(body.broadnessWarning) || undefined,
    headOnAttackWarning: firstNonEmpty(body.headOnAttackWarning) || undefined,
    confidenceNotes: firstNonEmpty(body.confidenceNotes) || undefined,
  };

  const validation = validateBattlefieldBriefOutput(normalized);
  if (!validation.ok) {
    return {
      ok: false,
      validationPassed: false,
      warnings: normalizeWarnings(warnings),
      errors: validation.errors,
    };
  }

  return {
    ok: true,
    validationPassed: true,
    warnings: normalizeWarnings(warnings),
    data: validation.data,
  };
}
