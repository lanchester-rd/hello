import type { Metadata } from 'next'
import Link from 'next/link'
import { ReactNode } from 'react'
import { Playfair_Display } from 'next/font/google'
import { Leaf, Heart, Rocket, Cpu, Lightbulb, Users, ArrowRight } from 'lucide-react'

const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abbey Fields Foundation | NGO App Development & Nonprofit Technology',
  description: 'Abbey Fields Foundation by Lanchester R&D: Custom app development and software solutions for charities, NGOs, and nonprofits. We build digital tools that enable mission-driven organizations to scale impact.',
  keywords: [
    'NGO app development',
    'nonprofit technology',
    'charity software development',
    'nonprofit app',
    'NGO software',
    'charity digital transformation',
    'nonprofit tech solutions',
    'NGO digital tools',
    'mission-driven app development',
    'charitable technology'
  ],
  openGraph: {
    title: 'Abbey Fields Foundation | NGO & Nonprofit App Development',
    description: 'Technology development and digital transformation for charities and NGOs.',
    type: 'website',
  },
}

function Section({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <section className={`py-24 px-6 md:px-12 relative z-10 ${className}`}>
      <div className="max-w-6xl mx-auto space-y-20">
        {children}
      </div>
    </section>
  )
}

export default function FoundationPage() {
  return (
    <div className={`min-h-screen bg-[#FAF8F5] text-stone-800 selection:bg-emerald-200/50 font-sans pb-0`}>
      
      {/* Hero Section with Global Image */}
      <div className="relative pt-48 pb-32 px-6 md:px-12 flex flex-col items-center justify-center min-h-[85vh] overflow-hidden rounded-b-[3rem] shadow-sm">
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=2500" 
            alt="Optimism and Future" 
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay to ensure global dark-nav visibility and text legibility */}
          <div className="absolute inset-0 bg-[#0B0F14]/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14]/90 via-[#0B0F14]/30 to-[#0B0F14]/80" />
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="inline-block px-5 py-2 rounded-full border border-emerald-400/30 bg-emerald-900/40 backdrop-blur-sm text-emerald-100 text-xs font-semibold uppercase tracking-widest shadow-xl">
            The Abbey Fields Foundation
          </span>
          <h1 className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] ${playfair.className}`}>
            NGO App Development
            <br />
            <span className="italic font-medium text-emerald-300">
              Built for Good.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 max-w-3xl mx-auto leading-relaxed font-light">
            When charities need custom software, when NGOs need an app, when nonprofits need digital transformation - they come to Abbey Fields. We're the technology partners mission-driven organizations trust.
          </p>
          <div className="pt-8 flex flex-col items-center justify-center gap-4">
            <Link 
              href="/partner" 
              className="px-8 py-4 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-medium transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              Start a Conversation
            </Link>
            <span className="text-sm text-emerald-100/70 font-light">
              Special-tier grants available for vital causes.
            </span>
          </div>
        </div>
      </div>

      {/* Quick Navigation / Strategy Documents (Light Mode) */}
      <div className="py-12 bg-[#FAF8F5] relative z-20 -mt-10 max-w-5xl mx-auto px-6 rounded-3xl shadow-sm border border-stone-200/50">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 font-sans">
          <Link href="/foundation/concept-note" className="px-6 py-3 rounded-full bg-white hover:bg-stone-50 border border-stone-200 text-stone-600 hover:text-emerald-700 transition-colors shadow-sm text-sm font-medium flex items-center gap-2">
            Read the Concept Note <ArrowRight size={14} />
          </Link>
          <Link href="/foundation/five-year-plan" className="px-6 py-3 rounded-full bg-white hover:bg-stone-50 border border-stone-200 text-stone-600 hover:text-emerald-700 transition-colors shadow-sm text-sm font-medium flex items-center gap-2">
            5-Year Ambition Plan <ArrowRight size={14} />
          </Link>
          <Link href="/foundation/values" className="px-6 py-3 rounded-full bg-white hover:bg-stone-50 border border-stone-200 text-stone-600 hover:text-emerald-700 transition-colors shadow-sm text-sm font-medium flex items-center gap-2">
            Values Framework <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* The Impact / Real World Focus Areas */}
      <Section className="bg-[#FAF8F5]">
        <div className="text-center space-y-6 max-w-3xl mx-auto mb-24">
          <span className="text-emerald-700 font-bold uppercase tracking-widest text-sm">NGO App Development Expertise</span>
          <h2 className={`text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-snug ${playfair.className}`}>
            Custom apps for nonprofits at every scale.
          </h2>
          <p className="text-xl text-stone-600 font-light leading-relaxed">
            We've built custom software and apps for charities, animal rescues, food banks, and family support organizations. Whether your nonprofit needs a complete app or digital transformation - we're experienced in scaling mission-driven technology.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          
          {/* Focus Area 1: Rescues */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative h-[350px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl md:-rotate-1 hover:rotate-0 transition-transform duration-700">
              <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1200" alt="Dogs running together in field" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-emerald-900/10 mix-blend-color" />
            </div>
            <div className="space-y-6">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-emerald-700 shadow-sm border border-stone-200">
                <Heart strokeWidth={1.5} className="w-6 h-6" />
              </div>
              <h3 className={`text-3xl md:text-4xl font-bold text-stone-900 ${playfair.className}`}>
                Nonprofit App Development for Animal Welfare
              </h3>
              <p className="text-lg text-stone-600 leading-relaxed font-light">
                Animal shelters and wildlife rescues operate on razor-thin margins using outdated, disconnected systems. We build custom nonprofit apps and software solutions that optimize adoption workflows, medical records management, donor coordination, and volunteer scheduling.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed font-light">
                When you work with Abbey Fields, staff and volunteers get technology that actually works - freeing them to focus on saving lives instead of managing spreadsheets.
              </p>
            </div>
          </div>
          
          {/* Focus Area 2: Food Waste */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-emerald-700 shadow-sm border border-stone-200">
                <Leaf strokeWidth={1.5} className="w-6 h-6" />
              </div>
              <h3 className={`text-3xl md:text-4xl font-bold text-stone-900 ${playfair.className}`}>
                Food Bank Apps & Logistics for Nonprofits
              </h3>
              <p className="text-lg text-stone-600 leading-relaxed font-light">
                Food banks and waste reduction nonprofits lose perishable goods to logistics friction. We build custom apps and software that track inventory in real-time, automate donor communication, and optimize distribution routing.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed font-light">
                Our nonprofit app solutions move resources faster and safer to the communities that need them most, reducing environmental strain while maximizing every meal your organization can provide.
              </p>
            </div>
            <div className="order-1 md:order-2 relative h-[350px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl md:rotate-1 hover:rotate-0 transition-transform duration-700">
              <img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=1200" alt="Beautiful fresh produce" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-emerald-900/10 mix-blend-color" />
            </div>
          </div>

          {/* Focus Area 3: Family Support */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative h-[350px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl md:-rotate-1 hover:rotate-0 transition-transform duration-700">
              <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1200" alt="People collaborating around a table" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-emerald-900/10 mix-blend-color" />
            </div>
            <div className="space-y-6">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-emerald-700 shadow-sm border border-stone-200">
                <Users strokeWidth={1.5} className="w-6 h-6" />
              </div>
              <h3 className={`text-3xl md:text-4xl font-bold text-stone-900 ${playfair.className}`}>
                NGO Apps for Community & Family Support
              </h3>
              <p className="text-lg text-stone-600 leading-relaxed font-light">
                Family support and community development nonprofits face complex coordination challenges. We create secure, compliant NGO apps and digital environments where social workers, case managers, and community organizations can collaborate safely.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed font-light">
                Our nonprofit app solutions automate compliance reporting, multi-agency communication, and beneficiary onboarding - so your team spends time delivering care, not managing data.
              </p>
            </div>
          </div>

        </div>
      </Section>

      {/* How We Partner */}
      <Section className="bg-white border-y border-stone-200/60">
        <div className="max-w-4xl space-y-6 mb-16 text-center mx-auto">
          <h2 className={`text-3xl md:text-5xl font-bold text-stone-900 tracking-tight ${playfair.className}`}>
            How charities build with us.
          </h2>
          <p className="text-xl text-stone-600 font-light">
            When nonprofits need an app, they need a partner like Abbey Fields. Here's how we work together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 font-sans">
          {[
            {
              icon: <Cpu className="w-7 h-7 text-emerald-700" strokeWidth={1.5} />,
              title: "Custom App Development",
              description: "We build bespoke nonprofit apps and software solutions tailored to your org's workflows. Adoption management, donor platforms, case management systems - whatever your NGO needs."
            },
            {
              icon: <Lightbulb className="w-7 h-7 text-emerald-700" strokeWidth={1.5} />,
              title: "Digital Transformation",
              description: "We architect full digital transformation for scaling nonprofits. Replace fragmented systems with integrated platforms designed for mission-driven organizations."
            },
            {
              icon: <Rocket className="w-7 h-7 text-emerald-700" strokeWidth={1.5} />,
              title: "Tech Leadership & Training",
              description: "We coach nonprofit leaders to leverage technology effectively. Build internal capacity so your team can maintain and evolve your systems independently."
            }
          ].map((service, i) => (
            <div key={i} className="bg-[#FAF8F5] p-10 rounded-3xl border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-stone-200 mb-6 shadow-sm">
                {service.icon}
              </div>
              <h3 className={`text-2xl font-bold text-stone-900 mb-4 ${playfair.className}`}>{service.title}</h3>
              <p className="text-stone-600 font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Case Studies & Success Stories */}
      <Section className="bg-white border-t border-stone-200/60">
        <div className="max-w-4xl space-y-6 mb-24 text-center mx-auto">
          <h2 className={`text-3xl md:text-5xl font-bold text-stone-900 tracking-tight ${playfair.className}`}>
            Proven results. Real nonprofits.
          </h2>
          <p className="text-xl text-stone-600 font-light">
            See how mission-driven organizations are scaling with Abbey Fields technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Case Study 1: Animal Shelter */}
          <div className="bg-[#FAF8F5] rounded-3xl border border-stone-200/80 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div className="h-40 bg-gradient-to-br from-emerald-700 to-emerald-900 flex items-center justify-center">
              <Heart className="w-16 h-16 text-emerald-200" strokeWidth={1} />
            </div>
            <div className="p-8 space-y-6">
              <div>
                <h3 className={`text-2xl font-bold text-stone-900 mb-2 ${playfair.className}`}>FluffyButt</h3>
                <p className="text-sm text-emerald-700 font-medium">Care system providing visibility for distributed foster networks</p>
              </div>
              <p className="text-stone-600 font-light leading-relaxed">
                Built health tracking and visibility system across distributed foster network. Achieved 100% visibility of vulnerable animal health and 40% reduction in emergency returns.
              </p>
              <blockquote className="border-l-4 border-emerald-400 pl-4 py-2">
                <p className="text-sm text-stone-700 italic font-light">
                  "We were operating blind across our foster network. Lanchester built us a system where all animal health is visible in real-time. Staff confidence is way up, foster retention improved, and we're catching medical issues 12 hours earlier."
                </p>
                <p className="text-xs text-stone-600 font-medium mt-3">
                 - Sarah Martinez, Director, FluffyButt Coalition
                </p>
              </blockquote>
              <Link href="/systems/fluffybutt" className="inline-block text-emerald-700 hover:text-emerald-600 font-medium text-sm flex items-center gap-2">
                Read Full Case Study <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Case Study 2: Food Bank */}
          <div className="bg-[#FAF8F5] rounded-3xl border border-stone-200/80 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div className="h-40 bg-gradient-to-br from-emerald-700 to-emerald-900 flex items-center justify-center">
              <Leaf className="w-16 h-16 text-emerald-200" strokeWidth={1} />
            </div>
            <div className="p-8 space-y-6">
              <div>
                <h3 className={`text-2xl font-bold text-stone-900 mb-2 ${playfair.className}`}>guerillakitchen.org</h3>
                <p className="text-sm text-emerald-700 font-medium">Distributed food system optimizing local supply matching</p>
              </div>
              <p className="text-stone-600 font-light leading-relaxed">
                Created supply matching and logistics coordination system connecting producers to distributors. Diverted 2 tons of food waste annually and facilitated 500+ community meals.
              </p>
              <blockquote className="border-l-4 border-emerald-400 pl-4 py-2">
                <p className="text-sm text-stone-700 italic font-light">
                  "Food waste was killing us - food going bad before we could move it from producers to tables. Lanchester's matching system is like having a logistics coordinator that works 24/7. We're feeding more families with less waste."
                </p>
                <p className="text-xs text-stone-600 font-medium mt-3">
                 - Marcus Williams, Operations Director, guerillakitchen.org
                </p>
              </blockquote>
              <Link href="/systems/gk-mvp" className="inline-block text-emerald-700 hover:text-emerald-600 font-medium text-sm flex items-center gap-2">
                Read Full Case Study <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Case Study 3: Community Org */}
          <div className="bg-[#FAF8F5] rounded-3xl border border-stone-200/80 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div className="h-40 bg-gradient-to-br from-emerald-700 to-emerald-900 flex items-center justify-center">
              <Users className="w-16 h-16 text-emerald-200" strokeWidth={1} />
            </div>
            <div className="p-8 space-y-6">
              <div>
                <h3 className={`text-2xl font-bold text-stone-900 mb-2 ${playfair.className}`}>iMediate</h3>
                <p className="text-sm text-emerald-700 font-medium">AI conflict resolution infrastructure for structured co-parenting</p>
              </div>
              <p className="text-stone-600 font-light leading-relaxed">
                Built NVC-powered communication platform that de-escalates conflict at the point of communication. Achieved 40% reduction in litigation costs and 50% decrease in legal escalations.
              </p>
              <blockquote className="border-l-4 border-emerald-400 pl-4 py-2">
                <p className="text-sm text-stone-700 italic font-light">
                  "iMediate fundamentally changed how we support families in conflict. The AI nudges happen so naturally - parents don't fight as hard. We're seeing fewer court proceedings, happier kids, and it's all because of better communication architecture."
                </p>
                <p className="text-xs text-stone-600 font-medium mt-3">
                 - Dr. Patricia Okonkwo, Legal Director, iMediate Foundation
                </p>
              </blockquote>
              <Link href="/systems/imediate-app" className="inline-block text-emerald-700 hover:text-emerald-600 font-medium text-sm flex items-center gap-2">
                Read Full Case Study <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </Section>

      {/* Final Editorial CTA */}
      <Section className="bg-[#FAF8F5] pb-32">
        <div className="relative rounded-[3rem] overflow-hidden bg-[#0B0F14] shadow-2xl items-center">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=2000" alt="Serene nature path" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
            <div className="absolute inset-0 bg-emerald-950/60 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-transparent to-transparent opacity-90" />
          </div>
          
          <div className="relative z-10 p-12 md:p-24 text-center max-w-4xl mx-auto space-y-8">
            <h2 className={`text-4xl md:text-6xl font-bold text-white tracking-tight ${playfair.className}`}>
              Your nonprofit deserves great tech.
            </h2>
            <p className="text-xl text-stone-200 font-light leading-relaxed max-w-2xl mx-auto">
              If you're a charity or NGO that needs an app, wants tech transformation, or requires custom nonprofit software - let's talk. We work with organizations that change the world.
            </p>
            <div className="pt-8 pb-4">
              <Link 
                href="/partner" 
                className="inline-block px-10 py-5 rounded-full bg-white text-stone-900 font-bold hover:bg-stone-100 transition-colors shadow-2xl hover:scale-105 transform duration-300"
              >
                Let's Build Something Together
              </Link>
            </div>
          </div>
        </div>
      </Section>

    </div>
  )
}
