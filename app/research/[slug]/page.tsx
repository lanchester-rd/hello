import type { Metadata } from 'next'
import { experiments } from '../../../data/research'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import SectionHeader from '../../../components/SectionHeader'

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return experiments.map((exp) => ({
        slug: exp.slug,
    }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const exp = experiments.find(e => e.slug === slug)
    
    if (!exp) {
        return {
            title: 'Research Not Found - Lanchester R&D',
            description: 'The research article you are looking for could not be found.',
        }
    }

    return {
        title: `${exp.target} | Lanchester R&D Intelligence Research`,
        description: exp.note,
        keywords: ['lanchester research', 'intelligence', exp.focus, 'technical investigation'],
    }
}

export default async function ExperimentPage({ params }: Props) {
    const { slug } = await params
    const exp = experiments.find(e => e.slug === slug)
    if (!exp) notFound()

    return (
        <div className="min-h-screen bg-black pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">
            {/* Visual Overlays */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0 bg-grid" />
                <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-accent/20 to-transparent" />
            </div>

            <main className="max-w-4xl mx-auto relative z-10">
                <div className="space-y-16">
                    <Link href="/research" className="inline-flex items-center gap-2 text-accent/60 hover:text-accent transition-colors group">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M11 6H1M1 6L5 2M1 6L5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="font-mono text-[10px] uppercase tracking-widest font-bold">Return to Intelligence</span>
                    </Link>

                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <span className="analytical-label text-accent">{exp.focus}</span>
                                <span className="h-px w-8 bg-white/10" />
                                <span className="font-mono text-[9px] uppercase text-muted">Status: {exp.status}</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tightest uppercase leading-none">
                                {exp.target}
                            </h1>
                        </div>

                        <div className="p-8 border border-white/5 bg-white/[0.01] backdrop-blur-sm space-y-6">
                            <div className="space-y-2">
                                <h2 className="analytical-label text-white/40">The Hypothesis</h2>
                                <p className="text-xl md:text-2xl font-bold text-white italic">
                                    "{exp.hypothesis}"
                                </p>
                            </div>
                        </div>

                        <div className="space-y-12 pt-8">
                            <div className="space-y-4">
                                <h3 className="analytical-label text-accent">Strategic Intersection</h3>
                                <p className="text-lg text-muted leading-relaxed">
                                    {exp.full_description}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <h3 className="analytical-label text-accent">Technical Stack</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech_stack.map(tech => (
                                            <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 font-mono text-[10px] text-white/70 uppercase tracking-widest">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="analytical-label text-accent">Operational Target</h3>
                                    <p className="text-sm text-muted leading-relaxed">
                                        This research directly informs the structural design of next-generation coordination systems. Data generated in this sprint is shared with relevant technical partners.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-24 border-t border-white/5">
                        <div className="p-12 text-center space-y-6 border border-white/5 bg-accent/[0.02]">
                            <h4 className="analytical-label text-white/40 uppercase">Partner Research</h4>
                            <p className="text-lg text-white/80">Interested in the results of this investigation?</p>
                            <Link href="/partner" className="btn-primary inline-block">
                                Inquire About {exp.target}
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
