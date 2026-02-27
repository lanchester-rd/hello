import SectionContainer from '../../../components/SectionContainer'
import PageHero from '../../../components/PageHero'
import AnimatedDivider from '../../../components/AnimatedDivider'
import SelectedWork from '../../../components/SelectedWork'
import MetricBlock from '../../../components/MetricBlock'
import { projects } from '../../../data/projects'
import ContactCTA from '../../../components/ContactCTA'

type Props = { params: { slug: string } }

const modeMap: Record<string, { title: string; description: string }> = {
  'venture-builder': { title: 'Venture Builder', description: 'Placeholder positioning for Venture Builder.' },
  'product-leadership-partner': { title: 'Product Leadership Partner', description: 'Placeholder positioning for Product Leadership Partner.' },
  'design-systems': { title: 'Design Systems & Coherence', description: 'Placeholder positioning for Design Systems.' },
  'regulated-systems': { title: 'Regulated Systems Strategy', description: 'Placeholder positioning for Regulated Systems.' }
}

export default function EngagementPage({ params }: Props) {
  const { slug } = params
  const mode = modeMap[slug] || { title: slug.replace('-', ' '), description: '' }
  const related = projects.filter(p => p.engagementModes.includes(slug))

  return (
    <>
      <SectionContainer className="py-20">
        <PageHero title={mode.title} description={mode.description} />
        <div className="mt-8"><AnimatedDivider /></div>
      </SectionContainer>

      <SectionContainer className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center md:text-left">
            <div className="h-12 w-12 bg-gray-100 rounded-md mb-4 flex items-center justify-center">Icon</div>
            <h4 className="font-semibold">Strategic Framing</h4>
            <p className="mt-2 text-gray-600">Placeholder text describing strategic framing.</p>
          </div>
          <div className="text-center md:text-left">
            <div className="h-12 w-12 bg-gray-100 rounded-md mb-4 flex items-center justify-center">Icon</div>
            <h4 className="font-semibold">Execution Model</h4>
            <p className="mt-2 text-gray-600">Placeholder for execution model description.</p>
          </div>
          <div className="text-center md:text-left">
            <div className="h-12 w-12 bg-gray-100 rounded-md mb-4 flex items-center justify-center">Icon</div>
            <h4 className="font-semibold">Outcomes</h4>
            <p className="mt-2 text-gray-600">Placeholder for measurable outcomes and signals of success.</p>
          </div>
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
        <h3 className="text-2xl font-semibold">Measurable Outcomes</h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <MetricBlock value="+X%" label="Efficiency" />
          <MetricBlock value="-X%" label="Reduced Cost" />
          <MetricBlock value="X" label="Launched Markets" />
        </div>
      </SectionContainer>

      <SectionContainer className="py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h4 className="text-lg font-semibold">Start a Conversation</h4>
          <p className="mt-4 text-gray-600">Minimal CTA placeholder — contact flow to be wired later.</p>
        </div>
      </SectionContainer>
  
  <SectionContainer className="py-12">
    <ContactCTA />
  </SectionContainer>
    </>
  )
}
