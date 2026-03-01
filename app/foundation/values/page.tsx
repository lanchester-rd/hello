import type { Metadata } from 'next'
import Link from 'next/link'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Values - Abbey Fields Foundation NGO Technology Principles',
  description: 'Core values driving Abbey Fields Foundation\'s approach to nonprofit app development, charity software solutions, and ethical technology for mission-driven organizations.',
  keywords: ['nonprofit values', 'charity technology ethics', 'NGO-centered design', 'mission-driven principles', 'compassionate technology'],
}

export default function ValuesPage() {
  const values = [
    {
      num: "01",
      title: "Compassion with Courage",
      description: "We are guided by empathy for animals and the natural world - and the courage to act boldly in their defense."
    },
    {
      num: "02",
      title: "Innovation with Integrity",
      description: "We pursue advanced technology and creative solutions responsibly, ethically, and transparently."
    },
    {
      num: "03",
      title: "Systems over Symptoms",
      description: "We prioritize strengthening infrastructure and capability rather than funding short-term fixes."
    },
    {
      num: "04",
      title: "Measurable Impact",
      description: "We value evidence, data, and accountability. Good intentions must translate into real-world outcomes."
    },
    {
      num: "05",
      title: "Partnership, Not Paternalism",
      description: "We work alongside NGOs as collaborators, respecting local expertise and lived experience."
    },
    {
      num: "06",
      title: "Long-Term Stewardship",
      description: "We are building an institution designed to serve future generations - not react to short-term trends."
    }
  ]

  return (
    <div className={`min-h-screen bg-[#FAF8F5] text-stone-900 selection:bg-emerald-200/50 font-sans pb-32`}>
      {/* Natural Ambient Background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[40%] right-[-20%] w-[80%] h-[80%] bg-emerald-900/5 rounded-full blur-[150px] mix-blend-multiply" />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-stone-400/10 rounded-full blur-[120px] mix-blend-multiply" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-40 z-10 relative">
        <Link href="/foundation" className="inline-flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-600 transition-colors mb-12">
          <span>←</span> Back to Foundation overview
        </Link>
        
        <header className="space-y-6 mb-20 text-center">
          <span className="text-emerald-700 font-bold uppercase tracking-widest text-xs">Strategic Document 03</span>
          <h1 className={`text-4xl md:text-6xl font-bold tracking-tight text-stone-900 ${playfair.className}`}>
            Values Framework
          </h1>
          <p className="text-xl text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            The fundamental principles that dictate our decisions, partnerships, and definition of success.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {values.map((value) => (
            <div 
              key={value.num} 
              className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200/60 hover:border-emerald-700/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-emerald-700/50 font-mono text-sm tracking-widest group-hover:text-emerald-700 transition-colors">
                  {value.num}
                </span>
              </div>
              <h2 className={`text-2xl text-stone-900 mb-4 ${playfair.className}`}>
                {value.title}
              </h2>
              <p className="text-stone-600 leading-relaxed font-light">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
