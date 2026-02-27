"use client"
import { projects as allProjects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function SelectedWork({ filter }: { filter?: string }) {
  const minShow = 4
  const maxShow = 6

  let list = filter ? allProjects.filter(p => p.engagementModes.includes(filter)) : allProjects.slice(0, 4)

  if (filter) {
    // If fewer than minShow, append other projects (preserving existing order) until minShow or exhaust list
    if (list.length < minShow) {
      const extras = allProjects.filter(p => !list.some(lp => lp.slug === p.slug))
      for (const e of extras) {
        list.push(e)
        if (list.length >= minShow) break
      }
    }

    // Limit to maxShow
    list = list.slice(0, maxShow)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      <div className="col-span-1">
        <h2 className="text-3xl font-semibold">Selected Work</h2>
        <p className="mt-4 text-gray-600">A preview of select projects — examples of systems thinking applied across industries.</p>
      </div>
      <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {list.map(p => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  )
}
