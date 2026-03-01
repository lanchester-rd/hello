import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Autonomous Dispatch Systems | Lanchester R&D',
  description: 'Lanchester R&D research on autonomous dispatch coordination systems for optimizing logistics, resource allocation, and operational efficiency in field operations.',
  keywords: ['autonomous dispatch', 'logistics optimization', 'coordination systems', 'lanchester research'],
}

export default function AutonomousDispatchLayout({ children }: { children: ReactNode }) {
  return children
}
