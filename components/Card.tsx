"use client"
import { motion } from 'framer-motion'

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <motion.div whileHover={{ y: -8 }} whileTap={{ scale: 0.995 }} className="card">
      {children}
    </motion.div>
  )
}
