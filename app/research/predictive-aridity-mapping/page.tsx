"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import SectionHeader from '../../../components/SectionHeader'

export default function PredictiveAridityPage() {
    return (
        <div className="min-h-screen bg-[#0d0d0b] text-[#d4d4d1] font-sans selection:bg-orange-950 selection:text-orange-200">
            {/* 1. HERO SECTION */}
            <section className="relative h-[70vh] flex flex-col justify-center px-6 md:px-12 overflow-hidden border-b border-[#2d2d2a]">
                {/* Satellite Background Simulation */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <div className="absolute inset-0 bg-[url('/images/research/satellite_bg.jpg')] bg-cover bg-center grayscale brightness-[0.3]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0d0b]/80 to-[#0d0d0b]" />
                    <HeatmapOverlay />
                </div>

                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <div className="space-y-8 max-w-4xl">
                        <Link href="/research" className="inline-flex items-center gap-2 text-white/40 hover:text-orange-400 transition-colors group mb-8">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M11 6H1M1 6L5 2M1 6L5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">Research Tracker // [EARTH-OBS]</span>
                        </Link>

                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-4">
                                <span className="font-mono text-[9px] uppercase tracking-[0.5em] text-orange-500/80 block">Scientific Investigation // Forecasting</span>
                                <h1 className="text-4xl md:text-7xl font-bold tracking-tightest uppercase leading-none text-white">
                                    Predictive <br />
                                    <span className="text-orange-500/80">Aridity Mapping.</span>
                                </h1>
                                <p className="text-lg md:text-xl text-white/40 font-medium max-w-2xl leading-relaxed border-l border-white/10 pl-8">
                                    Utilized multispectral satellite computer vision to detect early indicators of resource scarcity before they impact global commodity pricing.
                                </p>
                            </div>
                            <div className="relative aspect-video border border-orange-500/20 bg-black overflow-hidden group shadow-2xl">
                                <img
                                    src="/images/research/aridity_mapping_hero.png"
                                    alt="Satellite Aridity Analysis"
                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-1000 grayscale-[0.5] hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0b] to-transparent opacity-40" />
                                <div className="absolute top-4 right-4 font-mono text-[8px] text-orange-400 uppercase tracking-widest bg-black/40 px-2 py-1">
                                    SAT_REF // SENTINEL-2
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <main className="max-w-7xl mx-auto px-6 md:px-12 py-32 space-y-48">

                {/* 1. PROJECT THESIS */}
                <section className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4 sticky top-10 self-start">
                        <h2 className="font-mono text-[10px] uppercase tracking-[0.5em] text-orange-500/60 mb-4 font-bold text-center border border-orange-500/20 py-2">01 // Thesis</h2>
                        <h3 className="text-3xl font-bold uppercase tracking-tightest text-white">The Lag of <br />Signal.</h3>
                    </div>
                    <div className="lg:col-span-8 space-y-12">
                        <div className="space-y-6">
                            <h4 className="text-lg font-bold text-white uppercase tracking-wider">The Market Blind-spot</h4>
                            <p className="text-md text-white/50 leading-relaxed font-medium">
                                Agricultural resource scarcity - driven by regional drought and soil fatigue - is typically a 'lagging' data point in global markets. By the time scarcity is officially reported by jurisdictional authorities, commodity futures have often already skewed, leaving supply chain coordinators and insurers in a reactive posture.
                            </p>
                        </div>
                        <div className="p-10 bg-orange-500/[0.03] border border-orange-500/20 space-y-6">
                            <h4 className="font-mono text-[9px] uppercase tracking-widest font-black text-orange-500/70">Hypothesis</h4>
                            <p className="text-xl text-white leading-relaxed font-bold italic">
                                "Multispectral satellite computer vision and NDVI trend modeling can detect vegetation stress signatures 6-8 weeks before their impact is manifested in market pricing or policy reports."
                            </p>
                        </div>
                    </div>
                </section>

                {/* VISUAL: PIPELINE */}
                <section className="py-24 border-y border-white/5">
                    <div className="grid md:grid-cols-3 gap-12 items-center">
                        <div className="space-y-4">
                            <div className="aspect-square bg-white/5 border border-white/10 relative overflow-hidden flex items-center justify-center">
                                <span className="font-mono text-[8px] uppercase tracking-widest opacity-20">Raw Imagery</span>
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
                            </div>
                            <span className="font-mono text-[9px] uppercase tracking-widest block text-center text-white/30">Satellite Input</span>
                        </div>
                        <div className="space-y-4">
                            <div className="aspect-square bg-orange-500/10 border border-orange-500/20 relative overflow-hidden flex items-center justify-center">
                                <div className="absolute inset-0 flex flex-wrap opacity-40">
                                    {Array.from({ length: 16 }).map((_, i) => (
                                        <div key={i} className={`w-1/4 h-1/4 border-white/5 ${i % 3 === 0 ? 'bg-orange-500/40' : ''}`} />
                                    ))}
                                </div>
                                <span className="font-mono text-[8px] uppercase tracking-widest relative z-10 font-bold">Classified Anomaly</span>
                            </div>
                            <span className="font-mono text-[9px] uppercase tracking-widest block text-center text-orange-500">CV Classification</span>
                        </div>
                        <div className="space-y-4">
                            <div className="aspect-square bg-white/[0.02] border border-white/10 p-8 flex flex-col justify-end">
                                <div className="h-px bg-white/10 w-full mb-8 relative">
                                    <div className="absolute -top-1 right-12 w-2 h-2 bg-orange-500 rounded-full" />
                                    <div className="absolute -top-12 right-12 text-[9px] font-mono text-orange-500 uppercase tracking-widest">Pricing Shift</div>
                                </div>
                                <div className="h-1/2 w-full border-l border-white/10 flex items-end">
                                    <div className="w-full h-1/2 bg-gradient-to-t from-orange-500/20 to-transparent" />
                                </div>
                            </div>
                            <span className="font-mono text-[9px] uppercase tracking-widest block text-center text-white/30">Market Impact Graph</span>
                        </div>
                    </div>
                </section>

                {/* 2. RESEARCH METHODOLOGY */}
                <section className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4 sticky top-10 self-start">
                        <h2 className="font-mono text-[10px] uppercase tracking-[0.5em] text-orange-500/60 mb-4 font-bold text-center border border-orange-500/20 py-2">02 // Methodology</h2>
                        <h3 className="text-3xl font-bold uppercase tracking-tightest text-white text-center">Data <br />Parameters.</h3>
                    </div>
                    <div className="lg:col-span-8 space-y-16">
                        <div className="grid md:grid-cols-2 gap-12">
                            {[
                                { title: 'Imagery Ingestion', desc: 'Sustained ingest of Sentinel-2 multispectral imagery across sub-Saharan and South Asian agricultural clusters.' },
                                { title: 'NDVI Trend Modeling', desc: 'Normalized Difference Vegetation Index analysis combined with land surface temperature temporal tracking.' },
                                { title: 'Anomaly Detection', desc: 'Unsupervised leaf-layer classification to detect drought stress before the visual yellowing of vegetation.' },
                                { title: 'Market Correlation', desc: 'Integration of historical CBOT (Chicago Board of Trade) futures pricing data for wheat, maize, and soy.' },
                            ].map((item, i) => (
                                <div key={i} className="space-y-4 p-8 border border-white/5 bg-white/[0.01] hover:bg-orange-500/[0.02] transition-colors">
                                    <h5 className="font-bold uppercase text-xs tracking-[0.2em] text-white underline decoration-orange-500/40 underline-offset-8 decoration-2">{item.title}</h5>
                                    <p className="text-xs text-white/40 leading-relaxed pt-2">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="p-1 border border-white/5 bg-white/[0.01]">
                            <div className="flex justify-center p-12 overflow-hidden">
                                <SignalFusionVisual />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. FINDINGS */}
                <section className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4 sticky top-10 self-start">
                        <h2 className="font-mono text-[10px] uppercase tracking-[0.5em] text-orange-500/60 mb-4 font-bold text-center border border-orange-500/20 py-2">03 // Findings</h2>
                        <h3 className="text-3xl font-bold uppercase tracking-tightest text-white">Forecasting <br />Efficiency.</h3>
                    </div>
                    <div className="lg:col-span-8 space-y-12 font-medium">
                        <div className="p-12 border border-white/5 bg-black/40 space-y-8">
                            <div className="flex items-baseline gap-4">
                                <span className="text-6xl font-bold text-orange-500">6.4</span>
                                <span className="text-xl text-white/40 uppercase tracking-widest font-mono">Weeks of Lead Time</span>
                            </div>
                            <p className="text-lg text-white/60 leading-relaxed border-t border-white/5 pt-8">
                                Observed data confirms that computer vision signatures in the near-infrared spectrum identify soil exhaustion and aridity an average of 6.4 weeks before their manifestation in verified commodity pricing shifts.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 pt-8">
                            <div className="space-y-4">
                                <h4 className="text-[10px] font-mono uppercase tracking-widest text-orange-500/80 font-bold">Model Volatility</h4>
                                <p className="text-sm text-white/40 leading-relaxed">
                                    Regional variability remains high. Models trained on temperate zones required significant re-calibration for tropical and sub-tropical NDVI benchmarks.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-[10px] font-mono uppercase tracking-widest text-orange-500/80 font-bold">Data Fusion</h4>
                                <p className="text-sm text-white/40 leading-relaxed">
                                    Combining satellite CV with macro-economic data (shipping indices, regional reserve reports) improved forecast stability from 62% to 88% accuracy.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. STRATEGIC IMPLICATIONS */}
                <section className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4 sticky top-10 self-start">
                        <h2 className="font-mono text-[10px] uppercase tracking-[0.5em] text-orange-500/60 mb-4 font-bold text-center border border-orange-500/20 py-2">04 // Implications</h2>
                        <h3 className="text-3xl font-bold uppercase tracking-tightest text-white">Macro <br />Intelligence.</h3>
                    </div>
                    <div className="lg:col-span-8 space-y-16">
                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                            {[
                                { title: 'Commodity Forecasting', desc: 'Pre-emptive signal for traders and supply chain coordinators facing extreme environmental volatility.' },
                                { title: 'Climate Insurance', desc: 'Parametric insurance triggers based on satellite-verified aridity indices.' },
                                { title: 'Sovereign Security', desc: 'Early-warning systems for nations dependent on single-crop stability.' },
                                { title: 'Infrastructure Position', desc: 'Logistical pre-positioning of food and water resources based on predictive mapping.' },
                            ].map((item, i) => (
                                <div key={i} className="space-y-4 border-b border-white/5 pb-8">
                                    <h5 className="font-bold uppercase text-sm tracking-widest text-white underline decoration-orange-500/20 decoration-1 underline-offset-[12px]">{item.title}</h5>
                                    <p className="text-sm text-white/40 leading-relaxed pt-2">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="pt-24 text-center space-y-8 border-t border-white/5">
                            <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em] font-bold italic">Lab Investigation Status: Signal Verified // Phase 03 Scaling</p>
                            <Link href="/partner" className="inline-block px-12 py-5 bg-white text-black font-bold uppercase tracking-[0.2em] text-[9px] hover:bg-orange-500 transition-colors">
                                Access Regional Dataset
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            {/* Subtle Heatmap Overlay Animation */}
            <div className="fixed inset-0 pointer-events-none z-[-1] opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(194,65,12,0.1)_0%,transparent_70%)] animate-pulse" />
            </div>
        </div>
    )
}

function SignalFusionVisual() {
    return (
        <svg width="400" height="200" viewBox="0 0 400 200" fill="none" className="w-full max-w-lg text-orange-500/20">
            {/* Input Nodes */}
            <circle cx="50" cy="40" r="30" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
            <text x="50" y="43" fill="white" fontSize="6" textAnchor="middle" className="font-mono uppercase tracking-widest opacity-40">NDVI</text>

            <circle cx="50" cy="100" r="30" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
            <text x="50" y="103" fill="white" fontSize="6" textAnchor="middle" className="font-mono uppercase tracking-widest opacity-40">Temp</text>

            <circle cx="50" cy="160" r="30" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
            <text x="50" y="163" fill="white" fontSize="6" textAnchor="middle" className="font-mono uppercase tracking-widest opacity-40">Market</text>

            {/* Convergence Paths */}
            <path d="M80 40 Q200 40 250 100" stroke="currentColor" strokeWidth="1.5" />
            <path d="M80 100 H250" stroke="currentColor" strokeWidth="1.5" />
            <path d="M80 160 Q200 160 250 100" stroke="currentColor" strokeWidth="1.5" />

            {/* Processor */}
            <rect x="250" y="70" width="100" height="60" stroke="currentColor" strokeWidth="2" fill="black" />
            <text x="300" y="95" fill="white" fontSize="8" textAnchor="middle" className="font-mono font-black uppercase tracking-widest">Fusion Engine</text>
            <text x="300" y="110" fill="orange" fontSize="6" textAnchor="middle" className="font-mono uppercase tracking-widest opacity-60">Risk Forecast</text>

            {/* Animated Particles */}
            <circle cx="0" cy="0" r="1.5" fill="orange">
                <animateMotion path="M80 40 Q200 40 250 100" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="0" cy="0" r="1.5" fill="orange">
                <animateMotion path="M80 100 H250" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="0" cy="0" r="1.5" fill="orange">
                <animateMotion path="M80 160 Q200 160 250 100" dur="3.5s" repeatCount="indefinite" />
            </circle>
        </svg>
    )
}

function HeatmapOverlay() {
    return (
        <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-orange-600 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-900 rounded-full blur-[150px] opacity-40 animate-pulse" />
        </div>
    )
}
