"use client"
import { motion } from 'framer-motion'

export default function AnimatedCards() {
  const items = [
    { title: 'Clarity under complexity', desc: 'Distilling focus and decision frameworks where ambiguity dominates.' },
    { title: 'Human behavior meets systems', desc: 'Designing for how people actually act inside technical and regulated environments.' },
    { title: 'Auditability and trust', desc: 'Practices that leave clear trails for governance and accountability.' },
    { title: 'Calm execution', desc: 'Deliberate, low-noise delivery that de-risks outcomes.' }
  ]

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {items.map(item => (
        <motion.div key={item.title} whileHover={{ y: -6 }} className="border border-gray-100 rounded-lg p-6 bg-white">
          <div className="h-10 w-10 bg-gray-100 rounded-md flex items-center justify-center">Icon</div>
          <h4 className="mt-4 font-semibold">{item.title}</h4>
          <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  )
}
