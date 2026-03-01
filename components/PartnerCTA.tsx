import Link from 'next/link'
import SectionHeader from './SectionHeader'

export default function PartnerCTA() {
    return (
        <section className="py-32 px-6 md:px-12 border-t border-white/5 relative bg-background-layer1 overflow-hidden">
            {/* Background Visual Components */}
            <div className="absolute inset-0 z-0 opacity-[0.05]">
                <div className="absolute inset-0 bg-grid" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent/20 rounded-full animate-drift" />
            </div>

            <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
                <SectionHeader
                    label="Activation"
                    title="Initiate Exploration."
                    align="center"
                />

                <p className="text-xl md:text-2xl text-muted leading-relaxed font-medium">
                    Ready to define the terrain and solve the right problem? <br className="hidden md:block" />
                    We are currently selecting strategic partners for the next cycle.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                    <Link href="/partner" className="btn-primary flex items-center gap-4 group w-full sm:w-auto px-12">
                        <span>Initiate Mission</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                            <path d="M1 8h14M15 8l-6-6M15 8l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                    <Link href="/systems" className="btn-ghost w-full sm:w-auto px-12">
                        View System Impact
                    </Link>
                </div>

                <div className="pt-12 flex justify-center gap-12 items-center opacity-30">
                    <div className="h-px w-24 bg-white/20" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.4em]">Ready // Standby</span>
                    <div className="h-px w-24 bg-white/20" />
                </div>
            </div>
        </section>
    )
}
