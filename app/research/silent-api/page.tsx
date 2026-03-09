"use client"
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function SilentAPIPage() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])

    return (
        <div ref={containerRef} className="min-h-screen bg-[#050505] text-[#d4d4d1] font-sans selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden">
            {/* 1. IMMERSIVE SENSORY HERO */}
            <section className="relative h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden border-b border-white/5">
                <motion.div style={{ opacity, scale }} className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)] opacity-60" />
                    <div className="absolute inset-0 bg-[url('/images/research/city_noise_bg.jpg')] bg-cover bg-center grayscale opacity-10 mix-blend-overlay" />
                    <VibeGrid />
                </motion.div>

                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <div className="space-y-12">
                        <Link href="/research" className="inline-flex items-center gap-3 text-white/20 hover:text-blue-400 transition-all group mb-12">
                            <div className="w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-blue-400 transition-all" />
                            <span className="font-mono text-[10px] uppercase tracking-[0.4em] font-bold">Research // Intelligence</span>
                        </Link>

                        <div className="grid lg:grid-cols-12 gap-12 items-end">
                            <div className="lg:col-span-8 space-y-6">
                                <motion.span 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="font-mono text-[10px] uppercase tracking-[0.5em] text-blue-500/60 block"
                                >
                                    The Ethics of Access // Data Proxies
                                </motion.span>
                                <motion.h1 
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-6xl md:text-[10rem] font-bold tracking-tightest uppercase leading-[0.8] text-white"
                                >
                                    Silent <br />
                                    <span className="text-blue-500/80">API.</span>
                                </motion.h1>
                            </div>
                            <div className="lg:col-span-4 pb-4">
                                <p className="text-lg md:text-xl text-white/40 font-medium leading-relaxed border-l-2 border-blue-500/30 pl-8 italic">
                                    "Engineering peace in a city that refuses to share its noise data."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sensory Indicator Sidebar */}
                <div className="absolute right-12 bottom-12 hidden md:block space-y-8 h-64 border-r border-white/10 pr-6">
                    <div className="text-right space-y-1">
                        <div className="font-mono text-[8px] uppercase tracking-widest text-white/20">Ambient Noise</div>
                        <div className="text-xs font-bold text-blue-500/60 font-mono tracking-tighter">||||||||||||| 42db</div>
                    </div>
                    <div className="text-right space-y-1">
                        <div className="font-mono text-[8px] uppercase tracking-widest text-white/20">Crowd Density</div>
                        <div className="text-xs font-bold text-blue-500/60 font-mono tracking-tighter">|| 02%</div>
                    </div>
                    <div className="text-right space-y-1">
                        <div className="font-mono text-[8px] uppercase tracking-widest text-white/20">Proxy Reliability</div>
                        <div className="text-xs font-bold text-blue-500/60 font-mono tracking-tighter">|||||||||| 92%</div>
                    </div>
                </div>
            </section>

            {/* 2. THE STORY / CONTENT */}
            <main className="max-w-7xl mx-auto px-6 md:px-12 py-48 space-y-64 relative">
                
                {/* Visual Narrative 1: The Wall */}
                <section className="grid lg:grid-cols-12 gap-24 items-start">
                    <div className="lg:col-span-5 space-y-8 sticky top-24">
                        <div className="w-12 h-1 bg-blue-500" />
                        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tightest leading-none text-white">
                            The <br />Developer <br />Wall.
                        </h2>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-white/20">01 // Competitive Advantage</p>
                    </div>
                    <div className="lg:col-span-7 space-y-12">
                        <div className="prose prose-invert prose-lg">
                            <p className="text-2xl text-white/60 leading-relaxed font-light">
                                If you’ve ever used Google Maps to check if a cafe is currently crowded, you’ve seen the "Live Busyness" graph. It’s a magic blue bar that tells you exactly how many people are there right now.
                            </p>
                            <div className="h-px bg-white/5 my-12" />
                            <p className="text-xl text-white/40 leading-relaxed font-medium">
                                But here is the secret most users don't know: <strong>Google doesn't let developers use that data.</strong> For the creators of QuietFinder, this was a major roadblock. Our mission was to build a map that prioritizes peace and quiet, but the industry-standard "Busyness API" simply doesn't exist.
                            </p>
                        </div>
                        <div className="bg-blue-500/5 border border-blue-500/20 p-12 space-y-6">
                            <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] font-black text-blue-500/80">Decision Logic</h4>
                            <p className="text-3xl font-bold text-white leading-[1.1]">
                                "To build independent tools, we had to transition from 'Instant Busyness' to 'Characteristic Loudness'."
                            </p>
                        </div>
                    </div>
                </section>

                {/* Visual Narrative 2: The Proxy (The Map View) */}
                <section className="space-y-24">
                    <div className="text-center space-y-4 max-w-3xl mx-auto">
                        <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-blue-500/60">02 // The Breakthrough</span>
                        <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tightest text-white">Review Count <br />as Proxy.</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5">
                        <div className="bg-[#080808] p-16 space-y-8 group hover:bg-[#0a0a0a] transition-colors">
                            <div className="h-48 flex items-center justify-center border border-white/5 bg-black/40 relative overflow-hidden">
                                <QuietIcon />
                                <div className="absolute top-4 left-4 font-mono text-[8px] text-white/20">SIGNAL: LOW_DENSITY</div>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-2xl font-bold text-white uppercase tracking-tighter">Level 1: The Hidden Gem</h4>
                                <p className="text-white/40 text-sm leading-relaxed">&lt; 300 total reviews. Almost certainly a quiet, neighborhood spot with minimal tourist friction.</p>
                            </div>
                        </div>
                        <div className="bg-[#080808] p-16 space-y-8 group hover:bg-[#0a0a0a] transition-colors border-l border-white/5">
                            <div className="h-48 flex items-center justify-center border border-white/5 bg-black/40 relative overflow-hidden">
                                <LoudIcon />
                                <div className="absolute top-4 left-4 font-mono text-[8px] text-white/20">SIGNAL: HIGH_DENSITY</div>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-2xl font-bold text-white uppercase tracking-tighter">Level 5: The Loud Center</h4>
                                <p className="text-white/40 text-sm leading-relaxed">20,000+ total reviews. High-traffic environment. Maximum sensory engagement. To be avoided for "Quiet" vibing.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Visual Narrative 3: Scoring Math */}
                <section className="grid lg:grid-cols-12 gap-24 items-center">
                    <div className="lg:col-span-6 space-y-8">
                        <div className="w-12 h-1 bg-blue-500" />
                        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tightest leading-[0.9] text-white">
                            The <br />Scoring <br />Engine.
                        </h2>
                        <div className="space-y-12 pt-8">
                            {[
                                { title: 'Logarithmic Scaling', desc: 'Smoothing the curve between neighborhood cafes and global landmarks.' },
                                { title: 'Environmental Modifiers', desc: 'Dynamic penalties for rain, pollen, and air quality on outdoor locations.' },
                                { title: 'Parallel Exploration', desc: 'Simultaneously querying multiple categories to bypass the 20-result API wall.' }
                            ].map((item, i) => (
                                <div key={i} className="space-y-2">
                                    <h4 className="text-white font-bold uppercase tracking-widest text-[11px] flex items-center gap-4">
                                        <span className="text-blue-500/40">0{i+1}</span>
                                        {item.title}
                                    </h4>
                                    <p className="text-white/40 text-sm pl-8 border-l border-blue-500/10 ml-1.5">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-6 border border-white/10 bg-black/40 p-12 aspect-square flex flex-col justify-between font-mono text-[10px] text-blue-500/60">
                        <div className="space-y-2">
                            <div>// EXECUTE_RANKING_PROTOCOL</div>
                            <div>&gt; query: "quiet coffee"</div>
                            <div>&gt; analyze: 64 nodes identified</div>
                        </div>
                        <div className="space-y-1 text-white/20">
                            <div>node_01: score 94 [LO_REVIEW_COUNT]</div>
                            <div>node_02: score 88 [MED_REVIEW_COUNT | INDOOR_PENALTY_CLEARED]</div>
                            <div>node_03: score 12 [HI_REVIEW_COUNT | TOURIST_MARKER]</div>
                            <div className="animate-pulse">_ calculating environmental delta...</div>
                        </div>
                        <div className="text-blue-400 font-bold border-t border-white/10 pt-4 uppercase tracking-[0.2em]">
                            Ranking Result: Node_01 surfaces to Top
                        </div>
                    </div>
                </section>

                {/* 5. CONCLUSION */}
                <section className="py-48 text-center space-y-12 border-t border-white/5">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <h2 className="text-5xl md:text-[8rem] font-bold uppercase tracking-tightest text-white leading-none">
                            Feel <br /><span className="text-blue-500">The Map.</span>
                        </h2>
                        <p className="text-2xl text-white/40 leading-relaxed font-light">
                            QuietFinder isn't just about where a place is; it’s about how it feels when you get there. By compensating for Google's data lock, we've created a sensory filter for the modern city.
                        </p>
                    </div>
                    <div className="pt-24 flex justify-center gap-8">
                        <Link href="https://kenopsia-map.web.app/" className="px-12 py-5 bg-blue-500 text-black font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1">
                            Explore QuietFinder
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    )
}

function VibeGrid() {
    return (
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
    )
}

function QuietIcon() {
    return (
        <div className="flex gap-1 items-end h-16">
            <div className="w-2 bg-blue-500 h-[20%] animate-pulse" />
            <div className="w-2 bg-white/20 h-[10%]" />
            <div className="w-2 bg-white/20 h-[15%]" />
            <div className="w-2 bg-white/20 h-[5%]" />
        </div>
    )
}

function LoudIcon() {
    return (
        <div className="flex gap-1 items-end h-16">
            <div className="w-2 bg-blue-500 h-[90%] animate-bounce" />
            <div className="w-2 bg-blue-500 h-[100%] animate-bounce [animation-delay:0.1s]" />
            <div className="w-2 bg-blue-500 h-[85%] animate-bounce [animation-delay:0.2s]" />
            <div className="w-2 bg-blue-500 h-[95%] animate-bounce [animation-delay:0.15s]" />
        </div>
    )
}
