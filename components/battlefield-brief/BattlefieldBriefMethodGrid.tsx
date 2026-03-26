import { BATTLEFIELD_BRIEF_METHOD_STEPS } from "../../lib/battlefield-brief";

export default function BattlefieldBriefMethodGrid() {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="h-px w-6 bg-accent/40" />
        <span className="analytical-label text-accent">How It Works</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-px border border-white/5 bg-white/5">
        {BATTLEFIELD_BRIEF_METHOD_STEPS.map((step) => (
          <article key={step.key} className="group relative overflow-hidden bg-background p-6 transition-colors hover:bg-accent/5">
            <span className="font-mono text-[10px] text-accent/60">{step.numeral}</span>
            <h3 className="mt-2 text-2xl font-bold uppercase tracking-tightest">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-muted">{step.description}</p>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent/30 transition-all duration-500 group-hover:w-full" />
          </article>
        ))}
      </div>
    </section>
  );
}
