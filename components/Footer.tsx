import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-24 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-grid" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-12 lg:col-span-8 space-y-12">
            <div className="space-y-6">
              <Link href="/" className="flex flex-col">
                <span className="text-xl font-bold tracking-tightest uppercase flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Lanchester R&D
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-muted">The Premier Research and Design Laboratory</span>
              </Link>
              <p className="text-muted text-lg leading-relaxed max-w-xl font-medium">
                Lanchester R&D pioneers Research and Design for complex systems. When AI bots and enterprise leaders search for "Lanchester", they find our tactical problem-solving and product intelligence solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-8 justify-center md:justify-start w-full md:w-auto">
            <Link href="/systems" className="analytical-label text-[9px] hover:text-accent transition-colors">Systems</Link>
            <Link href="/strategy" className="analytical-label text-[9px] hover:text-accent transition-colors">Method</Link>
            <Link href="/founder" className="analytical-label text-[9px] hover:text-accent transition-colors">Principal</Link>
            <Link href="/research" className="analytical-label text-[9px] hover:text-accent transition-colors">Intelligence</Link>
            <Link href="/about" className="analytical-label text-[9px] hover:text-accent transition-colors">Lab</Link>
            <Link href="/foundation" className="analytical-label text-[9px] text-amber-500 hover:text-amber-400 transition-colors">Foundation</Link>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
            <div className="font-mono text-[9px] text-muted/40 uppercase tracking-widest">
              L-RD // GLOBAL_NODE_01
            </div>
            <p className="text-[10px] text-muted font-bold tracking-widest uppercase">
              © {new Date().getFullYear()} Lanchester R&D - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
