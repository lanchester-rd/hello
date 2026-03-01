"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'

export default function LowBandwidthSyncPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-[#d1d1d1] font-mono selection:bg-emerald-500/20 selection:text-emerald-400">
            {/* Background Grid */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            <MeshAnimation />

            {/* 1. HERO SECTION */}
            <header className="relative pt-32 pb-24 px-6 md:px-12 border-b border-white/5 z-10">
                <div className="max-w-6xl mx-auto space-y-12">
                    <Link href="/research" className="inline-flex items-center gap-2 text-emerald-500/40 hover:text-emerald-500 transition-colors group">
                        <span className="font-bold tracking-widest text-[10px] uppercase">RT // PROTOCOL-7</span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M1 6H11M11 6L7 2M11 6L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-4">
                            <span className="text-[10px] tracking-[0.5em] text-emerald-500 block uppercase">Intelligence // Networking</span>
                            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none text-white uppercase">
                                Low-Bandwidth <br />
                                <span className="text-emerald-500">State Sync.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-white/40 max-w-2xl font-medium tracking-tight">
                                Engineering mesh-based state synchronization protocols for tactical coordination in high-interference environments.
                            </p>
                        </div>
                        <div className="relative aspect-video border border-emerald-500/20 bg-black overflow-hidden group">
                            <img
                                src="/images/research/low_bandwidth_hero.png"
                                alt="Tactical Mesh Device"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 hue-rotate-[10deg]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-40" />
                        </div>
                    </div>
                </div>
            </header>

            <main className="relative max-w-6xl mx-auto px-6 md:px-12 py-32 space-y-48 z-10">

                {/* 1. PROJECT THESIS */}
                <section className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4">
                        <h2 className="text-[10px] uppercase tracking-[0.4em] text-emerald-500/60 mb-6">01 // Thesis</h2>
                        <h3 className="text-3xl font-bold text-white uppercase">Degraded <br />Coordinate.</h3>
                    </div>
                    <div className="lg:col-span-8 space-y-12">
                        <div className="space-y-6">
                            <h4 className="text-lg font-bold text-white/90 uppercase tracking-widest">The Problem</h4>
                            <p className="text-sm leading-relaxed text-white/50">
                                Centralized coordination systems are fundamentally fragile. In crisis zones, maritime corridors, or conflict environments, high interference and intermittent connectivity render hub-and-spoke models non-functional. When the central authority node is unreachable, the operational picture fragments, leading to coordination failure.
                            </p>
                        </div>
                        <div className="p-10 bg-emerald-500/5 border border-emerald-500/20 space-y-6">
                            <h4 className="text-[9px] uppercase tracking-widest font-black text-emerald-500">Hypothesis</h4>
                            <p className="text-xl text-white leading-relaxed italic">
                                "Mesh-based synchronization utilizing priority-state compression and optimized CRDTs enable resilient coordination tools that maintain a shared operational picture even in environments with 90% packet loss."
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. RESEARCH METHODOLOGY */}
                <section className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4">
                        <h2 className="text-[10px] uppercase tracking-[0.4em] text-emerald-500/60 mb-6">02 // Methodology</h2>
                        <h3 className="text-3xl font-bold text-white uppercase">Protocol <br />Stress.</h3>
                    </div>
                    <div className="lg:col-span-8 space-y-16">
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { title: 'Packet Loss Simulation', desc: 'Simulating 50% to 95% random packet loss and high-latency Jitter (2000ms+).' },
                                { title: 'CRDT vs Delta-State', desc: 'Benchmarking convergence time of state-based CRDTs against optimized delta-propagation.' },
                                { title: 'State Compression', desc: 'Heuristic-based pruning of non-critical state updates to minimize payload size.' },
                                { title: 'Conflict Resolution', desc: 'Validating causality tracking using Vector Clocks in decentralized node clusters.' },
                            ].map((item, i) => (
                                <div key={i} className="space-y-2 border-l border-emerald-500/20 pl-6 bg-emerald-500/[0.02] p-4">
                                    <h4 className="text-xs font-bold text-white uppercase tracking-widest">{item.title}</h4>
                                    <p className="text-[11px] text-white/40 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center py-8">
                            <MeshProtocolVisual />
                        </div>

                        <div className="bg-black/80 border border-white/10 p-1">
                            <div className="bg-black p-8 font-mono text-[10px] leading-relaxed text-emerald-500/60 overflow-hidden">
                                <div className="text-white/20 mb-4 border-b border-white/5 pb-2 uppercase tracking-widest">Protocol Snippet // Delta_Compression_Heuristic.go</div>
                                {`func CompressPayload(v VectorClock, state State) Payload {
    // Identify modified fields since last known common ancestor
    diff := state.Compare(v.LastSync)
    
    // Priority filter: Only critical operational keys
    pruned := diff.Filter(PriorityHigh)
    
    // Varint encoding for numerical IDs
    return Encode(pruned.Compress())
}`}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. FINDINGS */}
                <section className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4">
                        <h2 className="text-[10px] uppercase tracking-[0.4em] text-emerald-500/60 mb-6">03 // Findings</h2>
                        <h3 className="text-3xl font-bold text-white uppercase">Observed <br />Metrics.</h3>
                    </div>
                    <div className="lg:col-span-8 space-y-12">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
                            {[
                                { val: '84%', label: 'Payload Reduction', sub: 'Via priority pruning' },
                                { val: '<12ms', label: 'Merge Latency', sub: 'Average state convergence' },
                                { val: '92%+', label: 'Availability', sub: 'In 70% packet-loss zones' },
                            ].map((stat, i) => (
                                <div key={i} className="bg-[#0a0a0a] p-8 space-y-2 text-center">
                                    <div className="text-3xl font-bold text-emerald-500">{stat.val}</div>
                                    <div className="text-[9px] font-black uppercase tracking-widest text-white/80">{stat.label}</div>
                                    <div className="text-[8px] text-white/20 uppercase tracking-widest">{stat.sub}</div>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-8">
                            <p className="text-sm leading-relaxed text-white/50">
                                Mesh architectures consistently outperformed hub-and-spoke topologies under sustained degradation. State compression was most effective in scenarios where 80% of data - such as high-frequency telemetry - could be safely discarded in favor of critical positional and command updates.
                            </p>
                            <div className="p-6 border-l-2 border-emerald-500 bg-emerald-500/5">
                                <p className="text-xs text-white/80 italic leading-relaxed">
                                    "Conflict resolution complexity increases non-linearly with node count. For clusters exceeding 50 nodes, hierarchical sharding of the mesh is required to maintain sub-second state consistency."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. ANALYSIS & APPLICATIONS */}
                <section className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4">
                        <h2 className="text-[10px] uppercase tracking-[0.4em] text-emerald-500/60 mb-6">04 // Applications</h2>
                        <h3 className="text-3xl font-bold text-white uppercase">Operational <br />Targets.</h3>
                    </div>
                    <div className="lg:col-span-8 space-y-16">
                        <div className="grid md:grid-cols-2 gap-12">
                            {[
                                { title: 'Disaster Zones', desc: 'Infrastructure-free coordination for first responders in blackout scenarios.' },
                                { title: 'Maritime Coordination', desc: 'Secure state-sharing between vessels in low-bandwidth satellite zones.' },
                                { title: 'Rural Agri Networks', desc: 'Resilient sensor-sync in remote agricultural clusters with intermittent cellular coverage.' },
                                { title: 'Decentralized NGOs', desc: 'Coordination of personnel and logistics in connectivity-compromised regions.' },
                            ].map((item, i) => (
                                <div key={i} className="space-y-4">
                                    <h5 className="font-bold uppercase text-[10px] tracking-[0.3em] text-white border-b border-white/10 pb-2">{item.title}</h5>
                                    <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="pt-24 text-center space-y-8 border-t border-white/5">
                            <p className="text-white/20 text-[10px] uppercase tracking-[0.5em] font-bold">Protocol Validation Phase: Active</p>
                            <Link href="/partner" className="inline-block px-10 py-5 border border-emerald-500/40 text-emerald-500 hover:bg-emerald-500 hover:text-black font-bold uppercase tracking-widest text-[9px] transition-all">
                                Review Protocol Whitepaper
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            {/* Visual: Node Connection Diagram (minimal) */}
            <div className="fixed bottom-12 right-12 z-0 opacity-20 pointer-events-none hidden xl:block">
                <svg width="200" height="200" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" fill="none" className="text-emerald-500" />
                    <circle cx="100" cy="100" r="1" fill="currentColor" className="text-emerald-500" />
                    <path d="M100 60 V20 M140 100 H180 M100 140 V180 M60 100 H20" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 2" className="text-white/20" />
                    <circle cx="100" cy="20" r="2" fill="currentColor" className="text-emerald-500/40" />
                    <circle cx="180" cy="100" r="2" fill="currentColor" className="text-emerald-500/40" />
                    <circle cx="100" cy="180" r="2" fill="currentColor" className="text-emerald-500/40" />
                    <circle cx="20" cy="100" r="2" fill="currentColor" className="text-emerald-500/40" />
                </svg>
            </div>
        </div>
    )
}

function MeshAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let width = canvas.width = window.innerWidth
        let height = canvas.height = window.innerHeight

        const nodes: any[] = []
        for (let i = 0; i < 40; i++) {
            nodes.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2
            })
        }

        function draw() {
            ctx!.clearRect(0, 0, width, height)
            ctx!.strokeStyle = 'rgba(16, 185, 129, 0.05)'
            ctx!.lineWidth = 0.5

            nodes.forEach((n, i) => {
                n.x += n.vx
                n.y += n.vy
                if (n.x < 0 || n.x > width) n.vx *= -1
                if (n.y < 0 || n.y > height) n.vy *= -1

                for (let j = i + 1; j < nodes.length; j++) {
                    const m = nodes[j]
                    const dist = Math.hypot(n.x - m.x, n.y - m.y)
                    if (dist < 250) {
                        ctx!.beginPath()
                        ctx!.moveTo(n.x, n.y)
                        ctx!.lineTo(m.x, m.y)
                        ctx!.stroke()
                    }
                }
            })
            requestAnimationFrame(draw)
        }
        draw()

        const handleResize = () => {
            width = canvas.width = window.innerWidth
            height = canvas.height = window.innerHeight
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-40" />
}

function MeshProtocolVisual() {
    return (
        <svg width="400" height="150" viewBox="0 0 400 150" fill="none" className="w-full max-w-lg text-emerald-500/40">
            {/* Mesh Nodes */}
            <circle cx="50" cy="75" r="4" fill="currentColor" />
            <circle cx="150" cy="40" r="4" fill="currentColor" />
            <circle cx="150" cy="110" r="4" fill="currentColor" />
            <circle cx="250" cy="75" r="4" fill="currentColor" className="text-emerald-500" />
            <circle cx="350" cy="75" r="4" fill="currentColor" />

            {/* Connections */}
            <line x1="50" y1="75" x2="150" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
            <line x1="50" y1="75" x2="150" y2="110" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
            <line x1="150" y1="40" x2="250" y2="75" stroke="currentColor" strokeWidth="2" />
            <line x1="150" y1="110" x2="250" y2="75" stroke="currentColor" strokeWidth="2" />
            <line x1="250" y1="75" x2="350" y2="75" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />

            {/* Packet Animation */}
            <circle cx="200" cy="57.5" r="2" fill="white">
                <animate attributeName="cx" from="150" to="250" dur="2s" repeatCount="indefinite" />
                <animate attributeName="cy" from="40" to="75" dur="2s" repeatCount="indefinite" />
            </circle>

            <text x="50" y="95" fill="currentColor" fontSize="6" textAnchor="middle" className="font-mono uppercase tracking-widest opacity-40">Node A</text>
            <text x="250" y="95" fill="white" fontSize="6" textAnchor="middle" className="font-mono uppercase tracking-widest font-bold">Sync Node</text>
            <text x="350" y="95" fill="currentColor" fontSize="6" textAnchor="middle" className="font-mono uppercase tracking-widest opacity-40">Node B</text>
        </svg>
    )
}
