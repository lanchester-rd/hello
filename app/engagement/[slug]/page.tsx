import SectionContainer from '../../../components/SectionContainer'
import PageHero from '../../../components/PageHero'
import AnimatedDivider from '../../../components/AnimatedDivider'
import SelectedWork from '../../../components/SelectedWork'
import MetricBlock from '../../../components/MetricBlock'
import { projects } from '../../../data/projects'
import ContactCTA from '../../../components/ContactCTA'

type Props = { params: { slug: string } }

const modeMap: Record<string, { title: string; description: string }> = {
  'venture-builder': {
    title: 'Venture Builder',
    description: 'We work with founding teams to turn ambiguity into structured, testable product strategy.'
  },
  'product-leadership-partner': {
    title: 'Product Leadership Partner',
    description: 'We support scaling organisations with structured product governance and execution clarity.'
  },
  'design-systems': {
    title: 'Design Systems & Product Coherence',
    description: 'We create product systems that scale without fragmenting.'
  },
  'regulated-systems': {
    title: 'Regulated Systems Strategy',
    description: 'We design product infrastructure that operates inside legal, compliance, and operational constraints.'
  }
}

export default function EngagementPage({ params }: Props) {
  const { slug } = params
  const mode = modeMap[slug] || { title: slug.replace('-', ' '), description: '' }
  const related = projects.filter(p => p.engagementModes.includes(slug))
  const blocksBySlug: Record<string, { title: string; body: string }[]> = {
    'venture-builder': [
      { title: 'Strategic Framing', body: 'We clarify the real problem, identify the leverage point, and define a product hypothesis worth building.' },
      { title: 'Execution Model', body: 'We scope intelligent MVPs that validate learning without overbuilding.' },
      { title: 'Outcomes', body: 'Clear product direction, faster iteration cycles, aligned founder–product–market narrative.' }
    ],
    'product-leadership-partner': [
      { title: 'Roadmap Alignment', body: 'Align product direction with revenue, expansion, and operational realities.' },
      { title: 'Organizational Design', body: 'Clarify roles, decision-making systems, and product rituals.' },
      { title: 'Expansion Strategy', body: 'Structure product for multi-market and regulatory growth.' }
    ],
    'design-systems': [
      { title: 'Interaction Architecture', body: 'Define interaction models that reduce cognitive load.' },
      { title: 'Design Governance', body: 'Create scalable design frameworks and principles.' },
      { title: 'Emotional Clarity', body: 'Ensure products communicate stability, clarity, and trust.' }
    ],
    'regulated-systems': [
      { title: 'Compliance-Aware Architecture', body: 'Structure systems that anticipate audit and documentation needs.' },
      { title: 'Traceable Workflows', body: 'Design flows that produce defensible records.' },
      { title: 'Cross-Market Adaptability', body: 'Build systems that survive jurisdictional differences.' }
    ]
  }

  const blocks = blocksBySlug[slug] || blocksBySlug['venture-builder']

  return (
    <>
      <SectionContainer className="py-20">
        <PageHero title={mode.title} description={mode.description} />
        <div className="mt-8"><AnimatedDivider /></div>
      </SectionContainer>

      <SectionContainer className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blocks.map((b) => (
            <div key={b.title} className="text-center md:text-left">
              <div className="h-12 w-12 bg-gray-100 rounded-md mb-4 flex items-center justify-center">Icon</div>
              <h4 className="font-semibold">{b.title}</h4>
              <p className="mt-2 text-gray-600">{b.body}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      <section className="bg-gray-50 py-20">
        <SectionContainer>
          <h3 className="text-2xl font-semibold">Selected Work For This Mode</h3>
          <div className="mt-6">
            <SelectedWork filter={slug} />
          </div>
        </SectionContainer>
      </section>

      <SectionContainer className="py-20">
        <h3 className="text-2xl font-semibold">Outcomes & Signals</h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 border rounded-md">
            <h5 className="font-semibold">Direction</h5>
            <p className="mt-2 text-gray-600">A documented product direction and hypothesis that guides trade-offs and prioritisation.</p>
          </div>

          <div className="p-6 border rounded-md">
            <h5 className="font-semibold">Velocity</h5>
            <p className="mt-2 text-gray-600">Faster, safer iteration cycles with clear learning goals and criteria for continuation.</p>
          </div>

          <div className="p-6 border rounded-md">
            <h5 className="font-semibold">Alignment</h5>
            <p className="mt-2 text-gray-600">Shared narratives and governance that reduce cross-functional friction and improve decision clarity.</p>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h4 className="text-lg font-semibold">Start a Conversation</h4>
          <p className="mt-4 text-gray-600">If you would like to explore an engagement, we can outline a concise scope and the initial decision milestones required to learn and reduce risk.</p>
        </div>
      </SectionContainer>
  
  <SectionContainer className="py-12">
    <ContactCTA />
  </SectionContainer>
    </>
  )
}
