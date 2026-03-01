import type { Metadata } from 'next'
import Link from 'next/link'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '5-Year Plan for NGO App Development - Abbey Fields Foundation',
  description: 'How Abbey Fields Foundation scales nonprofit technology and charity software development. Strategic roadmap for digital transformation in the NGO sector.',
  keywords: ['nonprofit app development roadmap', 'NGO technology scaling', 'charity software expansion', 'nonprofit digital transformation strategy', '5-year NGO tech plan'],
}

function YearBlock({ year, title, goal, items }: { year: string, title: string, goal: string, items: string[] }) {
  return (
    <div className="relative pl-8 md:pl-0">
      <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
        <div className="md:col-span-1 mb-4 md:mb-0 relative">
          <div className="absolute left-[-2rem] top-2 md:relative md:left-auto md:top-auto flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold md:mb-4">
            {year}
          </div>
          <h3 className={`text-xl font-bold text-stone-900 mb-2 ${playfair.className}`}>{title}</h3>
          <p className="text-sm text-emerald-700 font-medium">Goal: {goal}</p>
        </div>
        <div className="md:col-span-4 bg-white rounded-2xl border border-stone-200/60 shadow-sm p-6 md:p-8">
          <ul className="space-y-3">
            {items.map((item, i) => (
              <li key={i} className="flex gap-3 text-stone-600">
                <span className="text-stone-300 select-none">―</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function FiveYearPlanPage() {
  return (
    <div className={`min-h-screen bg-[#FAF8F5] text-stone-900 selection:bg-emerald-200/50 font-sans pb-32`}>
      {/* Natural Ambient Background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[70%] h-[70%] bg-emerald-900/5 rounded-full blur-[140px] mix-blend-multiply" />
        <div className="absolute bottom-[10%] left-[-10%] w-[60%] h-[60%] bg-stone-400/10 rounded-full blur-[120px] mix-blend-multiply" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-40 z-10 relative">
        <Link href="/foundation" className="inline-flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-600 transition-colors mb-12">
          <span>←</span> Back to Foundation overview
        </Link>
        
        <header className="space-y-6 mb-20 border-b border-stone-200 pb-12 text-center md:text-left">
          <span className="text-emerald-700 font-bold uppercase tracking-widest text-xs">Strategic Document 02</span>
          <h1 className={`text-4xl md:text-6xl font-bold tracking-tight text-stone-900 ${playfair.className}`}>
            5-Year Ambition Plan
          </h1>
          <p className="text-xl text-stone-600 font-light leading-relaxed max-w-2xl">
            A phased approach to building scale, credibility, and lasting systemic impact.
          </p>
        </header>

        <div className="space-y-16 relative">
          {/* Vertical timeline line for mobile */}
          <div className="absolute left-[11px] top-4 bottom-4 w-px bg-stone-200 md:hidden" />
          
          <YearBlock 
            year="1"
            title="Foundation & Pilot"
            goal="Prove the model works."
            items={[
              "Establish governance, advisory board, and legal structure",
              "Identify 3–5 pilot NGO partners",
              "Deliver first technology enablement projects",
              "Build tech partnerships with 1–2 major providers",
              "Develop measurement framework"
            ]}
          />

          <YearBlock 
            year="2"
            title="Refine & Expand"
            goal="Establish credibility and early success stories."
            items={[
              "Evaluate pilot outcomes",
              "Launch structured Tech Enablement Program",
              "Begin Innovation Fund (small-scale R&D grants)",
              "Develop brand and thought leadership presence"
            ]}
          />

          <YearBlock 
            year="3"
            title="Scale & Formalise"
            goal="Become recognized as a serious infrastructure partner."
            items={[
              "Support 15–25 NGO partners",
              "Launch flagship initiative (e.g., AI for Wildlife Protection)",
              "Publish first Impact Report",
              "Form academic or research collaborations"
            ]}
          />

          <YearBlock 
            year="4"
            title="International Reach"
            goal="Position as a global thought leader."
            items={[
              "Expand geographic focus",
              "Establish multi-year transformation partnerships",
              "Introduce leadership fellowships",
              "Host annual Compassionate Innovation Forum"
            ]}
          />

          <YearBlock 
            year="5"
            title="Strength & Legacy"
            goal="Move from promising initiative to enduring institution."
            items={[
              "Demonstrate measurable ecosystem impact",
              "Develop endowment or long-term funding structure",
              "Scale to 50+ supported organizations",
              "Become a trusted partner for governments, research bodies, and major NGOs"
            ]}
          />
        </div>
      </div>
    </div>
  )
}
