import Link from 'next/link'

interface SystemQrCardProps {
  name: string
  slug: string
  systemUrl: string
  qrUrl: string
  description?: string
  showOpenButton?: boolean
}

export default function SystemQrCard({
  name,
  slug,
  systemUrl,
  qrUrl,
  description,
  showOpenButton = true,
}: SystemQrCardProps) {
  return (
    <article className="w-full max-w-sm border border-black/20 bg-white p-6 text-black shadow-sm print:max-w-none print:shadow-none">
      <div className="space-y-4">
        <div className="space-y-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/50">Lanchester R&amp;D</p>
          <h1 className="text-2xl font-bold leading-tight">{name}</h1>
          {description ? <p className="text-sm leading-relaxed text-black/70">{description}</p> : null}
        </div>

        <div className="flex justify-center border border-black/10 bg-white p-3">
          <img
            src={qrUrl}
            alt={`QR code for ${name}`}
            className="h-64 w-64 object-contain"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>

        <div className="space-y-2 border-t border-black/10 pt-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/60">Scan to open</p>
          <p className="break-all text-sm leading-relaxed">{systemUrl}</p>
          <p className="text-[11px] leading-relaxed text-black/60">
            Thermal-printer friendly: black on white, no gradients, and a generous quiet zone around the code.
          </p>
        </div>

        {showOpenButton ? (
          <div className="flex flex-wrap gap-3 print:hidden">
            <Link
              href={`/systems/${slug}`}
              className="inline-flex items-center justify-center border border-black px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-black hover:text-white"
            >
              Open product page
            </Link>
          </div>
        ) : null}
      </div>
    </article>
  )
}
