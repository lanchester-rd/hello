'use client'

import { useState, Suspense, useEffect } from 'react'
import SectionHeader from '../../components/SectionHeader'
import PartnerCTA from '../../components/PartnerCTA'
import RotatingStats from '../../components/RotatingStats'
import Link from 'next/link'
import LogoMarquee from '../../components/LogoMarquee'
import { useSearchParams } from 'next/navigation'

const doctrines = [
    {
        id: 'INT',
        title: 'Intellectual',
        label: 'Tactical Clarity',
        body: 'Reduce complexity. Map decision nodes.',
        project: {
            name: 'iMediate App',
            slug: 'imediate-app',
            application: 'Defining measurable friction points and mapping legal logic before any code was written.',
            evidence: '40% reduction in litigation costs for high-conflict families.',
            type: 'Intellectual Rigor',
            status: 'mothballed'
        }
    },
    {
        id: 'TAC',
        title: 'Tactical',
        label: 'Focused Execution',
        body: 'Build high-utility systems. Fast.',
        project: {
            name: 'ShootAtlas',
            slug: 'shootatlas',
            application: 'Iterative field testing in remote zones, prioritizing the core logistical engine over UI polish.',
            evidence: 'Core tracking live 2 weeks before UI completion; zero critical failures.',
            type: 'Tactical Execution',
            status: 'Live Operational',
            externalUrl: 'https://shootatlas.com/'
        }
    },
    {
        id: 'HUM',
        title: 'Human',
        label: 'Customer Empathy',
        body: 'Solve for the human node.',
        project: {
            name: 'supergramp',
            slug: 'supergramp',
            application: 'Reducing the psychological "burden of asking" via passive, glanceable availability indicators.',
            evidence: '5x increase in spontaneous resource utilization via zero-touch sync.',
            type: 'Human Calibration',
            status: 'work in progress'
        }
    },
    {
        id: 'AI',
        title: 'AI-Forward',
        label: 'Intelligent Systems',
        body: 'Multiply operational intelligence.',
        project: {
            name: 'a2x-global',
            slug: 'a2x-global',
            application: 'Deploying predictive risk assessment models to identify customs anomalies 24 hours before border arrival.',
            evidence: 'Zero compliance failures and 40% reduction in manual overhead.',
            type: 'Machine Leverage',
            status: 'Live Operational',
            externalUrl: 'https://a2xglobal.com/'
        }
    },
]

function FounderContent() {
    const searchParams = useSearchParams()
    const [selectedDoc, setSelectedDoc] = useState(doctrines[0])

    useEffect(() => {
        const docId = searchParams.get('doc')
        if (docId) {
            const doc = doctrines.find(d => d.id === docId)
            if (doc) {
                setSelectedDoc(doc)
                // Scroll to doctrine section if needed
                const element = document.getElementById('strategy-philosophy')
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                }
            }
        }
    }, [searchParams])

    return (
        <div className="min-h-screen bg-transparent pt-48 md:pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">

            <main className="max-w-7xl mx-auto relative z-10">
                <div className="space-y-32">
                    {/* 1. Header & Identity */}
                    <div className="grid lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-8 space-y-12">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <span className="analytical-label text-accent">Dossier // TR-01</span>
                                    <span className="h-px w-12 bg-white/10" />
                                    <span className="font-mono text-[9px] uppercase text-muted">Lead Investigator</span>
                                </div>
                                <h1 className="text-4xl md:text-8xl font-bold tracking-tightest uppercase leading-[1] md:leading-[0.85]">
                                    Thomas Richardson.<br />
                                    <span className="text-accent">Principal.</span>
                                </h1>
                            </div>

                            <div className="p-8 md:p-12 bg-background-layer1 border border-white/5 space-y-8 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:text-accent group-hover:opacity-20 transition-all">
                                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                    </svg>
                                </div>
                                <div className="space-y-6 relative z-10">
                                    <h2 className="analytical-label text-accent">The Positioning</h2>
                                    <p className="text-xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                                        "Serious problems require structured thinking."
                                    </p>
                                    <p className="text-sm md:text-lg text-muted leading-relaxed max-w-2xl font-medium pt-6 border-t border-white/5">
                                        No hype. No aesthetic maximalism. We build systems that reduce chaos and install order.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <aside className="lg:col-span-4 space-y-8">
                            <div className="aspect-[3/4] bg-background-layer2 border border-white/10 relative group overflow-hidden">
                                <img
                                    src="/images/principal/headshot.png"
                                    alt="Thomas Richardson - Principal"
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-90 grayscale transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-grid opacity-10" />
                                <div className="absolute bottom-6 left-6 flex flex-col gap-1">
                                    <span className="analytical-label text-accent">Status: Active Command</span>
                                    <span className="font-mono text-[8px] text-muted">REF // L-RD_ENV_01</span>
                                </div>
                            </div>


                            <a
                                href="https://www.linkedin.com/in/bringingpeopletogether/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block p-6 bg-background-layer1 border border-white/5 hover:border-accent/40 transition-all duration-500 relative overflow-hidden"
                            >
                                <div className="flex items-center gap-6 relative z-10">
                                    <div className="w-12 h-12 flex items-center justify-center border border-accent/20 bg-accent/[0.03] group-hover:bg-accent/10 transition-colors">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-accent">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <span className="analytical-label text-accent">Strategic Pulse</span>
                                            <span className="w-1 h-1 bg-accent/40 rounded-full animate-pulse" />
                                        </div>
                                        <h4 className="text-sm font-bold uppercase tracking-widest text-white group-hover:text-accent transition-colors">Follow on LinkedIn</h4>
                                        <p className="text-[9px] font-mono text-muted uppercase tracking-wider">Connect // Thomas Richardson</p>
                                    </div>
                                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="absolute top-0 right-0 p-4 opacity-5 font-mono text-[8px] group-hover:opacity-10 transition-opacity">
                                    NET_ID // 01
                                </div>
                                <div className="absolute bottom-0 left-0 h-[1px] bg-accent/40 w-0 group-hover:w-full transition-all duration-700" />
                            </a>
                        </aside>
                    </div>

                    {/* Scrolling Network Logos */}
                    <LogoMarquee />

                    {/* 2. Measured Outcomes (The Record) */}
                    <section className="space-y-16">
                        <SectionHeader
                            label="The Record"
                            title="Operational Outcomes."
                            description="Empirical results from 12+ years of scaling high-performance systems."
                        />

                        <RotatingStats />

                        <div className="font-mono text-[10px] text-muted/30 uppercase tracking-[0.5em] text-center pt-8">
                            Audit Data Integrated // 2012 - 2025
                        </div>
                    </section>

                    {/* 3. The Thesis & Philosophy */}
                    <div id="strategy-philosophy" className="grid lg:grid-cols-12 gap-20 items-center scroll-mt-32">
                        <div className="lg:col-span-12">
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        </div>

                        <div className="lg:col-span-5 space-y-8">
                            <SectionHeader
                                label="The Doctrine"
                                title="Strategy Over Novelty."
                                description="Operating on a four-pronged doctrine."
                            />
                            <div className="space-y-4">
                                {doctrines.map((p) => (
                                    <button
                                        key={p.id}
                                        onClick={() => setSelectedDoc(p)}
                                        className={`w-full text-left flex gap-6 p-6 border transition-all group relative overflow-hidden ${selectedDoc.id === p.id
                                            ? 'border-accent/40 bg-accent/5'
                                            : 'border-white/5 bg-background-layer1/30 hover:bg-white/[0.02]'
                                            }`}
                                    >
                                        <span className={`font-mono text-xs transition-colors ${selectedDoc.id === p.id ? 'text-accent' : 'text-accent/40 group-hover:text-accent'}`}>
                                            [{p.id}]
                                        </span>
                                        <div className="space-y-1">
                                            <h4 className={`font-bold uppercase tracking-widest text-sm transition-colors ${selectedDoc.id === p.id ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                                                {p.title}
                                            </h4>
                                            <p className="text-xs text-muted leading-relaxed">{p.body}</p>
                                        </div>
                                        {selectedDoc.id === p.id && (
                                            <div className="absolute left-0 top-0 w-1 h-full bg-accent" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-7 bg-background-layer2/50 border border-white/5 p-12 md:p-16 flex flex-col justify-between transition-all duration-500 relative overflow-hidden group/philosophy">
                            <div className="absolute top-0 right-0 p-8 opacity-[0.02] pointer-events-none group-hover/philosophy:opacity-[0.05] transition-opacity">
                                <span className="text-[120px] font-bold font-mono tracking-tightest leading-none">
                                    {selectedDoc.id}
                                </span>
                            </div>

                            <div className="space-y-12 relative z-10">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <h3 className="analytical-label text-accent">Philosophy of Application</h3>
                                        <span className="h-px flex-grow bg-white/5" />
                                        <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest">{selectedDoc.id} // CASE_STUDY</span>
                                    </div>

                                    <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-700">
                                        <div className="space-y-6">
                                            <div className="space-y-2">
                                                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Active Example</span>
                                                <h4 className="text-3xl font-bold tracking-tight text-white uppercase">{selectedDoc.project.name}</h4>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-12 pt-4 border-t border-white/5">
                                                <div className="space-y-3">
                                                    <span className="text-[9px] font-bold text-accent uppercase tracking-widest">Rule: {selectedDoc.project.type}</span>
                                                    <p className="text-sm text-muted leading-relaxed font-medium">
                                                        {selectedDoc.project.application}
                                                    </p>
                                                </div>
                                                <div className="space-y-3">
                                                    <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Evidence of Impact</span>
                                                    <p className="text-sm text-white/80 font-medium leading-relaxed italic">
                                                        "{selectedDoc.project.evidence}"
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-6">
                                            <Link
                                                href={`/systems/${selectedDoc.project.slug}`}
                                                className="group/btn relative px-8 py-4 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-accent hover:text-black transition-all flex items-center gap-3 overflow-hidden"
                                            >
                                                <span className="relative z-10">See Case Study</span>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="relative z-10 group-hover/btn:translate-x-1 transition-transform">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </Link>

                                            <div className="flex items-center gap-3 py-4">
                                                <div className={`w-2 h-2 rounded-full animate-pulse ${selectedDoc.project.status === 'Live Operational' ? 'bg-accent' :
                                                    selectedDoc.project.status === 'work in progress' ? 'bg-blue-400' : 'bg-red-500/50'
                                                    }`} />
                                                <span className="font-mono text-[9px] text-muted uppercase tracking-widest italic">
                                                    Status: {selectedDoc.project.status}
                                                </span>
                                            </div>

                                            {selectedDoc.project.externalUrl && (
                                                <a
                                                    href={selectedDoc.project.externalUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group/live relative px-8 py-4 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:border-accent hover:text-accent transition-all flex items-center gap-3"
                                                >
                                                    <span>Open Site</span>
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/live:translate-y-[-1px] group-hover/live:translate-x-[1px] transition-transform">
                                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                        <polyline points="15 3 21 3 21 9" />
                                                        <line x1="10" y1="14" x2="21" y2="3" />
                                                    </svg>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Background & Human Layer */}
                    <section className="grid lg:grid-cols-12 gap-20">
                        <div className="lg:col-span-8 space-y-16">
                            <SectionHeader
                                label="Mission Context"
                                title="Intersection of Systems."
                                description="Bridging product design, operational systems, and behavioral dynamics."
                            />

                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <h4 className="analytical-label font-bold text-accent">Strategic Pedigree</h4>
                                    <ul className="space-y-8">
                                        <li className="space-y-2">
                                            <span className="text-white font-bold block uppercase tracking-tightest">Royal Navy School of Leadership</span>
                                            <p className="text-xs text-muted leading-relaxed">Tactical execution and high-pressure management.</p>
                                        </li>
                                        <li className="space-y-2">
                                            <span className="text-white font-bold block uppercase tracking-tightest">Product Design (MDes Honours)</span>
                                            <p className="text-xs text-muted leading-relaxed">Human-centered systems and architectural empathy.</p>
                                        </li>
                                        <li className="space-y-2">
                                            <span className="text-white font-bold block uppercase tracking-tightest">Certified Scrum Product Owner</span>
                                            <p className="text-xs text-muted leading-relaxed">Strategic delivery and team orchestration.</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="space-y-6">
                                    <h4 className="analytical-label font-bold text-accent">The Human Node</h4>
                                    <p className="text-lg text-white/80 leading-relaxed font-medium">
                                        "iMediate is not a messaging app; it is a system for reducing human volatility."
                                    </p>
                                    <div className="p-6 border-l-2 border-white/10 bg-white/[0.02] space-y-4">
                                        <p className="text-xs text-muted leading-relaxed italic">
                                            "Systems matter. But so do people."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-4 space-y-12">
                            <div className="lab-card space-y-6 bg-accent/[0.03]">
                                <h4 className="analytical-label text-accent">Work Style</h4>
                                <ul className="space-y-4">
                                    {[
                                        'Remote-first',
                                        'Deep cognitive blocks',
                                        'Tight iteration loops',
                                        'Structured documentation',
                                        'Measured communication'
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 items-center">
                                            <div className="w-1 h-1 bg-accent rounded-full pulse-node" />
                                            <span className="text-xs font-bold uppercase tracking-widest text-white/80">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-px bg-white/5 overflow-hidden">
                                <div className="bg-background-layer1 p-8 space-y-4 relative">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 font-mono text-2xl">L-RD</div>
                                    <h4 className="analytical-label text-white/40">The Mandate</h4>
                                    <p className="text-xs text-muted leading-relaxed font-bold uppercase tracking-wider">
                                        Not the loudest in the room. Just the one making it function.
                                    </p>
                                    <div className="pt-4 flex items-center gap-3">
                                        <span className="h-px w-8 bg-accent" />
                                        <span className="font-mono text-[9px] text-accent tracking-[0.3em]">MISSION RECORD // STATUS: ACTIVE</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <div className="mt-48">
                <PartnerCTA />
            </div>

            {/* Vertical Side Label */}
            <div className="fixed top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 rotate-90 hidden 2xl:block opacity-10 pointer-events-none">
                <span className="font-mono text-[10px] text-white uppercase tracking-[1em]">Principal // Mission // Doctrine // Record</span>
            </div>
        </div>
    )
}

export default function FounderPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-accent/20 border-t-accent rounded-full animate-spin" />
            </div>
        }>
            <FounderContent />
        </Suspense>
    )
}
