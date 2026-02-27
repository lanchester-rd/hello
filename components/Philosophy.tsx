"use client"
import { motion } from 'framer-motion'

export default function Philosophy() {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
      <h3 className="text-2xl font-semibold">Philosophy</h3>
      <p className="mt-6 text-gray-600 max-w-3xl mx-auto">A practice that reduces systemic friction, increases operational clarity, and architects defensible workflows for complex product environments. We focus on governance, traceability and infrastructure-level decisions.</p>
    </motion.div>
  )
}
