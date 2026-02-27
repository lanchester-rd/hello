import Link from 'next/link'
import { Project } from '../data/projects'
import ComplexityTag from './ComplexityTag'
import Tilt from './Tilt'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Tilt>
      <motion.div whileHover={{ y: -6 }} className="project-card card hover:shadow-lg transition-transform transform">
        <Link href={`/work/${project.slug}`} className="block relative">
          <div className="project-card-image">
            <img
              src={project.thumbnail || project.image || '/images/portfolio/placeholder.png'}
              alt={project.title}
              className="w-full h-40 object-cover rounded-t-md"
            />
          </div>
          <div className="card-overlay">
            <div className="overlay-cta">View case study</div>
          </div>
          <div className="p-4">
            <div className="project-card-title">{project.title}</div>
            <div className="mt-2 project-card-desc">{project.shortDescription}</div>

            {project.complexityTags && project.complexityTags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {project.complexityTags.slice(0,3).map((t) => (
                  <ComplexityTag key={t}>{t}</ComplexityTag>
                ))}
              </div>
            )}
          </div>
        </Link>
      </motion.div>
    </Tilt>
  )
}
