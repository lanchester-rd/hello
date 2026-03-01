"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import SectionHeader from '../../../components/SectionHeader'

export default function RegulatoryExtractionPage() {
    return (
        <div className="min-h-screen bg-[#fcfcfc] text-[#1a1a1a] font-serif selection:bg-blue-100">
            {/* 1. HEADER SECTION - Document Style */}
            <header className="pt-32 pb-16 px-6 md:px-12 border-b border-black/10">
                <div className="max-w-4xl mx-auto space-y-8">
                    <Link href="/research" className="inline-flex items-center gap-2 text-black/40 hover:text-black transition-colors group mb-4 font-sans italic">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M11 6H1M1 6L5 2M1 6L5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Research Archive // Intelligence</span>
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 items-end">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 font-sans">
                                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-blue-600">Phase 01 Whitepaper</span>
                                <span className="h-px w-8 bg-black/10" />
                                <span className="text-[9px] uppercase tracking-[0.3em] text-black/40">Ref: MAR-204-X</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-display leading-[1.1] text-black">
                                Regulatory Extraction: <br />
                                <span className="italic text-black/70">Zero-Shot Parsing of Maritime & Transport Law</span>
                            </h1>
                        </div>
                        <div className="relative aspect-[16/5] border border-black/10 bg-white shadow-lg overflow-hidden group">
                            <img
                                src="/images/research/regulatory_extraction_hero.png"
                                alt="Maritime Law Boundaries"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 grayscale hover:grayscale-0"
                            />
                            <div className="absolute inset-0 border-[20px] border-white/20 pointer-events-none" />
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 md:px-12 py-20 space-y-24">

                {/* 1. PROJECT THESIS */}
                <section className="space-y-8">
                    <h2 className="font-sans text-[10px] uppercase tracking-[0.4em] text-black/30 pb-4 border-b border-black/5">01 // Project Thesis</h2>
                    <div className="grid md:grid-cols-12 gap-12">
                        <div className="md:col-span-12 space-y-6">
                            <h3 className="text-2xl font-bold tracking-tight">The Problem of Jurisdictional Volatility</h3>
                            <p className="text-lg leading-relaxed text-black/80 font-sans">
                                International maritime and transport regulations are updated continuously across hundreds of overlapping jurisdictions. For logistics firms and autonomous vessel operators, manual interpretation of these shifts creates significant lag in operational compliance, leading to legal friction and increased insurance risk.
                            </p>
                        </div>
                        <div className="md:col-span-12 p-8 bg-black/[0.02] border-l-2 border-blue-600 space-y-4">
                            <h4 className="font-sans text-[9px] uppercase tracking-widest font-bold">Hypothesis</h4>
                            <p className="text-xl italic text-black/90">
                                "Zero-shot LLM extraction can transform unstructured regulatory updates into machine-readable operational directives without the need for jurisdiction-specific fine-tuning."
                            </p>
                        </div>
                    </div>
                </section>

                {/* VISUAL: RAW TO STRUCTURED */}
                <section className="py-12 border-y border-black/5 font-sans">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
                        <div className="p-4 border border-black/10 rounded-sm bg-white shadow-sm">
                            <div className="text-[8px] uppercase tracking-widest text-black/30 mb-2">Source Regulation</div>
                            <div className="h-24 overflow-hidden text-[8px] text-left opacity-40 leading-tight">
                                "In accordance with IMO Resolution MSC.428(98), shipowners must ensure that cyber risks are appropriately addressed in existing safety management systems..."
                            </div>
                        </div>
                        <div className="flex justify-center flex-col items-center gap-2 opacity-20">
                            <div className="h-px w-full bg-black" />
                            <span className="text-[10px] uppercase tracking-widest font-bold">Extraction Layer</span>
                            <div className="h-px w-full bg-black" />
                        </div>
                        <div className="p-4 border border-blue-200 rounded-sm bg-blue-50/30">
                            <div className="text-[8px] uppercase tracking-widest text-blue-600 font-bold mb-2">Structured Schema</div>
                            <pre className="text-[8px] text-left text-blue-800/80 leading-tight font-mono">
                                {`{
  "authority": "IMO",
  "directive": "Cyber_Risk_Mgt",
  "compliance_target": "SMS",
  "effective_date": "2021-01-01"
}`}
                            </pre>
                        </div>
                    </div>
                </section>

                {/* 2. RESEARCH METHODOLOGY */}
                <section className="space-y-8 font-sans">
                    <h2 className="text-[10px] uppercase tracking-[0.4em] text-black/30 pb-4 border-b border-black/5">02 // Research Methodology</h2>
                    <div className="space-y-10">
                        <p className="text-black/60 leading-relaxed">
                            Our laboratory processed a diverse corpus of 14,000 regulatory nodes to test the limits of cross-jurisdictional zero-shot interpretation.
                        </p>
                        <div className="space-y-12">
                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                                {[
                                    { title: 'Dataset Collection', body: 'Regulatory feeds from IMO (International Maritime Org), EU Transport Law bulletins, and bilateral maritime treaties.' },
                                    { title: 'Cross-Language Parsing', body: 'Evaluation of extraction accuracy across EN (English), FR (French), DE (German), and ES (Spanish) texts.' },
                                    { title: 'Schema Enforcement', body: 'Validation of extraction outputs against strict Operational Directive schemas to ensure machine-readability.' },
                                    { title: 'Benchmark Comparison', body: 'Accuracy and latency comparison vs. legacy rule-based NLP and human legal analyst teams.' },
                                ].map((item, i) => (
                                    <div key={i} className="space-y-2 border-l border-black/10 pl-4">
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-black/80">{item.title}</h4>
                                        <p className="text-sm text-black/50 leading-relaxed">{item.body}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="p-1 border border-black/5 bg-black/[0.02]">
                                <div className="bg-white p-8 border border-black/10 flex items-center justify-center relative overflow-hidden">
                                    <ExtractionPipeVisual />
                                    <div className="absolute top-4 right-4 font-mono text-[8px] text-black/20 uppercase tracking-widest">
                                        FIG_02: Extraction Pipeline // Logic Flow
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. FINDINGS */}
                <section className="space-y-12">
                    <h2 className="font-sans text-[10px] uppercase tracking-[0.4em] text-black/30 pb-4 border-b border-black/5">03 // Findings</h2>
                    <div className="space-y-8">
                        <div className="overflow-x-auto border border-black/10 font-sans">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-black/5 border-b border-black/10">
                                    <tr>
                                        <th className="p-4 text-[9px] uppercase tracking-widest font-black">Test Category</th>
                                        <th className="p-4 text-[9px] uppercase tracking-widest font-black">Zero-Shot Accuracy</th>
                                        <th className="p-4 text-[9px] uppercase tracking-widest font-black">Human Bench</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm divide-y divide-black/5">
                                    <tr>
                                        <td className="p-4 font-bold">Directive Extraction</td>
                                        <td className="p-4 text-blue-600 font-mono">98.2%</td>
                                        <td className="p-4 text-black/40 font-mono">99.1%</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-bold">Jurisdictional Mapping</td>
                                        <td className="p-4 text-blue-600 font-mono">94.7%</td>
                                        <td className="p-4 text-black/40 font-mono">96.4%</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-bold">Date/Compliance Deadlines</td>
                                        <td className="p-4 text-blue-600 font-mono">99.4%</td>
                                        <td className="p-4 text-black/40 font-mono">98.8%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 pt-6 italic text-black/70 leading-relaxed">
                            <p>
                                While structural extraction accuracy reached 98%, primary failure modes occurred in jurisdictional override clauses where a regional law (e.g., individual EU member state) contradicted an international treaty within the same document snippet.
                            </p>
                            <p>
                                The models demonstrated exceptional performance in amendment detection - accurately identifying specific line shifts in regulatory updates from previous versions without requiring historical context in the prompt.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 4. ANALYSIS & STRATEGIC IMPACT */}
                <section className="space-y-8 font-sans">
                    <h2 className="text-[10px] uppercase tracking-[0.4em] text-black/30 pb-4 border-b border-black/5">04 // Strategic Impact</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            { title: 'Shipping Logistics', desc: 'Real-time routing adjustments based on localized maritime compliance shifts.' },
                            { title: 'Autonomous Vessels', desc: 'Dynamic boundary-law integration for machine-led navigation units.' },
                            { title: 'Aviation Compliance', desc: 'Accelerated airspace access through automated flight-path regulatory review.' },
                            { title: 'Risk Dashboards', desc: 'Global regulatory heatmaps showing volatility patterns in trade corridors.' },
                        ].map((item, i) => (
                            <div key={i} className="space-y-4">
                                <h5 className="font-bold uppercase text-xs tracking-widest text-black/90">{item.title}</h5>
                                <p className="text-sm text-black/50 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="pt-24 text-center space-y-8 border-t border-black/5">
                        <p className="text-black/30 max-w-xl mx-auto text-[11px] uppercase tracking-[0.2em] font-bold">
                            // Lab Investigation Status: Active // Technical Partnership Invited
                        </p>
                        <Link href="/partner" className="inline-block px-10 py-4 bg-black text-white font-sans font-bold uppercase tracking-widest text-[9px] hover:bg-blue-600 transition-colors">
                            Request Sample Data
                        </Link>
                    </div>
                </section>
            </main>

            {/* Print Friendly Meta */}
            <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 border-t border-black/5 opacity-20 flex justify-between items-center font-sans text-[8px] uppercase tracking-widest">
                <span>© 2025 Lanchester R&D Laboratory</span>
                <span>Security Level: Alpha-Blue</span>
                <span>Document L-RD_REG_0X</span>
            </div>
        </div>
    )
}

function ExtractionPipeVisual() {
    return (
        <svg width="400" height="150" viewBox="0 0 400 150" fill="none" className="w-full max-w-lg text-blue-600/30">
            {/* Input Stack */}
            <rect x="20" y="40" width="60" height="80" stroke="black" strokeWidth="0.5" strokeDasharray="2 2" />
            <rect x="25" y="45" width="60" height="80" stroke="black" strokeWidth="0.5" strokeDasharray="2 2" />
            <rect x="30" y="50" width="60" height="80" stroke="black" strokeWidth="1" fill="white" />
            <text x="60" y="95" fill="black" fontSize="6" textAnchor="middle" className="font-sans uppercase tracking-tighter opacity-40">Unstructured Law</text>

            <path d="M100 90 H150" stroke="black" strokeWidth="1" markerEnd="url(#arrow)" />

            {/* Neural Layer */}
            <circle cx="200" cy="90" r="30" stroke="currentColor" strokeWidth="2" />
            <circle cx="200" cy="90" r="22" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
            <text x="200" y="93" fill="black" fontSize="8" textAnchor="middle" className="font-sans font-bold uppercase tracking-widest">LLM</text>

            <path d="M250 90 H300" stroke="black" strokeWidth="1" markerEnd="url(#arrow)" />

            {/* Structured Out */}
            <rect x="310" y="60" width="70" height="60" stroke="currentColor" strokeWidth="1.5" />
            <path d="M320 80 H360 M320 90 H350 M320 100 H370" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            <text x="345" y="135" fill="black" fontSize="6" textAnchor="middle" className="font-sans uppercase tracking-[0.2em] opacity-40">JSON Directive</text>

            <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                    <path d="M0,0 L10,5 L0,10 Z" fill="black" />
                </marker>
            </defs>
        </svg>
    )
}
