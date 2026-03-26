import type {
  BATTLEFIELD_BRIEF_EVENT_TYPES,
  BATTLEFIELD_BRIEF_GENERATOR_TYPES,
  BATTLEFIELD_BRIEF_PARSER_STATUS_OPTIONS,
  BATTLEFIELD_BRIEF_AI_PROVIDER_OPTIONS,
  BATTLEFIELD_BRIEF_RECORD_STATUS_OPTIONS,
  BATTLEFIELD_BRIEF_STAGE_OPTIONS,
  BATTLEFIELD_BRIEF_SUBMISSION_STATUS_OPTIONS,
} from "./battlefieldBriefConstants";

export type BattlefieldBriefStage =
  (typeof BATTLEFIELD_BRIEF_STAGE_OPTIONS)[number]["value"];

export type BattlefieldBriefSubmissionStatus =
  (typeof BATTLEFIELD_BRIEF_SUBMISSION_STATUS_OPTIONS)[number]["value"];

export type BattlefieldBriefRecordStatus =
  (typeof BATTLEFIELD_BRIEF_RECORD_STATUS_OPTIONS)[number]["value"];

export type BattlefieldBriefGeneratorType =
  (typeof BATTLEFIELD_BRIEF_GENERATOR_TYPES)[keyof typeof BATTLEFIELD_BRIEF_GENERATOR_TYPES];

export type BattlefieldBriefEventType =
  (typeof BATTLEFIELD_BRIEF_EVENT_TYPES)[keyof typeof BATTLEFIELD_BRIEF_EVENT_TYPES];

export type BattlefieldBriefAiProvider =
  (typeof BATTLEFIELD_BRIEF_AI_PROVIDER_OPTIONS)[number];

export type BattlefieldBriefParserStatus =
  (typeof BATTLEFIELD_BRIEF_PARSER_STATUS_OPTIONS)[number];

export interface BattlefieldBriefSubmissionInput {
  name: string;
  email: string;
  companyName: string;
  ideaSummary: string;
  targetUser: string;
  problemSolved: string;
  competitors: string;
  differentiator: string;
  market: string;
  stage: BattlefieldBriefStage;
  resources: string;
  biggestQuestion: string;
  consentAccepted: boolean;
  sourcePage?: string | null;
  referral?: string | null;
}

export interface BattlefieldBriefSubmissionRecord
  extends BattlefieldBriefSubmissionInput {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: BattlefieldBriefSubmissionStatus;
  errorMessage: string | null;
  briefId: string | null;
  pdfFileUrl: string | null;
  pdfFilePath: string | null;
}

export interface BattlefieldBriefDefineSection {
  coreFriction: string;
  userPain: string;
  operationalFailure: string;
  emotionalTension: string;
  measurableSuccessCondition: string;
}

export interface BattlefieldBriefMapSection {
  keyActors: string[];
  workflow: string[];
  bottlenecks: string[];
  marketStructure: string;
  pressurePoints: string[];
}

export interface BattlefieldBriefValidateSection {
  assumptions: string[];
  risks: string[];
  evidenceNeeded: string[];
  fastestValidationTests: string[];
}

export interface BattlefieldBriefExecuteSection {
  mvpScope: string[];
  notNow: string[];
  bestFirstSegment: string;
  bestLaunchChannel: string;
  first306090Plan: string[];
  first306090PlanDetailed?: {
    days30: string[];
    days60: string[];
    days90: string[];
  };
}

export interface BattlefieldBriefMeasureSection {
  leadingIndicators: string[];
  wedgeSuccessMetrics: string[];
  expansionTriggers: string[];
}

export interface BattlefieldBriefRuleApplication {
  intellectualRigor: string;
  tacticalExecution: string;
  humanCalibration: string;
  machineLeverage: string;
}

export interface BattlefieldBriefRuleApplicationDetail {
  appliedBy: string[];
  evidence: string[];
}

export interface BattlefieldBriefRuleApplicationDetails {
  intellectualRigor: BattlefieldBriefRuleApplicationDetail;
  tacticalExecution: BattlefieldBriefRuleApplicationDetail;
  humanCalibration: BattlefieldBriefRuleApplicationDetail;
  machineLeverage: BattlefieldBriefRuleApplicationDetail;
}

export interface BattlefieldBriefOutput {
  projectName: string;
  oneLinePitch: string;
  elevatorPitch30: string;
  battlefieldDefinition: string;
  incumbentStronghold: string;
  exposedFlank: string;
  recommendedWedge: string;
  strategicEntryRecommendation: string;
  expansionPath: string;
  define: BattlefieldBriefDefineSection;
  map: BattlefieldBriefMapSection;
  validate: BattlefieldBriefValidateSection;
  execute: BattlefieldBriefExecuteSection;
  measure: BattlefieldBriefMeasureSection;
  ruleApplication: BattlefieldBriefRuleApplication;
  ruleApplicationDetails?: BattlefieldBriefRuleApplicationDetails;
  closingRecommendation: string;
  ideaStrengths?: string[];
  ideaRisks?: string[];
  viabilitySignals?: string[];
  broadnessWarning?: string;
  headOnAttackWarning?: string;
  confidenceNotes?: string;
}

export interface BattlefieldBriefGenerationMetadata {
  promptVersion: string;
  modelPurpose: string;
  providerName: BattlefieldBriefAiProvider;
  modelName: string;
  parserStatus: BattlefieldBriefParserStatus;
  validationPassed: boolean;
  isFallback: boolean;
  rawResponseAvailable: boolean;
  generationWarnings: string[];
  generatedAt: string;
}

export interface BattlefieldBriefRecord {
  id: string;
  submissionId: string;
  createdAt: string;
  updatedAt: string;
  version: number;
  generatorType: BattlefieldBriefGeneratorType;
  rawStructuredOutput: BattlefieldBriefOutput;
  renderedSummary: string;
  viabilityScore: number | null;
  isMock: boolean;
  generationMetadata?: BattlefieldBriefGenerationMetadata | null;
  status: BattlefieldBriefRecordStatus;
}

export interface BattlefieldBriefEventRecord {
  id: string;
  submissionId: string;
  type: BattlefieldBriefEventType;
  message: string;
  createdAt: string;
}

export interface BattlefieldBriefAdminListItem {
  id: string;
  createdAt: string;
  updatedAt: string;
  companyName: string;
  submitterName: string;
  email: string;
  stage: BattlefieldBriefStage;
  status: BattlefieldBriefSubmissionStatus;
  briefAvailable: boolean;
  pdfAvailable: boolean;
}

export interface BattlefieldBriefPdfPayload {
  submission: BattlefieldBriefSubmissionRecord;
  brief: BattlefieldBriefRecord;
}

export interface BattlefieldBriefPdfResult {
  pdfFileUrl: string;
  pdfFilePath: string;
  filename: string;
}

export interface BattlefieldBriefDetail {
  submission: BattlefieldBriefSubmissionRecord;
  brief: BattlefieldBriefRecord | null;
  events: BattlefieldBriefEventRecord[];
}

export interface PublicBattlefieldBriefDetail {
  submission: Pick<
    BattlefieldBriefSubmissionRecord,
    | "id"
    | "createdAt"
    | "updatedAt"
    | "companyName"
    | "stage"
    | "status"
    | "errorMessage"
    | "ideaSummary"
    | "targetUser"
    | "problemSolved"
    | "differentiator"
    | "market"
    | "resources"
    | "biggestQuestion"
  >;
  brief: BattlefieldBriefRecord | null;
  pdfFileUrl: string | null;
}

export interface BattlefieldBriefPipelineResult {
  submission: BattlefieldBriefSubmissionRecord;
  brief: BattlefieldBriefRecord;
  pdf: BattlefieldBriefPdfResult;
}
