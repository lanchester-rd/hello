import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Predictive Roof Maintenance | Lanchester R&D Intelligence',
  description: 'Lanchester R&D research on predictive maintenance systems for roofing infrastructure using data-driven deterioration modeling and predictive analytics.',
  keywords: ['predictive maintenance', 'roof maintenance', 'lanchester research', 'predictive analytics', 'infrastructure'],
}

export default function PredictiveRoofMaintenanceLayout({ children }: { children: ReactNode }) {
  return children
}
