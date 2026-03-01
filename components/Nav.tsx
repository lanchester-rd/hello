"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/strategy', label: 'Method' },
  { href: '/systems', label: 'Systems' },
  { href: '/founder', label: 'Principal' },
  { href: '/research', label: 'Intelligence' },
  { href: '/about', label: 'Lab' },
  { href: '/foundation', label: 'Foundation' },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-500 ${isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link
          href="/"
          className="group flex flex-col"
          aria-label="Lanchester R&D"
        >
          <span className="text-sm font-bold tracking-tightest uppercase flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Lanchester R&D
          </span>
          <span className="font-mono text-[8px] uppercase tracking-widest text-muted group-hover:text-accent transition-colors">
            Tactical Exploration Lab
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[10px] uppercase font-bold tracking-[0.2em] transition-all hover:text-accent ${pathname === item.href ? 'text-accent' : 'text-muted/80'
                }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/partner" className="text-[10px] uppercase font-bold tracking-widest px-4 py-2 border border-accent/40 text-accent hover:bg-accent hover:text-background transition-all">
            Partner
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`h-px bg-white transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-px bg-white transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-px bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[61px] bg-black z-[100] md:hidden px-6 py-12 flex flex-col gap-8 animate-in fade-in slide-in-from-top-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-2xl font-bold uppercase tracking-tightest ${pathname === item.href ? 'text-accent' : 'text-white'
                }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/partner" className="text-xl font-bold uppercase tracking-widest text-accent pt-6 border-t border-white/5">
            Initiate Engagement →
          </Link>
        </div>
      )}
    </header>
  )
}
