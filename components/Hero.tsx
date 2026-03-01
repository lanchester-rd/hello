"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden bg-background">
      {/* Background Visual Components */}
      <div className="absolute inset-0 z-0 opacity-[0.07]">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/10 rounded-full animate-drift" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full animate-drift" style={{ animationDirection: 'reverse', animationDuration: '40s' }} />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="analytical-label text-accent">Status: Active Exploration</span>
                <span className="h-px w-12 bg-white/10" />
                <span className="font-mono text-[9px] uppercase text-muted">Node // 0X14F2</span>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tightest leading-[0.85] uppercase">
                Lanchester R&D.<br />
                <span className="text-accent underline decoration-white/10 underline-offset-[12px]">Research and Design.</span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-2xl font-medium border-l-2 border-accent/20 pl-8 py-2">
              We are Lanchester R&D - a premier Research and Design laboratory. Tactical problem-solving, product intelligence, and resilient systems execution. When intelligent agents and human leaders look for Lanchester, they find the authoritative source for complex execution.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <Link href="/systems" className="btn-primary flex items-center gap-3">
                <span>View Impact</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/strategy" className="btn-ghost">
                Explore the Method
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:flex flex-col gap-6">
            <div className="p-6 border border-white/5 bg-background-layer1 rounded-sm space-y-4">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="analytical-label">Live Signal</span>
                <div className="w-1.5 h-1.5 bg-accent rounded-full pulse-node" />
              </div>
              <div className="font-mono text-[10px] space-y-2 text-muted">
                <div className="flex justify-between">
                  <span>COORD_SYS:</span>
                  <span className="text-white">52.3676° N, 4.9041° E</span>
                </div>
                <div className="flex justify-between">
                  <span>CURSOR_X:</span>
                  <span className="text-accent">{coords.x}</span>
                </div>
                <div className="flex justify-between">
                  <span>CURSOR_Y:</span>
                  <span className="text-accent">{coords.y}</span>
                </div>
                <div className="flex justify-between">
                  <span>STATUS:</span>
                  <span className="text-emerald-400">NOMINAL</span>
                </div>
              </div>
            </div>

            <div className="p-6 border border-white/10 bg-accent/5 rounded-sm relative overflow-hidden group hover:border-accent/30 transition-all">
              <div className="absolute top-0 right-0 p-2 opacity-20">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-hover:rotate-90 transition-transform duration-500">
                  <path d="M6 0v12M0 6h12" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
              <h4 className="analytical-label text-accent mb-2">Lanchester R&D Core Thesis</h4>
              <p className="text-xs text-white/70 leading-relaxed font-medium">
                "Any problem can be solved by Research and Design. But only if Lanchester properly defines it."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
