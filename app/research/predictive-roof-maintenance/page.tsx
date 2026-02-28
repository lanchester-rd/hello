"use client"
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'

export default function PredictiveRoofMaintenancePage() {
    const [activeSection, setActiveSection] = useState('01-define')
    const sectionsRef = useRef<HTMLDivElement>(null)

    // Scroll spy logic
    useEffect(() => {
        const handleScroll = () => {
            if (!sectionsRef.current) return
            const sections = sectionsRef.current.querySelectorAll('[data-section]')
            let current = '01-define'

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect()
                if (rect.top <= 350) {
                    current = section.getAttribute('data-section') || current
                }
            })
            setActiveSection(current)
        }

        const scrollContainer = document.getElementById('scroll-container')
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll)
            handleScroll() // Init check
            return () => scrollContainer.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const steps = [
        { id: '01-define', title: 'Define the Prediction' },
        { id: '02-data-model', title: 'Canonical Data Model' },
        { id: '03-labeled-events', title: 'Expand Labeled Structure' },
        { id: '04-baseline', title: 'The Stronger Baseline' },
        { id: '05-multimodal', title: 'Advanced Multimodal' },
        { id: '06-evaluate', title: 'Evaluate Properly' },
        { id: '07-deploy', title: 'Deployment UX Strategy' },
        { id: '08-automate', title: 'Industrial Ingestion' },
        { id: '09-scale', title: 'Portfolio Strategy' },
        { id: '10-finance', title: 'Finance & Capital Modeling' }
    ]

    return (
        <div className="flex flex-col lg:flex-row h-screen bg-[#020508] text-slate-300 font-sans selection:bg-cyan-900 selection:text-cyan-100 overflow-hidden">
            
            {/* FIXED LEFT PANE: Sticky Navigation / HUD */}
            <div className="w-full lg:w-[400px] xl:w-[450px] flex-shrink-0 h-auto lg:h-screen p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-cyan-900/30 flex flex-col justify-between relative bg-[#020508] z-20 shadow-[10px_0_30px_rgba(0,0,0,0.5)]">
                {/* HUD Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#083344_1px,transparent_1px),linear-gradient(to_bottom,#083344_1px,transparent_1px)] bg-[size:24px_24px] opacity-10 pointer-events-none" />

                <div className="space-y-12 relative z-10">
                    <div className="space-y-4 pt-4">
                        <div className="inline-flex items-center gap-3 px-3 py-1 bg-cyan-950/30 border border-cyan-900/50 font-mono text-[9px] text-cyan-400 uppercase tracking-widest shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                            Instruction Manual // 0X-ROOF
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-[0.9] text-white pt-2">
                            Predictive
                            <br />
                            <span className="text-cyan-500">Maintenance.</span>
                        </h1>
                    </div>
                </div>

                {/* Vertical Scroll Spy Menu */}
                <nav className="hidden lg:flex flex-col gap-5 relative z-10 mt-auto mb-auto py-8">
                     <span className="font-mono text-[9px] uppercase tracking-widest text-cyan-600 mb-2">Build Sequence</span>
                     <div className="absolute left-0 top-16 bottom-0 w-px bg-cyan-900/30" />
                     {steps.map((step, idx) => {
                         const isActive = activeSection === step.id;
                         return (
                             <a 
                                key={step.id} 
                                href={`#${step.id}`}
                                className={`group relative pl-6 flex flex-col font-mono text-[11px] transition-all duration-300 py-1 ${isActive ? 'text-cyan-400' : 'text-slate-600 hover:text-cyan-600'}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const element = document.getElementById(step.id);
                                    const container = document.getElementById('scroll-container');
                                    if (element && container) {
                                        const top = element.offsetTop;
                                        container.scrollTo({ top: top - 50, behavior: 'smooth' });
                                    }
                                }}
                             >
                                 <span className={`absolute left-[-2px] inset-y-0 w-1 h-1 rounded-full transition-all duration-300 mt-2 ${isActive ? 'bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)] scale-150' : 'bg-cyan-900/50'}`} />
                                 <span className="font-bold tracking-widest uppercase mb-0.5">
                                    {(idx + 1).toString().padStart(2, '0')}.
                                 </span>
                                 <span className={`tracking-wider ${isActive ? 'opacity-100 block' : 'opacity-0 hidden'} transition-all duration-300 leading-tight`}>{step.title}</span>
                             </a>
                         )
                     })}
                </nav>

                <div className="hidden lg:block relative z-10 pt-8 border-t border-cyan-900/30">
                    <div className="flex justify-between text-[9px] font-mono uppercase tracking-widest text-cyan-600">
                        <span>Systems Engine</span>
                        <span className="text-cyan-400 animate-pulse font-bold">Active</span>
                    </div>
                </div>
            </div>

            {/* SCROLLABLE RIGHT PANE: INSTRUCTION MANUAL */}
            <div id="scroll-container" className="flex-1 lg:h-screen overflow-y-auto bg-[#04080D] relative scroll-smooth selection:bg-cyan-900 pb-96">
                <div ref={sectionsRef} className="max-w-5xl mx-auto p-6 md:p-12 lg:p-24 space-y-96">
                    
                    {/* STEP 01 */}
                    <div data-section="01-define" id="01-define" className="relative font-medium pt-12">
                        <ManualHeader num="1" title="Define the prediction" quote="“If you predict everything, you predict nothing.”" />
                        
                        <div className="grid md:grid-cols-2 gap-16 text-slate-400 text-lg leading-relaxed mt-16">
                            <div className="space-y-12">
                                <p className="text-cyan-400 uppercase tracking-widest text-sm font-bold font-mono">Start With: Time until next reactive job.</p>
                                <p className="text-white text-2xl font-bold">But now clarify: What is a “reactive job”?</p>
                                <p>Define it precisely:</p>
                                
                                <ul className="space-y-4 font-mono text-sm uppercase tracking-wide bg-[#060B12] p-8 border-l border-cyan-900">
                                    <li className="flex gap-4"><span className="text-cyan-500">{"->"}</span> Emergency leak callout</li>
                                    <li className="flex gap-4"><span className="text-cyan-500">{"->"}</span> Water ingress complaint</li>
                                    <li className="flex gap-4"><span className="text-cyan-500">{"->"}</span> Internal damage escalation</li>
                                    <li className="flex gap-4"><span className="text-cyan-500">{"->"}</span> Insurance-triggered event</li>
                                    <li className="flex gap-4"><span className="text-cyan-500">{"->"}</span> Safety hazard (loose slate, falling debris)</li>
                                </ul>
                            </div>

                            <div className="flex flex-col justify-center border-l border-red-900/30 pl-16">
                                <p className="text-red-400 font-mono text-xs uppercase tracking-widest mb-6">If you don't define this clearly?</p>
                                <div className="space-y-4 text-xl text-slate-300">
                                    <p>Your labels will be <span className="text-white font-bold">inconsistent.</span></p>
                                    <p>Your model will be <span className="text-white font-bold">confused.</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* STEP 02 */}
                    <div data-section="02-data-model" id="02-data-model" className="relative font-medium pt-12">
                        <ManualHeader num="2" title="Build a canonical data model" subtitle="Now we expand it properly." />
                        
                        <div className="space-y-32 mt-16">
                            {/* Core Hierarchy */}
                            <div className="font-mono text-sm p-12 bg-[#020406] border border-cyan-900/50 shadow-[inset_0_4px_24px_rgba(0,0,0,0.6)]">
                                <span className="text-cyan-600 block mb-12 border-b border-cyan-900/30 pb-4 uppercase tracking-widest w-max">Core Hierarchy (Locked)</span>
                                <div className="space-y-4 max-w-xl mx-auto">
                                    <div className="text-white/40">{"ManagingCompany"}</div>
                                    <div className="pl-6 text-white/50">{"↳ Location"}</div>
                                    <div className="pl-12 text-white/70">{"↳ Building"}</div>
                                    <div className="pl-16 text-cyan-300 font-bold bg-cyan-950/30 py-4 px-6 border-l-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)] flex justify-between">
                                        <span>{"↳ RoofElement"}</span>
                                    </div>
                                    <div className="pl-20 text-cyan-500/80 my-2">{"↳ Sub-Element"} <span className="text-[#020406] bg-cyan-900 text-[9px] px-2 py-1 ml-4 relative -top-1">(optional/powerful)</span></div>
                                    <div className="pl-24 text-white/80">{"↳ Project"}</div>
                                    <div className="pl-28 text-white/60 flex items-center gap-4"><span className="w-1.5 h-1.5 bg-slate-600" />{"Observation"}</div>
                                    <div className="pl-28 text-white/60 flex items-center gap-4"><span className="w-1.5 h-1.5 bg-slate-600" />{"Intervention"}</div>
                                    <div className="pl-28 text-white/60 flex items-center gap-4"><span className="w-1.5 h-1.5 bg-slate-600" />{"Outcome"}</div>
                                </div>
                            </div>
                            
                            {/* 🔥 Building Level */}
                            <div className="grid md:grid-cols-2 gap-16 border-t border-cyan-900/20 pt-16">
                                <div>
                                    <div className="inline-flex items-center gap-2 text-orange-500 font-mono text-xs uppercase tracking-widest mb-8 border border-orange-900/30 px-3 py-1 bg-orange-950/10">🔥 Critical Data Engine</div>
                                    <h4 className="text-2xl font-bold text-white mb-8">Building-Level Decay Signals</h4>
                                    <ul className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm text-slate-400 font-mono bg-[#060B12] p-8 border border-white/5">
                                        <li>Construction year</li>
                                        <li>Major refurb year</li>
                                        <li>Structural material</li>
                                        <li>Roof pitch angle</li>
                                        <li>Building height</li>
                                        <li>Surrounding height</li>
                                        <li>Exposure (Urban vs Coastal)</li>
                                        <li>Pollution index</li>
                                        <li>Heritage constraints</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col justify-center space-y-4">
                                    <h5 className="font-mono text-xs text-cyan-500 uppercase tracking-widest">Why?</h5>
                                    <p className="text-xl text-slate-300 leading-relaxed">Buildings decay differently based on environment and structure. <span className="text-cyan-400 font-bold block mt-4">This is slow-moving but powerful signal.</span></p>
                                </div>
                            </div>

                            {/* 🔥 Element Level */}
                            <div className="grid md:grid-cols-2 gap-16 border-t border-cyan-900/20 pt-16">
                                <div>
                                    <h4 className="text-2xl font-bold text-white mb-8">Roof Element-Level Signals</h4>
                                    <ul className="space-y-4 text-sm text-slate-400 font-mono bg-[#060B12] p-8 border-l-2 border-indigo-500">
                                        <li>Material type (natural slate, EPDM, lead)</li>
                                        <li>Install date & known lifespan</li>
                                        <li>Warranty length</li>
                                        <li>Repair frequency per element</li>
                                        <li>Last repair method (patch vs renewal)</li>
                                        <li>Flashing type & thickness</li>
                                        <li>Joint type (welded, bonded, mechanical)</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col justify-center space-y-4">
                                    <h5 className="font-mono text-xs text-indigo-400 uppercase tracking-widest">Why?</h5>
                                    <p className="text-xl text-slate-300 leading-relaxed">Decay is material-specific. Lead behaves differently than membrane. <span className="text-indigo-400 font-bold block mt-4">Patches behave differently than replacements.</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* STEP 03 */}
                    <div data-section="03-labeled-events" id="03-labeled-events" className="relative font-medium pt-12">
                        <ManualHeader num="3" title="Expand the Labeled Event" subtitle="High-Value Signal Extraction" />
                        
                        <div className="space-y-24 mt-16">
                            
                            <div className="text-center font-mono text-[11px] md:text-sm text-cyan-400 uppercase tracking-widest bg-cyan-950/10 p-8 border border-cyan-900/50 leading-loose">
                                <span className="text-slate-500">Your event row becomes:</span>
                                <br/><br/>
                                ( Date | RoofElement | ConditionSeverityScore | MoistureExposureIndex | WhatWasSeen | WhatWasDone | MaterialUsed | Cost | AccessType | WeatherAtTime | Outcome | DaysUntilNextEvent )
                            </div>

                            {/* Massive Signals Grid */}
                            <div className="grid lg:grid-cols-2 gap-x-16 gap-y-24">
                                
                                <SignalBlock 
                                    title="A) Weather History" 
                                    tag="Massive Signal"
                                    color="cyan"
                                    metrics={['Rainfall in last 30/90/365D', 'Freeze-thaw cycles', 'Wind gust exposure', 'Storm proximity', 'Temp volatility']}
                                    reason="Roofs fail under stress. Stress = weather × material age. Without weather? You’re predicting blind."
                                />

                                <SignalBlock 
                                    title="B) Water Flow & Drainage" 
                                    tag="LiDAR / Physics"
                                    color="blue"
                                    metrics={['Roof slope gradient', 'Drainage path length', 'Low-point accumulation', 'Gutter fall angle', 'Downpipe count', 'Overflow history']}
                                    reason="Water pooling predicts membrane failure. Blocked drainage predicts leak frequency. Physics > guesswork."
                                />

                                <SignalBlock 
                                    title="C) Access Complexity" 
                                    tag="Operational Friction"
                                    color="orange"
                                    metrics={['Scaffold required?', 'Council notice required?', 'Neighbor access?', 'Traffic management?', 'Rope access only?']}
                                    reason="Access delays repairs. Delayed repairs increase failure risk. Operational friction drives decay escalation."
                                />

                                <SignalBlock 
                                    title="D) Maintenance Behavior" 
                                    tag="Culture Tracking"
                                    color="purple"
                                    metrics={['Avg inspection frequency', 'Planned vs reactive ratio', 'Scope expansion freq', '% of jobs reworked', 'Contractor consistency']}
                                    reason="Maintenance culture affects failure rate. Some portfolios fail because of physics. Some fail because of neglect."
                                />

                                <SignalBlock 
                                    title="E) Defect Severity" 
                                    tag="Gradient Scoring"
                                    color="red"
                                    metrics={['1 = cosmetic', '3 = early failure', '5 = active leak risk', '7 = temporary fix', '10 = structural compromise']}
                                    reason="Models predict better when they understand gradient of decay. Binary leak/no-leak is crude."
                                />
                                
                            </div>
                        </div>
                    </div>

                    {/* STEP 04 */}
                    <div data-section="04-baseline" id="04-baseline" className="relative font-medium pt-12">
                        <ManualHeader num="4" title="The Stronger Baseline" subtitle="Hazard Function Modeling" />
                        
                        <div className="space-y-16 mt-16 text-slate-400">
                            <p className="text-xl">Your baseline now includes complex multi-variable interactions:</p>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-[#060B12] p-8 border-t-2 border-cyan-800">
                                    <h5 className="font-mono text-xs uppercase tracking-widest text-white mb-6">Static Arrays</h5>
                                    <ul className="space-y-3 font-mono text-xs">
                                        <li>+ Roof material age</li>
                                        <li>+ Environmental exposure</li>
                                        <li>+ Building geometry</li>
                                        <li>+ Known lifespan vs age ratio</li>
                                    </ul>
                                </div>
                                <div className="bg-[#060B12] p-8 border-t-2 border-cyan-600">
                                    <h5 className="font-mono text-xs uppercase tracking-widest text-white mb-6">Dynamic Loads</h5>
                                    <ul className="space-y-3 font-mono text-xs">
                                        <li>+ Weather load index</li>
                                        <li>+ Maintenance frequency</li>
                                        <li>+ Defect severity trend</li>
                                        <li>+ Repair type history</li>
                                    </ul>
                                </div>
                                <div className="bg-[#060B12] p-8 border-t-2 border-cyan-400">
                                    <h5 className="font-mono text-xs uppercase tracking-widest text-white mb-6">Operational Friction</h5>
                                    <ul className="space-y-3 font-mono text-xs">
                                        <li>+ Access complexity</li>
                                        <li>+ Contractor patterns</li>
                                        <li>+ Delay between inspect and intervention</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="p-12 border border-cyan-500/50 bg-cyan-950/20 text-center mt-12 space-y-6">
                                <p className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest">This becomes a hazard function model.</p>
                                <p className="text-white md:text-xl font-mono">Risk = f<span className="text-slate-500">(</span><span className="text-cyan-300">material_age <span className="text-slate-600 px-2 font-sans">×</span> weather_stress <span className="text-slate-600 px-2 font-sans">×</span> repair_history <span className="text-slate-600 px-2 font-sans">×</span> drainage_physics <span className="text-slate-600 px-2 font-sans">×</span> maintenance_behavior</span><span className="text-slate-500">)</span></p>
                                <p className="text-xl text-cyan-400 font-bold uppercase tracking-wide mt-8 border-t border-cyan-900/50 pt-8 inline-block">Now you’re modeling decay, not just job frequency.</p>
                            </div>
                        </div>
                    </div>

                    {/* STEP 05 */}
                    <div data-section="05-multimodal" id="05-multimodal" className="relative font-medium pt-12">
                        <ManualHeader num="5" title="Advanced Multimodal Signals" />
                        
                        <div className="space-y-32 mt-16">
                            
                            {/* A */}
                            <div className="grid lg:grid-cols-5 gap-16 items-center">
                                <div className="lg:col-span-2 flex flex-col items-center justify-center p-12 bg-[#060B12] border border-cyan-900/30 text-cyan-400 font-mono space-y-6">
                                    <span>"Holding for now"</span>
                                    <span>"Couldn't access"</span>
                                    <span>"Customer declined"</span>
                                    <span className="text-white">"Temporary patch"</span>
                                </div>
                                <div className="lg:col-span-3 space-y-6">
                                    <h4 className="text-3xl font-bold text-white uppercase tracking-tight">Transcript Decay Indicators</h4>
                                    <p className="text-xl text-slate-400 leading-relaxed">These phrases are gold. They predict future failure better than images.</p>
                                </div>
                            </div>
                            
                            {/* B */}
                            <div className="grid lg:grid-cols-5 gap-16 items-center">
                                <div className="lg:col-span-3 space-y-6 order-2 lg:order-1">
                                    <h4 className="text-3xl font-bold text-white uppercase tracking-tight">Photo-Derived Time Decay</h4>
                                    <p className="text-xl text-slate-400 leading-relaxed">Decay has direction. You can model acceleration.</p>
                                </div>
                                <div className="lg:col-span-2 flex flex-col p-12 bg-[#060B12] border-l-4 border-indigo-500 font-mono text-sm space-y-4 text-indigo-200 order-1 lg:order-2">
                                    <div className="flex justify-between items-end border-b border-indigo-900/30 pb-2"><span>Crack length over time</span> <span className="text-[10px] text-indigo-500">Δt</span></div>
                                    <div className="flex justify-between items-end border-b border-indigo-900/30 pb-2"><span>Growth progression</span> <span className="text-[10px] text-indigo-500">Δt</span></div>
                                    <div className="flex justify-between items-end border-b border-indigo-900/30 pb-2"><span>Rust bloom expansion</span> <span className="text-[10px] text-indigo-500">Δt</span></div>
                                    <div className="flex justify-between items-end pb-2"><span>Membrane discoloration</span> <span className="text-[10px] text-indigo-500">Δt</span></div>
                                </div>
                            </div>

                            {/* C */}
                            <div className="grid lg:grid-cols-5 gap-16 items-center pt-8 border-t border-white/5">
                                <div className="lg:col-span-2 flex flex-col p-12 bg-[#060B12] border-r-4 border-purple-500 font-mono text-sm space-y-4 text-purple-200">
                                    <div>{">"} Sagging progression</div>
                                    <div>{">"} Deflection change</div>
                                    <div>{">"} Drainage pooling growth</div>
                                    <div>{">"} Flashing lift displacement</div>
                                </div>
                                <div className="lg:col-span-3 space-y-6">
                                    <h4 className="text-3xl font-bold text-white uppercase tracking-tight">3D Temporal Geometry Tracking</h4>
                                    <p className="text-xl text-slate-400 leading-relaxed">If geometry shifts year over year? You’re detecting structural fatigue.</p>
                                    <p className="text-purple-400 font-mono text-xs uppercase tracking-widest pt-4">{"//"} That’s enterprise-level predictive intelligence.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* STEP 06 */}
                    <div data-section="06-evaluate" id="06-evaluate" className="relative font-medium pt-12">
                        <ManualHeader num="6" title="Evaluate Properly" quote="“Accuracy is a vanity metric.”" />

                        <div className="space-y-16 mt-16">
                            <p className="text-2xl text-slate-500 font-bold max-w-2xl line-through decoration-red-500/50 decoration-4">
                                "How accurate is the model AUC / F1 loss curve?"
                            </p>
                            
                            <h4 className="text-3xl text-white font-bold tracking-tight pb-8">Start asking:</h4>
                            
                            <div className="grid gap-6">
                                <div className="p-8 border border-cyan-900 bg-[#060B12] flex items-center gap-8 group hover:border-cyan-500 transition-colors">
                                    <span className="text-4xl font-light text-cyan-800 font-mono">01</span>
                                    <p className="text-2xl text-slate-300">Did we reduce emergency callouts per building per year?</p>
                                </div>
                                <div className="p-8 border border-cyan-900 bg-[#060B12] flex items-center gap-8 group hover:border-cyan-500 transition-colors">
                                    <span className="text-4xl font-light text-cyan-800 font-mono">02</span>
                                    <p className="text-2xl text-slate-300">Did we increase the planned-to-reactive ratio?</p>
                                </div>
                                <div className="p-8 border border-cyan-900 bg-[#060B12] flex items-center gap-8 group hover:border-cyan-500 transition-colors">
                                    <span className="text-4xl font-light text-cyan-800 font-mono">03</span>
                                    <p className="text-2xl text-slate-300">Did average repair cost per building drop?</p>
                                </div>
                                <div className="p-8 border border-cyan-900 bg-[#060B12] flex items-center gap-8 group hover:border-cyan-500 transition-colors">
                                    <span className="text-4xl font-light text-cyan-800 font-mono">04</span>
                                    <p className="text-2xl text-slate-300">Did variance in annual maintenance stabilize?</p>
                                </div>
                            </div>
                            
                            <div className="pt-12 flex items-center gap-8">
                                <div className="h-px w-24 bg-cyan-500" />
                                <div className="text-xl text-cyan-400 font-mono uppercase tracking-widest text-center">
                                    Reduced volatility. Predictability. Budget smoothing.<br/>
                                    <span className="text-white mt-4 block">That’s executive-level value.</span>
                                </div>
                                <div className="h-px w-24 bg-cyan-500" />
                            </div>
                        </div>
                    </div>

                    {/* STEP 07 */}
                    <div data-section="07-deploy" id="07-deploy" className="relative font-medium pt-12">
                        <ManualHeader num="7" title="Deployment UX Strategy" />
                        
                        <div className="space-y-16 mt-16">
                            <p className="text-xl text-slate-400">Now your UI should visualize actionable prescriptions.</p>

                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="p-10 border border-white/5 bg-[#060B12] space-y-6">
                                    <h4 className="text-cyan-400 font-mono text-[10px] uppercase tracking-widest border border-cyan-900/50 px-2 py-1 inline-block">App View</h4>
                                    <h5 className="text-2xl text-white font-bold tracking-tight">Building Risk Index</h5>
                                    <div>
                                        <div className="text-5xl font-mono text-cyan-500 font-bold mb-4">84<span className="text-lg text-slate-600">/100</span></div>
                                        <ul className="space-y-2 text-sm text-slate-500 font-mono uppercase tracking-wider mt-6">
                                            <li className="flex justify-between border-b border-white/5 pb-2"><span>Age Stress</span> <span className="text-red-400">+12%</span></li>
                                            <li className="flex justify-between border-b border-white/5 pb-2"><span>Weather Tmp</span> <span className="text-red-400">+8%</span></li>
                                            <li className="flex justify-between border-b border-white/5 pb-2"><span>Defect Accel</span> <span className="text-cyan-600">—</span></li>
                                            <li className="flex justify-between"><span>Maint Lag</span> <span className="text-cyan-600">—</span></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="p-10 border border-white/5 bg-[#060B12] space-y-6 flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-cyan-400 font-mono text-[10px] uppercase tracking-widest border border-cyan-900/50 px-2 py-1 inline-block">Graph View</h4>
                                        <h5 className="text-2xl text-white font-bold tracking-tight mt-6">Decay Curve Projection</h5>
                                        <p className="text-sm text-slate-500 mt-2">Predicted risk growth over the next 24 months.</p>
                                    </div>

                                    <div className="mt-8 pt-8 border-t border-white/10">
                                        <h4 className="text-cyan-400 font-mono text-[10px] uppercase tracking-widest border border-cyan-900/50 px-2 py-1 inline-block">Simulator Tool</h4>
                                        <h5 className="text-lg text-white font-bold tracking-tight mt-6">Intervention Impact</h5>
                                        <p className="text-sm text-slate-500 mt-2 italic">"If we replace the flashing now, what does the risk curve look like?"</p>
                                    </div>
                                </div>
                            </div>
                            
                            <p className="text-center font-bold text-2xl text-cyan-400 tracking-wide mt-12 bg-cyan-950/20 p-8 border border-cyan-900/50">
                                Now it’s not just predictive.<br/><span className="text-white">It’s prescriptive.</span>
                            </p>
                        </div>
                    </div>

                    {/* STEP 08 */}
                    <div data-section="08-automate" id="08-automate" className="relative font-medium pt-12">
                        <ManualHeader num="8" title="Industrial Ingestion" quote="“Future-proof the machine.”" />
                        
                        <div className="space-y-16 mt-16 text-slate-400">
                             <div className="flex flex-wrap gap-4">
                                <span className="px-6 py-4 border border-cyan-900 bg-[#060B12] uppercase tracking-widest text-[10px] font-mono">+ Weather API Integration</span>
                                <span className="px-6 py-4 border border-cyan-900 bg-[#060B12] uppercase tracking-widest text-[10px] font-mono">+ GIS Environmental Layer</span>
                                <span className="px-6 py-4 border border-cyan-900 bg-[#060B12] uppercase tracking-widest text-[10px] font-mono">+ Auto Material Lifespan</span>
                                <span className="px-6 py-4 border border-cyan-900 bg-[#060B12] uppercase tracking-widest text-[10px] font-mono">+ Warranty Alerts</span>
                             </div>

                             <div className="p-12 border border-cyan-500/50 bg-cyan-950/20 text-center font-mono uppercase tracking-widest space-y-8">
                                <p className="text-white text-sm">Every inspection becomes:</p>
                                <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-cyan-400 font-bold text-lg md:text-2xl">
                                    <span>Structured Event</span>
                                    <span className="text-cyan-700 hidden md:inline">{">"}</span>
                                    <span className="text-cyan-700 md:hidden">v</span>
                                    <span>Labeled Data</span>
                                    <span className="text-cyan-700 hidden md:inline">{">"}</span>
                                    <span className="text-cyan-700 md:hidden">v</span>
                                    <span className="text-white">Model Retrained.</span>
                                </div>
                                <p className="text-cyan-500 mt-8 pt-8 border-t border-cyan-900/50 inline-block text-xl">Pipeline {">"} Model.</p>
                            </div>
                        </div>
                    </div>

                    {/* STEP 09 */}
                    <div data-section="09-scale" id="09-scale" className="relative font-medium pt-12">
                        <ManualHeader num="9" title="Portfolio Strategy" subtitle="Now We're Playing Big." />
                        
                        <div className="space-y-16 mt-16 bg-[#060B12] p-12 border-l border-cyan-500 text-lg text-slate-300 relative shadow-[20px_20px_40px_rgba(0,0,0,0.5)]">
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <span className="font-mono text-cyan-500 mt-1">{"[]"}</span>
                                    <span>Cluster buildings by <strong className="text-white">decay pattern</strong>.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="font-mono text-cyan-500 mt-1">{"[]"}</span>
                                    <span>Detect <strong className="text-white">abnormal deterioration</strong> outliers.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="font-mono text-cyan-500 mt-1">{"[]"}</span>
                                    <span>Predict <strong className="text-white">capital replacement cycles</strong>.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="font-mono text-cyan-500 mt-1">{"[]"}</span>
                                    <span>Rank contractors by <strong className="text-white">long-term failure recurrence</strong>.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="font-mono text-cyan-500 mt-1">{"[]"}</span>
                                    <span>Detect <strong className="text-white">material batch failures</strong>.</span>
                                </li>
                            </ul>

                            <div className="mt-16 pt-12 border-t border-white/5 space-y-4">
                                <p className="font-mono text-[10px] text-cyan-500 uppercase tracking-widest">You move from</p>
                                <div className="text-3xl font-bold text-white tracking-tight flex flex-col gap-3 opacity-90">
                                    <span className="text-slate-500 line-through">Maintenance Prediction</span>
                                    <span className="pl-4 text-cyan-700">↳ Asset Lifecycle Optimization</span>
                                    <span className="pl-8 text-cyan-400">↳ Portfolio-level Risk Arbitrage</span>
                                </div>
                            </div>
                        </div>
                    </div>

                     {/* STEP 10 */}
                     <div data-section="10-finance" id="10-finance" className="relative font-medium pt-12">
                        <ManualHeader num="10" title="Finance & Capital Modeling" quote="“Make the CFO love you.”" />
                        
                        <div className="space-y-16 mt-16 text-slate-300">
                            
                            <div className="grid lg:grid-cols-2 gap-12">
                                <div className="p-8 border border-red-900/30 bg-red-950/10 space-y-4">
                                    <h5 className="font-mono text-[10px] text-red-400 uppercase tracking-widest border-b border-red-900/30 pb-2">The Baseline</h5>
                                    <p className="text-2xl font-bold text-red-200">Expected Reactive Loss Curve</p>
                                </div>
                                <div className="p-8 border border-cyan-900/50 bg-cyan-950/20 space-y-4 flex flex-col justify-center relative">
                                    <div className="absolute top-1/2 -left-8 w-4 h-px bg-white/20 hidden lg:block" />
                                    <span className="absolute top-1/2 -left-12 -translate-y-1/2 font-mono text-[10px] text-white/40 hidden lg:block">VS</span>
                                    <h5 className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest border-b border-cyan-900/30 pb-2">The Model</h5>
                                    <p className="text-2xl font-bold text-cyan-300">Predicted Preventative Curve</p>
                                </div>
                            </div>

                            <div className="p-12 border border-indigo-900 bg-[#060B12] text-center">
                                <h4 className="font-mono text-[10px] text-indigo-400 uppercase tracking-widest mb-6">Then Calculate:</h4>
                                <p className="text-4xl text-white font-bold tracking-tight">Net Present Value <br/><span className="text-indigo-400">of early interventions.</span></p>
                            </div>

                            <div className="text-center pt-8">
                                <p className="text-xl text-slate-400 mb-8">Now the CFO listens. Because you’re not talking about leaks.</p>
                                <p className="font-mono text-cyan-400 text-sm uppercase tracking-widest leading-loose">
                                    You're talking about:<br/>
                                    <strong className="text-white text-lg">Risk-Adjusted Capital Planning</strong> <br/>
                                    <strong className="text-white text-lg">Volatility Reduction</strong> <br/>
                                    <strong className="text-white text-lg">Asset Lifespan Extension</strong>
                                </p>
                            </div>

                        </div>
                    </div>
                    
                    {/* ENGINES CLOSE */}
                    <div className="mt-48 pt-32 border-t border-cyan-900/30">
                        <div className="max-w-3xl mx-auto text-center space-y-12">
                            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white leading-none">Because Roofs Fail <br/><span className="text-cyan-500">In Patterns.</span></h2>
                            
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 font-mono uppercase text-sm tracking-widest text-slate-400 pt-12">
                                <div className="p-6 border border-white/5 hover:bg-cyan-950/20 hover:border-cyan-500/30 transition-colors">Water follows slope.</div>
                                <div className="p-6 border border-white/5 hover:bg-cyan-950/20 hover:border-cyan-500/30 transition-colors">Flashings fatigue.</div>
                                <div className="p-6 border border-white/5 hover:bg-cyan-950/20 hover:border-cyan-500/30 transition-colors">Membranes age.</div>
                                <div className="p-6 border border-white/5 hover:bg-cyan-950/20 hover:border-cyan-500/30 transition-colors">Constraints repeat.</div>
                                <div className="p-6 border border-white/5 hover:bg-cyan-950/20 hover:border-cyan-500/30 transition-colors md:col-span-2">Building typologies behave similarly.</div>
                            </div>
                            
                            <div className="pt-16 pb-32">
                                <h3 className="text-2xl text-slate-500 font-bold tracking-widest uppercase mb-4">You’re not predicting chaos.</h3>
                                <h3 className="text-3xl md:text-4xl text-cyan-400 uppercase tracking-[0.2em] font-mono bg-cyan-950/30 py-6 border border-cyan-500/50 shadow-[0_0_40px_rgba(6,182,212,0.15)]">You’re modeling <br className="md:hidden"/>decay curves.</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

function ManualHeader({ num, title, subtitle, quote }: { num: string, title: string, subtitle?: string, quote?: string }) {
    return (
        <div className="flex flex-col gap-4 border-b border-cyan-900/40 pb-6 relative">
            <div className="absolute top-0 right-0 font-mono text-[80px] leading-none font-bold text-cyan-950/20 select-none z-0">
                {num.padStart(2, '0')}
            </div>
            
            <div className="flex flex-col md:flex-row md:items-end gap-x-6 gap-y-2 relative z-10 pt-4">
                <span className="text-2xl font-light text-cyan-600 leading-none font-mono tracking-widest">[{num.padStart(2, '0')}]</span>
                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-white">{title}</h2>
            </div>

            {subtitle && <p className="font-mono text-sm uppercase tracking-widest text-cyan-400 absolute md:relative bottom-1 left-0 z-10 mt-2">{subtitle}</p>}
            {quote && <p className="font-mono text-sm uppercase tracking-widest text-slate-500 relative z-10 italic mt-2">{quote}</p>}
        </div>
    )
}

function SignalBlock({ title, tag, metrics, reason, color }: { title: string, tag: string, metrics: string[], reason: string, color: 'cyan'|'blue'|'orange'|'purple'|'red' }) {
    const borders = {
        'cyan': 'border-cyan-500',
        'blue': 'border-blue-500',
        'orange': 'border-orange-500',
        'purple': 'border-purple-500',
        'red': 'border-red-500'
    }
    const texts = {
        'cyan': 'text-cyan-400',
        'blue': 'text-blue-400',
        'orange': 'text-orange-400',
        'purple': 'text-purple-400',
        'red': 'text-red-400'
    }
    
    return (
        <div className={`space-y-6 border-l-2 ${borders[color]} pl-8 relative`}>
            <span className={`absolute -top-3 left-8 font-mono text-[9px] uppercase tracking-widest ${texts[color]} bg-[#020508] px-2 py-1 border border-white/10`}>
                {tag}
            </span>
            <h5 className="text-2xl font-bold text-white pt-2">{title}</h5>
            <ul className="space-y-3 font-mono text-xs text-slate-300 bg-[#060B12] p-6 border border-white/5">
                {metrics.map(m => <li key={m}>+ {m}</li>)}
            </ul>
            <p className="text-slate-400 italic text-sm">{reason}</p>
        </div>
    )
}
