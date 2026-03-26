export default function BattlefieldBriefExplainer() {
  return (
    <section className="grid lg:grid-cols-12 gap-8 border border-white/5 bg-background-layer1/20 p-8">
      <article className="lg:col-span-8 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tightest">
          Structured Strategic Intake
        </h2>
        <p className="text-muted leading-relaxed">
          This feature converts raw idea input into a structured battlefield model. It is designed
          as an extensible system so analysis generation, PDF rendering, and admin operations can
          evolve without rewriting the product surface.
        </p>
      </article>
      <aside className="lg:col-span-4 space-y-3 border border-white/10 bg-background p-5">
        <p className="font-mono text-[10px] uppercase tracking-widest text-accent/70">
          Concentration Logic
        </p>
        <ul className="space-y-2 text-sm text-white/85">
          <li>• Identify the incumbent stronghold.</li>
          <li>• Locate exposed flank opportunities.</li>
          <li>• Enter through a measurable wedge.</li>
          <li>• Expand only after proof.</li>
        </ul>
      </aside>
    </section>
  );
}
