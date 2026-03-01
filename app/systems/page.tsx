"use client"
import { useState, useEffect } from 'react'
import ProjectCard from '../../components/ProjectCard'
import SectionHeader from '../../components/SectionHeader'
import { projects, SystemCategory } from '../../data/projects'
import Link from 'next/link'
import { motion } from 'framer-motion'

const categories: SystemCategory[] = [
    'Coordination Systems',
    'Operational Intelligence',
    'Market & Asset Optimization',
    'Behavioral & Wellbeing'
]

export default function SystemsPage() {
    const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null)

    useEffect(() => {
        const checkAuth = () => {
            const saved = localStorage.getItem('lanchester_strategy_unlocked')
            if (saved) {
                const state = JSON.parse(saved)
                // Check if all 4 rules and close have been unlocked
                if (state.AI && state.CLOSE) {
                    setIsAuthorized(true)
                    return
                }
            }
            setIsAuthorized(false)
        }
        checkAuth()
    }, [])

    if (isAuthorized === null) return <div className="min-h-screen bg-black" />

    if (!isAuthorized) {
        return (
            <div className="min-h-screen bg-black flex flex-col items-center justify-start md:justify-center p-6 pt-40 md:pt-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-2xl space-y-12"
                >
                    <div className="space-y-4">
                        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-red-500 uppercase flex items-center justify-center gap-3">
                            <span className="w-2 h-2 bg-red-500 animate-pulse rounded-full" />
                            Security Protocol Active
                        </span>
                        <h1 className="text-4xl md:text-6xl font-light tracking-tightest uppercase text-white">Access Denied.</h1>
                    </div>

                    <p className="text-zinc-500 text-lg leading-relaxed font-light">
                        The systems archive requires strategic validation. You must complete the Lanchester Doctrine descent before accessing operational protocols.*
                        <br />
                        <span className="text-xs mt-2 block opacity-60">(*You have to answer 4 questions to see the projects)</span>
                    </p>

                    <div className="pt-8">
                        <Link
                            href="/strategy"
                            className="group relative inline-flex items-center gap-8 p-1 border border-zinc-800 hover:border-zinc-400 transition-all bg-zinc-900/20"
                        >
                            <span className="pl-10 py-5 text-sm font-bold uppercase tracking-[0.5em] text-zinc-400 group-hover:text-white transition-colors">Return to Doctrine</span>
                            <div className="bg-zinc-800 group-hover:bg-red-500 p-5 transition-all">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-zinc-500 group-hover:text-white transition-colors rotate-180">
                                    <path d="M12 2V22M12 22L4 14M12 22L20 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </Link>
                    </div>

                    <div className="pt-24 grid grid-cols-3 gap-8 opacity-20 filter grayscale">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="h-24 border border-zinc-800 bg-grid" />
                        ))}
                    </div>
                </motion.div>
            </div>
        )
    }

    return (
        <div className="bg-background min-h-screen relative">
            {/* Visual Overlays */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-grid opacity-[0.05]" />
                <div className="absolute inset-0 bg-radial-fade" />
            </div>

            <main className="relative z-10 pt-48 md:pt-32 pb-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto space-y-24">
                    <div className="space-y-12">
                        <SectionHeader
                            label="Validated Signals"
                            title="Systems."
                            description="High-stakes problem solving through structural innovation."
                        />

                        <div className="flex flex-wrap gap-3 md:gap-6">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => {
                                        const id = `category-${category.toLowerCase().replace(/\s+/g, '-')}`
                                        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                    }}
                                    className="px-6 py-3 border border-white/5 bg-white/5 hover:bg-accent/10 hover:border-accent/40 transition-all text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 hover:text-accent"
                                >
                                    {category.split(' ')[0]} Systems
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-32">
                        {categories.map((category) => {
                            const categoryProjects = projects.filter(p => p.category === category)
                            if (categoryProjects.length === 0) return null

                            return (
                                <div
                                    key={category}
                                    id={`category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="space-y-12 scroll-mt-32 md:scroll-mt-48"
                                >
                                    <div className="flex items-center gap-6 border-b border-white/5 pb-8">
                                        <div className="w-2 h-2 bg-accent/40 rounded-full" />
                                        <h3 className="text-3xl font-bold tracking-tightest uppercase">{category}</h3>
                                        <div className="flex-1 h-px bg-white/5" />
                                        <span className="font-mono text-[9px] text-accent tracking-widest">
                                            SEC_REF // {category.split(' ')[0].toUpperCase()}
                                        </span>
                                        <span className="font-mono text-[9px] text-muted tracking-widest">
                                            [{categoryProjects.length} NODES]
                                        </span>
                                    </div>

                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 bg-white/5 border border-white/5 p-px">
                                        {categoryProjects.map((project) => (
                                            <div key={project.slug} className="bg-background">
                                                <ProjectCard project={project} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </main>
        </div>
    )
}
