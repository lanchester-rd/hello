"use client"
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'

export default function LearnLaunchpadPage() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })
    const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
    const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.92])

    return (
        <div ref={containerRef} className="min-h-screen bg-[#080807] text-[#d8d4c8] font-sans selection:bg-yellow-400/20 selection:text-yellow-200 overflow-x-hidden">

            {/* Fixed warm grid background */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.06]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#c8a84b_1px,transparent_1px),linear-gradient(to_bottom,#c8a84b_1px,transparent_1px)] bg-[size:80px_80px]" />
            </div>

            {/* HERO */}
            <section className="relative h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden border-b border-white/5">
                <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(202,163,50,0.07)_0%,transparent_65%)]" />
                    <KnowledgeGraph />
                </motion.div>

                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <div className="space-y-12">
                        <Link href="/research" className="inline-flex items-center gap-3 text-white/20 hover:text-yellow-400 transition-all group">
                            <div className="w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-yellow-400 transition-all duration-300" />
                            <span className="font-mono text-[10px] uppercase tracking-[0.4em] font-bold">LT // BUILD-LOG</span>
                        </Link>

                        <div className="grid lg:grid-cols-12 gap-12 items-end">
                            <div className="lg:col-span-8 space-y-6">
                                <motion.span
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="font-mono text-[10px] uppercase tracking-[0.5em] text-yellow-400/60 block"
                                >
                                    Product Engineering // Post-Mortem
                                </motion.span>
                                <motion.h1
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-6xl md:text-[9rem] font-bold tracking-tightest uppercase leading-[0.85] text-white"
                                >
                                    The LEARN<br />
                                    <span className="text-yellow-400/90">Launchpad.</span>
                                </motion.h1>
                            </div>
                            <div className="lg:col-span-4 pb-4">
                                <p className="text-lg md:text-xl text-white/40 font-medium leading-relaxed border-l-2 border-yellow-400/30 pl-8 italic">
                                    "One identity. One trust layer. Every product, one front door. Getting there took three rewrites."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero stats sidebar */}
                <div className="absolute right-12 bottom-12 hidden md:flex flex-col gap-6 border-r border-white/10 pr-8">
                    {[
                        { label: 'Critical Failures', val: '10' },
                        { label: 'Architecture Rewrites', val: '03' },
                        { label: 'System Stable', val: '01' },
                    ].map(({ label, val }) => (
                        <div key={label} className="text-right space-y-0.5">
                            <div className="font-mono text-[8px] uppercase tracking-widest text-white/20">{label}</div>
                            <div className="text-2xl font-bold text-yellow-400/70 font-mono">{val}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* MAIN CONTENT */}
            <main className="relative max-w-7xl mx-auto px-6 md:px-12 py-32 space-y-48 z-10">

                {/* 01 // ORIGIN */}
                <section className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4 self-start sticky top-32">
                        <h2 className="font-mono text-[10px] uppercase tracking-[0.5em] text-yellow-400/60 mb-4">01 // Origin</h2>
                        <h3 className="text-3xl font-bold uppercase tracking-tightest text-white leading-tight">Why We<br />Built It.</h3>
                    </div>
                    <div className="lg:col-span-8 space-y-10">
                        <p className="text-xl text-white/60 leading-relaxed font-light">
                            LEARN — the Lanchester Early Access Research Network — is a centralised platform that lets users discover, follow, and access early-stage apps and experiments from a single identity: their LEARNid. It acts as a controlled gateway where access to products is tied to user intent, enabling structured onboarding, feedback collection, and usage tracking across Lanchester's entire product ecosystem.
                        </p>
                        <p className="text-lg text-white/40 leading-relaxed">
                            For builders, LEARN provides tools to manage waitlists, referrals, access permissions, and direct communication with early users. The goal: turn fragmented product launches into a unified, data-driven ecosystem for testing, iteration, and growth. A single identity. A single trust layer. Every product, one front door.
                        </p>
                        <div className="p-10 bg-yellow-400/5 border border-yellow-400/20 space-y-4">
                            <h4 className="font-mono text-[9px] uppercase tracking-widest text-yellow-400">The Core Hypothesis</h4>
                            <p className="text-2xl font-bold text-white leading-tight italic">
                                "A unified identity layer across all early-access products eliminates fragmented onboarding, creates a single trust boundary, and gives builders meaningful signal on user intent from day one."
                            </p>
                        </div>
                        <p className="text-lg text-white/40 leading-relaxed">
                            The hypothesis was right. The execution, the first few times, was not.
                        </p>
                        {/* Stat grid */}
                        <div className="grid grid-cols-3 gap-px bg-white/5 border border-white/5">
                            {[
                                { val: '10', label: 'Failures Documented' },
                                { val: '3', label: 'Architecture Rewrites' },
                                { val: '1', label: 'Stable System' },
                            ].map(({ val, label }) => (
                                <div key={label} className="bg-[#0a0908] p-8 text-center space-y-1">
                                    <div className="text-4xl font-bold text-yellow-400">{val}</div>
                                    <div className="font-mono text-[9px] uppercase tracking-widest text-white/30">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 02 // WHAT BROKE */}
                <section className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4 self-start sticky top-32 space-y-6">
                        <h2 className="font-mono text-[10px] uppercase tracking-[0.5em] text-yellow-400/60">02 // What Broke</h2>
                        <h3 className="text-3xl font-bold uppercase tracking-tightest text-white leading-tight">Ten<br />Failures,<br />Three<br />Themes.</h3>
                        <p className="text-sm text-white/30 leading-relaxed font-mono">
                            Most of these weren't bugs. They were system-level concerns treated as UI problems.
                        </p>
                    </div>
                    <div className="lg:col-span-8 space-y-20">

                        {/* Theme A: Identity & Trust */}
                        <div className="space-y-6">
                            <ThemeDivider label="Theme A // Identity & Trust" />
                            <FailureCard
                                n="01"
                                title="We split auth and legal across two apps."
                                body="We initially built critical user journeys — auth in one Vite app, legal acceptance in a separate Next.js app — treating them as independent concerns. This technically worked. But users were asked to agree in one place and authenticate in another. There was no way to enforce compliance or maintain a coherent mental model. It felt stitched together because it was."
                                lesson="Anything tied to identity or compliance must live inside a single system boundary."
                            />
                            <FailureCard
                                n="02"
                                title="Our auth flow was visually correct but logically wrong."
                                body="We placed a legal acceptance checkbox on the sign-in page. Clean, simple, obvious. Except OAuth and magic-link flows completely bypassed that UI layer. Users could authenticate without ever seeing — let alone interacting with — the checkbox. The system looked compliant. It wasn't."
                                lesson="Auth enforcement must happen post-auth at the backend. UI state is not a contract."
                            />
                            <FailureCard
                                n="03"
                                title="We had no concept of versioned truth."
                                body="Terms and Privacy were static pages. Not system data. So we couldn't answer basic compliance questions: Did this user accept the current version? When did they accept it? What happens when terms change? Nothing re-triggered consent. Nothing was auditable. Nothing was legally defensible."
                                lesson="Policy documents must be versioned, queryable, and enforced like data — not content."
                            />
                            <FailureCard
                                n="04"
                                title="The backend had no schema for legal acceptance."
                                body="There was no data model for legal state at all. The backend couldn't distinguish between a user who had never accepted, accepted an old version, or accepted the current one. You can't enforce state you can't represent. The feature didn't exist — it only appeared to."
                                lesson="If the data model doesn't exist, neither does the feature."
                            />
                        </div>

                        {/* Theme B: Infrastructure */}
                        <div className="space-y-6">
                            <ThemeDivider label="Theme B // Infrastructure" />
                            <FailureCard
                                n="05"
                                title="Simple routing was a system-level security risk."
                                body="We added vanity routes like /iru-assistant alongside /products/:slug, treating routing as a UI decision. Routing order and catch-all patterns caused valid pages to silently misresolve. Reserved paths like /admin and /api were at risk. Debugging pointed in the wrong direction because the failure mode was non-obvious."
                                lesson="Routing is core infrastructure with security implications — not a UI configuration."
                            />
                            <FailureCard
                                n="06"
                                title="Implicit behavior drove critical product outcomes."
                                body="We allowed fallback redirect logic (beta_cta_url) to determine launch behavior when a product wasn't explicitly configured. Products could silently redirect users to external sites without anyone making an intentional decision. We optimised for convenience and created a trust and security liability."
                                lesson="Critical behavior — especially redirects — must be explicit, not inferred from defaults."
                            />
                            <FailureCard
                                n="07"
                                title="Deployment inconsistencies created ghost bugs."
                                body="Different domains were serving different frontend bundles. One URL worked perfectly. Another showed bugs we'd already fixed. Same codebase, same deploy. It looked like mysterious regressions, slowed debugging massively, and eroded confidence in every fix we shipped."
                                lesson="Multi-domain setups require strict deployment consistency and post-deploy verification."
                            />
                        </div>

                        {/* Theme C: Integration */}
                        <div className="space-y-6">
                            <ThemeDivider label="Theme C // Integration" />
                            <FailureCard
                                n="08"
                                title="A single failed request collapsed the entire page."
                                body="The /products/:slug page used Promise.all to fetch data. One failed sub-request — from a completely healthy API — caused the whole page to throw 'not found'. We spent time debugging routing when the issue was fault tolerance in our aggregation layer."
                                lesson="UI aggregation should use Promise.allSettled — partial failure should degrade gracefully, not collapse."
                            />
                            <FailureCard
                                n="09"
                                title="Email delivery was a completely separate system problem."
                                body="After fixing all the app logic, emails still failed. The system was generating links, dispatching requests, logging success — and still not delivering to users. The failures were upstream: provider reputation, SPF/DKIM/DMARC configuration, recipient-side filtering. You can't reproduce this locally. The feedback loop only exists in production."
                                lesson="Email is not a feature — it's an external system with its own failure modes and reputation lifecycle."
                            />
                            <FailureCard
                                n="10"
                                title="Verification required real-world conditions, not just code."
                                body="Final validation depended on OAuth providers, real inboxes, and real user acceptance states (stale vs. current terms). We couldn't fully test this in isolation — not from lack of discipline, but because some systems are inherently integration-heavy and only surface their failure modes under live conditions."
                                lesson="Some systems require production-like thinking. Code correctness is necessary but not sufficient."
                            />
                        </div>
                    </div>
                </section>

                {/* 03 // THE REFRAME */}
                <section className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4 self-start sticky top-32">
                        <h2 className="font-mono text-[10px] uppercase tracking-[0.5em] text-yellow-400/60 mb-4">03 // The Reframe</h2>
                        <h3 className="text-3xl font-bold uppercase tracking-tightest text-white leading-tight">The Gold<br />Insight.</h3>
                    </div>
                    <div className="lg:col-span-8 space-y-12">
                        <div className="p-10 bg-yellow-400/5 border border-yellow-400/30 space-y-6">
                            <h4 className="font-mono text-[9px] uppercase tracking-widest text-yellow-400">Pattern Recognition</h4>
                            <p className="text-2xl font-bold text-white leading-tight">
                                "Most of the failures weren't bugs — they were cases where we treated system-level concerns as UI or configuration problems."
                            </p>
                        </div>
                        <p className="text-lg text-white/50 leading-relaxed">
                            Auth isn't a form. Legal acceptance isn't a checkbox. Routing isn't a component. Email delivery isn't a function call. Each of these is a system with state, enforcement surfaces, failure modes, and external dependencies. We had to fail at each one to see it clearly.
                        </p>
                        <p className="text-lg text-white/50 leading-relaxed">
                            The moment we reframed them — as stateful, enforceable, backend-driven systems that the UI merely surfaces — the architecture became stable. The failures stopped stacking. Problems that had felt random became predictable because we understood their actual nature.
                        </p>
                        <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5">
                            {[
                                { before: 'Checkbox on sign-in page', after: 'Post-auth gate on every backend request', label: 'Legal' },
                                { before: 'Static /terms page', after: 'Versioned Firestore document with timestamps', label: 'Terms' },
                                { before: 'UI component routing', after: 'Server-enforced paths + reserved-path allow-list', label: 'Routing' },
                            ].map(({ before, after, label }) => (
                                <div key={label} className="bg-[#0a0908] p-8 space-y-4">
                                    <div className="font-mono text-[9px] uppercase tracking-widest text-yellow-400/60">{label}</div>
                                    <div className="space-y-2">
                                        <div className="text-xs text-white/20 line-through">{before}</div>
                                        <div className="text-sm text-white/80 font-medium">{after}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 04 // WHAT SHIPPED */}
                <section className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4 self-start sticky top-32">
                        <h2 className="font-mono text-[10px] uppercase tracking-[0.5em] text-yellow-400/60 mb-4">04 // What Shipped</h2>
                        <h3 className="text-3xl font-bold uppercase tracking-tightest text-white leading-tight">The<br />System<br />Today.</h3>
                    </div>
                    <div className="lg:col-span-8 space-y-12">
                        <p className="text-lg text-white/50 leading-relaxed">
                            LEARN is live. Users sign in once with their LEARNid — via magic link or OAuth — and gain access to the products they've been granted permission for. Legal acceptance is enforced at the backend, version-tracked in Firestore, and re-triggered when terms change. Products are canonical data records with configurable access rules, not hardcoded routes.
                        </p>
                        <p className="text-lg text-white/50 leading-relaxed">
                            Builders can manage waitlists, control access per product, track usage and cohort behaviour, and communicate directly with early users — all from a single admin layer. Routing is server-enforced with a reserved-path allow-list. Email delivery runs over a warmed domain with SPF/DKIM/DMARC in place. Each system layer is independently enforceable — not wired through the UI.
                        </p>
                        <div className="space-y-4">
                            <h4 className="font-mono text-[9px] uppercase tracking-widest text-white/30">Tech Stack</h4>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    'Vite + React',
                                    'TypeScript',
                                    'Node.js + Express',
                                    'Firebase Auth',
                                    'Firestore',
                                    'Google Cloud Run',
                                    'Firebase Hosting',
                                    'Resend (Email)',
                                    'Framer Motion',
                                ].map(t => (
                                    <span key={t} className="px-3 py-1.5 border border-yellow-400/20 text-yellow-400/60 font-mono text-[10px] uppercase tracking-wider">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="pt-8 border-t border-white/5">
                            <Link
                                href="https://lean-launchpad-rd.web.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-4 group"
                            >
                                <span className="px-10 py-5 bg-yellow-400 text-black font-bold uppercase tracking-widest text-[11px] group-hover:bg-white transition-colors">
                                    View LEARN Launchpad →
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FOOTER CTA */}
                <section className="pt-24 border-t border-white/5 text-center space-y-8">
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tightest text-white leading-none">
                        Join the<br /><span className="text-yellow-400">network.</span>
                    </h2>
                    <p className="text-white/30 max-w-xl mx-auto text-base leading-relaxed">
                        LEARN gives builders a structured way to launch early, gather real signal, and grow a user base that's invested from day one. If that sounds useful, let's talk.
                    </p>
                    <div className="pt-8">
                        <Link href="/partner" className="inline-block px-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-[10px] hover:bg-yellow-400 transition-colors">
                            Work With Us
                        </Link>
                    </div>
                </section>

            </main>
        </div>
    )
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function ThemeDivider({ label }: { label: string }) {
    return (
        <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-yellow-400/15" />
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-yellow-400/50 shrink-0">{label}</span>
            <div className="h-px flex-1 bg-yellow-400/15" />
        </div>
    )
}

interface FailureCardProps {
    n: string
    title: string
    body: string
    lesson: string
}

function FailureCard({ n, title, body, lesson }: FailureCardProps) {
    return (
        <div className="p-8 border border-white/5 bg-white/[0.01] space-y-4 hover:border-yellow-400/20 hover:bg-yellow-400/[0.02] transition-all duration-500 group">
            <div className="flex items-start gap-6">
                <span className="font-mono text-[10px] text-yellow-400/30 pt-1 shrink-0 w-8">{n} //</span>
                <div className="space-y-3 flex-1">
                    <h5 className="text-base font-bold text-white/80 uppercase tracking-wide group-hover:text-white transition-colors">
                        {title}
                    </h5>
                    <p className="text-sm text-white/40 leading-relaxed">{body}</p>
                    <div className="border-l-2 border-yellow-400/40 pl-4 pt-1">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-yellow-400/50">▸ Lesson: </span>
                        <span className="font-mono text-[11px] text-yellow-400/80">{lesson}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function KnowledgeGraph() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let width = canvas.width = window.innerWidth
        let height = canvas.height = window.innerHeight
        let animId: number

        // Nodes: mix of orbiters and drifters
        const nodes: {
            x: number; y: number
            vx: number; vy: number
            size: number
            orbitR: number; orbitSpeed: number; orbitAngle: number
            cx: number; cy: number
            useOrbit: boolean
        }[] = []

        for (let i = 0; i < 55; i++) {
            const useOrbit = Math.random() > 0.4
            const cx = width * 0.5 + (Math.random() - 0.5) * width * 0.35
            const cy = height * 0.5 + (Math.random() - 0.5) * height * 0.35
            const orbitR = 30 + Math.random() * 180
            const orbitAngle = Math.random() * Math.PI * 2
            nodes.push({
                x: useOrbit ? cx + Math.cos(orbitAngle) * orbitR : Math.random() * width,
                y: useOrbit ? cy + Math.sin(orbitAngle) * orbitR : Math.random() * height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                size: Math.random() > 0.85 ? 2.5 : 1,
                orbitR,
                orbitSpeed: (0.0003 + Math.random() * 0.0004) * (Math.random() > 0.5 ? 1 : -1),
                orbitAngle,
                cx,
                cy,
                useOrbit,
            })
        }

        const CONNECTION_DIST = 180

        function draw() {
            ctx!.clearRect(0, 0, width, height)

            // Update positions
            nodes.forEach(node => {
                if (node.useOrbit) {
                    node.orbitAngle += node.orbitSpeed
                    node.x = node.cx + Math.cos(node.orbitAngle) * node.orbitR
                    node.y = node.cy + Math.sin(node.orbitAngle) * node.orbitR
                } else {
                    node.x += node.vx
                    node.y += node.vy
                    if (node.x < 0 || node.x > width) node.vx *= -1
                    if (node.y < 0 || node.y > height) node.vy *= -1
                }
            })

            // Draw connections
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x
                    const dy = nodes[i].y - nodes[j].y
                    const dist = Math.sqrt(dx * dx + dy * dy)
                    if (dist < CONNECTION_DIST) {
                        ctx!.beginPath()
                        ctx!.strokeStyle = `rgba(202,163,50,${(1 - dist / CONNECTION_DIST) * 0.18})`
                        ctx!.lineWidth = 0.5
                        ctx!.moveTo(nodes[i].x, nodes[i].y)
                        ctx!.lineTo(nodes[j].x, nodes[j].y)
                        ctx!.stroke()
                    }
                }
            }

            // Draw nodes
            nodes.forEach(node => {
                ctx!.beginPath()
                ctx!.arc(node.x, node.y, node.size, 0, Math.PI * 2)
                ctx!.fillStyle = 'rgba(202,163,50,0.45)'
                ctx!.fill()
            })

            animId = requestAnimationFrame(draw)
        }

        draw()

        const onResize = () => {
            width = canvas.width = window.innerWidth
            height = canvas.height = window.innerHeight
        }
        window.addEventListener('resize', onResize)
        return () => {
            cancelAnimationFrame(animId)
            window.removeEventListener('resize', onResize)
        }
    }, [])

    return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-60" />
}
