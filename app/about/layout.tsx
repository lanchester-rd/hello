import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'About Lanchester R&D | Research and Design Lab',
  description: 'Learn about Lanchester R&D\'s five-day sprint methodology, problem-solving framework, and the principles that define our approach to Research and Design for complex systems.',
  keywords: ['Lanchester', 'research and design', 'problem solving methodology', 'tactical execution', 'systems thinking'],
}

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children
}
