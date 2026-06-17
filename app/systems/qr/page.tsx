import type { Metadata } from 'next'
import Link from 'next/link'
import PrintButton from '../../../components/PrintButton'
import SystemQrCard from '../../../components/SystemQrCard'
import { projects } from '../../../data/projects'
import { absoluteUrl, buildPageMetadata } from '../../../lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'System QR Codes | Lanchester R&D',
  description: 'Printable QR cards for Lanchester R&D system product pages.',
  path: '/systems/qr',
  noIndex: true,
})

export default function SystemsQrIndexPage() {
  const printableProjects = projects.filter((project) => project.featured || project.link)

  return (
    <div className="min-h-screen bg-neutral-100 px-6 py-10 text-black print:bg-white print:px-0 print:py-0">
      <main className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex flex-wrap items-center justify-between gap-3 print:hidden">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/50">QR command surface</p>
            <h1 className="text-3xl font-bold">System product QR codes</h1>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-black/70">
              Use this page to browse and print QR cards that link back to the canonical Lanchester R&amp;D product detail pages.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/systems"
              className="inline-flex items-center justify-center border border-black px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-black hover:text-white"
            >
              Back to systems
            </Link>
            <PrintButton label="Print this overview" />
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-3 md:grid-cols-2">
          {printableProjects.map((project) => {
            const systemUrl = absoluteUrl(`/systems/${project.slug}`)
            const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=16&data=${encodeURIComponent(systemUrl)}`

            return (
              <div key={project.slug} className="space-y-3">
                <SystemQrCard
                  name={project.name}
                  slug={project.slug}
                  systemUrl={systemUrl}
                  qrUrl={qrUrl}
                  description={project.one_liner}
                />

                <div className="flex flex-wrap gap-3 print:hidden">
                  <Link
                    href={`/systems/${project.slug}/qr`}
                    className="inline-flex items-center justify-center border border-black px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-black hover:text-white"
                  >
                    Single QR page
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
