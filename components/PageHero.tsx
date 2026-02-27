"use client"
import { motion } from 'framer-motion'

export default function PageHero({ title, description }: { title: string; description?: string }) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        <motion.h1 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.7 }} className="page-hero-title">
          {title}
        </motion.h1>
        {description && <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ delay: 0.08, duration: 0.6 }} className="page-hero-desc">{description}</motion.p>}

        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }} className="mt-6 flex items-center justify-center gap-3">
          <a href="#work" className="btn">Explore our work</a>
          <a href="/contact" className="btn-ghost">Start a conversation</a>
        </motion.div>

        <div className="hero-accent" aria-hidden/>
      </div>
    </section>
  )
}
