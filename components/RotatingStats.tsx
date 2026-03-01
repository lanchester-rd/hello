'use client'

import { useState, useEffect } from 'react'

interface Stat {
    label: string
    value: string
    initial?: string
    context: string
    company: string
    ref: string
}

const allStats: Stat[] = [
    { label: 'First-time design approval', value: '75%', initial: 'From 11% baseline', context: 'Design Skill Lead', company: 'bunq', ref: 'UX Operations' },
    { label: 'Product delivery time', value: '–25%', context: 'Product / Design Lead', company: 'xpate', ref: 'Process Overhaul' },
    { label: 'Product team productivity', value: '+20%', context: 'Head of Product', company: 'iMediate', ref: 'Agile Infrastructure' },
    { label: 'On-time delivery increase', value: '+25%', initial: '(–40% roadblocks)', context: 'Product / Design Lead', company: 'IRECKONU', ref: 'Cross-Functional Alignment' },
    { label: 'Weekly project throughput', value: '5×', initial: '(1 → 5+ per week)', context: 'Product Vision Lead', company: 'xpate', ref: 'Operational Clarity' },
    { label: 'Design output quality', value: '+85%', context: 'Design Skill Lead', company: 'bunq', ref: 'Systems Installed' },
    { label: 'Design team scaled', value: '1 → 8', context: 'Design Skill Lead', company: 'bunq', ref: 'Team Architecture' },
    { label: 'Design inconsistency', value: '–30%', context: 'Design Skill Lead', company: 'bunq', ref: 'Platform Standardisation' },
    { label: 'Front-End productivity', value: '+15%', context: 'Product / Design Lead', company: 'xpate', ref: 'Dev Integration' },
    { label: 'Valuation environment', value: '€1.65B', initial: '(€193M 10% stake sale)', context: 'Design Skill Lead', company: 'bunq', ref: 'Fintech Scale' },
    { label: 'UK SME Bank', value: 'MVP', initial: '0 → Launched', context: 'Product / Design Lead', company: 'xpate', ref: 'Fintech Architecture' },
    { label: 'UX impact visibility', value: '+50%', context: 'Product / Design Lead', company: 'IRECKONU', ref: 'Measurement Framework' },
]

export default function RotatingStats() {
    const [startIndex, setStartIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false)
            // Wait for exit animation to complete before switching data
            setTimeout(() => {
                setStartIndex((prev) => (prev + 4) % allStats.length)
                setIsVisible(true)
            }, 1200)
        }, 12000)
        return () => clearInterval(interval)
    }, [])

    const visibleStats = []
    for (let i = 0; i < 4; i++) {
        visibleStats.push(allStats[(startIndex + i) % allStats.length])
    }

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {visibleStats.map((stat, i) => (
                <div
                    key={`${stat.label}-${startIndex}`}
                    className={`bg-background p-10 space-y-6 group hover:bg-accent/[0.02] transition-all duration-[1200ms] ease-in-out relative min-h-[280px] flex flex-col justify-between ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: isVisible ? `${i * 300}ms` : `${(3 - i) * 100}ms` }}
                >
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <span className="analytical-label text-[8px] text-muted group-hover:text-accent transition-colors">{stat.label}</span>
                            <div className="flex items-baseline gap-2">
                                <div className="text-5xl font-bold tracking-tightest group-hover:scale-105 transition-transform origin-left">
                                    {stat.value}
                                </div>
                            </div>
                            {stat.initial && <div className="text-[10px] text-white/30 font-mono tracking-tight">{stat.initial}</div>}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-1">
                            <div className="text-[10px] font-bold uppercase tracking-widest text-white/80">{stat.company}</div>
                            <div className="text-[10px] text-muted font-medium">{stat.context}</div>
                        </div>
                        <div className="pt-4 border-t border-white/5">
                            <div className="font-mono text-[8px] text-muted/40 uppercase tracking-widest">Ref // {stat.ref}</div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-accent/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </div>
            ))}
        </div>
    )
}
