import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Systems Archive | Lanchester R&D Project Portfolio',
  description: 'Explore Lanchester R&D\'s portfolio of complex systems projects in coordination systems, operational intelligence, market optimization, and behavioral wellbeing.',
  keywords: ['Lanchester systems', 'project portfolio', 'coordination systems', 'operational intelligence', 'product systems'],
}

export default function SystemsLayout({ children }: { children: ReactNode }) {
  return children
}
