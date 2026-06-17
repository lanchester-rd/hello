import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PrintButton from '../../../../components/PrintButton'
import SystemQrCard from '../../../../components/SystemQrCard'
import { projects } from '../../../../data/projects'
import { absoluteUrl, buildPageMetadata } from '../../../../lib/seo'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((candidate) => candidate.slug === slug)

  if (!project) {
    return buildPageMetadata({
      title: 'QR Code Not Found - Lanchester R&D',
      description: 'The QR code page you are looking for could not be found.',
      path: '/systems/qr',
      noIndex: true,
    })
  }

  return buildPageMetadata({
    title: `${project.name} QR Code | Lanchester R&D`,
    description: `Printable QR code card for ${project.name}.`,
    path: `/systems/${slug}/qr`,
    noIndex: true,
  })
}

export default async function SystemQrPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((candidate) => candidate.slug === slug)

  if (!project) {
    notFound()
  }

  const systemUrl = absoluteUrl(`/systems/${slug}`)
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=16&data=${encodeURIComponent(systemUrl)}`

  return (
    <div className="min-h-screen bg-neutral-100 px-6 py-10 text-black print:bg-white print:px-0 print:py-0">
      <main className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="flex flex-wrap items-center justify-between gap-3 print:hidden">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/50">QR print surface</p>
            <h1 className="text-3xl font-bold">{project.name}</h1>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/systems/qr"
              className="inline-flex items-center justify-center border border-black px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-black hover:text-white"
            >
              All QR codes
            </Link>
            <Link
              href={`/systems/${slug}`}
              className="inline-flex items-center justify-center border border-black px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-black hover:text-white"
            >
              Back to case study
            </Link>
            <PrintButton />
          </div>
        </div>

        <div className="flex justify-center print:block">
          <SystemQrCard
            name={project.name}
            slug={project.slug}
            systemUrl={systemUrl}
            qrUrl={qrUrl}
            description={project.one_liner}
            showOpenButton={false}
          />
        </div>

        <div className="grid gap-4 border border-black/10 bg-white p-6 text-sm leading-relaxed text-black/70 print:hidden md:grid-cols-3">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-black/50">Use case</p>
            <p>Open this page on mobile or desktop, then print directly to a compact thermal printer.</p>
          </div>
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-black/50">Destination</p>
            <p>The QR code always points to the live product detail page, not the print helper route.</p>
          </div>
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-black/50">Print guidance</p>
            <p>Keep the print black and white at full contrast, and avoid shrinking the code too aggressively.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
