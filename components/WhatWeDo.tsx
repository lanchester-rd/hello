import SectionHeader from './SectionHeader'

const capabilities = [
    {
        title: 'Systems Architecture',
        description: 'We design the backbone of highly coordinated operations, focusing on resource mapping and information flow.'
    },
    {
        title: 'Operational Intelligence',
        description: 'Converting raw environmental signals into actionable insights that improve decision velocity.'
    },
    {
        title: 'AI Synthesis',
        description: 'Integrating large language models and computer vision as a leverage layer within human workflows.'
    },
    {
        title: 'Applied Strategy',
        description: 'Prototyping tangible solutions that validate strategic hypotheses in real-world environments.'
    }
]

export default function WhatWeDo() {
    return (
        <section className="py-24 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-5">
                        <SectionHeader
                            label="Capabilities"
                            title="We Engineer Advantage"
                            description="Lanchester R&D operates at the intersection of applied strategy and product engineering. We don't just advise; we build the systems that consolidate power and streamline execution."
                        />
                    </div>

                    <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-12 gap-y-16">
                        {capabilities.map((cap) => (
                            <div key={cap.title} className="space-y-4">
                                <h3 className="text-lg font-bold uppercase tracking-tight border-b border-white/10 pb-4">
                                    {cap.title}
                                </h3>
                                <p className="text-white/50 text-sm leading-relaxed">
                                    {cap.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
