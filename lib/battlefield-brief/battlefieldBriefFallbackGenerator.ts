import type {
  BattlefieldBriefOutput,
  BattlefieldBriefSubmissionRecord,
} from "./battlefieldBriefTypes";

export interface BattlefieldBriefFallbackResult {
  output: BattlefieldBriefOutput;
  renderedSummary: string;
  viabilityScore: number;
  warnings: string[];
}

function titleCase(value: string): string {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}

function compact(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function splitHints(text: string, fallback: string[]): string[] {
  const parts = text
    .split(/[\n,;|]+/)
    .map((part) => compact(part))
    .filter(Boolean)
    .slice(0, 5);
  if (parts.length > 0) return parts;
  return fallback;
}

function firstPhrase(text: string, maxLength = 110): string {
  const normalized = compact(text);
  if (!normalized) return "core operational friction";
  const sentence = normalized.split(/[.!?]/)[0] || normalized;
  if (sentence.length <= maxLength) return sentence;
  return `${sentence.slice(0, maxLength).trim()}...`;
}

function deriveProjectName(submission: BattlefieldBriefSubmissionRecord): string {
  const company = compact(submission.companyName);
  if (company.length >= 3) return company;
  const tokens = compact(submission.ideaSummary)
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .join(" ");
  return titleCase(tokens || "Battlefield Opportunity");
}

function stageVelocity(stage: BattlefieldBriefSubmissionRecord["stage"]): string {
  switch (stage) {
    case "idea":
      return "Design a focused test loop before writing more code.";
    case "validating":
      return "Use short experiments to collapse uncertainty quickly.";
    case "building":
      return "Concentrate delivery on the smallest defensible wedge.";
    case "launched":
      return "Protect the wedge while instrumenting expansion signals.";
    default:
      return "Protect throughput and reduce coordination drag.";
  }
}

function stageChannel(stage: BattlefieldBriefSubmissionRecord["stage"]): string {
  if (stage === "launched") return "Operator-led retention + referral loops";
  if (stage === "building") return "Narrow pilot partnerships with direct onboarding";
  if (stage === "validating") return "Founder-led interviews with guided prototype tests";
  return "Problem-led landing page + structured discovery calls";
}

export function computeBattlefieldBriefViabilityScore(
  submission: BattlefieldBriefSubmissionRecord,
): number {
  const baseByStage: Record<BattlefieldBriefSubmissionRecord["stage"], number> = {
    idea: 52,
    validating: 61,
    building: 68,
    launched: 74,
  };
  const signalBonus = Math.min(
    14,
    Math.floor(compact(submission.differentiator).length / 32),
  );
  const constraintPenalty = Math.min(
    10,
    Math.floor(compact(submission.resources).length / 85),
  );
  const raw = baseByStage[submission.stage] + signalBonus - Math.floor(constraintPenalty / 2);
  return Math.max(40, Math.min(89, raw));
}

export function generateBattlefieldBriefFallback(
  submission: BattlefieldBriefSubmissionRecord,
  reason = "AI generation unavailable; deterministic fallback used.",
): BattlefieldBriefFallbackResult {
  const projectName = deriveProjectName(submission);
  const targetUser = firstPhrase(submission.targetUser, 120);
  const problem = firstPhrase(submission.problemSolved, 140);
  const differentiator = firstPhrase(submission.differentiator, 140);
  const competitors = splitHints(submission.competitors, [
    "Status-quo manual coordination",
    "Spreadsheet-driven workflows",
    "General-purpose incumbent tools",
  ]);
  const resources = splitHints(submission.resources, [
    "Lean build capacity",
    "Limited paid acquisition budget",
    "Need for rapid customer feedback",
  ]);
  const question = firstPhrase(submission.biggestQuestion, 160);

  const output: BattlefieldBriefOutput = {
    projectName,
    oneLinePitch: `${projectName} helps ${targetUser.toLowerCase()} resolve ${problem.toLowerCase()} through a focused ${differentiator.toLowerCase()}.`,
    elevatorPitch30:
      `${projectName} is a concentration play, not a broad platform bet. Enter where incumbents are over-configured, win a narrow operational wedge, and instrument proof before scaling.`,
    battlefieldDefinition:
      `The battlefield is ${submission.market}, where teams serving ${targetUser.toLowerCase()} absorb friction from ${problem.toLowerCase()}. The objective is not full-market replacement; it is repeatable wedge capture.`,
    incumbentStronghold:
      `Incumbents are strongest in broad feature coverage, procurement familiarity, and enterprise bundling. ${competitors[0]} remains sticky because teams tolerate friction when alternatives look risky.`,
    exposedFlank:
      `The exposed flank is speed-to-value for first-time adoption. ${projectName} can outperform by reducing setup complexity and proving one measurable gain quickly.`,
    recommendedWedge:
      `Lead with ${differentiator.toLowerCase()} for ${targetUser.toLowerCase()} in ${submission.market}. Position as a tactical intervention, not a broad replacement.`,
    strategicEntryRecommendation:
      `Enter through a narrow segment with visible pain, short decision cycles, and low integration burden. Convert early outcomes into a repeatable go-to-market sequence.`,
    expansionPath:
      `After wedge proof, expand into adjacent workflows sharing the same data spine. Sequence expansion by evidence: retained usage, lower latency, then revenue-quality uplift.`,
    define: {
      coreFriction: problem,
      userPain:
        `${targetUser} currently manage this through fragmented tools and manual coordination, creating delay and confidence loss.`,
      operationalFailure:
        `Current alternatives struggle to maintain consistent execution under real operating constraints (${resources.join(", ").toLowerCase()}).`,
      emotionalTension:
        "Operators are expected to deliver reliable outcomes while operating through ambiguous process quality.",
      measurableSuccessCondition:
        "Within 60 days, reduce cycle-time variance for the target workflow while improving repeat usage confidence.",
    },
    map: {
      keyActors: [
        `Primary user: ${targetUser}`,
        "Economic buyer: owner responsible for throughput and risk",
        "Implementation owner: operator maintaining process quality",
      ],
      workflow: [
        "Trigger event creates an operational task",
        "Current handoff chain distributes the task across tools and people",
        `${projectName} inserts a focused decision layer at the highest-friction node`,
        "Outcome signal is captured and routed into next-step prioritization",
      ],
      bottlenecks: [
        "Context handoff delays",
        "Unclear ownership at execution transitions",
        "Decision quality drops when data is fragmented",
      ],
      marketStructure:
        `${submission.market} is characterized by incumbent breadth and fragmented point solutions. Winning depends on concentration, not parity.`,
      pressurePoints: [
        "Time-to-decision under load",
        "Adoption friction inside existing workflows",
        "Proof of ROI within pilot timelines",
      ],
    },
    validate: {
      assumptions: [
        `${targetUser} will adopt a focused wedge if value is visible inside one operating cycle.`,
        "A narrow workflow intervention can produce enough proof for broader rollout.",
        "Differentiation is defensible through execution speed and process clarity.",
      ],
      risks: [
        "Wedge may be perceived as too narrow to justify switching costs.",
        "Data quality may be insufficient to quantify value quickly.",
        "Integration assumptions may extend pilot timelines.",
      ],
      evidenceNeeded: [
        "Pilot conversion rate from first meeting to active usage",
        "Cycle-time and error-rate deltas versus current workflow",
        "Retention of first user cohort over 4-8 weeks",
      ],
      fastestValidationTests: [
        "Run 5-7 guided operator sessions on the wedge workflow",
        "Deploy a 14-day pilot in one high-friction segment",
        "Measure before/after latency for one critical task",
      ],
    },
    execute: {
      mvpScope: [
        `Deliver wedge feature centered on ${differentiator.toLowerCase()}`,
        "Instrument core workflow events for rapid evidence capture",
        "Include operator-facing controls for exception handling",
      ],
      notNow: [
        "Broad multi-segment feature parity",
        "Complex integrations not required for first proof",
        "Enterprise customization before wedge stability",
      ],
      bestFirstSegment:
        `Teams in ${submission.market} with frequent exposure to ${problem.toLowerCase()} and authority to run a rapid pilot.`,
      bestLaunchChannel: stageChannel(submission.stage),
      first306090Plan: [
        `30 days: lock success criteria, recruit pilot cohort, deploy wedge MVP for ${projectName}.`,
        "60 days: collect baseline-to-intervention metrics, address top failure modes, tighten onboarding.",
        "90 days: publish proof narrative, convert pilot to repeatable motion, decide expansion based on measurable signals.",
      ],
      first306090PlanDetailed: {
        days30: [
          "Lock success criteria and baseline metrics",
          "Recruit 3-5 pilot organizations in one segment",
          "Deploy wedge MVP with instrumentation",
        ],
        days60: [
          "Measure cycle-time and workflow-quality deltas",
          "Resolve top onboarding and exception failure modes",
          "Tighten operator training and enablement",
        ],
        days90: [
          "Publish proof narrative with quantified impact",
          "Convert pilot into repeatable acquisition motion",
          "Prioritize expansion based on measurable trigger signals",
        ],
      },
    },
    measure: {
      leadingIndicators: [
        "Time to first successful workflow completion",
        "Weekly active operators in pilot segment",
        "Repeat usage rate for wedge workflow",
      ],
      wedgeSuccessMetrics: [
        "Cycle-time reduction on target process",
        "Error or rework rate reduction",
        "Pilot-to-expansion conversion rate",
      ],
      expansionTriggers: [
        "Leading indicators stay positive for 4 consecutive weeks",
        "Operator sentiment improves alongside throughput gains",
        "Adjacent workflow demand appears from existing users",
      ],
    },
    ruleApplication: {
      intellectualRigor:
        `Hypotheses are anchored to the current challenge: ${question}. Recommendations include explicit evidence requirements.`,
      tacticalExecution:
        `Execution starts with a narrow wedge and a 30/60/90 sequence to minimize drift. ${stageVelocity(submission.stage)}`,
      humanCalibration:
        "Design choices prioritize operator clarity and confidence under operational pressure.",
      machineLeverage:
        "Automation is applied to repetitive decision support and evidence capture while preserving human override.",
    },
    ruleApplicationDetails: {
      intellectualRigor: {
        appliedBy: [
          "Mapped assumptions to explicit evidence requirements",
          "Prioritized measurable outcomes over narrative optimism",
        ],
        evidence: [
          "Pilot conversion and retention metrics",
          "Cycle-time delta against baseline",
        ],
      },
      tacticalExecution: {
        appliedBy: [
          "Narrowed entry to a wedge segment",
          "Sequenced execution into 30/60/90 day milestones",
        ],
        evidence: [
          "MVP scope and not-now boundaries",
          "Defined first launch channel by stage context",
        ],
      },
      humanCalibration: {
        appliedBy: [
          "Accounted for user adoption friction",
          "Designed exception handling and operator control",
        ],
        evidence: [
          "User pain and emotional tension mapping",
          "Onboarding and usage-confidence indicators",
        ],
      },
      machineLeverage: {
        appliedBy: [
          "Instrumented evidence capture pathways",
          "Applied automation only to repeatable decision support",
        ],
        evidence: [
          "Leading indicator telemetry definitions",
          "Human override retained for high-context exceptions",
        ],
      },
    },
    closingRecommendation:
      `${projectName} should enter as a concentrated wedge, prove one measurable operational win, and expand only when indicators confirm repeatability. Immediate priority is disciplined validation, not feature breadth.`,
    ideaStrengths: [
      differentiator,
      "Operationally grounded entry strategy",
      "Clear path from wedge proof to adjacent expansion",
    ],
    ideaRisks: [
      "Potential mismatch between wedge scope and buyer perception",
      "Execution drift into broad scope before wedge proof",
      "Insufficient instrumentation to prove impact early",
    ],
    viabilitySignals: [
      "Pilot conversion speed",
      "Repeat usage growth in first segment",
      "Measured cycle-time improvement within 60 days",
    ],
    broadnessWarning:
      "If scope expands before wedge traction, concentration advantage is lost.",
    headOnAttackWarning:
      "Avoid direct incumbent parity battles; win a narrow flank first.",
    confidenceNotes: reason,
  };

  return {
    output,
    renderedSummary: output.closingRecommendation,
    viabilityScore: computeBattlefieldBriefViabilityScore(submission),
    warnings: [reason],
  };
}
