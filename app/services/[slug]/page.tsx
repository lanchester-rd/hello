import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { serviceBySlug, services, type ServiceSlug } from '../../../data/services'
import { absoluteUrl, buildPageMetadata, getBaseUrl } from '../../../lib/seo'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = serviceBySlug[slug as ServiceSlug]

  if (!service) {
    return buildPageMetadata({
      title: 'Service Not Found | Lanchester R&D',
      description: 'The requested service page could not be found.',
      path: '/services',
      noIndex: true,
    })
  }

  return buildPageMetadata({
    title: service.shortTitle + ' | Lanchester R&D',
    description: service.metaDescription,
    path: '/services/' + service.slug,
    keywords: service.keywords,
  })
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = serviceBySlug[slug as ServiceSlug]

  if (!service) {
    notFound()
  }

  const baseUrl = getBaseUrl()
  const servicePath = '/services/' + service.slug
  const serviceUrl = absoluteUrl(servicePath)
  const relatedServiceBySlug: Record<ServiceSlug, ServiceSlug> = {
    'product-strategy': 'systems-audit',
    'systems-audit': 'ai-workflow-design',
    'ai-workflow-design': 'app-development',
    'app-development': 'product-strategy',
    'nonprofit-app-development': 'app-development',
  }
  const relatedServiceSlug = relatedServiceBySlug[service.slug]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': serviceUrl + '#service',
        name: service.title,
        serviceType: service.title,
        description: service.metaDescription,
        provider: {
          '@type': 'ResearchOrganization',
          '@id': baseUrl + '/#organization',
          name: 'Lanchester R&D',
          url: baseUrl + '/',
        },
        areaServed: 'Global',
        url: serviceUrl,
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
            name: 'Services',
            item: baseUrl + '/services',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: service.shortTitle,
            item: serviceUrl,
          },
        ],
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background pt-40 pb-24 px-6 md:px-12 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div className="absolute inset-0 bg-grid" />
      </div>

      <main className="max-w-7xl mx-auto relative z-10 space-y-20">
        <header className="space-y-8 max-w-4xl">
          <div className="flex items-center gap-4">
            <span className="analytical-label text-accent">{service.heroLabel}</span>
            <span className="h-px w-16 bg-white/10" />
            <span className="font-mono text-[9px] uppercase text-muted">Service Brief</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tightest uppercase leading-[0.9]">
            {service.shortTitle}
          </h1>
          <p className="text-lg md:text-xl text-muted leading-relaxed border-l-2 border-accent/20 pl-6 max-w-3xl">
            {service.heroSummary}
          </p>
          <div className="flex flex-wrap gap-3 pt-2 text-[10px] uppercase tracking-widest font-bold">
            <Link href="/partner" className="px-4 py-2 border border-accent/40 text-accent hover:bg-accent hover:text-black transition-colors">Start Engagement</Link>
            <Link href="/systems" className="px-4 py-2 border border-white/20 text-white/70 hover:text-accent hover:border-accent/30 transition-colors">View Case Studies</Link>
            <Link href="/strategy" className="px-4 py-2 border border-white/20 text-white/70 hover:text-accent hover:border-accent/30 transition-colors">See Method</Link>
            <Link href={'/services/' + relatedServiceSlug} className="px-4 py-2 border border-white/20 text-white/70 hover:text-accent hover:border-accent/30 transition-colors">Related Service</Link>
          </div>
        </header>

        <section className="grid lg:grid-cols-12 gap-10 items-start">
          <article className="lg:col-span-7 space-y-8 p-8 border border-white/5 bg-background-layer1/30">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">The Operational Problem</h2>
            <p className="text-muted leading-relaxed text-lg">{service.problem}</p>
          </article>
          <article className="lg:col-span-5 space-y-8 p-8 border border-white/5 bg-background-layer2/20">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">The Lanchester Approach</h2>
            <p className="text-muted leading-relaxed">{service.approach}</p>
          </article>
        </section>

        <section className="grid lg:grid-cols-2 gap-8">
          <article className="p-8 border border-white/5 bg-background-layer1/20 space-y-6">
            <h2 className="text-2xl font-bold uppercase tracking-tight">Who This Is For</h2>
            <ul className="space-y-3">
              {service.whoFor.map((item) => (
                <li key={item} className="flex gap-3 text-muted leading-relaxed">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="p-8 border border-white/5 bg-background-layer1/20 space-y-6">
            <h2 className="text-2xl font-bold uppercase tracking-tight">What We Deliver</h2>
            <ul className="space-y-3">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-3 text-muted leading-relaxed">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="grid lg:grid-cols-12 gap-8">
          <article className="lg:col-span-5 p-8 border border-white/5 bg-accent/[0.03] space-y-5">
            <h2 className="text-2xl font-bold uppercase tracking-tight">Selected Outcomes</h2>
            <ul className="space-y-3 text-sm text-white/80">
              {service.proofPoints.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="lg:col-span-7 grid md:grid-cols-2 gap-px bg-white/5 border border-white/5">
            <div className="bg-background p-8 space-y-6">
              <h2 className="text-xl font-bold uppercase tracking-tight">Related Case Studies</h2>
              <div className="space-y-4">
                {service.relatedCaseStudies.map((item) => (
                  <Link key={item.href} href={item.href} className="block group">
                    <p className="text-sm font-bold uppercase tracking-wider text-white group-hover:text-accent transition-colors">{item.label}</p>
                    <p className="text-xs text-muted leading-relaxed">{item.note}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-background p-8 space-y-6">
              <h2 className="text-xl font-bold uppercase tracking-tight">Related Research and Method</h2>
              <div className="space-y-4">
                {service.relatedResearch.map((item) => (
                  <Link key={item.href} href={item.href} className="block group">
                    <p className="text-sm font-bold uppercase tracking-wider text-white group-hover:text-accent transition-colors">{item.label}</p>
                    <p className="text-xs text-muted leading-relaxed">{item.note}</p>
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section className="p-10 md:p-14 border border-white/10 bg-white/[0.02] flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tightest">Ready to scope this service?</h2>
            <p className="text-muted leading-relaxed">
              Share your operational bottleneck. We will recommend the right service path and an initial execution scope.
            </p>
          </div>
          <Link href="/partner" className="btn-primary shrink-0">Initiate With Lanchester</Link>
        </section>
      </main>
    </div>
  )
}
