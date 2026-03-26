import Link from 'next/link'
import SectionHeader from '../../components/SectionHeader'
import { services } from '../../data/services'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background pt-40 pb-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div className="absolute inset-0 bg-grid" />
      </div>

      <main className="max-w-7xl mx-auto relative z-10 space-y-20">
        <header className="space-y-8 max-w-4xl">
          <div className="flex items-center gap-4">
            <span className="analytical-label text-accent">Service Architecture</span>
            <span className="h-px w-16 bg-white/10" />
            <span className="font-mono text-[9px] uppercase text-muted">Commercial Intent Pages</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tightest uppercase leading-[0.9]">
            Product Strategy,
            <br />
            Systems Design,
            <br />
            Operational Build.
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl leading-relaxed font-medium border-l-2 border-accent/20 pl-6">
            Lanchester R&D helps organizations solve complex operational problems through product strategy,
            AI workflow design, systems audits, and custom application development.
          </p>
        </header>

        <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-background p-8 space-y-5 hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="analytical-label text-accent">0{index + 1}</span>
                <span className="font-mono text-[9px] text-white/25 uppercase tracking-widest">Service</span>
              </div>
              <h2 className="text-2xl font-bold uppercase tracking-tightest group-hover:text-accent transition-colors">
                {service.shortTitle}
              </h2>
              <p className="text-sm text-muted leading-relaxed min-h-[84px]">{service.metaDescription}</p>
              <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-white/60 group-hover:text-accent transition-colors">
                Open Service Brief
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 6h10M11 6L7 2M11 6L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </section>

        <section className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <SectionHeader
              label="How We Work"
              title="Discovery to Deployment"
              description="Every service links strategy, operational reality, and measurable implementation."
            />
          </div>
          <div className="lg:col-span-5 space-y-4 p-8 bg-background-layer1 border border-white/5">
            <h3 className="analytical-label text-accent">Start Here</h3>
            <p className="text-sm text-muted leading-relaxed">
              If you already know the bottleneck, go straight to{' '}
              <Link href="/partner" className="text-accent hover:text-white">
                Partner
              </Link>
              . If not, start with{' '}
              <Link href="/services/systems-audit" className="text-accent hover:text-white">
                Systems Audit
              </Link>
              .
            </p>
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5 text-[10px] uppercase tracking-widest font-bold">
              <Link href="/systems" className="text-white/60 hover:text-accent transition-colors">Case Studies</Link>
              <Link href="/research" className="text-white/60 hover:text-accent transition-colors">Research</Link>
              <Link href="/strategy" className="text-white/60 hover:text-accent transition-colors">Method</Link>
              <Link href="/foundation" className="text-white/60 hover:text-accent transition-colors">Foundation</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
