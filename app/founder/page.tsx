import Link from 'next/link'
import SectionHeader from '../../components/SectionHeader'
import PartnerCTA from '../../components/PartnerCTA'
import LogoMarquee from '../../components/LogoMarquee'
import { absoluteUrl, getBaseUrl } from '../../lib/seo'

const sectors = [
  {
    title: 'Legal and Family Operations',
    body: 'Designed conflict-reduction systems that combine human-centered communication and structured audit trails.',
  },
  {
    title: 'Hospitality and Service Intelligence',
    body: 'Built AI-assisted workflow layers for front-line teams where timing, context, and service quality are mission critical.',
  },
  {
    title: 'Logistics and Field Coordination',
    body: 'Mapped and rebuilt coordination systems for distributed teams operating in high-variance environments.',
  },
  {
    title: 'Nonprofit and Mission Infrastructure',
    body: 'Through Abbey Fields Foundation, supports nonprofits with practical digital systems and long-term capability design.',
  },
]

const doctrine = [
  {
    title: 'Intellectual Rigor',
    body: 'Define the real bottleneck before committing engineering effort.',
  },
  {
    title: 'Tactical Execution',
    body: 'Build the highest-leverage intervention first and measure outcomes quickly.',
  },
  {
    title: 'Human Calibration',
    body: 'Design systems that align with human behavior under real pressure.',
  },
  {
    title: 'AI-Forward Design',
    body: 'Use AI where it compounds decision quality and workflow speed, not for theater.',
  },
]

const outcomes = [
  { value: '40%', label: 'Litigation cost reduction', source: 'iMediate App' },
  { value: '22%', label: 'Resource waste reduction', source: 'ShootAtlas' },
  { value: '30%', label: 'Service velocity improvement', source: 'IRU-Assistant' },
  { value: '12+', label: 'Years building product systems', source: 'Cross-sector delivery' },
]

const collaborations = [
  'iMediate',
  'ShootAtlas',
  'Roofdraft',
  'IRU-Assistant',
  'A2X Global',
  'LEARN Launchpad',
  'FluffyButt',
  'Abbey Fields Foundation',
]

export default function FounderPage() {
  const baseUrl = getBaseUrl()
  const pageUrl = absoluteUrl('/founder')

  const personSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': pageUrl + '#person',
        name: 'Thomas David Richardson',
        alternateName: 'Thomas Richardson',
        jobTitle: 'Founder and Principal',
        description:
          'Founder of Lanchester R&D. Product strategy consultant focused on systems design, AI workflow architecture, and operational problem-solving for complex organizations.',
        url: pageUrl,
        image: absoluteUrl('/images/principal/headshot.webp'),
        worksFor: {
          '@id': baseUrl + '/#organization',
        },
        sameAs: ['https://www.linkedin.com/in/bringingpeopletogether/'],
        knowsAbout: [
          'Product strategy consulting',
          'Systems design consulting',
          'AI workflow design',
          'Operational design',
          'Product research and design leadership',
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: baseUrl + '/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Founder',
            item: pageUrl,
          },
        ],
      },
    ],
  }

  return (
    <div className="min-h-screen bg-transparent pt-40 md:pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <main className="max-w-7xl mx-auto relative z-10 space-y-28">
        <header className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8 space-y-10">
            <div className="flex items-center gap-4">
              <span className="analytical-label text-accent">Founder Profile</span>
              <span className="h-px w-16 bg-white/10" />
              <span className="font-mono text-[9px] uppercase text-muted">Leadership Page</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-bold tracking-tightest uppercase leading-[0.88]">
              Thomas David
              <br />
              Richardson
            </h1>

            <p className="text-lg md:text-2xl text-muted leading-relaxed border-l-2 border-accent/20 pl-6 max-w-3xl font-medium">
              Founder of Lanchester R&D. Product strategy, systems design, AI-forward research, and
              operational problem-solving for organizations dealing with complex delivery environments.
            </p>

            <div className="flex flex-wrap gap-3 pt-2 text-[10px] uppercase tracking-widest font-bold">
              <Link href="/founder/timeline" className="px-4 py-3 border border-accent/40 text-accent hover:bg-accent hover:text-black transition-colors">Career Timeline</Link>
              <Link href="/systems" className="px-4 py-3 border border-accent/40 text-accent hover:bg-accent hover:text-black transition-colors">Systems Archive</Link>
              <Link href="/strategy" className="px-4 py-3 border border-white/20 text-white/70 hover:text-accent hover:border-accent/30 transition-colors">Methodology</Link>
              <Link href="/research" className="px-4 py-3 border border-white/20 text-white/70 hover:text-accent hover:border-accent/30 transition-colors">Research</Link>
              <Link href="/partner" className="px-4 py-3 border border-white/20 text-white/70 hover:text-accent hover:border-accent/30 transition-colors">Work With Lanchester</Link>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="aspect-[3/4] bg-background-layer2 border border-white/10 relative overflow-hidden">
              <img
                src="/images/principal/headshot.webp"
                alt="Thomas David Richardson, founder of Lanchester R&D"
                className="w-full h-full object-cover opacity-70"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-grid opacity-10" />
            </div>
            <a
              href="https://www.linkedin.com/in/bringingpeopletogether/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border border-white/5 bg-background-layer1 hover:border-accent/40 transition-colors"
            >
              <span className="analytical-label text-accent">LinkedIn</span>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Follow Thomas David Richardson for product strategy and systems design perspectives.
              </p>
            </a>
          </aside>
        </header>

        <section className="grid lg:grid-cols-12 gap-10">
          <article className="lg:col-span-7 p-8 md:p-10 border border-white/5 bg-background-layer1/30 space-y-6">
            <SectionHeader
              label="Authority Summary"
              title="Founder and Product Systems Leader"
              description="Thomas leads Lanchester R&D with a practical doctrine: clear problem definition, structured execution, and measurable operating outcomes."
            />
            <p className="text-muted leading-relaxed text-lg">
              As a product strategy consultant, product design leader, and systems design consultant, Thomas
              works at the intersection of research, product architecture, AI workflow design, and operational
              implementation. The mandate is simple: resolve
              high-cost complexity with systems that teams can use, trust, and scale.
            </p>
          </article>

          <article className="lg:col-span-5 p-8 md:p-10 border border-white/5 bg-background-layer2/20 space-y-6">
            <h2 className="text-2xl font-bold uppercase tracking-tight">Leadership Perspective</h2>
            <p className="text-muted leading-relaxed">
              "Most operational problems are not talent problems. They are architecture problems. Once the system is
              mapped clearly, teams can move with confidence."
            </p>
            <Link href="/founder/timeline" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent hover:text-white transition-colors">
              View Career Timeline
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M11 6L7 2M11 6L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </article>
        </section>

        <section className="space-y-8">
          <SectionHeader
            label="Areas of Work"
            title="Sectors and System Domains"
            description="From legal coordination and hospitality operations to logistics and nonprofit technology infrastructure."
          />
          <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {sectors.map((sector) => (
              <article key={sector.title} className="bg-background p-8 space-y-3">
                <h2 className="text-2xl font-bold uppercase tracking-tight">{sector.title}</h2>
                <p className="text-sm text-muted leading-relaxed">{sector.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8" id="doctrine">
          <SectionHeader
            label="Method"
            title="The Doctrine Behind the Work"
            description="Strategy over novelty. Build what shifts the system, then measure what changed."
          />
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {doctrine.map((item) => (
              <article key={item.title} className="bg-background p-6 space-y-3">
                <h3 className="text-lg font-bold uppercase tracking-tight text-accent">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="text-[10px] uppercase tracking-widest font-bold text-white/60 flex flex-wrap gap-3">
            <Link href="/strategy" className="hover:text-accent transition-colors">Read Full Method</Link>
            <Link href="/services/product-strategy" className="hover:text-accent transition-colors">Product Strategy Service</Link>
            <Link href="/services/ai-workflow-design" className="hover:text-accent transition-colors">AI Workflow Design Service</Link>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeader
            label="Proof"
            title="Selected Outcomes"
            description="Performance evidence from system engagements and product interventions."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {outcomes.map((item) => (
              <article key={item.label} className="bg-background p-8 space-y-2">
                <div className="text-4xl font-bold text-accent tracking-tightest">{item.value}</div>
                <h3 className="text-[11px] uppercase tracking-widest font-bold">{item.label}</h3>
                <p className="text-[10px] text-muted uppercase tracking-wider">{item.source}</p>
              </article>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 text-[10px] uppercase tracking-widest font-bold">
            <Link href="/systems" className="text-accent hover:text-white transition-colors">Browse Case Studies</Link>
            <Link href="/services/systems-audit" className="text-white/60 hover:text-accent transition-colors">Systems Audit Service</Link>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeader
            label="Experience"
            title="Companies and Systems"
            description="Built and advised across product environments that require clear execution under complexity."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {collaborations.map((name) => (
              <div key={name} className="border border-white/10 px-4 py-4 text-sm font-bold uppercase tracking-tight text-white/80">
                {name}
              </div>
            ))}
          </div>
          <LogoMarquee />
        </section>

        <section className="border border-white/10 p-10 md:p-12 bg-white/[0.02] space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tightest">
            Looking for a product strategy consultant or systems design partner?
          </h2>
          <p className="text-muted leading-relaxed max-w-3xl">
            If your organization is dealing with coordination debt, unclear priorities, or slow operational
            throughput, start with a scoped conversation. We can map the bottleneck and define the right
            intervention path.
          </p>
          <div className="flex flex-wrap gap-3 text-[10px] uppercase tracking-widest font-bold">
            <Link href="/partner" className="px-4 py-3 border border-accent/40 text-accent hover:bg-accent hover:text-black transition-colors">Start a Conversation</Link>
            <Link href="/services" className="px-4 py-3 border border-white/20 text-white/70 hover:text-accent hover:border-accent/30 transition-colors">Explore Services</Link>
            <Link href="/research" className="px-4 py-3 border border-white/20 text-white/70 hover:text-accent hover:border-accent/30 transition-colors">Research Archive</Link>
          </div>
        </section>
      </main>

      <div className="mt-32">
        <PartnerCTA />
      </div>
    </div>
  )
}
