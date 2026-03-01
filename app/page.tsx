"use client"
import Hero from '../components/Hero'
import LogoMarquee from '../components/LogoMarquee'
import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'
import PartnerCTA from '../components/PartnerCTA'
import Link from 'next/link'
import { projects, Project } from '../data/projects'
import { useEffect, useState } from 'react'

export default function Home() {
  const [randomSystems, setRandomSystems] = useState<Project[]>([])

  useEffect(() => {
    // Shuffle and pick 3 projects
    const shuffled = [...projects].sort(() => 0.5 - Math.random())
    setRandomSystems(shuffled.slice(0, 3))
  }, [])

  return (
    <>
      <Hero />
      <LogoMarquee />

      {/* 2. THE THESIS: Exploration Before Execution */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5 relative bg-background-layer1/30">
        <div className="max-w-7xl mx-auto space-y-20">
          <SectionHeader
            label="Methodology"
            title="Exploration Before Execution."
            description="We map before we move. Truth before capital."
          />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/5 border border-white/5">
            {[
              { step: '01', title: 'Define', desc: 'Identify friction.' },
              { step: '02', title: 'Map', desc: 'Visualize the system.' },
              { step: '03', title: 'Validate', desc: 'Data Driven Design.' },
              { step: '04', title: 'Execute', desc: 'Build tactical solutions.' },
              { step: '05', title: 'Measure', desc: 'Calculate impact.' },
            ].map((item, i) => (
              <div key={i} className="bg-background p-8 space-y-4 group hover:bg-accent/5 transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                  <span className="font-mono text-4xl">{item.step}</span>
                </div>
                <span className="font-mono text-[10px] text-accent/60">{item.step}</span>
                <h3 className="text-2xl font-bold uppercase tracking-tighter">{item.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                <div className="absolute bottom-0 left-0 h-1 bg-accent/20 w-0 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FOUR PILLARS */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto space-y-16">
          <SectionHeader
            label="Mission Focus"
            title="Structural Capabilities"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { id: 'INT', title: 'Intellectual', label: 'Tactical Clarity', body: 'Reduce complexity. Map decision nodes.' },
              { id: 'TAC', title: 'Tactical', label: 'Focused Execution', body: 'Build high-utility systems. Fast.' },
              { id: 'HUM', title: 'Human', label: 'Customer Empathy', body: 'Solve for the human node.' },
              { id: 'AI', title: 'AI-Forward', label: 'Intelligent Systems', body: 'Multiply operational intelligence.' },
            ].map((pillar) => (
              <div key={pillar.id} className="lab-card group">
                <div className="flex justify-between items-start mb-8">
                  <span className="font-mono text-[10px] text-accent/40 group-hover:text-accent transition-colors">[{pillar.id}]</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/20 group-hover:bg-accent pulse-node" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tightest mb-2">{pillar.title}</h3>
                <span className="analytical-label text-[9px] mb-4 block">{pillar.label}</span>
                <p className="text-sm text-muted leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MEASURED OUTCOMES (Proof, Not Promises) */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5 bg-background-layer2/20">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <SectionHeader
              label="Selected Work"
              title="The Record."
              description="Empirical results from 13+ systems."
            />
            <Link href="/systems" className="btn-ghost flex items-center gap-3">
              <span>View Archive</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M11 6L7 2M11 6L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 bg-white/5 border border-white/5 p-px">
            {randomSystems.map((project) => (
              <div key={project.slug} className="bg-background">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Aggregate Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-white/5">
            {[
              { label: 'Litigation Reduction', value: '40%', sub: 'iMediate App' },
              { label: 'Resource Efficiency', value: '22%', sub: 'ShootAtlas' },
              { label: 'Survey Throughput', value: '3x', sub: 'Roofdraft' },
              { label: 'Service Velocity', value: '30%', sub: 'IRU-Assistant' },
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <span className="analytical-label text-[8px]">{stat.label}</span>
                <div className="text-3xl font-bold tracking-tightest text-accent">{stat.value}</div>
                <div className="font-mono text-[8px] uppercase text-muted/40">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW WE WORK (Radar / Iteration Loop) */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <SectionHeader
                label="Process"
                title="Continuous Calibration."
                description="Focused sprints. Data-informed moves."
              />

              <ul className="space-y-6">
                {[
                  'Rapid validation.',
                  'Stakeholder alignment.',
                  'Human feedback loops.',
                  'Measured baselines.'
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="w-1.5 h-1.5 bg-accent mt-2 pulse-node" />
                    <span className="text-white/80 font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-8">
                <Link href="/partner" className="inline-flex items-center gap-4 group">
                  <span className="analytical-label group-hover:text-accent transition-colors">Initiate Mission</span>
                  <div className="w-8 h-px bg-white/20 group-hover:w-12 transition-all transition-colors group-hover:bg-accent" />
                </Link>
              </div>
            </div>

            <div className="relative group">
              {/* Radar Visual */}
              <div className="aspect-square w-full max-w-md mx-auto relative border border-white/10 rounded-full flex items-center justify-center">
                <div className="absolute inset-0 bg-accent/5 rounded-full animate-pulse" />
                <div className="absolute inset-[10%] border border-white/10 rounded-full" />
                <div className="absolute inset-[30%] border border-accent/20 rounded-full" />

                {/* Rotating Sweeper */}
                <div className="absolute inset-0 origin-center animate-[spin_10s_linear_infinite] pointer-events-none">
                  <div className="w-1/2 h-px bg-gradient-to-r from-transparent to-accent absolute top-1/2 left-1/2 shadow-[0_0_15px_rgba(163,230,53,0.5)]" />
                </div>

                <div className="z-10 text-center space-y-1">
                  <div className="font-mono text-[9px] text-accent/50 uppercase">Loop Position</div>
                  <div className="text-3xl font-bold tracking-tightest uppercase">Sprint 0{randomSystems.length}</div>
                  <div className="font-mono text-[8px] text-muted">Awaiting Verification...</div>
                </div>

                {/* Nodes */}
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full pulse-node" />
                <div className="absolute bottom-[20%] right-[15%] w-2 h-2 bg-accent rounded-full pulse-node" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-[40%] left-[5%] w-1 h-1 bg-white/40 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnerCTA />
    </>
  )
}
