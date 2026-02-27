"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const engagementItems = [
  { href: '/engagement/venture-builder', label: 'Venture Builder' },
  { href: '/engagement/product-leadership-partner', label: 'Product Leadership Partner' },
  { href: '/engagement/design-systems', label: 'Design Systems & Coherence' },
  { href: '/engagement/regulated-systems', label: 'Regulated Systems Strategy' }
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(false)

  useEffect(() => {
    const handler = () => setOpen(false)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <header className="sticky top-0 z-40 bg-white/60 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-lg font-semibold">Lanchester R&D</div>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <div className="relative">
            <button onMouseEnter={() => setOpenDropdown(true)} onMouseLeave={() => setOpenDropdown(false)} className="flex items-center gap-2">
              Engagement Models
            </button>
            <AnimatePresence>
              {openDropdown && (
                <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.18 }} onMouseEnter={() => setOpenDropdown(true)} onMouseLeave={() => setOpenDropdown(false)} className="absolute right-0 mt-3 w-64 bg-white border border-gray-100 rounded-md shadow-sm p-3">
                  <div className="flex flex-col gap-2">
                    {engagementItems.map(i => (
                      <Link key={i.href} href={i.href} className="text-sm text-gray-800 hover:text-accent">{i.label}</Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <a href="/?legacy=1" target="_blank" rel="noopener noreferrer">2017 - 2024</a>
          <Link href="/contact">Contact</Link>
          <Link href="/contact" className="ml-4 px-3 py-2 bg-accent text-white rounded-md text-sm">Start a conversation</Link>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d={open ? 'M6 18L18 6M6 6l12 12' : 'M3 6h18M3 12h18M3 18h18'} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100">
            <div className="px-6 py-4 space-y-3">
            <div className="flex flex-col">
              {engagementItems.map(i => (
                <Link key={i.href} href={i.href}>{i.label}</Link>
              ))}
            </div>
            <Link href="/work">Work</Link>
            <Link href="/about">About</Link>
            <a href="/?legacy=1" target="_blank" rel="noopener noreferrer">2017 - 2024</a>
            <Link href="/contact">Contact</Link>
            <Link href="/contact" className="inline-block mt-2 px-3 py-2 bg-accent text-white rounded-md">Start a conversation</Link>
          </div>
        </div>
      )}
    </header>
  )
}
