import SectionHeader from '../../components/SectionHeader'
import { experiments } from '../../data/research'
import Link from 'next/link'

export default function ResearchPage() {
  return (
    <div className="bg-black min-h-screen pt-40 pb-24 px-6 md:px-12">
      <main className="max-w-7xl mx-auto space-y-20">
        <header className="space-y-8 max-w-4xl">
          <SectionHeader
            label="Research Archive"
            title="Active Investigations"
            description="Applied investigations that feed product decisions, system architecture, and service delivery."
          />
          <h1 className="text-5xl md:text-7xl font-bold tracking-tightest uppercase leading-[0.9]">
            Operational
            <br />
            Intelligence
            <br />
            Research
          </h1>
          <p className="text-lg text-white/70 leading-relaxed border-l-2 border-accent/20 pl-6 max-w-3xl">
            The research stream supports our commercial work in product strategy, systems audits,
            AI workflow design, and custom application development. Each investigation links to a live
            operational question.
          </p>
        </header>

        <section className="border border-white/10 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02]">
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-white/30 w-1/4">Target</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-white/30 w-1/4">Primary Focus</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-white/30">Current Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {experiments.map((exp) => (
                <tr key={exp.slug} className="hover:bg-white/[0.01] transition-colors group">
                  <td className="p-6 align-top">
                    <Link href={'/research/' + exp.slug} className="block group/link">
                      <span className="text-lg font-bold uppercase tracking-tight group-hover/link:text-accent transition-colors">
                        {exp.target}
                      </span>
                      <span className="ml-2 inline-block opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all text-accent">
                        →
                      </span>
                    </Link>
                  </td>
                  <td className="p-6 align-top">
                    <span className="text-xs px-2 py-1 border border-white/10 text-white/40 uppercase tracking-tighter">
                      {exp.focus}
                    </span>
                  </td>
                  <td className="p-6 align-top">
                    <p className="text-sm text-white/50 leading-relaxed max-w-xl">{exp.note}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="grid lg:grid-cols-12 gap-8 border border-white/10 p-10 md:p-12 bg-white/[0.02]">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tightest">Use Research to Guide the Build</h2>
            <p className="text-white/60 leading-relaxed max-w-2xl">
              If you are deciding between strategy, audit, or implementation work, the research archive
              shows how we frame hard technical questions and convert them into operational outcomes.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-wrap gap-3 content-start text-[10px] uppercase tracking-widest font-bold">
            <Link href="/services" className="text-accent hover:text-white transition-colors">Services</Link>
            <Link href="/systems" className="text-white/60 hover:text-accent transition-colors">Case Studies</Link>
            <Link href="/strategy" className="text-white/60 hover:text-accent transition-colors">Methodology</Link>
            <Link href="/partner" className="text-white/60 hover:text-accent transition-colors">Partner</Link>
          </div>
        </section>
      </main>
    </div>
  )
}
