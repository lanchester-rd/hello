import SectionHeader from '../../components/SectionHeader'
import { experiments } from '../../data/research'
import Link from 'next/link'

export default function ResearchPage() {
    return (
        <div className="bg-black min-h-screen">
            <main className="pt-32 pb-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto space-y-24">
                    <SectionHeader
                        label="Experiments"
                        title="Intelligence."
                        description="Ongoing technical investigations into the future of operational systems."
                    />

                    <div className="border border-white/10 overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/[0.02]">
                                    <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-white/30 w-1/4">Target</th>
                                    <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-white/30 w-1/4">Primary Focus</th>
                                    <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-white/30">Current Notes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {experiments.map((exp, idx) => (
                                    <tr key={idx} className="hover:bg-white/[0.01] transition-colors group">
                                        <td className="p-6 align-top">
                                            <Link href={`/research/${exp.slug}`} className="block group/link">
                                                <span className="text-lg font-bold uppercase tracking-tight group-hover/link:text-accent transition-colors">
                                                    {exp.target}
                                                </span>
                                                <span className="ml-2 inline-block opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all text-accent">
                                                    →
                                                </span>
                                            </Link>
                                        </td>
                                        <td className="p-6 align-top">
                                            <span className="text-xs px-2 py-1 border border-white/10 text-white/40 uppercase tracking-tighter">{exp.focus}</span>
                                        </td>
                                        <td className="p-6 align-top">
                                            <p className="text-sm text-white/50 leading-relaxed max-w-xl">{exp.note}</p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-surface border border-surface-border p-12 text-center space-y-4">
                        <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-white/20">Collaborations</h3>
                        <p className="text-lg text-white/60">We occasionally open research cohorts to academic and technical partners. Inquiry via partner channel.</p>
                    </div>
                </div>
            </main>
        </div>
    )
}
