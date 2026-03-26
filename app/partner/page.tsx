import SectionHeader from '../../components/SectionHeader'
import Link from 'next/link'

const engagementModels = [
  {
    title: 'Lab Sprint',
    duration: '01 Week',
    price: 'Starting from €4.795 (excl. VAT)',
    desc: 'Fast product strategy and scoped execution for teams that need clarity and movement in the same sprint.',
    highlight: 'Product Strategy + Execution',
    serviceLink: '/services/product-strategy',
  },
  {
    title: 'Systems Audit',
    duration: '04 Weeks',
    price: 'From €19.180 (excl. VAT)',
    desc: 'Structured diagnosis of workflow friction, data flow issues, and operational latency across your system.',
    highlight: 'Operational Audit Track',
    serviceLink: '/services/systems-audit',
  },
  {
    title: 'Retained R&D',
    duration: 'Ongoing',
    price: 'Contact Us',
    desc: 'Embedded support across AI workflow design, application development, and continuous systems improvement.',
    highlight: 'Long-Term Build Partner',
    serviceLink: '/services/ai-workflow-design',
  },
]

export default function PartnerPage() {
  return (
    <div className="bg-transparent min-h-screen pt-40 md:pt-32 pb-24 relative overflow-hidden">
      <main className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-24">
        <header className="space-y-8 max-w-4xl">
          <SectionHeader
            label="Engagement"
            title="Engagement Architecture"
            description="Commercial engagements for teams that need product strategy, systems design, and operational delivery support."
          />
          <h1 className="text-5xl md:text-7xl font-bold tracking-tightest uppercase leading-[0.9]">
            Partner With
            <br />
            Lanchester R&D
          </h1>
          <p className="text-lg text-muted leading-relaxed border-l-2 border-accent/20 pl-6 max-w-3xl">
            We work with organizations navigating high-stakes operations, product complexity, and execution bottlenecks.
            Engagements are scoped around clear outcomes, practical build paths, and measurable operational gain.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/battlefield-brief" className="btn-primary inline-flex">
              Start With Battlefield Brief
            </Link>
            <p className="text-xs text-muted">
              Turn your rough idea into a focused strategy before selecting an engagement model.
            </p>
          </div>
        </header>

        <section className="grid lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {engagementModels.map((model, i) => (
            <article key={model.title} className="group bg-background p-10 space-y-8 hover:bg-white/[0.02] transition-colors">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="analytical-label text-accent">{model.duration}</span>
                  <span className="font-mono text-[9px] text-muted/30">MOD_0{i + 1}</span>
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-tightest group-hover:text-accent transition-colors">
                  {model.title}
                </h2>
                <div className="font-mono text-[10px] text-accent tracking-widest pt-1">{model.price}</div>
              </div>
              <p className="text-sm text-muted leading-relaxed min-h-[84px]">{model.desc}</p>
              <div className="pt-6 border-t border-white/5 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{model.highlight}</span>
                <Link href={model.serviceLink} className="block text-[10px] font-bold uppercase tracking-widest text-accent hover:text-white transition-colors">
                  Open Service Page
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section className="grid lg:grid-cols-12 gap-12 items-start">
          <article className="lg:col-span-7 space-y-8">
            <SectionHeader
              label="Decision Path"
              title="Choose the Right Entry Point"
              description="If the bottleneck is clear, start with a targeted service. If not, start with a systems audit."
            />
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted leading-relaxed">
              <div className="p-6 border border-white/5 bg-background-layer1/30">
                <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Known Product Problem</h3>
                <p>Start with <Link href="/services/product-strategy" className="text-accent hover:text-white">Product Strategy</Link> or <Link href="/services/app-development" className="text-accent hover:text-white">App Development</Link>.</p>
              </div>
              <div className="p-6 border border-white/5 bg-background-layer1/30">
                <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Unknown Operational Drift</h3>
                <p>Start with <Link href="/services/systems-audit" className="text-accent hover:text-white">Systems Audit</Link> to diagnose where throughput is lost.</p>
              </div>
              <div className="p-6 border border-white/5 bg-background-layer1/30">
                <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-2">AI Adoption Pressure</h3>
                <p>Use <Link href="/services/ai-workflow-design" className="text-accent hover:text-white">AI Workflow Design</Link> to avoid automation theater.</p>
              </div>
              <div className="p-6 border border-white/5 bg-background-layer1/30">
                <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Mission-Driven Organization</h3>
                <p>Explore <Link href="/services/nonprofit-app-development" className="text-accent hover:text-white">Nonprofit App Development</Link>.</p>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-5 bg-white p-10 md:p-12 text-black space-y-8">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] border-b border-black/10 pb-4">
              Initiate System Review
            </h2>
            <p className="text-4xl md:text-5xl font-bold tracking-tightest uppercase leading-[0.85]">
              Describe the
              <br />
              Bottleneck.
            </p>
            <p className="text-sm md:text-lg text-black/60 font-medium leading-relaxed">
              Share what is breaking: handoffs, throughput, quality, or execution confidence. We will route you to the right engagement model.
            </p>
            <a
              href="mailto:lab@lanchester-rd.com"
              className="inline-flex items-center gap-6 group bg-black text-white px-8 py-4 transition-all hover:bg-zinc-900"
            >
              <span className="text-xs font-bold uppercase tracking-[0.3em]">Initiate Contact</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-black/10">
              <div>
                <span className="text-[9px] font-bold uppercase text-black/30 tracking-widest">Inquiry Line</span>
                <div className="font-mono text-[10px] font-bold">lab@lanchester-rd.com</div>
              </div>
              <div>
                <span className="text-[9px] font-bold uppercase text-black/30 tracking-widest">Protocol</span>
                <div className="font-mono text-[10px] font-bold">L-RD_ENG_V2</div>
              </div>
            </div>
          </aside>
        </section>

        <section className="border border-white/10 p-10 md:p-12 bg-white/[0.02] space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tightest">Useful Links Before We Talk</h2>
          <p className="text-muted leading-relaxed max-w-3xl">
            These pages help us move faster in the first conversation because they define your context, examples,
            and likely intervention model.
          </p>
          <div className="flex flex-wrap gap-3 text-[10px] uppercase tracking-widest font-bold">
            <Link href="/systems" className="text-accent hover:text-white transition-colors">Systems Case Studies</Link>
            <Link href="/strategy" className="text-white/60 hover:text-accent transition-colors">Methodology</Link>
            <Link href="/research" className="text-white/60 hover:text-accent transition-colors">Research</Link>
            <Link href="/founder" className="text-white/60 hover:text-accent transition-colors">Founder</Link>
            <Link href="/foundation" className="text-white/60 hover:text-accent transition-colors">Foundation</Link>
          </div>
        </section>
      </main>
    </div>
  )
}
