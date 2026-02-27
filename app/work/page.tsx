"use client"
import SectionContainer from '../../components/SectionContainer'
import ProjectCard from '../../components/ProjectCard'
import { projects } from '../../data/projects'
import { useState } from 'react'
import ContactCTA from '../../components/ContactCTA'

const modes = [
  { key: 'all', label: 'All' },
  { key: 'venture-builder', label: 'Venture Builder' },
  { key: 'product-leadership-partner', label: 'Product Leadership Partner' },
  { key: 'design-systems', label: 'Design Systems' },
  { key: 'regulated-systems', label: 'Regulated Systems' }
]

export default function WorkIndex() {
  const [filter, setFilter] = useState('all')
  const list = filter === 'all' ? projects : projects.filter(p => p.engagementModes.includes(filter))

  return (
    <SectionContainer className="py-20">
      <h1 className="text-3xl font-semibold">Case Studies</h1>
      <p className="mt-4 text-gray-600">Selected case studies demonstrate how Lanchester R&D applies structured thinking across consumer platforms, regulated systems, logistics, energy, and community infrastructure. Each project represents a different leverage point inside a product ecosystem.</p>

      <div className="mt-8 flex gap-3 items-center flex-wrap">
        {modes.map(m => (
          <button key={m.key} onClick={() => setFilter(m.key)} className={`px-3 py-1 rounded-full text-sm ${filter === m.key ? 'bg-accent text-white' : 'border border-gray-100 text-gray-800'}`}>
            {m.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map(p => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      <div className="mt-12">
        <ContactCTA />
      </div>
    </SectionContainer>
  )
}
