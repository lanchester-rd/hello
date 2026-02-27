import CaseStudyLayout from '../../../components/CaseStudyLayout'
import { projects } from '../../../data/projects'

type Props = { params: { slug: string } }

export default function WorkPage({ params }: Props) {
  const { slug } = params
  const project = projects.find(p => p.slug === slug)

  if (!project) return <div className="max-w-4xl mx-auto px-6 py-32">Project not found</div>

  return (
    <CaseStudyLayout project={project} />
  )
}
