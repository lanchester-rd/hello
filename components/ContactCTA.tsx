"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ContactCTA() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-gray-100 rounded-lg p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white">
      <div>
        <h4 className="text-xl font-semibold">Work with Lanchester R&D</h4>
        <p className="mt-2 text-gray-600">We help organizations design product strategy and systems thinking for complex domains.</p>
      </div>
      <div className="flex gap-3">
        <Link href="/contact" className="px-5 py-3 bg-accent text-white rounded-md">Start a conversation</Link>
        <Link href="/engagement/venture-builder" className="px-5 py-3 border border-gray-100 rounded-md">Explore engagement models</Link>
      </div>
    </motion.div>
  )
}
