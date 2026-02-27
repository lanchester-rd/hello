import { motion } from 'framer-motion'

export default function Philosophy() {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
      <h3 className="text-2xl font-semibold">Philosophy</h3>
      <p className="mt-6 text-gray-600 max-w-3xl mx-auto">Placeholder paragraph about systems thinking, product architecture, and the disciplined practice of strategy in complex domains. This section is intentionally minimal and calm.</p>
    </motion.div>
  )
}
