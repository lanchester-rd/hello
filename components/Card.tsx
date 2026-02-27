"use client"
import { motion } from 'framer-motion'

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <motion.div whileHover={{ y: -6, boxShadow: '0 10px 30px rgba(11,11,11,0.06)' }} className="border border-gray-100 rounded-xl p-6 bg-white">
      {children}
    </motion.div>
  )
}
