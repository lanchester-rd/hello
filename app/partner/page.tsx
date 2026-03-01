'use client'

import SectionHeader from '../../components/SectionHeader'
import Link from 'next/link'
import { motion } from 'framer-motion'
import PartnerCTA from '../../components/PartnerCTA'

const engagementModels = [
    {
        title: 'The Lab Sprint',
        duration: '01 Week',
        price: 'Starting from €4.795 (excl. VAT)',
        desc: 'Move from strategic ambiguity to a functional app. Applied strategy and product systems protocol.',
        highlight: 'Five Day Sprint',
        link: '/about'
    },
    {
        title: 'Systems Audit',
        duration: '04 Weeks',
        price: 'From €19.180 (excl. VAT)',
        desc: 'Deep structural analysis of data flows, coordination friction, and operational latency.',
        highlight: 'Comprehensive Audit',
        link: '/strategy'
    },
    {
        title: 'Network Build',
        duration: 'Ongoing',
        price: 'Contact Us',
        desc: 'Engineering complex coordination systems and AI-forward operational headquarters.',
        highlight: 'Retained R&D',
        link: '/systems'
    }
]

export default function PartnerPage() {
    return (
        <div className="bg-transparent min-h-screen pt-48 md:pt-32 pb-24 relative overflow-hidden">

            <main className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="space-y-32">
                    <SectionHeader
                        label="Engagement"
                        title="Partner."
                        description="We collaborate with high-stakes organizations requiring structural coordination and intelligence systems."
                    />

                    <div className="grid lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
                        {engagementModels.map((model, i) => (
                            <Link
                                href={model.link}
                                key={i}
                                className="group bg-background p-10 space-y-8 hover:bg-white/[0.02] transition-all relative overflow-hidden"
                            >
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="analytical-label text-accent">{model.duration}</span>
                                        <span className="font-mono text-[9px] text-muted/30">MOD_0{i + 1}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold uppercase tracking-tightest group-hover:text-accent transition-colors">{model.title}</h3>
                                    <div className="font-mono text-[10px] text-accent tracking-widest pt-1">{model.price}</div>
                                </div>
                                <p className="text-sm text-muted leading-relaxed min-h-[80px]">
                                    {model.desc}
                                </p>
                                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{model.highlight}</span>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                                <div className="absolute bottom-0 left-0 h-px bg-accent/30 w-0 group-hover:w-full transition-all duration-700" />
                            </Link>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-12 gap-20 items-start">
                        <div className="lg:col-span-5 space-y-12">
                            <div className="space-y-6">
                                <h3 className="analytical-label text-accent">Deployment Stages</h3>
                                <p className="text-3xl font-bold tracking-tight uppercase leading-tight">
                                    Precise movement.<br />
                                    Measured results.
                                </p>
                            </div>
                            <div className="space-y-8">
                                {[
                                    { id: '01', t: 'Initial Interrogation', d: 'Assess alignment and system feasibility. Strip away assumptions.' },
                                    { id: '02', t: 'Tactical Selection', d: 'Choose the intervention model (Lab vs Audit vs Build).' },
                                    { id: '03', t: 'Os Deployment', d: 'Install the logic and build the functional system.' }
                                ].map((stage) => (
                                    <div key={stage.id} className="flex gap-8 group">
                                        <span className="text-2xl font-bold font-mono text-white/10 group-hover:text-accent/20 transition-colors">{stage.id}.</span>
                                        <div className="space-y-2">
                                            <h4 className="text-sm font-bold uppercase tracking-widest">{stage.t}</h4>
                                            <p className="text-xs text-muted leading-relaxed">{stage.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-7 bg-white p-12 md:p-20 text-black space-y-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                                <span className="text-[120px] font-bold font-mono tracking-tightest leading-none">INIT</span>
                            </div>

                            <div className="space-y-8 relative z-10">
                                <div className="space-y-4">
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] border-b border-black/10 pb-4">Initiate System Review</h3>
                                    <h2 className="text-4xl md:text-6xl font-bold tracking-tightest uppercase leading-[0.85]">
                                        Describe the <br />Bottleneck.
                                    </h2>
                                </div>
                                <p className="text-sm md:text-lg text-black/60 font-medium max-w-xl leading-relaxed">
                                    We limit active engagements to maintain technical focus. Every entry requires a defined operational friction point.
                                </p>
                                <div className="pt-8">
                                    <a
                                        href="mailto:lab@lanchester-rd.com"
                                        className="inline-flex items-center gap-6 group bg-black text-white px-10 py-5 transition-all hover:bg-zinc-900"
                                    >
                                        <span className="text-xs font-bold uppercase tracking-[0.3em]">Initiate Contact</span>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-1 transition-transform">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-8 pt-12 border-t border-black/5 relative z-10">
                                <div className="space-y-2">
                                    <span className="text-[9px] font-bold uppercase text-black/30 tracking-widest">Inquiry Line</span>
                                    <div className="font-mono text-[10px] font-bold">lab@lanchester-rd.com</div>
                                </div>
                                <div className="space-y-2">
                                    <span className="text-[9px] font-bold uppercase text-black/30 tracking-widest">Protocol</span>
                                    <div className="font-mono text-[10px] font-bold">L-RD_ENG_V1</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
