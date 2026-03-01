"use client"
import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import SectionHeader from '../../components/SectionHeader'
import Link from 'next/link'

export default function StrategyPage() {
    const rulesRef = useRef<HTMLDivElement>(null)
    const intRef = useRef<HTMLDivElement>(null)
    const tacRef = useRef<HTMLDivElement>(null)
    const humRef = useRef<HTMLDivElement>(null)
    const aiRef = useRef<HTMLDivElement>(null)
    const closeRef = useRef<HTMLDivElement>(null)

    const [unlocked, setUnlocked] = useState({
        INT: false,
        TAC: false,
        HUM: false,
        AI: false,
        CLOSE: false
    })

    // Persist unlock state
    useEffect(() => {
        const saved = localStorage.getItem('lanchester_strategy_unlocked')
        if (saved) {
            try {
                setUnlocked(JSON.parse(saved))
            } catch (e) {
                console.error('Failed to parse strategy state')
            }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('lanchester_strategy_unlocked', JSON.stringify(unlocked))
    }, [unlocked])

    const scrollToRef = (ref: React.RefObject<HTMLDivElement | null>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const handleUnlock = (key: keyof typeof unlocked, nextRef: React.RefObject<HTMLDivElement | null>) => {
        setUnlocked(prev => ({ ...prev, [key]: true }))
        setTimeout(() => scrollToRef(nextRef), 100)
    }

    const startProtocol = () => {
        setUnlocked(prev => ({ ...prev, INT: true }))
        setTimeout(() => scrollToRef(intRef), 100)
    }

    return (
        <div className="bg-transparent text-white selection:bg-zinc-700">
            {/* INTRO SECTION */}
            <main className="relative z-10 pt-48 md:pt-32 pb-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto space-y-32">
                    <SectionHeader
                        label="Doctrine"
                        title="Method."
                        description="The operational framework governing every Lanchester R&D engagement. Five Steps, Four Rules, Free Thinking."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-white/5 border border-white/5">
                        {[
                            { step: '01', title: 'Define', desc: 'Identify friction.' },
                            { step: '02', title: 'Map', desc: 'Visualize the system.' },
                            { step: '03', title: 'Validate', desc: 'Data Driven Design.' },
                            { step: '04', title: 'Execute', desc: 'Build tactical solutions.' },
                            { step: '05', title: 'Measure', desc: 'Calculate impact.' },
                        ].map((item, i) => (
                            <div key={i} className="bg-black p-8 space-y-4 group hover:bg-accent/5 transition-colors relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                                    <span className="font-mono text-4xl">{item.step}</span>
                                </div>
                                <span className="font-mono text-[10px] text-accent/60">{item.step}</span>
                                <h3 className="text-2xl font-bold uppercase tracking-tighter">{item.title}</h3>
                                <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                                <div className="absolute bottom-0 left-0 h-1 bg-accent/20 w-0 group-hover:w-full transition-all duration-500" />
                            </div>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-2 gap-24 items-start">
                        {/* LEFT: QUIZ INTRODUCTION */}
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-zinc-500 uppercase">Input Required</span>
                                    <div className="h-px flex-1 bg-zinc-900" />
                                </div>
                                <p className="text-zinc-400 font-light leading-relaxed text-lg">
                                    Access to the systems archive is gated by the 4 Core Rules of the Lanchester framework. You must validate your understanding of each rule to descend further.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-8 text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-600">
                                <div className="flex flex-col gap-1">
                                    <span className="text-zinc-500">01_INT</span>
                                    <span className="text-zinc-400">Intellectual Rigor</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-zinc-500">02_TAC</span>
                                    <span className="text-zinc-400">Tactical Execution</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-zinc-500">03_HUM</span>
                                    <span className="text-zinc-400">Human Calibration</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-zinc-500">04_AI</span>
                                    <span className="text-zinc-400">Machine Leverage</span>
                                </div>
                            </div>

                            {!unlocked.INT && (
                                <button
                                    onClick={startProtocol}
                                    className="group flex items-center gap-6 p-1 border border-zinc-800 hover:border-accent/40 transition-all bg-zinc-900/20"
                                >
                                    <span className="pl-8 py-5 text-sm font-bold uppercase tracking-[0.5em] text-zinc-400 group-hover:text-white transition-colors">Begin Protocol</span>
                                    <div className="bg-accent/10 group-hover:bg-accent p-5 transition-all">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent group-hover:text-black transition-colors rotate-90">
                                            <path d="M12 2V22M12 22L4 14M12 22L20 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </button>
                            )}
                        </div>

                        {/* RIGHT: MISSION STATEMENT */}
                        <div className="lg:border-l lg:border-zinc-900 lg:pl-24 py-12 space-y-8">
                            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white leading-tight italic">
                                "Product systems exist to create an asymmetric advantage."
                            </h2>
                            <p className="text-zinc-500 text-lg leading-relaxed max-w-xl">
                                By reducing coordination friction and intelligence synthesis time, we enable higher operational tempo. The method is the system.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* THE FOUR RULES EXPERIENCE */}
            <div ref={rulesRef} className="overflow-hidden">
                {unlocked.INT && (
                    <motion.div
                        ref={intRef}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <RuleINT onSolve={() => handleUnlock('TAC', tacRef)} isSolved={unlocked.TAC} />
                    </motion.div>
                )}

                {unlocked.TAC && (
                    <motion.div
                        ref={tacRef}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <RuleTAC onSolve={() => handleUnlock('HUM', humRef)} isSolved={unlocked.HUM} />
                    </motion.div>
                )}

                {unlocked.HUM && (
                    <motion.div
                        ref={humRef}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <RuleHUM onSolve={() => handleUnlock('AI', aiRef)} isSolved={unlocked.AI} />
                    </motion.div>
                )}

                {unlocked.AI && (
                    <motion.div
                        ref={aiRef}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <RuleAI onSolve={() => handleUnlock('CLOSE', closeRef)} isSolved={unlocked.CLOSE} />
                    </motion.div>
                )}

                {unlocked.CLOSE && (
                    <motion.div
                        ref={closeRef}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                    >
                        <Closing />
                    </motion.div>
                )}
            </div>
        </div>
    )
}

function SectionWrapper({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, margin: "-20%" })

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`min-h-screen py-32 px-6 flex flex-col justify-center ${className}`}
        >
            <div className="max-w-5xl mx-auto w-full">
                {children}
            </div>
        </motion.section>
    )
}

function QuizCard({ question, options, correctAnswer, onSolve, isSolved, label }: {
    question: string,
    options: string[],
    correctAnswer: number,
    onSolve: () => void,
    isSolved: boolean,
    label: string
}) {
    const [selected, setSelected] = useState<number | null>(null)
    const [error, setError] = useState(false)

    const handleSelect = (idx: number) => {
        if (isSolved) return
        setSelected(idx)
        if (idx === correctAnswer) {
            onSolve()
            setError(false)
        } else {
            setError(true)
            setTimeout(() => setError(false), 500)
        }
    }

    return (
        <div className={`mt-32 p-6 md:p-12 border transition-all duration-500 ${isSolved ? 'bg-zinc-100 border-zinc-200' : 'bg-white border-white'}`}>
            <div className="space-y-8 max-w-2xl mx-auto">
                <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-zinc-400 uppercase">{label} // Validation Required</span>
                    <div className="h-px flex-1 bg-zinc-200" />
                </div>

                <h4 className="text-xl md:text-2xl font-light text-black">{question}</h4>

                <div className="grid gap-3">
                    {options.map((opt, i) => (
                        <button
                            key={i}
                            onClick={() => handleSelect(i)}
                            disabled={isSolved}
                            className={`p-4 text-left text-xs uppercase tracking-widest border transition-all flex items-center justify-between group
                                ${isSolved && i === correctAnswer ? 'border-black text-black bg-zinc-200' :
                                    isSolved ? 'border-zinc-200 text-zinc-400' :
                                        selected === i && i !== correctAnswer ? 'border-red-600 bg-red-50 text-red-600' :
                                            'border-zinc-200 text-zinc-600 hover:border-black hover:text-black hover:bg-zinc-50'}
                            `}
                        >
                            <span>{opt}</span>
                            {isSolved && i === correctAnswer && (
                                <span className="text-[10px] lowercase text-black/40 italic">verified</span>
                            )}
                        </button>
                    ))}
                </div>

                {error && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-[10px] font-mono text-red-600 uppercase tracking-widest text-center"
                    >
                        Calibration Error. Please re-evaluate approach.
                    </motion.p>
                )}
            </div>
        </div>
    )
}

function RuleINT({ onSolve, isSolved }: { onSolve: () => void, isSolved: boolean }) {
    return (
        <SectionWrapper className="bg-[#09090b]"> {/* zinc-950 */}
            <div className="grid lg:grid-cols-12 gap-12 items-start mb-32">
                <div className="lg:col-span-8 space-y-6">
                    <span className="text-xs tracking-[0.3em] uppercase text-zinc-500 font-bold">RULE_01 // INT</span>
                    <h2 className="text-3xl md:text-6xl font-light">Intellectual Rigor</h2>
                    <p className="text-lg md:text-xl text-zinc-300 max-w-xl">
                        Map the system before building. Identify friction points. Establish defined metrics for success. No assumptions.
                    </p>
                    <div className="w-24 h-px bg-zinc-700" />
                </div>
            </div>

            {/* System Mapping Visualization */}
            <div className="py-24 md:py-32 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 text-center items-stretch font-mono">
                {/* Left Column */}
                <div className="flex flex-col justify-between py-12">
                    {['Actors', 'Incentives', 'Dependencies'].map((item, i) => (
                        <div key={item} className="flex flex-col items-center gap-4">
                            <TooltipItem
                                label={item}
                                text={`Determining ${item.toLowerCase()} in the existing flow.`}
                            />
                            <div className={`h-px w-12 bg-gradient-to-l from-zinc-700 to-transparent ${i === 2 ? 'invisible' : ''}`} />
                        </div>
                    ))}
                </div>

                {/* Central Spine */}
                <div className="flex flex-col items-center gap-6 py-4 order-first md:order-none">
                    <div className="w-px flex-1 bg-gradient-to-b from-transparent via-zinc-800 to-transparent hidden md:block" />
                    <div className="flex flex-row md:flex-col items-center gap-6 md:gap-12 py-8 relative">
                        <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full" />
                        <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 vertical-text font-black z-10">SYSTEM SPINE</span>
                        <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_15px_rgba(163,230,53,0.5)] z-10" />
                    </div>
                    <div className="w-px flex-1 bg-gradient-to-b from-transparent via-zinc-800 to-transparent" />
                </div>

                {/* Right Column */}
                <div className="flex flex-col justify-between py-12">
                    {['Friction', 'Latency', 'Entropy'].map((item, i) => (
                        <div key={item} className="flex flex-col items-center gap-4">
                            <TooltipItem
                                label={item}
                                text={`Analyzing ${item.toLowerCase()} to identify leverage points.`}
                            />
                            <div className={`h-px w-12 bg-gradient-to-r from-zinc-700 to-transparent ${i === 2 ? 'invisible' : ''}`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Metric Anchor */}
            <div className="pt-32 text-center space-y-16">
                <h3 className="text-2xl md:text-4xl font-light text-white italic">"If it cannot be measured, it cannot be improved."</h3>
                <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    {['Synthesis Rate', 'Cognitive Bias %', 'Coordination Delta'].map(m => (
                        <div key={m} className="p-6 border border-zinc-800 text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-500">
                            {m}
                        </div>
                    ))}
                </div>
            </div>

            <QuizCard
                label="INT_PROMPT"
                question="To ensure intellectual rigor and avoid assumptions, what must be established prior to development?"
                options={["Aesthetic Moodboards", "Defined Success Metrics", "Marketing Hierarchy"]}
                correctAnswer={1}
                onSolve={onSolve}
                isSolved={isSolved}
            />
        </SectionWrapper>
    )
}

function RuleTAC({ onSolve, isSolved }: { onSolve: () => void, isSolved: boolean }) {
    const sprintRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sprintRef,
        offset: ["start end", "end start"]
    })
    const progress = useTransform(scrollYProgress, [0.3, 0.7], ["0%", "100%"])

    const [activeMod, setActiveMod] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveMod(prev => (prev + 1) % 4)
        }, 3000)
        return () => clearInterval(timer)
    }, [])

    return (
        <SectionWrapper className="bg-black">
            <div className="text-center mb-48">
                <h3 className="text-3xl md:text-5xl font-light text-zinc-500 italic">"Thinking without deployment is theatre."</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-24 items-center">
                <div className="space-y-8">
                    <span className="text-xs tracking-[0.3em] uppercase text-zinc-500 font-bold">RULE_02 // TAC</span>
                    <h2 className="text-3xl md:text-6xl font-light">Tactical Execution</h2>
                    <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
                        Build fast. Deploy in focused sprints. Generate immediate operational leverage. Every feature must solve a defined problem.
                    </p>
                </div>

                <div className="space-y-4">
                    {['Remove Bottleneck', 'Collapse Workflow', 'Automate Synthesis', 'Accelerate Decision'].map((feature, i) => (
                        <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                            className={`p-6 border transition-all duration-1000 cursor-default relative overflow-hidden group
                                ${activeMod === i
                                    ? 'border-accent bg-accent/[0.03] shadow-[0_0_40px_rgba(163,230,53,0.05)]'
                                    : 'border-zinc-800 bg-zinc-900/10'}
                            `}
                        >
                            {/* ACTIVE SCANNER EFFECT */}
                            {activeMod === i && (
                                <motion.div
                                    initial={{ y: "-100%" }}
                                    animate={{ y: "100%" }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent h-1/2 w-full"
                                />
                            )}

                            <div className="relative z-10 flex flex-col gap-2">
                                <span className={`text-[10px] font-mono tracking-widest transition-colors duration-1000
                                    ${activeMod === i ? 'text-accent' : 'text-zinc-600'}
                                `}>
                                    MOD_0{i + 1} // {activeMod === i ? 'EXECUTING' : 'IDLE'}
                                </span>
                                <span className={`text-sm font-bold uppercase tracking-widest transition-colors duration-1000
                                    ${activeMod === i ? 'text-white' : 'text-zinc-500'}
                                `}>
                                    {feature}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div ref={sprintRef} className="mt-48 space-y-12">
                <div className="relative h-px w-full bg-zinc-800">
                    <motion.div
                        style={{ width: progress }}
                        className="absolute inset-y-0 left-0 bg-white"
                    />
                </div>
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600">
                    {['Sprint 01 // Deploy', 'Sprint 02 // Measure', 'Sprint 03 // Refine', 'Sprint 04 // Scale'].map(s => (
                        <span key={s}>{s}</span>
                    ))}
                </div>
            </div>

            <QuizCard
                label="TAC_PROMPT"
                question="In a tactical execution framework, what is the mandatory requirement for every new feature?"
                options={["Solve a defined problem", "Improve visual aesthetics", "Decrease infrastructure cost"]}
                correctAnswer={0}
                onSolve={onSolve}
                isSolved={isSolved}
            />
        </SectionWrapper>
    )
}

function RuleHUM({ onSolve, isSolved }: { onSolve: () => void, isSolved: boolean }) {
    return (
        <SectionWrapper className="bg-[#18181b]"> {/* zinc-900 */}
            <div className="text-center mb-32 max-w-3xl mx-auto">
                <h3 className="text-2xl md:text-5xl font-light text-zinc-400 italic">"The system fails where the human rejects it."</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-1 bg-zinc-800 border border-zinc-800 mb-32">
                {[
                    { label: 'Decision Branches', text: 'Cognitive overhead during fork-point selection.' },
                    { label: 'Context Switching', text: 'Loss of momentum across disparate workflows.' },
                    { label: 'Memory Retention', text: 'The burden of internalizing complex states.' },
                    { label: 'Emotional Resistance', text: 'Friction between system requirements and user ego.' },
                    { label: 'Trust Threshold', text: 'The tipping point of system reliability vs human doubt.' },
                    { label: 'Identity Conflict', text: 'Mismatch between operator role and system agency.' }
                ].map((item, i) => (
                    <div key={i} className="bg-[#18181b] p-6 md:p-10 space-y-4 hover:bg-zinc-800/50 transition-colors cursor-help group">
                        <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-zinc-200">{item.label}</span>
                        <p className="text-[11px] text-zinc-600 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity">{item.text}</p>
                    </div>
                ))}
            </div>
            <div className="py-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center">
                {[
                    { label: 'Empathy Nodes', color: 'bg-blue-500/20' },
                    { label: 'Decision Logic', color: 'bg-accent/20' },
                    { label: 'Friction Points', color: 'bg-red-500/20' }
                ].map((node, i) => (
                    <motion.div
                        key={node.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.2 }}
                        className={`aspect-square rounded-full flex items-center justify-center p-8 border border-white/5 ${node.color} relative overflow-hidden group`}
                    >
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 text-center">{node.label}</span>
                        <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                    </motion.div>
                ))}
            </div>
            <div className="space-y-12">
                <span className="text-xs tracking-[0.3em] uppercase text-zinc-500 font-bold block text-center">Progressive Disclosure Logic</span>
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-1 p-6 border border-zinc-800 opacity-20 text-[8px] font-mono">
                        {`{ "state": "raw", "data": [0,1,1,0,1,0...], "meta": "uncalibrated_stream" }`}
                    </div>
                    <div className="text-zinc-700">→</div>
                    <div className="flex-1 p-6 border border-zinc-700 opacity-60 text-[10px]">
                        <span className="font-bold">Summary:</span> Operation Alpha. Signal integrity at 84%.
                    </div>
                    <div className="text-zinc-500">→</div>
                    <div className="flex-1 p-10 border border-zinc-400 text-sm font-light text-zinc-100 italic">
                        "Operational tempo is optimal. No intervention required."
                    </div>
                </div>
            </div>

            <QuizCard
                label="HUM_PROMPT"
                question="A perfect technical architecture is considered a failure if which node rejects it?"
                options={["Cloud Infrastructure", "The Human Node", "External API Gateways"]}
                correctAnswer={1}
                onSolve={onSolve}
                isSolved={isSolved}
            />
        </SectionWrapper>
    )
}

function RuleAI({ onSolve, isSolved }: { onSolve: () => void, isSolved: boolean }) {
    return (
        <SectionWrapper className="bg-gradient-to-b from-black to-[#09090b]">
            <div className="flex flex-col items-center text-center space-y-12 mb-48">
                <span className="text-xs tracking-[0.3em] uppercase text-zinc-500 font-bold">RULE_04 // AI</span>
                <h2 className="text-4xl md:text-[8rem] font-light leading-none">Machine leverage.</h2>
                <h3 className="text-xl md:text-4xl text-zinc-600 font-light italic">Intelligence is leverage.</h3>
            </div>

            {/* Signal Flow Layout */}
            <div className="py-24 relative overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
                    {[
                        { label: 'Unstructured Data', color: 'bg-zinc-800' },
                        { label: 'AI Compression', color: 'bg-zinc-500' },
                        { label: 'Structured Insight', color: 'bg-zinc-300' },
                        { label: 'Human Decision', color: 'bg-white' }
                    ].map((node, i) => (
                        <div key={i} className="flex flex-col items-center gap-6 group">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0.2 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: i * 0.3 }}
                                className={`w-3 h-3 rounded-full ${node.color} shadow-[0_0_15px_rgba(255,255,255,0.2)]`}
                            />
                            <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-black text-zinc-600 group-hover:text-zinc-200 transition-colors text-center">{node.label}</span>
                        </div>
                    ))}
                </div>
                {/* Connector lines (simplified background) */}
                <div className="absolute top-[3.35rem] left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent z-0 hidden md:block" />
            </div>

            <div className="pt-48 space-y-24 text-center">
                <h4 className="text-2xl md:text-5xl font-light leading-tight text-white">Intelligence <br />embedded into architecture.</h4>
                <div className="py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { label: 'Token Expenditure', val: '840M+' },
                        { label: 'Unique Prompts', val: '1,420' },
                        { label: 'AI Managed Nodes', val: '24' },
                        { label: 'Operational Failure', val: '<0.4%' }
                    ].map((m, i) => (
                        <div key={m.label} className="p-8 border border-zinc-800 bg-zinc-900/10 space-y-4">
                            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">{m.label}</span>
                            <div className="text-4xl font-bold tracking-tightest text-accent">{m.val}</div>
                        </div>
                    ))}
                </div>
            </div>

            <QuizCard
                label="AI_PROMPT"
                question="In the Lanchester framework, AI is treated as structural leverage instead of what?"
                options={["Automated Copywriting", "Visual Decoration", "Customer Support Chat"]}
                correctAnswer={1}
                onSolve={onSolve}
                isSolved={isSolved}
            />
        </SectionWrapper>
    )
}

function Closing() {
    return (
        <section className="bg-black py-48 px-6 text-center space-y-16">
            <h2 className="text-4xl md:text-6xl font-thin tracking-tightest uppercase text-zinc-400">Systems over surfaces.</h2>
            <Link href="/systems" className="inline-block px-12 py-5 border border-zinc-800 hover:bg-white hover:text-black transition-all font-bold uppercase tracking-[0.3em] text-xs">
                Explore Projects
            </Link>
        </section>
    )
}

function TooltipItem({ label, text }: { label: string, text: string }) {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <div
            className="relative cursor-crosshair pb-2 inline-block mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className="text-xs uppercase tracking-[0.3em] text-zinc-400 group-hover:text-white transition-colors">{label}</span>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-zinc-800 px-4 py-2 text-[10px] text-zinc-300 whitespace-nowrap z-20 pointer-events-none border border-zinc-700"
            >
                {text}
            </motion.div>
        </div>
    )
}
