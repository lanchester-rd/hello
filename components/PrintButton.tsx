'use client'

interface PrintButtonProps {
  label?: string
}

export default function PrintButton({ label = 'Print QR' }: PrintButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center justify-center border border-black px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-black hover:text-white print:hidden"
    >
      {label}
    </button>
  )
}
