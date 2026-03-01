'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import SectionHeader from '../../components/SectionHeader'
import { motion, AnimatePresence } from 'framer-motion'
import PartnerCTA from '../../components/PartnerCTA'

const sprintDays = [
  {
    day: 1,
    id: 'INT',
    title: 'Intellectual Clarity',
    subtitle: 'Define the Real Problem',
    objective: 'Remove noise. Identify the leverage point.',
    focus: 'Thinking before building.',
    morning: [
      'Stakeholder interrogation',
      'Assumption mapping',
      'Surface-level vs structural problem separation',
      'Define what “winning” actually means (measurable)'
    ],
    afternoon: [
      'Systems mapping (actors, flows, incentives)',
      'Constraint identification',
      'Risk scan',
      'Draft Strategic Hypothesis v1'
    ],
    deliverables: [
      'One sharp problem statement',
      'Clear success metric',
      'Mapped system overview',
      'Ranked constraint list'
    ],
    principle: 'No solution until the problem survives scrutiny.'
  },
  {
    day: 2,
    id: 'TAC',
    title: 'Tactical Structure',
    subtitle: 'Design the Intervention',
    objective: 'Turn insight into controlled action.',
    focus: 'Strategy translated into mechanics.',
    morning: [
      'Intervention architecture',
      'Identify highest-leverage move',
      'Competitive / environmental positioning',
      'Define scope (what we will NOT build)'
    ],
    afternoon: [
      'System flow design',
      'Decision logic mapping',
      'Feature prioritization',
      'KPI selection'
    ],
    deliverables: [
      'Strategic Intervention Blueprint',
      'System Flow Diagram',
      'KPI Dashboard Draft',
      'Clear build scope'
    ],
    principle: 'Build only what shifts the system.'
  },
  {
    day: 3,
    id: 'HUM',
    title: 'Human Integration',
    subtitle: 'Align With Reality',
    objective: 'Ensure the system works for real humans.',
    focus: 'Friction, emotion, adoption.',
    morning: [
      'User journey pressure test',
      'Emotional stress-point mapping',
      'Adoption barrier analysis',
      'Incentive alignment review'
    ],
    afternoon: [
      'Refine flows for clarity + trust',
      'Simplify interaction logic',
      'Language calibration (Clear, Calm, Connected)',
      'Internal team alignment session'
    ],
    deliverables: [
      'Human Friction Map',
      'Refined UX Flow',
      'Adoption Strategy',
      'Internal Execution Brief'
    ],
    principle: 'Systems fail where humans resist.'
  },
  {
    day: 4,
    id: 'AI',
    title: 'AI-Forward Augmentation',
    subtitle: 'Multiply Output, Reduce Friction',
    objective: 'Integrate intelligence where it compounds value.',
    focus: 'Augmentation, not automation theatre.',
    morning: [
      'Identify AI leverage points',
      'Decision-support vs automation distinction',
      'Data availability assessment',
      'Ethical & operational risk review'
    ],
    afternoon: [
      'Prompt architecture design',
      'AI workflow integration mapping',
      'Human-in-the-loop logic',
      'Efficiency modeling'
    ],
    deliverables: [
      'AI Leverage Map',
      'Prompt / Logic Architecture',
      'AI + Human Flow Diagram',
      'Efficiency Projection'
    ],
    principle: 'AI amplifies good systems. It exposes weak ones.'
  },
  {
    day: 5,
    id: 'OPS',
    title: 'Synthesis & Deployment',
    subtitle: 'Make It Operational',
    objective: 'Convert design into action.',
    focus: 'Execution without drift.',
    morning: [
      'Consolidate Sprint Outputs',
      'Define 30-60-90 Day Execution Plan',
      'Risk Mitigation Layer',
      'Resource Mapping'
    ],
    afternoon: [
      'Build Phase 1 Execution Roadmap',
      'Accountability Structure',
      'KPI Tracking Setup',
      'Final Strategic Review'
    ],
    deliverables: [
      'Sprint Dossier',
      'Operational Roadmap',
      'Ownership Map',
      'First 30-Day Action Plan'
    ],
    principle: 'Strategy only exists if it ships.'
  }
]

export default function AboutPage() {
  const [activeDay, setActiveDay] = useState(0)

  return (
    <div className="bg-transparent min-h-screen pt-48 md:pt-32 pb-24 relative overflow-hidden">

      <main className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="space-y-32">
          {/* Header */}
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-8 space-y-12">
              <SectionHeader
                label="Sprint Module"
                title="The Lab."
                description="5 day service to help you leave with a functional app. Applied Strategy & Product Systems Sprint."
              />

              <div className="grid sm:grid-cols-3 gap-8 pt-12 border-t border-white/5">
                {[
                  { label: 'Intensity', value: 'High', desc: '6–8 Hours Per Day' },
                  { label: 'Duration', value: '5 Days', desc: 'Concept to Operation' },
                  { label: 'Focus', value: 'Functional', desc: 'Systems Over Surfaces' }
                ].map((stat, i) => (
                  <div key={i} className="space-y-2">
                    <span className="analytical-label text-accent">{stat.label}</span>
                    <div className="text-2xl font-bold tracking-tightest uppercase">{stat.value}</div>
                    <p className="text-[10px] text-muted font-mono">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 p-8 bg-background-layer1 border border-white/5 space-y-6">
              <h3 className="analytical-label text-white/40">The Lab Ethos</h3>
              <div className="space-y-4">
                {[
                  { t: 'Structured but sharp', d: 'No aimless exploration.' },
                  { t: 'Tactical but human', d: 'Calculated for reality.' },
                  { t: 'Strategic but applied', d: 'Truth exists in the code.' }
                ].map((item, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-sm font-bold uppercase tracking-tightest">{item.t}</div>
                    <div className="text-[10px] text-muted font-mono">{item.d}</div>
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-white/5">
                <p className="text-xs text-muted leading-relaxed italic">
                  "No fluff. No theatre. Just measurable movement."
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Navigator */}
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-8">
              <div className="space-y-2">
                <span className="analytical-label text-accent">Protocol Roadmap</span>
                <h2 className="text-4xl font-bold tracking-tightest uppercase">Sprint Architecture</h2>
              </div>
              <div className="flex items-center gap-6">
                <span className="font-mono text-[10px] uppercase text-muted tracking-[0.2em]">Day:</span>
                <div className="flex gap-2">
                  {sprintDays.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveDay(i)}
                      className={`w-12 h-12 flex items-center justify-center font-mono text-sm transition-all border ${activeDay === i
                        ? 'bg-accent text-black border-accent'
                        : 'bg-background-layer1 text-muted border-white/10 hover:border-accent/40 hover:text-white'
                        }`}
                    >
                      0{i + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-16">
              {/* Left: Content */}
              <div className="lg:col-span-8 space-y-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDay}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-12"
                  >
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xs text-accent">DAY 0{activeDay + 1} // {sprintDays[activeDay].id}</span>
                        <div className="h-px flex-grow bg-white/5" />
                      </div>
                      <h3 className="text-5xl font-bold tracking-tightest uppercase leading-[0.9]">
                        {sprintDays[activeDay].title}.<br />
                        <span className="text-white/40">{sprintDays[activeDay].subtitle}</span>
                      </h3>
                      <p className="text-xl text-muted font-medium max-w-2xl">
                        {sprintDays[activeDay].objective}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-8">
                        <div className="space-y-4">
                          <span className="analytical-label text-accent/60">09:00 - 13:00 // Morning Protocol</span>
                          <ul className="space-y-3">
                            {sprintDays[activeDay].morning.map((item, i) => (
                              <li key={i} className="flex gap-3 items-start text-sm text-white/80">
                                <span className="text-accent mt-1">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <span className="analytical-label text-accent/60">14:00 - 18:00 // Tactical Shift</span>
                          <ul className="space-y-3">
                            {sprintDays[activeDay].afternoon.map((item, i) => (
                              <li key={i} className="flex gap-3 items-start text-sm text-white/80">
                                <span className="text-accent mt-1">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-8 p-8 bg-background-layer2/50 border border-white/5">
                        <div className="space-y-4">
                          <span className="analytical-label text-white/30">Day 0{activeDay + 1} Deliverables</span>
                          <ul className="space-y-3">
                            {sprintDays[activeDay].deliverables.map((item, i) => (
                              <li key={i} className="flex gap-3 items-center text-xs font-bold uppercase tracking-widest text-white/60">
                                <div className="w-1.5 h-px bg-accent/50" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-8 border-t border-white/5 space-y-2">
                          <span className="analytical-label text-accent">Applied Principle</span>
                          <p className="text-sm font-medium italic text-white/90 leading-relaxed">
                            "{sprintDays[activeDay].principle}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right: Embedded Systems */}
              <div className="lg:col-span-4 space-y-8">
                <div className="p-8 bg-background-layer1 border border-white/5 space-y-8">
                  <div className="space-y-2">
                    <h4 className="analytical-label text-accent">The Four Rules</h4>
                    <p className="text-[10px] text-muted font-mono uppercase tracking-widest">Embedded Throughout</p>
                  </div>
                  <div className="space-y-4">
                    {[
                      { t: 'Intellectual Rigor', id: 'INT', displayId: '01_INT' },
                      { t: 'Tactical Execution', id: 'TAC', displayId: '02_TAC' },
                      { t: 'Human Calibration', id: 'HUM', displayId: '03_HUM' },
                      { t: 'Machine Leverage', id: 'AI', displayId: '04_AI' }
                    ].map((rule, i) => (
                      <Link
                        key={i}
                        href={`/founder?doc=${rule.id}`}
                        className="flex justify-between items-center py-3 border-b border-white/5 last:border-0 hover:bg-white/[0.02] -mx-2 px-2 transition-colors group/rule"
                      >
                        <span className="text-xs font-bold uppercase tracking-tightest group-hover/rule:text-accent transition-colors">{rule.t}</span>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[9px] text-muted">{rule.displayId}</span>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent opacity-0 group-hover/rule:opacity-100 transition-all -translate-x-1 group-hover/rule:translate-x-0">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="p-8 bg-accent/[0.03] border border-accent/20 space-y-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 animate-pulse">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h4 className="analytical-label text-accent">Free Thinking Layer</h4>
                    <p className="text-[10px] text-muted font-mono uppercase tracking-widest">60-Min Daily Window</p>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed font-medium">
                    Purpose: To prevent incremental thinking from dominating strategic possibility.
                  </p>
                  <ul className="space-y-2">
                    {['No feasibility limits', 'No budget constraints', 'No precedent bias'].map((item, i) => (
                      <li key={i} className="text-[9px] font-bold uppercase tracking-widest text-accent/80 flex items-center gap-2">
                        <div className="w-1 h-1 bg-accent rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Outcomes Section */}
          <section className="bg-background-layer2/50 border border-white/5 p-12 md:p-20 relative overflow-hidden group/outcomes">
            <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none group-hover/outcomes:opacity-[0.05] transition-opacity">
              <span className="text-[120px] font-bold font-mono tracking-tightest leading-none">EXIT_V1</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
              <div className="space-y-8">
                <div className="space-y-3">
                  <span className="analytical-label text-accent">Mission Result</span>
                  <h2 className="text-5xl font-bold tracking-tightest uppercase md:leading-[0.85]">
                    Outcome of <br />The Lab.
                  </h2>
                </div>
                <p className="text-xl text-muted font-medium">
                  After 5 days, you don’t leave with a deck, a vibe, or a brainstorm. You leave with an operating system.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { t: 'Structured Intervention', id: '01' },
                  { t: 'System Design', id: '02' },
                  { t: 'AI-Enhanced Workflow', id: '03' },
                  { t: 'Execution Plan', id: '04' }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-background border border-white/5 hover:border-accent/40 transition-colors space-y-4 group/item">
                    <span className="font-mono text-[10px] text-accent/40 group-hover/item:text-accent transition-colors">[{item.id}]</span>
                    <h4 className="text-sm font-bold uppercase tracking-widest leading-snug">{item.t}</h4>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <PartnerCTA />
        </div>
      </main>
    </div>
  )
}
