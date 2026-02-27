"use client"
import { motion } from 'framer-motion'

export default function PageHero({ title, description }: { title: string; description?: string }) {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-semibold">
          {title}
        </motion.h1>
        {description && <p className="mt-4 text-gray-600 max-w-3xl mx-auto">{description}</p>}
      </div>
    </section>
  )
}
