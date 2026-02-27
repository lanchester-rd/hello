"use client"
import { projects as allProjects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function SelectedWork({ filter }: { filter?: string }) {
  const list = filter ? allProjects.filter(p => p.engagementModes.includes(filter)) : allProjects.slice(0, 4)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      <div className="col-span-1">
        <h2 className="text-3xl font-semibold">Selected Work</h2>
        <p className="mt-4 text-gray-600">A preview of select projects — scaffold only. Clean layout for future case studies.</p>
      </div>
      <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {list.map(p => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  )
}
