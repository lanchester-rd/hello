import type { Metadata } from 'next'
import Link from 'next/link'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Concept Note - Abbey Fields Foundation NGO Technology Strategy',
  description: 'Abbey Fields Foundation\'s strategic approach to nonprofit app development, charity technology solutions, and digital transformation for mission-driven organizations.',
  keywords: ['NGO strategy', 'nonprofit technology', 'charity technology innovation', 'nonprofit app strategy', 'digital transformation for charities'],
}

export default function ConceptNotePage() {
  return (
    <div className={`min-h-screen bg-[#FAF8F5] text-stone-900 selection:bg-emerald-200/50 font-sans pb-32`}>
      {/* Natural Ambient Background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-emerald-900/5 rounded-full blur-[140px] mix-blend-multiply" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-stone-400/10 rounded-full blur-[120px] mix-blend-multiply" />
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-12 pt-40 z-10 relative">
        <Link href="/foundation" className="inline-flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-600 transition-colors mb-12">
          <span>←</span> Back to Foundation overview
        </Link>
        
        <header className="space-y-6 mb-16 border-b border-stone-200 pb-12">
          <span className="text-emerald-700 font-bold uppercase tracking-widest text-xs">Strategic Document 01</span>
          <h1 className={`text-4xl md:text-6xl font-bold tracking-tight text-stone-900 ${playfair.className}`}>
            Concept Note
          </h1>
          <p className="text-xl text-stone-600 font-light leading-relaxed">
            The foundational thesis and operating model for The Abbey Fields Foundation for Compassionate Innovation.
          </p>
        </header>

        <article className="prose prose-stone prose-lg max-w-none prose-headings:text-stone-900 prose-p:text-stone-600 prose-li:text-stone-600 prose-strong:text-stone-900">
          <h2 className={playfair.className}>Overview</h2>
          <p>
            The Abbey Fields Foundation for Compassionate Innovation exists to accelerate animal welfare and environmental protection by equipping mission-driven organizations with transformative technology, strategic support, and bold new solutions.
          </p>
          <p>
            While many NGOs are rich in purpose, they are often under-resourced in digital infrastructure, data capability, and advanced tools. This foundation addresses that gap - not by duplicating frontline work, but by strengthening the systems that power it.
          </p>
          <p>
            The Foundation acts as a force multiplier: enabling organizations to work smarter, respond faster, measure impact more rigorously, and scale solutions sustainably.
          </p>

          <h2 className={playfair.className}>The Problem</h2>
          <p>Animal welfare and environmental NGOs face recurring structural hurdles:</p>
          <ul>
            <li>Limited access to AI, satellite, monitoring, and data tools</li>
            <li>Outdated digital systems and fragmented data</li>
            <li>Lack of technical expertise and cybersecurity capacity</li>
            <li>Difficulty measuring and communicating impact</li>
            <li>Underinvestment in innovation due to funding constraints</li>
          </ul>
          <p>
            As threats to biodiversity and animal wellbeing accelerate, the organizations protecting them must be equipped with world-class capabilities.
          </p>

          <h2 className={playfair.className}>Our Solution</h2>
          <p>The Abbey Fields Foundation operates across three integrated pillars:</p>
          
          <h3>1. Technology Enablement</h3>
          <p>Providing access to advanced tools such as:</p>
          <ul>
            <li>AI-driven wildlife monitoring and analytics</li>
            <li>Remote sensing and satellite tracking</li>
            <li>Digital infrastructure and secure data systems</li>
            <li>Impact measurement platforms</li>
          </ul>

          <h3>2. Innovation Funding</h3>
          <p>Supporting the development and scaling of solutions that:</p>
          <ul>
            <li>Prevent wildlife crime</li>
            <li>Improve farm animal welfare systems</li>
            <li>Monitor ecosystems in real time</li>
            <li>Increase transparency in environmental supply chains</li>
          </ul>

          <h3>3. Capacity & Leadership</h3>
          <p>Strengthening nonprofit leadership through:</p>
          <ul>
            <li>Digital strategy support</li>
            <li>Technical training</li>
            <li>Innovation fellowships</li>
            <li>Long-term transformation partnerships</li>
          </ul>

          <h2 className={playfair.className}>Operating Model</h2>
          <p>
            Rather than traditional grant-making alone, the Foundation uses a blended model to ensure sustainable, systemic change rather than isolated interventions:
          </p>
          <ul>
            <li>Strategic grants</li>
            <li>Technology partnerships</li>
            <li>Co-development of tools</li>
            <li>Multi-year transformation support</li>
            <li>Impact-linked funding</li>
          </ul>

          <h2 className={playfair.className}>Long-Term Vision</h2>
          <p className="text-xl md:text-2xl leading-relaxed text-emerald-800 font-medium border-l-2 border-emerald-500 pl-6 mt-8">
            To become a leading global catalyst for technology-enabled animal and environmental protection - building stronger organizations, smarter systems, and measurable progress for the planet.
          </p>
        </article>
      </div>
    </div>
  )
}
