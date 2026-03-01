import type { Metadata } from 'next'
import { projects } from '../../../data/projects'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ProjectCard from '../../../components/ProjectCard'
import SectionHeader from '../../../components/SectionHeader'

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const project = projects.find(p => p.slug === slug)
    
    if (!project) {
        return {
            title: 'System Not Found - Lanchester R&D',
            description: 'The system project you are looking for could not be found.',
        }
    }

    return {
        title: `${project.name} | Lanchester R&D Systems`,
        description: project.one_liner || project.core_problem,
        keywords: ['lanchester systems', project.category, 'product intelligence', 'systems design'],
    }
}

export default async function SystemPage({ params }: Props) {
    const { slug } = await params
    const project = projects.find(p => p.slug === slug)
    if (!project) notFound()

    const currentIndex = projects.findIndex(p => p.slug === slug)
    const nextProject = projects[(currentIndex + 1) % projects.length]

    const mainSections = [
        { id: '01', title: 'Strategic Context', content: project.strategic_context },
        { id: '02', title: 'Competitive Imbalance', content: project.competitive_imbalance, isHighlight: true },
        { id: '03', title: 'System Hypothesis', content: project.system_hypothesis },
        { id: '04', title: 'Process Architecture', isProcess: true },
        { id: '05', title: 'Product Architecture', content: project.product_architecture, isDiagram: true },
        { id: '06', title: 'AI Leverage', content: project.ai_leverage },
        { id: '07', title: 'Outcomes & Learnings', content: project.outcomes_or_learnings, link: project.link },
    ].filter(s => s.isProcess || s.content)

    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">
            {/* Visual Overlays */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0 bg-grid" />
                <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-accent/20 to-transparent" />
            </div>

            <main className="max-w-7xl mx-auto relative z-10">
                <div className="space-y-24">
                    {/* Header: Mission Identification */}
                    <div className="space-y-12">
                        <div className="grid lg:grid-cols-2 gap-16 items-end">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <span className="analytical-label text-accent">{project.category}</span>
                                        <span className="h-px w-8 bg-white/10" />
                                        <div className="flex gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="font-mono text-[8px] uppercase text-muted/60">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <h1 className="text-6xl md:text-8xl font-bold tracking-tightest uppercase leading-[0.85]">
                                        {project.name}
                                    </h1>
                                </div>
                                <p className="text-2xl md:text-3xl text-white/90 leading-relaxed font-bold border-l-4 border-accent pl-8">
                                    {project.one_liner}
                                </p>
                            </div>
                            <div className="aspect-[4/3] w-full bg-background-layer1 border border-white/10 overflow-hidden relative group">
                                <img
                                    src={project.hero_image}
                                    alt={`${project.name} Diagnostic`}
                                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 border border-accent/20 transition-all group-hover:border-accent group-hover:inset-4 pointer-events-none" />
                                <div className="absolute bottom-4 left-6 font-mono text-[9px] text-accent tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                    IMG_REF // {project.slug.toUpperCase()}
                                </div>
                            </div>
                        </div>

                        {/* Critical Problem Interface */}
                        <div className="p-12 md:p-20 bg-background-layer2 border border-white/5 space-y-8 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:text-accent group-hover:opacity-20 transition-all">
                                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 8v4M12 16h.01" />
                                </svg>
                            </div>
                            <div className="space-y-4 relative z-10">
                                <h2 className="analytical-label text-accent">Problem Defined</h2>
                                <p className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight max-w-4xl italic">
                                    "{project.core_problem}"
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mission Documentation */}
                    <div className="grid lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-8 space-y-24">
                            {mainSections.map((section) => (
                                <div key={section.title} className={`space-y-10 group`}>
                                    <div className="flex items-center gap-6">
                                        <span className="font-mono text-[10px] text-accent">{section.id}</span>
                                        <h3 className="text-2xl font-bold uppercase tracking-tightest">{section.title}</h3>
                                        <div className="h-px flex-1 bg-white/5 group-hover:bg-white/10 transition-colors" />
                                    </div>

                                    <div className="pl-10">
                                        {section.isProcess ? (
                                            <div className="space-y-20">
                                                <div className="space-y-4">
                                                    <p className="text-muted font-medium italic">How the system was designed, tested, and refined.</p>
                                                    <div className="space-y-12">
                                                        {project.process_architecture && [
                                                            { key: '01', title: 'DEFINE', data: project.process_architecture.design_sequence.define },
                                                            { key: '02', title: 'MAP', data: project.process_architecture.design_sequence.map },
                                                            { key: '03', title: 'VALIDATE', data: project.process_architecture.design_sequence.validate },
                                                            { key: '04', title: 'EXECUTE', data: project.process_architecture.design_sequence.execute },
                                                            { key: '05', title: 'MEASURE', data: project.process_architecture.design_sequence.measure },
                                                        ].map((step, sIdx) => (
                                                            <div key={step.key} className="relative pl-12 border-l border-white/5 pb-8 group/step last:pb-0">
                                                                <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-accent rounded-full opacity-40 group-hover/step:opacity-100 transition-opacity" />
                                                                <div className="space-y-6">
                                                                    <div className="flex items-baseline gap-4">
                                                                        <span className="text-accent font-mono text-sm">{step.key}</span>
                                                                        <h4 className="text-xl font-bold tracking-tightest uppercase">{step.title}</h4>
                                                                    </div>
                                                                    <div className="grid md:grid-cols-2 gap-12">
                                                                        <div className="space-y-6">
                                                                            <div>
                                                                                <span className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2 block">Objective</span>
                                                                                <p className="text-sm text-white font-medium leading-relaxed">{step.data.objective}</p>
                                                                            </div>
                                                                            <div>
                                                                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2 block">
                                                                                    {step.title === 'EXECUTE' ? 'What We Built' : step.title === 'MEASURE' ? 'Metrics Tracked' : 'What We Did'}
                                                                                </span>
                                                                                <ul className="space-y-1.5">
                                                                                    {step.data.what_we_did.map((item, i) => (
                                                                                        <li key={i} className="text-[13px] text-muted leading-snug">• {item}</li>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>
                                                                            <div>
                                                                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2 block">What Failed</span>
                                                                                <ul className="space-y-1.5">
                                                                                    {step.data.what_failed.map((item, i) => (
                                                                                        <li key={i} className="text-[13px] text-muted/60 leading-snug italic">• {item}</li>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="space-y-6">
                                                                            <div>
                                                                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2 block">What We Learned</span>
                                                                                <ul className="space-y-1.5">
                                                                                    {step.data.what_learned.map((item, i) => (
                                                                                        <li key={i} className="text-[13px] text-muted leading-snug">• {item}</li>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>
                                                                            <div>
                                                                                <span className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2 block">What We Adjusted</span>
                                                                                <ul className="space-y-1.5">
                                                                                    {Array.isArray(step.data.what_adjusted) ? step.data.what_adjusted.map((item, i) => (
                                                                                        <li key={i} className="text-[13px] text-white/90 leading-snug">• {item}</li>
                                                                                    )) : (
                                                                                        <li className="text-[13px] text-white/90 leading-snug">• {step.data.what_adjusted}</li>
                                                                                    )}
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    {/* Step Tokens */}
                                                                    {step.data.tokens && (
                                                                        <div className="absolute bottom-0 right-0 flex gap-1.5 flex-wrap justify-end pointer-events-none pb-2 opacity-60 group-hover/step:opacity-100 transition-opacity">
                                                                            {step.data.tokens.map((token, tIdx) => (
                                                                                <span
                                                                                    key={tIdx}
                                                                                    className={`px-2 py-0.5 font-mono text-[7px] uppercase tracking-[0.1em] border backdrop-blur-sm ${tIdx % 4 === 0 ? 'text-accent border-accent/20 bg-accent/[0.02]' :
                                                                                            tIdx % 4 === 1 ? 'text-blue-400 border-blue-400/20 bg-blue-400/[0.02]' :
                                                                                                tIdx % 4 === 2 ? 'text-amber-400 border-amber-400/20 bg-amber-400/[0.02]' :
                                                                                                    'text-purple-400 border-purple-400/20 bg-purple-400/[0.02]'
                                                                                        }`}
                                                                                >
                                                                                    {token}
                                                                                </span>
                                                                            ))}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Rule Application */}
                                                <div className="space-y-10 pt-16 border-t border-white/5">
                                                    <div className="space-y-2">
                                                        <h4 className="text-xl font-bold uppercase tracking-tightest">Rule Application</h4>
                                                        <p className="text-xs text-muted font-mono uppercase tracking-widest">How doctrine was operationalized.</p>
                                                    </div>
                                                    <div className="grid sm:grid-cols-2 gap-px bg-white/5 border border-white/5">
                                                        {[
                                                            { id: '01_INT', name: 'Intellectual Rigor', data: project.process_architecture?.rule_application.intellectual_rigor },
                                                            { id: '02_TAC', name: 'Tactical Execution', data: project.process_architecture?.rule_application.tactical_execution },
                                                            { id: '03_HUM', name: 'Human Calibration', data: project.process_architecture?.rule_application.human_calibration },
                                                            { id: '04_AI', name: 'Machine Leverage', data: project.process_architecture?.rule_application.machine_leverage },
                                                        ].map((rule) => rule.data && (
                                                            <div key={rule.id} className="bg-background p-8 space-y-6 group/rule">
                                                                <div className="flex justify-between items-start">
                                                                    <h5 className="text-sm font-bold uppercase tracking-tightest text-white group-hover/rule:text-accent transition-colors">{rule.name}</h5>
                                                                    <span className="text-[9px] font-mono text-accent/40 group-hover/rule:text-accent transition-colors">{rule.id}</span>
                                                                </div>
                                                                <div className="space-y-4">
                                                                    <div>
                                                                        <span className="text-[8px] font-bold uppercase tracking-widest text-white/30 mb-2 block">Applied By</span>
                                                                        <ul className="space-y-1">
                                                                            {rule.data.applied_by.map((item, i) => (
                                                                                <li key={i} className="text-[11px] text-muted leading-tight">• {item}</li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                    <div>
                                                                        <span className="text-[8px] font-bold uppercase tracking-widest text-accent/60 mb-1 block">Evidence</span>
                                                                        <p className="text-[11px] text-white/80 font-medium leading-tight group-hover/rule:text-white transition-colors">{rule.data.evidence}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ) : section.isDiagram ? (
                                            <div className="space-y-10">
                                                <p className="text-xl leading-relaxed text-muted font-medium italic">{section.content}</p>
                                                <div className="relative aspect-[16/9] w-full bg-background-layer1 overflow-hidden border border-white/5 p-4 group/img">
                                                    <img
                                                        src={project.cover_image}
                                                        alt={`${project.name} Architecture`}
                                                        className="w-full h-full object-contain grayscale opacity-40 group-hover/img:opacity-70 transition-opacity duration-1000"
                                                    />
                                                    <div className="absolute inset-0 bg-grid opacity-10" />
                                                    <div className="absolute top-4 left-4 analytical-label text-[8px] opacity-40">System Schematic // V-01</div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="space-y-8">
                                                <p className={`text-xl md:text-2xl leading-relaxed ${section.isHighlight ? 'text-white font-bold' : 'text-muted font-medium'}`}>
                                                    {section.content}
                                                </p>
                                                {section.link && (
                                                    <a
                                                        href={section.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn-primary inline-flex items-center gap-4 group/btn px-8"
                                                    >
                                                        <span>Launch System</span>
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover/btn:translate-x-1 transition-transform">
                                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                                        </svg>
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Sidebar Intel */}
                        <aside className="lg:col-span-4 space-y-12 h-fit md:sticky md:top-32">
                            <div className="p-8 border border-white/5 space-y-8 bg-background-layer1/50 backdrop-blur-sm">
                                <h4 className="analytical-label text-accent">Exploration Metrics</h4>
                                <div className="space-y-10">
                                    <div>
                                        <h5 className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-6">Success Criteria</h5>
                                        <ul className="space-y-4">
                                            {project.measures_of_success.map((m, i) => (
                                                <li key={i} className="flex gap-4 items-start group/li">
                                                    <span className="text-[10px] font-mono text-accent/40 mt-1">[{i + 1}]</span>
                                                    <span className="text-sm font-medium text-white/70 group-hover/li:text-white transition-colors">{m}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="pt-8 border-t border-white/5">
                                        <h5 className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-6">Quantifiable Results</h5>
                                        <ul className="space-y-6">
                                            {project.measurable_impact.map((m, i) => (
                                                <li key={i} className="space-y-2">
                                                    <div className="text-2xl font-bold tracking-tightest text-accent">{m.split(' ')[0]}</div>
                                                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/80">{m.split(' ').slice(1).join(' ')}</div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <Link href="/partner" className="btn-primary w-full text-center group">
                                Initiate Collaboration Mission
                            </Link>
                        </aside>
                    </div>

                    {/* Next Mission Teaser */}
                    <div className="pt-24">
                        <SectionHeader label="Intelligence" title="Next Mission" />
                        <div className="mt-12 group p-px bg-white/5 hover:bg-accent/20 transition-all duration-700">
                            <Link href={`/systems/${nextProject.slug}`} className="block relative overflow-hidden bg-background p-12 md:p-20 text-center space-y-8">
                                <div className="relative z-10 space-y-4">
                                    <span className="analytical-label text-accent opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">Deploy Sensor</span>
                                    <h4 className="text-4xl md:text-7xl font-bold uppercase tracking-tightest">{nextProject.name}</h4>
                                    <p className="text-muted uppercase tracking-widest text-[9px] font-mono">Mission Ref // {nextProject.slug.toUpperCase()}</p>
                                </div>
                                <div className="absolute inset-0 grayscale opacity-0 group-hover:opacity-10 transition-opacity duration-1000 flex items-center justify-center">
                                    <img src={nextProject.hero_image} className="w-full h-full object-cover" alt="" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
