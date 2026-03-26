export const BATTLEFIELD_BRIEF_COLLECTIONS = {
  submissions: "battlefield_brief_submissions",
  briefs: "battlefield_briefs",
  events: "battlefield_brief_events",
} as const;

export const BATTLEFIELD_BRIEF_STAGE_OPTIONS = [
  { value: "idea", label: "Idea" },
  { value: "validating", label: "Validating" },
  { value: "building", label: "Building" },
  { value: "launched", label: "Launched" },
] as const;

export const BATTLEFIELD_BRIEF_SUBMISSION_STATUS_OPTIONS = [
  { value: "submitted", label: "Submitted" },
  { value: "processing", label: "Processing" },
  { value: "completed", label: "Completed" },
  { value: "failed", label: "Failed" },
] as const;

export const BATTLEFIELD_BRIEF_RECORD_STATUS_OPTIONS = [
  { value: "draft", label: "Draft" },
  { value: "completed", label: "Completed" },
  { value: "failed", label: "Failed" },
] as const;

export const BATTLEFIELD_BRIEF_METHOD_STEPS = [
  {
    key: "define",
    numeral: "01",
    title: "Define",
    description: "Identify friction.",
  },
  {
    key: "map",
    numeral: "02",
    title: "Map",
    description: "Visualize the system.",
  },
  {
    key: "validate",
    numeral: "03",
    title: "Validate",
    description: "Data Driven Design.",
  },
  {
    key: "execute",
    numeral: "04",
    title: "Execute",
    description: "Build tactical solutions.",
  },
  {
    key: "measure",
    numeral: "05",
    title: "Measure",
    description: "Calculate impact.",
  },
] as const;

export const BATTLEFIELD_BRIEF_OPERATIONAL_RULES = [
  {
    key: "intellectualRigor",
    code: "01_INT",
    title: "Intellectual Rigor",
    description: "Evidence-led diagnosis before intervention.",
  },
  {
    key: "tacticalExecution",
    code: "02_TAC",
    title: "Tactical Execution",
    description: "Translate strategy into concrete sequence and ownership.",
  },
  {
    key: "humanCalibration",
    code: "03_HUM",
    title: "Human Calibration",
    description: "Preserve usability and operator confidence in the loop.",
  },
  {
    key: "machineLeverage",
    code: "04_AI",
    title: "Machine Leverage",
    description: "Use automation where repeatability and speed benefit outcomes.",
  },
] as const;

export const BATTLEFIELD_BRIEF_GENERATOR_TYPES = {
  mock: "mock-v1",
  ai: "ai-v1",
} as const;

export const BATTLEFIELD_BRIEF_PROMPT_VERSION = "2026-03-23.v1";
export const BATTLEFIELD_BRIEF_MODEL_PURPOSE =
  "lanchester-rd-battlefield-brief-analysis";

export const BATTLEFIELD_BRIEF_AI_PROVIDER_OPTIONS = [
  "openai",
] as const;

export const BATTLEFIELD_BRIEF_PARSER_STATUS_OPTIONS = [
  "not_run",
  "direct_json",
  "code_fence_json",
  "embedded_json",
  "failed",
] as const;

export const BATTLEFIELD_BRIEF_FORM_LABELS = {
  name: "Name",
  email: "Email",
  companyName: "Company / Project Name",
  ideaSummary: "Idea Summary",
  targetUser: "Target User",
  problemSolved: "Problem Solved",
  competitors: "Current Alternatives / Competitors",
  differentiator: "What Makes It Different",
  market: "Market / Geography",
  stage: "Stage",
  resources: "Current Resources / Constraints",
  biggestQuestion: "Biggest Question or Challenge",
  consentAccepted: "I agree that my submission may be stored and analyzed to generate this brief.",
} as const;

export const BATTLEFIELD_BRIEF_EVENT_TYPES = {
  submitted: "submitted",
  processing: "processing",
  briefGenerated: "brief_generated",
  pdfGenerated: "pdf_generated",
  completed: "completed",
  failed: "failed",
  retryRequested: "retry_requested",
} as const;

export const BATTLEFIELD_BRIEF_DEFAULTS = {
  sourcePage: "/battlefield-brief",
  briefVersion: 1,
  pdfDir: "uploads/battlefield-briefs",
  aiProvider: "openai",
  aiModel: "gpt-5-mini",
  aiTemperature: 0.25,
  aiMaxTokens: 2600,
  aiTimeoutMs: 45000,
  analysisMode: "auto",
} as const;

export const BATTLEFIELD_BRIEF_STATUS_CLASSNAMES: Record<
  string,
  string
> = {
  submitted: "bg-white/5 text-white/70 border-white/15",
  processing: "bg-accent/10 text-accent border-accent/30",
  completed: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
  failed: "bg-red-500/10 text-red-300 border-red-500/30",
  draft: "bg-yellow-500/10 text-yellow-300 border-yellow-500/30",
};
