import Link from 'next/link'
import ProjectCard from '../../components/ProjectCard'
import SectionHeader from '../../components/SectionHeader'
import { projects, type SystemCategory } from '../../data/projects'
import { absoluteUrl } from '../../lib/seo'

const categories: SystemCategory[] = [
  'Coordination Systems',
  'Operational Intelligence',
  'Market & Asset Optimization',
  'Behavioral & Wellbeing',
]

const featuredSummaries = [
  {
    title: 'iMediate',
    href: '/systems/imediate-app',
    forWho: 'High-conflict co-parenting families, mediators, and legal support teams.',
    problem:
      'Escalating communication cycles created legal friction, emotional volatility, and avoidable costs.',
    built:
      'A structured communication system with AI-assisted reframing, compliance-ready logs, and decision-safe workflows.',
    impact: 'Reported outcomes include 40% lower litigation costs and faster dispute resolution.',
    service: '/services/ai-workflow-design',
  },
  {
    title: 'ShootAtlas',
    href: '/systems/shootatlas',
    forWho: 'Production and field teams coordinating complex shoots across distributed locations.',
    problem: 'Fragmented information flow caused schedule drift, resource waste, and operational blind spots.',
    built:
      'A logistics intelligence layer for scheduling, inventory, and field-to-HQ coordination under real-world pressure.',
    impact: 'Documented reductions in resource waste and stronger schedule reliability.',
    service: '/services/app-development',
  },
  {
    title: 'Roofdraft',
    href: '/systems/roofdraft',
    forWho: 'Roofing operations teams and maintenance organizations handling high job volume.',
    problem: 'Survey-to-estimate workflows were slow, inconsistent, and difficult to scale.',
    built:
      'A survey and workflow system that structures job data, standardizes analysis, and speeds dispatch planning.',
    impact: 'Faster survey throughput and clearer operational visibility across maintenance pipelines.',
    service: '/services/systems-audit',
  },
  {
    title: 'IRU-Assistant',
    href: '/systems/iru-assistant',
    forWho: 'Hospitality teams requiring fast access to guest context at the point of service.',
    problem: 'Important guest intelligence was trapped in disconnected systems and inaccessible during live interactions.',
    built:
      'An AI-assisted context layer that surfaces actionable service intelligence in real time.',
    impact: 'Improved service precision and reduced manual overhead in front-line decision making.',
    service: '/services/ai-workflow-design',
  },
  {
    title: 'LEARN Launchpad',
    href: '/research/learn-launchpad',
    forWho: 'Product teams managing early-access products, waitlists, and controlled onboarding.',
    problem:
      'Auth, legal acceptance, product access, and communication were fragmented across multiple system boundaries.',
    built:
      'A unified identity and access gateway for early-stage products with structured onboarding and controlled permissions.',
    impact: 'Stabilized multi-product launch operations after three architecture rewrites.',
    service: '/services/product-strategy',
  },
  {
    title: 'Quiet Place / QuietFinder',
    href: '/systems/quiet-place',
    forWho: 'Urban users seeking low-noise, high-focus public environments.',
    problem: 'Traditional map ranking favored popularity over situational comfort and environmental context.',
    built:
      'A ranking engine blending contextual signals with custom scoring to surface calmer, more usable locations.',
    impact: 'Created an operationally useful alternative to popularity-driven recommendations.',
    service: '/services/app-development',
    relatedResearchHref: '/research/silent-api',
  },
]

export default function SystemsPage() {
  const listSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Lanchester Systems Archive',
    itemListElement: featuredSummaries.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: absoluteUrl(item.href),
      name: item.title,
    })),
  }

  return (
    <div className="bg-background min-h-screen relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
      />

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid opacity-[0.05]" />
        <div className="absolute inset-0 bg-radial-fade" />
      </div>

      <main className="relative z-10 pt-40 md:pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-24">
          <header className="space-y-10 max-w-4xl">
            <div className="flex items-center gap-4">
              <span className="analytical-label text-accent">Systems Archive</span>
              <span className="h-px w-16 bg-white/10" />
              <span className="font-mono text-[9px] uppercase text-muted">Case Studies</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tightest uppercase leading-[0.9]">
              Product, AI and
              <br />
              Operational Design
              <br />
              Case Studies.
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed border-l-2 border-accent/20 pl-6 max-w-3xl">
              Lanchester R&D designs product systems for organizations facing complex operational friction.
              This archive covers coordination systems, workflow design, AI-enabled interventions, and
              production-grade application delivery.
            </p>
          </header>

          <section className="space-y-8">
            <SectionHeader
              label="Flagship Work"
              title="Indexable Case Study Summaries"
              description="Each summary explains the operational problem, what we built, who it serves, and where the impact landed."
            />

            <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5">
              {featuredSummaries.map((item) => (
                <article key={item.title} className="bg-background p-8 space-y-5">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-2xl font-bold uppercase tracking-tightest">{item.title}</h2>
                    <Link
                      href={item.href}
                      className="text-[10px] uppercase tracking-widest font-bold text-accent hover:text-white transition-colors"
                    >
                      Open Case
                    </Link>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    <span className="text-white/80 font-bold">Who it serves: </span>
                    {item.forWho}
                  </p>
                  <p className="text-sm text-muted leading-relaxed">
                    <span className="text-white/80 font-bold">Operational problem: </span>
                    {item.problem}
                  </p>
                  <p className="text-sm text-muted leading-relaxed">
                    <span className="text-white/80 font-bold">What was built: </span>
                    {item.built}
                  </p>
                  <p className="text-sm text-muted leading-relaxed">
                    <span className="text-white/80 font-bold">Impact: </span>
                    {item.impact}
                  </p>
                  <div className="flex flex-wrap gap-3 pt-3 border-t border-white/5 text-[10px] uppercase tracking-widest font-bold">
                    <Link href={item.href} className="text-accent hover:text-white transition-colors">Case Study</Link>
                    <Link href={item.service} className="text-white/60 hover:text-accent transition-colors">Related Service</Link>
                    {item.relatedResearchHref ? (
                      <Link href={item.relatedResearchHref} className="text-white/60 hover:text-accent transition-colors">Related Research</Link>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-12">
            <SectionHeader
              label="Complete Archive"
              title="All System Nodes"
              description="Browse the full project library by system category."
            />

            <div className="space-y-20">
              {categories.map((category) => {
                const categoryProjects = projects.filter((project) => project.category === category)
                if (categoryProjects.length === 0) return null

                return (
                  <section key={category} className="space-y-8">
                    <div className="flex items-center gap-5 border-b border-white/5 pb-6">
                      <div className="w-2 h-2 bg-accent/50 rounded-full" />
                      <h3 className="text-3xl font-bold uppercase tracking-tightest">{category}</h3>
                      <div className="flex-1 h-px bg-white/5" />
                      <span className="font-mono text-[9px] text-muted tracking-widest">
                        {categoryProjects.length} projects
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 bg-white/5 border border-white/5 p-px">
                      {categoryProjects.map((project) => (
                        <div key={project.slug} className="bg-background">
                          <ProjectCard project={project} />
                        </div>
                      ))}
                    </div>
                  </section>
                )
              })}
            </div>
          </section>

          <section className="grid lg:grid-cols-12 gap-8 border border-white/10 p-10 md:p-12 bg-white/[0.02]">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tightest">
                Need a system like this for your operation?
              </h2>
              <p className="text-muted leading-relaxed max-w-2xl">
                Use this archive to identify the closest operating pattern, then we can scope the right service path
                across strategy, audit, AI workflow design, or custom application development.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-wrap gap-3 content-start text-[10px] uppercase tracking-widest font-bold">
              <Link href="/services" className="px-4 py-3 border border-accent/40 text-accent hover:bg-accent hover:text-black transition-colors">Explore Services</Link>
              <Link href="/partner" className="px-4 py-3 border border-white/20 text-white/70 hover:text-accent hover:border-accent/30 transition-colors">Initiate Engagement</Link>
              <Link href="/strategy" className="px-4 py-3 border border-white/20 text-white/70 hover:text-accent hover:border-accent/30 transition-colors">Methodology</Link>
              <Link href="/research" className="px-4 py-3 border border-white/20 text-white/70 hover:text-accent hover:border-accent/30 transition-colors">Research</Link>
              <Link href="/founder" className="px-4 py-3 border border-white/20 text-white/70 hover:text-accent hover:border-accent/30 transition-colors">Founder</Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
