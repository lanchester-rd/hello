"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-6 py-24 text-center">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">Product Strategy for Complex Systems</h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">Lanchester R&D designs product infrastructure at the intersection of regulation, behavior, and scale.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/engagements" className="px-6 py-3 bg-accent text-white rounded-md shadow-sm">Explore Engagement Models</Link>
            <Link href="/case-studies" className="px-6 py-3 border border-gray-200 rounded-md text-gray-700">View Case Studies</Link>
          </div>
        </motion.div>

        <motion.div className="mt-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
          <div className="w-full h-40 md:h-56 rounded-2xl mx-auto max-w-4xl bg-gradient-to-r from-transparent to-transparent border border-gray-100 flex items-center justify-center">
            {/* subtle animated line */}
            <motion.div className="h-0.5 w-64 bg-accent" animate={{ x: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} />
          </div>
        </motion.div>
        
        <div className="mt-10 max-w-3xl mx-auto text-left text-gray-700">
          <p>Lanchester R&D partners with founders, scale-ups, and regulated industries to structure product strategy, define execution models, and build systems that hold under pressure.</p>

          <ul className="mt-4 list-disc list-inside space-y-1">
            <li>Early-stage product definition</li>
            <li>Growth-stage product leadership</li>
            <li>Design systems and product coherence</li>
            <li>Regulated and compliance-heavy environments</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
