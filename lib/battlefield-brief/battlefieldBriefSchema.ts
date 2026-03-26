import {
  BATTLEFIELD_BRIEF_DEFAULTS,
  BATTLEFIELD_BRIEF_STAGE_OPTIONS,
} from "./battlefieldBriefConstants";
import type {
  BattlefieldBriefOutput,
  BattlefieldBriefSubmissionInput,
} from "./battlefieldBriefTypes";

export type ValidationResult<T> =
  | { ok: true; data: T }
  | { ok: false; errors: Record<string, string> };

const MAX_TEXT = 4000;
const MAX_SHORT = 180;

const stageValues = new Set(
  BATTLEFIELD_BRIEF_STAGE_OPTIONS.map((option) => option.value),
);

function asString(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u0009\u000B-\u001F\u007F]/g, "").trim();
}

function clip(value: string, maxLength: number): string {
  if (value.length <= maxLength) return value;
  return value.slice(0, maxLength).trim();
}

function requireString(
  errors: Record<string, string>,
  field: string,
  value: unknown,
  label: string,
  maxLength = MAX_TEXT,
): string {
  const normalized = clip(asString(value), maxLength);
  if (!normalized) {
    errors[field] = `${label} is required.`;
  }
  return normalized;
}

function sanitizeOptional(value: unknown, maxLength = MAX_TEXT): string | null {
  const normalized = clip(asString(value), maxLength);
  return normalized || null;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function listOfStrings(input: unknown): string[] {
  if (!Array.isArray(input)) return [];
  return input
    .map((item) => clip(asString(item), MAX_TEXT))
    .filter(Boolean);
}

export function validateBattlefieldBriefSubmissionInput(
  input: unknown,
): ValidationResult<BattlefieldBriefSubmissionInput> {
  const errors: Record<string, string> = {};
  const body =
    typeof input === "object" && input !== null
      ? (input as Record<string, unknown>)
      : {};

  const name = requireString(errors, "name", body.name, "Name", MAX_SHORT);
  const email = requireString(errors, "email", body.email, "Email", MAX_SHORT).toLowerCase();
  if (email && !isValidEmail(email)) {
    errors.email = "Please provide a valid email address.";
  }

  const companyName = requireString(
    errors,
    "companyName",
    body.companyName,
    "Company / project name",
    220,
  );

  const ideaSummary = requireString(
    errors,
    "ideaSummary",
    body.ideaSummary,
    "Idea summary",
    MAX_TEXT,
  );

  const targetUser = requireString(
    errors,
    "targetUser",
    body.targetUser,
    "Target user",
    800,
  );

  const problemSolved = requireString(
    errors,
    "problemSolved",
    body.problemSolved,
    "Problem solved",
    MAX_TEXT,
  );

  const competitors = requireString(
    errors,
    "competitors",
    body.competitors,
    "Current alternatives / competitors",
    MAX_TEXT,
  );

  const differentiator = requireString(
    errors,
    "differentiator",
    body.differentiator,
    "Differentiator",
    MAX_TEXT,
  );

  const market = requireString(errors, "market", body.market, "Market / geography", 800);

  const stageRaw = asString(body.stage);
  const stage = stageValues.has(stageRaw as BattlefieldBriefSubmissionInput["stage"])
    ? (stageRaw as BattlefieldBriefSubmissionInput["stage"])
    : "idea";
  if (!stageRaw || !stageValues.has(stageRaw as BattlefieldBriefSubmissionInput["stage"])) {
    errors.stage = "Please select a valid stage.";
  }

  const resources = requireString(
    errors,
    "resources",
    body.resources,
    "Current resources / constraints",
    MAX_TEXT,
  );

  const biggestQuestion = requireString(
    errors,
    "biggestQuestion",
    body.biggestQuestion,
    "Biggest question or challenge",
    MAX_TEXT,
  );

  const consentAccepted = body.consentAccepted === true;
  if (!consentAccepted) {
    errors.consentAccepted = "Consent is required to generate a brief.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      companyName,
      ideaSummary,
      targetUser,
      problemSolved,
      competitors,
      differentiator,
      market,
      stage,
      resources,
      biggestQuestion,
      consentAccepted,
      sourcePage:
        sanitizeOptional(body.sourcePage, 400) || BATTLEFIELD_BRIEF_DEFAULTS.sourcePage,
      referral: sanitizeOptional(body.referral, 400),
    },
  };
}

function validateArray(
  errors: Record<string, string>,
  path: string,
  input: unknown,
  label: string,
): string[] {
  const value = listOfStrings(input);
  if (value.length === 0) {
    errors[path] = `${label} must contain at least one item.`;
  }
  return value;
}

function optionalArray(input: unknown): string[] | undefined {
  const value = listOfStrings(input);
  return value.length > 0 ? value : undefined;
}

function optionalString(input: unknown, maxLength = MAX_TEXT): string | undefined {
  const value = sanitizeOptional(input, maxLength);
  return value || undefined;
}

export function validateBattlefieldBriefOutput(
  input: unknown,
): ValidationResult<BattlefieldBriefOutput> {
  const errors: Record<string, string> = {};
  const body =
    typeof input === "object" && input !== null
      ? (input as Record<string, unknown>)
      : {};

  const define = (body.define as Record<string, unknown>) || {};
  const map = (body.map as Record<string, unknown>) || {};
  const validate = (body.validate as Record<string, unknown>) || {};
  const execute = (body.execute as Record<string, unknown>) || {};
  const measure = (body.measure as Record<string, unknown>) || {};
  const ruleApplication =
    (body.ruleApplication as Record<string, unknown>) || {};
  const first306090PlanDetailed =
    (execute.first306090PlanDetailed as Record<string, unknown>) || {};
  const ruleApplicationDetails =
    (body.ruleApplicationDetails as Record<string, unknown>) || {};

  const ruleDetailOrEmpty = (inputValue: unknown) =>
    (typeof inputValue === "object" && inputValue !== null
      ? (inputValue as Record<string, unknown>)
      : {}) as Record<string, unknown>;

  const intellectualRigorDetail = ruleDetailOrEmpty(
    ruleApplicationDetails.intellectualRigor,
  );
  const tacticalExecutionDetail = ruleDetailOrEmpty(
    ruleApplicationDetails.tacticalExecution,
  );
  const humanCalibrationDetail = ruleDetailOrEmpty(
    ruleApplicationDetails.humanCalibration,
  );
  const machineLeverageDetail = ruleDetailOrEmpty(
    ruleApplicationDetails.machineLeverage,
  );

  const output: BattlefieldBriefOutput = {
    projectName: requireString(errors, "projectName", body.projectName, "Project name", 220),
    oneLinePitch: requireString(errors, "oneLinePitch", body.oneLinePitch, "One-line pitch", 300),
    elevatorPitch30: requireString(
      errors,
      "elevatorPitch30",
      body.elevatorPitch30,
      "30-second elevator pitch",
      MAX_TEXT,
    ),
    battlefieldDefinition: requireString(
      errors,
      "battlefieldDefinition",
      body.battlefieldDefinition,
      "Battlefield definition",
      MAX_TEXT,
    ),
    incumbentStronghold: requireString(
      errors,
      "incumbentStronghold",
      body.incumbentStronghold,
      "Incumbent stronghold",
      MAX_TEXT,
    ),
    exposedFlank: requireString(errors, "exposedFlank", body.exposedFlank, "Exposed flank", MAX_TEXT),
    recommendedWedge: requireString(
      errors,
      "recommendedWedge",
      body.recommendedWedge,
      "Recommended wedge",
      MAX_TEXT,
    ),
    strategicEntryRecommendation: requireString(
      errors,
      "strategicEntryRecommendation",
      body.strategicEntryRecommendation,
      "Strategic entry recommendation",
      MAX_TEXT,
    ),
    expansionPath: requireString(errors, "expansionPath", body.expansionPath, "Expansion path", MAX_TEXT),
    define: {
      coreFriction: requireString(errors, "define.coreFriction", define.coreFriction, "Define core friction"),
      userPain: requireString(errors, "define.userPain", define.userPain, "Define user pain"),
      operationalFailure: requireString(
        errors,
        "define.operationalFailure",
        define.operationalFailure,
        "Define operational failure",
      ),
      emotionalTension: requireString(
        errors,
        "define.emotionalTension",
        define.emotionalTension,
        "Define emotional tension",
      ),
      measurableSuccessCondition: requireString(
        errors,
        "define.measurableSuccessCondition",
        define.measurableSuccessCondition,
        "Define measurable success condition",
      ),
    },
    map: {
      keyActors: validateArray(errors, "map.keyActors", map.keyActors, "Map key actors"),
      workflow: validateArray(errors, "map.workflow", map.workflow, "Map workflow"),
      bottlenecks: validateArray(errors, "map.bottlenecks", map.bottlenecks, "Map bottlenecks"),
      marketStructure: requireString(
        errors,
        "map.marketStructure",
        map.marketStructure,
        "Map market structure",
      ),
      pressurePoints: validateArray(errors, "map.pressurePoints", map.pressurePoints, "Map pressure points"),
    },
    validate: {
      assumptions: validateArray(
        errors,
        "validate.assumptions",
        validate.assumptions,
        "Validate assumptions",
      ),
      risks: validateArray(errors, "validate.risks", validate.risks, "Validate risks"),
      evidenceNeeded: validateArray(
        errors,
        "validate.evidenceNeeded",
        validate.evidenceNeeded,
        "Validate evidence needed",
      ),
      fastestValidationTests: validateArray(
        errors,
        "validate.fastestValidationTests",
        validate.fastestValidationTests,
        "Validate fastest tests",
      ),
    },
    execute: {
      mvpScope: validateArray(errors, "execute.mvpScope", execute.mvpScope, "Execute MVP scope"),
      notNow: validateArray(errors, "execute.notNow", execute.notNow, "Execute not-now items"),
      bestFirstSegment: requireString(
        errors,
        "execute.bestFirstSegment",
        execute.bestFirstSegment,
        "Execute best first segment",
      ),
      bestLaunchChannel: requireString(
        errors,
        "execute.bestLaunchChannel",
        execute.bestLaunchChannel,
        "Execute best launch channel",
      ),
      first306090Plan: validateArray(
        errors,
        "execute.first306090Plan",
        execute.first306090Plan,
        "Execute 30/60/90 plan",
      ),
      first306090PlanDetailed:
        optionalArray(first306090PlanDetailed.days30) ||
        optionalArray(first306090PlanDetailed.days60) ||
        optionalArray(first306090PlanDetailed.days90)
          ? {
              days30: listOfStrings(first306090PlanDetailed.days30),
              days60: listOfStrings(first306090PlanDetailed.days60),
              days90: listOfStrings(first306090PlanDetailed.days90),
            }
          : undefined,
    },
    measure: {
      leadingIndicators: validateArray(
        errors,
        "measure.leadingIndicators",
        measure.leadingIndicators,
        "Measure leading indicators",
      ),
      wedgeSuccessMetrics: validateArray(
        errors,
        "measure.wedgeSuccessMetrics",
        measure.wedgeSuccessMetrics,
        "Measure wedge success metrics",
      ),
      expansionTriggers: validateArray(
        errors,
        "measure.expansionTriggers",
        measure.expansionTriggers,
        "Measure expansion triggers",
      ),
    },
    ruleApplication: {
      intellectualRigor: requireString(
        errors,
        "ruleApplication.intellectualRigor",
        ruleApplication.intellectualRigor,
        "Rule intellectual rigor",
      ),
      tacticalExecution: requireString(
        errors,
        "ruleApplication.tacticalExecution",
        ruleApplication.tacticalExecution,
        "Rule tactical execution",
      ),
      humanCalibration: requireString(
        errors,
        "ruleApplication.humanCalibration",
        ruleApplication.humanCalibration,
        "Rule human calibration",
      ),
      machineLeverage: requireString(
        errors,
        "ruleApplication.machineLeverage",
        ruleApplication.machineLeverage,
        "Rule machine leverage",
      ),
    },
    ruleApplicationDetails:
      optionalArray(intellectualRigorDetail.appliedBy) ||
      optionalArray(intellectualRigorDetail.evidence) ||
      optionalArray(tacticalExecutionDetail.appliedBy) ||
      optionalArray(tacticalExecutionDetail.evidence) ||
      optionalArray(humanCalibrationDetail.appliedBy) ||
      optionalArray(humanCalibrationDetail.evidence) ||
      optionalArray(machineLeverageDetail.appliedBy) ||
      optionalArray(machineLeverageDetail.evidence)
        ? {
            intellectualRigor: {
              appliedBy: listOfStrings(intellectualRigorDetail.appliedBy),
              evidence: listOfStrings(intellectualRigorDetail.evidence),
            },
            tacticalExecution: {
              appliedBy: listOfStrings(tacticalExecutionDetail.appliedBy),
              evidence: listOfStrings(tacticalExecutionDetail.evidence),
            },
            humanCalibration: {
              appliedBy: listOfStrings(humanCalibrationDetail.appliedBy),
              evidence: listOfStrings(humanCalibrationDetail.evidence),
            },
            machineLeverage: {
              appliedBy: listOfStrings(machineLeverageDetail.appliedBy),
              evidence: listOfStrings(machineLeverageDetail.evidence),
            },
          }
        : undefined,
    closingRecommendation: requireString(
      errors,
      "closingRecommendation",
      body.closingRecommendation,
      "Closing recommendation",
      MAX_TEXT,
    ),
    ideaStrengths: optionalArray(body.ideaStrengths),
    ideaRisks: optionalArray(body.ideaRisks),
    viabilitySignals: optionalArray(body.viabilitySignals),
    broadnessWarning: optionalString(body.broadnessWarning),
    headOnAttackWarning: optionalString(body.headOnAttackWarning),
    confidenceNotes: optionalString(body.confidenceNotes),
  };

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, data: output };
}
