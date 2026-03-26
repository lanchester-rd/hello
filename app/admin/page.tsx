import Link from "next/link";

export default function AdminHubPage() {
  return (
    <main className="min-h-screen bg-background pt-40 pb-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto space-y-14">
        <header className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="analytical-label text-accent">Admin Node</span>
            <span className="h-px w-16 bg-white/10" />
            <span className="font-mono text-[9px] uppercase text-muted">
              Private Operations
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tightest uppercase">
            Timeline Management Hub
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-3xl">
            Use this workspace to manage founder timeline events, publish
            updates, and preview changes before they appear on the live timeline.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-px border border-white/5 bg-white/5">
          <Link
            href="/admin/timeline"
            className="bg-background p-8 space-y-3 hover:bg-white/[0.02] transition-colors"
          >
            <span className="analytical-label text-accent">01</span>
            <h2 className="text-2xl font-bold uppercase tracking-tight">
              Open Editor
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              Create, reorder, update, and publish timeline events.
            </p>
          </Link>

          <Link
            href="/admin/timeline/preview"
            className="bg-background p-8 space-y-3 hover:bg-white/[0.02] transition-colors"
          >
            <span className="analytical-label text-accent">02</span>
            <h2 className="text-2xl font-bold uppercase tracking-tight">
              Preview
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              Review timeline output before release.
            </p>
          </Link>

          <Link
            href="/founder/timeline"
            className="bg-background p-8 space-y-3 hover:bg-white/[0.02] transition-colors"
          >
            <span className="analytical-label text-accent">03</span>
            <h2 className="text-2xl font-bold uppercase tracking-tight">
              Live Timeline
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              Confirm the public founder timeline experience.
            </p>
          </Link>
        </section>
      </div>
    </main>
  );
}
