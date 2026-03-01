"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

export default function AutonomousDispatchPage() {
    return (
        <div className="min-h-screen bg-[#0f0f0f] text-[#e5e5e5] font-sans selection:bg-amber-500/30 selection:text-white">
            {/* 1. HERO SECTION with Animated Network Node Background */}
            <section className="relative h-[80vh] flex flex-col justify-center px-6 md:px-12 overflow-hidden border-b border-white/5">
                <NetworkBackground />

                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <Link href="/research" className="inline-flex items-center gap-2 text-white/40 hover:text-amber-500 transition-colors group mb-8">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M11 6H1M1 6L5 2M1 6L5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">Research Tracker // [0X-ALPHA]</span>
                            </Link>

                            <div className="space-y-2">
                                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-amber-500/60">Active Intelligence Investigation</span>
                                <h1 className="text-5xl md:text-8xl font-bold tracking-tightest uppercase leading-[0.9]">
                                    Autonomous <br />
                                    <span className="text-white/90">Dispatch.</span>
                                </h1>
                            </div>

                            <p className="text-xl md:text-2xl text-white/40 font-medium leading-relaxed border-l border-white/10 pl-8">
                                Priority Weighting in Multi-Point Crisis Systems: A structural investigation into contextual reasoning vs. static rule trees.
                            </p>
                        </div>

                        <div className="relative aspect-video border border-white/10 bg-black overflow-hidden group">
                            <img
                                src="/images/research/autonomous_dispatch_hero.png"
                                alt="Autonomous Dispatch System"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 grayscale hover:grayscale-0 scale-110 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent opacity-60" />
                        </div>
                    </div>
                </div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
                </div>
            </section>

            {/* MAIN CONTENT */}
            <main className="max-w-7xl mx-auto px-6 md:px-12 py-32 space-y-48">

                {/* 1. PROJECT THESIS */}
                <section className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4 self-start sticky top-32">
                        <h2 className="font-mono text-[10px] uppercase tracking-[0.5em] text-amber-500/80 mb-4">01 // Thesis</h2>
                        <h3 className="text-3xl font-bold uppercase tracking-tightest">Structural <br />Breakdown.</h3>
                    </div>
                    <div className="lg:col-span-8 space-y-12">
                        <div className="space-y-6">
                            <h4 className="text-xl font-bold text-white uppercase tracking-wider">The Core Bottleneck</h4>
                            <p className="text-lg text-white/60 leading-relaxed">
                                Emergency dispatch systems are inherently fragile under multi-point crisis conditions. When incident density exceeds a critical threshold, standard resource allocation models - typically built on static, hierarchical rule trees - revert to reactive, first-come-first-served logic. In these scenarios, the system loses the ability to perform global optimization, leading to sub-optimal outcomes where non-critical demands deplete resources required for high-stakes interventions.
                            </p>
                        </div>

                        <div className="p-10 bg-white/[0.02] border border-white/5 space-y-6">
                            <h4 className="font-mono text-[10px] uppercase tracking-widest text-amber-500/60">Hypothesis</h4>
                            <p className="text-2xl font-bold text-white leading-tight italic">
                                "LLM-assisted priority weighting can dynamically rebalance dispatch logic using contextual reasoning, allowing for real-time recalibration of resource value in environments of radical uncertainty."
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. RESEARCH METHODOLOGY */}
                <section className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4 self-start sticky top-32">
                        <h2 className="font-mono text-[10px] uppercase tracking-[0.5em] text-amber-500/80 mb-4">02 // Methodology</h2>
                        <h3 className="text-3xl font-bold uppercase tracking-tightest">Experimental <br />Parameters.</h3>
                    </div>
                    <div className="lg:col-span-8 space-y-20">
                        <div className="space-y-12">
                            <p className="text-lg text-white/60 leading-relaxed">
                                Our research utilized a proprietary Discrete Event Simulation (DES) environment to model a virtual metropolitan area under a sustained Class-4 emergency event (wildfire encroachment combined with electrical grid failure).
                            </p>

                            {/* Diagram Segment */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="aspect-square w-full border border-white/10 bg-black/40 flex items-center justify-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-grid opacity-10" />
                                    <SystemDiagramOutline />
                                    <div className="absolute bottom-4 left-6 font-mono text-[9px] text-white/20 uppercase tracking-[0.2em]">
                                        FIG_01: Simulation Architecture // Node Weighting Flow
                                    </div>
                                </div>
                                <div className="aspect-square w-full border border-white/10 bg-black overflow-hidden group">
                                    <img
                                        src="/images/research/autonomous_dispatch_method.png"
                                        alt="LLM Triage Reasoning Framework"
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000"
                                    />
                                    <div className="absolute bottom-4 left-6 font-mono text-[9px] text-white/40 uppercase tracking-[0.2em] bg-black/60 px-2 py-1">
                                        FIG_02: LLM Reasoning Framework
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {[
                                    { title: 'Multi-Node Scenarios', body: 'Incident generation across 1,200 nodes with overlapping dependency chains.' },
                                    { title: 'Variable Scarcity', body: 'Dynamic depletion of specialized units (Heavy Rescue, paramedics, aerial logistics).' },
                                    { title: 'Prompt Strategy', body: 'Comparison of zero-shot vs. recursive few-shot weighting for incident triage.' },
                                    { title: 'Override Modeling', body: 'Testing the friction of human interference in LLM-proposed priority shifts.' },
                                ].map((item, i) => (
                                    <div key={i} className="p-6 border-l border-white/10 bg-white/[0.01]">
                                        <h5 className="font-bold uppercase text-xs tracking-widest mb-2 text-white/80">{item.title}</h5>
                                        <p className="text-sm text-white/40 leading-relaxed">{item.body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6 border-t border-white/5 pt-12">
                            <h4 className="text-xl font-bold text-white uppercase tracking-wider">Benchmarking Protocols</h4>
                            <ul className="space-y-4">
                                {[
                                    'Response latency under variable event-density.',
                                    'Misclassification rates in ambiguous incident descriptions.',
                                    'Resource utilization delta between LLM and static-rule baselines.',
                                    'System recovery time following resource exhaustion events.'
                                ].map((li, i) => (
                                    <li key={i} className="flex gap-4 items-start text-white/60">
                                        <span className="font-mono text-amber-500/60 text-[10px] mt-1">[{i + 1}]</span>
                                        <span className="text-sm">{li}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 3. FINDINGS */}
                <section className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4 self-start sticky top-32">
                        <h2 className="font-mono text-[10px] uppercase tracking-[0.5em] text-amber-500/80 mb-4">03 // Findings</h2>
                        <h3 className="text-3xl font-bold uppercase tracking-tightest">Empirical <br />Observed.</h3>
                    </div>
                    <div className="lg:col-span-8 space-y-12">
                        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
                            {[
                                { val: '22%', label: 'Efficiency Gain', sub: 'In Resource Reallocation' },
                                { val: '<400ms', label: 'Inference Latency', sub: 'Per Decision Node' },
                                { val: '0.04%', label: 'Critical Failure Rate', sub: 'In High-Signal Scenarios' },
                                { val: '3x', label: 'Throughput', sub: 'Under Peak incident Load' }
                            ].map((stat, i) => (
                                <div key={i} className="bg-[#0f0f0f] p-8 space-y-2">
                                    <div className="text-4xl font-bold text-amber-500 tracking-tightest">{stat.val}</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/80">{stat.label}</div>
                                    <div className="font-mono text-[8px] text-white/20 uppercase tracking-widest">{stat.sub}</div>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-8 pt-6">
                            <div className="space-y-4">
                                <h4 className="text-lg font-bold text-white uppercase tracking-tight">Contextual Superiority</h4>
                                <p className="text-white/50 leading-relaxed">
                                    LLMs qualitatively outperformed static rules in scenarios with high ambiguity. For example, the system correctly de-prioritized a low-acuity hospital transport Request A in favor of a rising wildfire notification in proximity to a combustible storage facility, whereas static rules assigned equal weight based on time-stamps alone.
                                </p>
                            </div>

                            <div className="bg-amber-500/5 border border-amber-500/20 p-8 space-y-4">
                                <h4 className="font-mono text-[10px] uppercase tracking-widest text-amber-500">Critical Risk Observation</h4>
                                <p className="text-sm text-white/70 leading-relaxed italic">
                                    "Without constrained reasoning frameworks, the system demonstrated a tendency for 'contextual hallucination' - periodically assigning extreme weights to incidents based on inferred, but unverified, catastrophic outcomes. Successful deployment requires strictly bounded reasoning modules."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. ANALYSIS & IMPLICATIONS */}
                <section className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4 self-start sticky top-32">
                        <h2 className="font-mono text-[10px] uppercase tracking-[0.5em] text-amber-500/80 mb-4">04 // Implications</h2>
                        <h3 className="text-3xl font-bold uppercase tracking-tightest">Systemic <br />Migration.</h3>
                    </div>
                    <div className="lg:col-span-8 space-y-16">
                        <p className="text-xl text-white/70 font-medium leading-relaxed italic border-l-2 border-amber-500/40 pl-8">
                            This research represents an foundational shift from deterministic dispatch to intelligent, context-aware coordination systems.
                        </p>

                        <div className="grid md:grid-cols-2 gap-12">
                            {[
                                { title: 'Civil Emergency', desc: 'Managed urban response during catastrophic environmental events.' },
                                { title: 'Military Logistics', desc: 'Priority routing for supply chains in high-interference kinetic zones.' },
                                { title: 'Climate Response', desc: 'Predictive resource scaling for multi-front wildfire and flood management.' },
                                { title: 'Autonomous Traffic', desc: 'Dynamic rerouting based on emergency signal priority and node saturation.' },
                            ].map((item, i) => (
                                <div key={i} className="space-y-4">
                                    <h5 className="font-bold uppercase text-sm tracking-widest text-white">{item.title}</h5>
                                    <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="pt-24 border-t border-white/10 text-center space-y-8">
                            <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/20">Phase // 02 Investigation Pending</h3>
                            <p className="text-white/40 max-w-xl mx-auto text-sm">
                                We are currently seeking technical partners for Phase 02: Real-world stress testing on anonymized dispatch data.
                            </p>
                            <Link href="/partner" className="inline-block px-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-[10px] hover:bg-amber-500 transition-colors">
                                Inquire About Research Data
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            {/* Global Grid Background (fixed) */}
            <div className="fixed inset-0 pointer-events-none z-[-1] opacity-20">
                <div className="absolute inset-0 bg-[#0f0f0f]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px]" />
            </div>
        </div>
    )
}

function NetworkBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let width = canvas.width = window.innerWidth
        let height = canvas.height = window.innerHeight

        const nodes: any[] = []
        const nodeCount = 60
        const connectionDistance = 200

        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4
            })
        }

        function animate() {
            ctx!.clearRect(0, 0, width, height)
            ctx!.strokeStyle = 'rgba(255, 255, 255, 0.05)'
            ctx!.fillStyle = 'rgba(255, 255, 255, 0.2)'

            nodes.forEach((node, i) => {
                node.x += node.vx
                node.y += node.vy

                if (node.x < 0 || node.x > width) node.vx *= -1
                if (node.y < 0 || node.y > height) node.vy *= -1

                ctx!.beginPath()
                ctx!.arc(node.x, node.y, 1, 0, Math.PI * 2)
                ctx!.fill()

                for (let j = i + 1; j < nodes.length; j++) {
                    const other = nodes[j]
                    const dx = node.x - other.x
                    const dy = node.y - other.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < connectionDistance) {
                        ctx!.beginPath()
                        ctx!.globalAlpha = 1 - (distance / connectionDistance)
                        ctx!.moveTo(node.x, node.y)
                        ctx!.lineTo(other.x, other.y)
                        ctx!.stroke()
                        ctx!.globalAlpha = 1
                    }
                }
            })

            requestAnimationFrame(animate)
        }

        animate()

        const handleResize = () => {
            width = canvas.width = window.innerWidth
            height = canvas.height = window.innerHeight
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-40" />
}

function SystemDiagramOutline() {
    return (
        <svg width="600" height="300" viewBox="0 0 600 300" fill="none" className="w-full max-w-2xl text-amber-500/20 group-hover:text-amber-500/40 transition-colors duration-1000">
            {/* Outline Box 1 */}
            <rect x="50" y="100" width="120" height="60" stroke="currentColor" strokeWidth="1" />
            <text x="110" y="135" fill="currentColor" fontSize="10" textAnchor="middle" className="font-mono uppercase tracking-widest">Input Signals</text>

            <path d="M170 130 H220" stroke="currentColor" strokeWidth="1" />

            {/* Outline Box 2 - Core Processor */}
            <rect x="220" y="80" width="160" height="100" stroke="currentColor" strokeWidth="1" />
            <text x="300" y="125" fill="currentColor" fontSize="11" textAnchor="middle" className="font-mono uppercase tracking-widest font-bold">LLM Reasoning</text>
            <text x="300" y="145" fill="currentColor" fontSize="8" textAnchor="middle" className="font-mono uppercase tracking-widest opacity-50">Priority Weighting</text>

            <path d="M380 130 H430" stroke="currentColor" strokeWidth="1" />

            {/* Outline Box 3 */}
            <rect x="430" y="100" width="120" height="60" stroke="currentColor" strokeWidth="1" />
            <text x="490" y="135" fill="currentColor" fontSize="10" textAnchor="middle" className="font-mono uppercase tracking-widest">Optimized Out</text>

            {/* Loop Back */}
            <path d="M490 160 V220 H300 V180" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
            <text x="395" y="210" fill="currentColor" fontSize="7" className="font-mono uppercase tracking-widest opacity-30">Feedback Calibration</text>

            {/* Small nodes */}
            <circle cx="50" cy="130" r="2" fill="currentColor" />
            <circle cx="170" cy="130" r="2" fill="currentColor" />
            <circle cx="220" cy="130" r="2" fill="currentColor" />
            <circle cx="380" cy="130" r="2" fill="currentColor" />
            <circle cx="430" cy="130" r="2" fill="currentColor" />
            <circle cx="550" cy="130" r="2" fill="currentColor" />
        </svg>
    )
}
