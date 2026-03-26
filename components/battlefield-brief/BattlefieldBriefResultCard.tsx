import Link from "next/link";
import type { BattlefieldBriefRecord } from "../../lib/battlefield-brief";
import BattlefieldBriefPdfActions from "./BattlefieldBriefPdfActions";
import BattlefieldBriefSectionBlock from "./BattlefieldBriefSectionBlock";
import BattlefieldBriefStatusBadge from "./BattlefieldBriefStatusBadge";
import { formatDateTime } from "./utils";

type Props = {
  brief: BattlefieldBriefRecord;
  pdfFileUrl: string | null;
  submissionId?: string;
  showMeta?: boolean;
};

export default function BattlefieldBriefResultCard({
  brief,
  pdfFileUrl,
  submissionId,
  showMeta = false,
}: Props) {
  const output = brief.rawStructuredOutput;
  const firstValidationTest = output.validate.fastestValidationTests[0];
  const firstMetric = output.measure.wedgeSuccessMetrics[0];

  const supportMoves = [
    `Focus your first engagement around ${output.define.coreFriction.toLowerCase()}. We structure this into a measurable intervention scope with explicit owner decisions.`,
    `Run a guided validation sprint using "${firstValidationTest || "a fast pilot test"}" so the wedge is proven with evidence, not narrative.`,
    `Translate ${output.execute.bestFirstSegment.toLowerCase()} into a tactical 30/60/90 program and instrument "${firstMetric || "wedge success metrics"}" from day one.`,
  ];

  return (
    <div className="space-y-6">
      <section className="lab-card p-8 md:p-10 space-y-6 border-accent/35">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="analytical-label text-accent">Executive Summary</p>
          <BattlefieldBriefStatusBadge status={brief.status} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tightest leading-tight">
          {output.projectName}
        </h2>
        <p className="text-base md:text-lg text-white/95 leading-relaxed">
          {output.oneLinePitch}
        </p>
        <p className="text-sm md:text-base text-muted leading-relaxed">
          {output.elevatorPitch30}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="border border-white/10 bg-background-layer1/50 p-4 space-y-2">
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent/70">
              Concentration Move
            </p>
            <p className="text-sm text-white/90 leading-relaxed">
              {output.recommendedWedge}
            </p>
          </div>
          <div className="border border-white/10 bg-background-layer1/50 p-4 space-y-2">
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent/70">
              Strategic Entry
            </p>
            <p className="text-sm text-white/90 leading-relaxed">
              {output.strategicEntryRecommendation}
            </p>
          </div>
          <div className="border border-white/10 bg-background-layer1/50 p-4 space-y-2">
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent/70">
              Why Lanchester R&D
            </p>
            <p className="text-sm text-white/90 leading-relaxed">
              We help you operationalize this wedge into an evidence-led execution program so the
              strategy compounds instead of diffusing.
            </p>
          </div>
        </div>
        {showMeta ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-muted border-t border-white/10 pt-4">
            <p>Version: {brief.version}</p>
            <p>Generator: {brief.generatorType}</p>
            <p>Generated: {formatDateTime(brief.createdAt)}</p>
          </div>
        ) : null}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link href="/partner" className="btn-primary text-xs">
            Work With Lanchester R&D
          </Link>
          <Link href="/services" className="btn-ghost text-xs">
            Explore Services
          </Link>
        </div>
        <BattlefieldBriefPdfActions pdfFileUrl={pdfFileUrl} submissionId={submissionId} />
      </section>

      <BattlefieldBriefSectionBlock
        title="Battlefield"
        fields={[
          { label: "Battlefield Definition", value: output.battlefieldDefinition },
          { label: "Incumbent Stronghold", value: output.incumbentStronghold },
          { label: "Exposed Flank", value: output.exposedFlank },
          { label: "Recommended Wedge", value: output.recommendedWedge },
          {
            label: "Strategic Entry Recommendation",
            value: output.strategicEntryRecommendation,
          },
          { label: "Expansion Path", value: output.expansionPath },
        ]}
      />

      <BattlefieldBriefSectionBlock
        title="01 Define"
        fields={[
          { label: "Core Friction", value: output.define.coreFriction },
          { label: "User Pain", value: output.define.userPain },
          { label: "Operational Failure", value: output.define.operationalFailure },
          { label: "Emotional Tension", value: output.define.emotionalTension },
          {
            label: "Measurable Success Condition",
            value: output.define.measurableSuccessCondition,
          },
        ]}
      />

      <BattlefieldBriefSectionBlock
        title="02 Map"
        fields={[
          { label: "Key Actors", value: output.map.keyActors },
          { label: "Workflow", value: output.map.workflow },
          { label: "Bottlenecks", value: output.map.bottlenecks },
          { label: "Market Structure", value: output.map.marketStructure },
          { label: "Pressure Points", value: output.map.pressurePoints },
        ]}
      />

      <BattlefieldBriefSectionBlock
        title="03 Validate"
        fields={[
          { label: "Assumptions", value: output.validate.assumptions },
          { label: "Risks", value: output.validate.risks },
          { label: "Evidence Needed", value: output.validate.evidenceNeeded },
          {
            label: "Fastest Validation Tests",
            value: output.validate.fastestValidationTests,
          },
        ]}
      />

      <BattlefieldBriefSectionBlock
        title="04 Execute"
        fields={[
          { label: "MVP Scope", value: output.execute.mvpScope },
          { label: "Not Now", value: output.execute.notNow },
          { label: "Best First Segment", value: output.execute.bestFirstSegment },
          { label: "Best Launch Channel", value: output.execute.bestLaunchChannel },
          { label: "First 30/60/90 Plan", value: output.execute.first306090Plan },
        ]}
      />

      <BattlefieldBriefSectionBlock
        title="05 Measure"
        fields={[
          { label: "Leading Indicators", value: output.measure.leadingIndicators },
          { label: "Wedge Success Metrics", value: output.measure.wedgeSuccessMetrics },
          { label: "Expansion Triggers", value: output.measure.expansionTriggers },
        ]}
      />

      <section className="lab-card p-4 md:p-5 border-accent/20 bg-background-layer1/40">
        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-white/10" />
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent/70">
            Section Break // Operating Doctrine
          </p>
          <span className="h-px flex-1 bg-white/10" />
        </div>
      </section>

      <BattlefieldBriefSectionBlock
        title="Operational Rules"
        fields={[
          {
            label: "01_INT Intellectual Rigor",
            value: output.ruleApplication.intellectualRigor,
          },
          {
            label: "02_TAC Tactical Execution",
            value: output.ruleApplication.tacticalExecution,
          },
          {
            label: "03_HUM Human Calibration",
            value: output.ruleApplication.humanCalibration,
          },
          {
            label: "04_AI Machine Leverage",
            value: output.ruleApplication.machineLeverage,
          },
        ]}
      />

      <BattlefieldBriefSectionBlock
        title="Closing Recommendation"
        fields={[{ label: "Summary", value: output.closingRecommendation }]}
      />

      <section className="lab-card p-8 md:p-10 space-y-6 border-accent/30">
        <div className="space-y-2">
          <p className="analytical-label text-accent">How Lanchester R&D Can Help</p>
          <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tightest leading-tight">
            Personalized Support For {output.projectName}
          </h3>
          <p className="text-sm text-muted leading-relaxed">
            If you want to convert this brief into a live operating plan, we can help you turn the
            wedge strategy into execution discipline and measurable outcomes.
          </p>
        </div>
        <div className="space-y-3">
          {supportMoves.map((move, index) => (
            <div key={index} className="border border-white/10 bg-background-layer1/40 p-4">
              <p className="text-sm text-white/90 leading-relaxed">{move}</p>
            </div>
          ))}
        </div>
        <div className="rounded border border-accent/30 bg-accent/5 p-4">
          <p className="text-sm text-white/90 leading-relaxed">
            Next best step: book a focused strategy session with Lanchester R&D to pressure-test
            your wedge, validate the first segment, and lock a decision-grade 30/60/90 plan.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/partner" className="btn-primary text-xs">
            Book Strategy Session
          </Link>
          <Link href="/battlefield-brief" className="btn-ghost text-xs">
            Submit Another Idea
          </Link>
        </div>
      </section>
    </div>
  );
}
