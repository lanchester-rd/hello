import { BATTLEFIELD_BRIEF_OPERATIONAL_RULES } from "../../lib/battlefield-brief";

export default function BattlefieldBriefRuleGrid() {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="h-px w-6 bg-accent/40" />
        <span className="analytical-label text-accent">Rule Layer</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-white/5 bg-white/5">
        {BATTLEFIELD_BRIEF_OPERATIONAL_RULES.map((rule) => (
          <article key={rule.key} className="bg-background-layer1/40 p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent/60">
              {rule.code}
            </p>
            <h3 className="mt-2 text-xl font-bold uppercase tracking-tightest">
              {rule.title}
            </h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">{rule.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
