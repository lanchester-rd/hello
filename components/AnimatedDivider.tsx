"use client"
import { motion } from 'framer-motion'

export default function AnimatedDivider({ className = '' }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent ${className}`}
    />
  )
}
