import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Principal Founder | Lanchester R&D Leadership',
  description: 'Meet the founder and vision behind Lanchester R&D. Learn about the principal\'s experience in research, design, and building resilient systems.',
  keywords: ['Lanchester founder', 'leadership', 'research director', 'product strategy'],
}

export default function FounderLayout({ children }: { children: ReactNode }) {
  return children
}
