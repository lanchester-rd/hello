import Link from 'next/link'
import { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="block rounded-xl overflow-hidden border border-gray-100 bg-white hover:shadow-md transition-shadow">
      <div className="h-40 bg-gray-100 flex items-center justify-center">Image placeholder</div>
      <div className="p-4">
        <div className="font-medium">{project.title}</div>
        <div className="mt-2 text-sm text-gray-600">{project.shortDescription}</div>
      </div>
    </Link>
  )
}
