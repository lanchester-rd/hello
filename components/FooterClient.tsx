"use client"
import { usePathname } from 'next/navigation'
import Footer from './Footer'

export default function FooterClient() {
  const pathname = usePathname()

  // Hide the footer on the homepage
  if (pathname === '/') return null

  return <Footer />
}
