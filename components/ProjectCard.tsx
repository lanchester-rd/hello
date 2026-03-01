import Link from 'next/link'
import { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/systems/${project.slug}`}
      className="group block bg-background border border-white/5 transition-all duration-500 hover:border-accent/40 relative overflow-hidden h-full"
    >
      <div className="aspect-video w-full overflow-hidden bg-background-layer2 p-1">
        <div className="w-full h-full relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
          <img
            src={project.thumbnail_image}
            alt={project.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-70 transition-all duration-700"
          />
          {/* Scanline effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent h-1/2 w-full -translate-y-full group-hover:translate-y-[200%] transition-transform duration-[1.5s] ease-in-out pointer-events-none" />
        </div>
      </div>

      <div className="p-8 space-y-6">
        <div className="flex justify-between items-start">
          <span className="analytical-label group-hover:text-accent transition-colors">
            {project.category}
          </span>
          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, 2).map(tag => (
              <span key={tag} className="font-mono text-[8px] px-1.5 py-0.5 border border-white/10 text-muted/60 uppercase tracking-tighter group-hover:text-white transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-bold uppercase tracking-tightest group-hover:translate-x-1 transition-transform">
            {project.name}
          </h3>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-px bg-accent/40" />
              <span className="analytical-label text-[8px] text-accent/60">Problem Defined</span>
            </div>
            <p className="text-sm text-muted leading-relaxed line-clamp-2 font-medium italic group-hover:text-white transition-colors">
              "{project.core_problem}"
            </p>
          </div>
        </div>

        <div className="pt-6 flex items-center justify-between border-t border-white/5 group-hover:border-accent/10 transition-colors">
          <span className="font-mono text-[9px] uppercase tracking-widest text-muted/30 group-hover:text-accent transition-colors">
            Analyze Mission Details
          </span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1 group-hover:text-accent">
            <path d="M1 7h12M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
