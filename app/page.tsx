import Hero from '../components/Hero'
import LogoMarquee from '../components/LogoMarquee'
import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'
import PartnerCTA from '../components/PartnerCTA'
import Link from 'next/link'
import { projects } from '../data/projects'
import { services } from '../data/services'

export default function Home() {
  const featuredSystems = projects.filter((project) => project.featured).slice(0, 6)

  return (
    <>
      <Hero />
      <LogoMarquee />

      <section className="py-10 px-6 md:px-12 border-t border-white/5 bg-accent/[0.05]">
        <div className="max-w-7xl mx-auto border border-accent/30 bg-background-layer1/80 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <span className="analytical-label text-accent">Timeline</span>
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tightest">
              Explore The Founder Journey.
            </h2>
            <p className="text-sm md:text-base text-muted max-w-2xl">
              Follow the full chronology of systems, decisions, and milestones, then open the admin editor to maintain it.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-[10px] uppercase tracking-widest font-bold">
            <Link href="/founder/timeline" className="px-4 py-3 border border-accent/40 text-accent hover:bg-accent hover:text-black transition-colors">
              Open Timeline
            </Link>
            <Link href="/admin" className="px-4 py-3 border border-white/20 text-white/70 hover:text-accent hover:border-accent/30 transition-colors">
              Timeline Admin
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 border-t border-white/5 bg-background-layer1/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tightest uppercase leading-[0.92]">
              What Lanchester R&D
              <br />
              Actually Does.
            </h2>
            <p className="text-lg md:text-2xl text-muted leading-relaxed border-l-2 border-accent/20 pl-6 max-w-4xl font-medium">
              Lanchester R&D helps organizations solve complex operational problems through
              product strategy, AI workflow design, systems audits, and custom application development.
            </p>
          </div>
          <aside className="lg:col-span-4 border border-white/5 bg-background p-6 space-y-4">
            <span className="analytical-label text-accent">Service Intent</span>
            <p className="text-sm text-muted leading-relaxed">
              Practical advisory and build support for teams navigating ambiguity, coordination debt,
              and high-cost operational friction.
            </p>
            <div className="grid grid-cols-2 gap-3 text-[10px] uppercase tracking-widest font-bold pt-2 border-t border-white/5">
              <Link href="/services/product-strategy" className="text-white/70 hover:text-accent transition-colors">Product Strategy</Link>
              <Link href="/services/systems-audit" className="text-white/70 hover:text-accent transition-colors">Systems Audit</Link>
              <Link href="/services/ai-workflow-design" className="text-white/70 hover:text-accent transition-colors">AI Workflow Design</Link>
              <Link href="/services/app-development" className="text-white/70 hover:text-accent transition-colors">App Development</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto space-y-14">
          <SectionHeader
            label="Core Services"
            title="Commercial Service Paths"
            description="Buyer-readable offers with tactical depth."
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={'/services/' + service.slug}
                className="bg-background p-8 space-y-5 group hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="analytical-label text-accent">0{index + 1}</span>
                  <span className="font-mono text-[9px] text-white/25 uppercase tracking-widest">Service</span>
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tightest group-hover:text-accent transition-colors">
                  {service.shortTitle}
                </h3>
                <p className="text-sm text-muted leading-relaxed min-h-[84px]">{service.metaDescription}</p>
                <span className="text-[10px] uppercase tracking-widest font-bold text-white/70 group-hover:text-accent transition-colors">
                  Open Service Brief
                </span>
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 text-[10px] uppercase tracking-widest font-bold">
            <Link href="/services" className="px-4 py-3 border border-accent/40 text-accent hover:bg-accent hover:text-black transition-colors">All Services</Link>
            <Link href="/partner" className="px-4 py-3 border border-white/20 text-white/70 hover:text-accent hover:border-accent/30 transition-colors">Partner With Lanchester</Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 border-t border-white/5 relative bg-background-layer1/30">
        <div className="max-w-7xl mx-auto space-y-20">
          <SectionHeader
            label="Methodology"
            title="Exploration Before Execution"
            description="We map before we move. Truth before capital."
          />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/5 border border-white/5">
            {[
              { step: '01', title: 'Define', desc: 'Identify the operational friction.' },
              { step: '02', title: 'Map', desc: 'Model actors, flows, and incentives.' },
              { step: '03', title: 'Validate', desc: 'Pressure-test assumptions with real signals.' },
              { step: '04', title: 'Execute', desc: 'Build the highest-leverage intervention.' },
              { step: '05', title: 'Measure', desc: 'Track the change with hard metrics.' },
            ].map((item) => (
              <article key={item.step} className="bg-background p-8 space-y-4 group hover:bg-accent/5 transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                  <span className="font-mono text-4xl">{item.step}</span>
                </div>
                <span className="font-mono text-[10px] text-accent/60">{item.step}</span>
                <h3 className="text-2xl font-bold uppercase tracking-tighter">{item.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                <div className="absolute bottom-0 left-0 h-1 bg-accent/20 w-0 group-hover:w-full transition-all duration-500" />
              </article>
            ))}
          </div>

          <div className="text-[10px] uppercase tracking-widest font-bold flex flex-wrap gap-3">
            <Link href="/strategy" className="text-accent hover:text-white transition-colors">Read Methodology</Link>
            <Link href="/founder" className="text-white/60 hover:text-accent transition-colors">Founder Perspective</Link>
            <Link href="/research" className="text-white/60 hover:text-accent transition-colors">Research Archive</Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 border-t border-white/5 bg-background-layer2/20">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <SectionHeader
              label="Selected Work"
              title="Case Studies and Systems"
              description="Descriptive project snapshots with measurable operational intent."
            />
            <Link href="/systems" className="btn-ghost flex items-center gap-3">
              <span>View Full Archive</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M11 6L7 2M11 6L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 bg-white/5 border border-white/5 p-px">
            {featuredSystems.map((project) => (
              <div key={project.slug} className="bg-background">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-white/5">
            {[
              { label: 'Litigation Reduction', value: '40%', sub: 'iMediate App' },
              { label: 'Resource Efficiency', value: '22%', sub: 'ShootAtlas' },
              { label: 'Survey Throughput', value: '3x', sub: 'Roofdraft' },
              { label: 'Service Velocity', value: '30%', sub: 'IRU-Assistant' },
            ].map((stat) => (
              <div key={stat.label} className="space-y-1">
                <span className="analytical-label text-[8px]">{stat.label}</span>
                <div className="text-3xl font-bold tracking-tightest text-accent">{stat.value}</div>
                <div className="font-mono text-[8px] uppercase text-muted/40">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <SectionHeader
                label="Execution"
                title="From Bottleneck to Build"
                description="Focused sprints, clear ownership, measurable movement."
              />

              <ul className="space-y-6">
                {[
                  'Strategic alignment on goals and constraints.',
                  'Operational mapping of systems and risks.',
                  'Design and build of the highest-leverage intervention.',
                  'Measurement loops to maintain performance after launch.',
                ].map((item) => (
                  <li key={item} className="flex gap-4 items-start">
                    <span className="w-1.5 h-1.5 bg-accent mt-2 pulse-node" />
                    <span className="text-white/80 font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-8 flex flex-wrap gap-3 text-[10px] uppercase tracking-widest font-bold">
                <Link href="/partner" className="text-accent hover:text-white transition-colors">Initiate Engagement</Link>
                <Link href="/services/systems-audit" className="text-white/60 hover:text-accent transition-colors">Start with Systems Audit</Link>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-square w-full max-w-md mx-auto relative border border-white/10 rounded-full flex items-center justify-center">
                <div className="absolute inset-0 bg-accent/5 rounded-full animate-pulse" />
                <div className="absolute inset-[10%] border border-white/10 rounded-full" />
                <div className="absolute inset-[30%] border border-accent/20 rounded-full" />

                <div className="absolute inset-0 origin-center animate-[spin_10s_linear_infinite] pointer-events-none">
                  <div className="w-1/2 h-px bg-gradient-to-r from-transparent to-accent absolute top-1/2 left-1/2 shadow-[0_0_15px_rgba(163,230,53,0.5)]" />
                </div>

                <div className="z-10 text-center space-y-1">
                  <div className="font-mono text-[9px] text-accent/50 uppercase">Loop Position</div>
                  <div className="text-3xl font-bold tracking-tightest uppercase">Sprint Active</div>
                  <div className="font-mono text-[8px] text-muted">Mapping to Deployment</div>
                </div>

                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full pulse-node" />
                <div className="absolute bottom-[20%] right-[15%] w-2 h-2 bg-accent rounded-full pulse-node" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-[40%] left-[5%] w-1 h-1 bg-white/40 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnerCTA />
    </>
  )
}
