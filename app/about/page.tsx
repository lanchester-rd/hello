import SectionContainer from '../../components/SectionContainer'
import AnimatedDivider from '../../components/AnimatedDivider'
import ContactCTA from '../../components/ContactCTA'
import AnimatedCards from '../../components/AnimatedCards'

export default function AboutPage() {
  return (
    <>
      <SectionContainer className="py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-semibold">About Lanchester R&D</h1>
          <p className="mt-4 text-gray-600">Product strategy and systems design for complex domains where regulation, behavior, and scale intersect.</p>
          <div className="mt-8"><AnimatedDivider /></div>
        </div>
      </SectionContainer>

      <SectionContainer className="py-20">
        <h2 className="text-2xl font-semibold text-center">What We Care About</h2>
        <AnimatedCards />
      </SectionContainer>

      <SectionContainer className="py-20">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold">About Thomas</h3>
            <p className="mt-4 text-gray-600">Thomas builds products at the intersections of regulation, emotion, and scale. He prefers to let the work speak first — Lanchester R&D was founded to deliver senior product thinking without noise.</p>
          </div>
          <div className="h-40 md:h-56 bg-gray-100 rounded-lg flex items-center justify-center">Portrait placeholder</div>
        </div>
      </SectionContainer>

      <SectionContainer className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center">Outside the Work</h3>
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4">
              <div className="h-8 w-8 bg-gray-100 rounded-md flex items-center justify-center">Icon</div>
              <div>
                <div className="font-medium">Volunteering with food-waste organizations</div>
                <p className="text-gray-600">Helping reduce waste through pragmatic partnerships with redistribution networks.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-8 w-8 bg-gray-100 rounded-md flex items-center justify-center">Icon</div>
              <div>
                <div className="font-medium">Fostering dogs</div>
                <p className="text-gray-600">Supporting the local shelter by providing temporary homes and care.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-8 w-8 bg-gray-100 rounded-md flex items-center justify-center">Icon</div>
              <div>
                <div className="font-medium">Helping families find housing</div>
                <p className="text-gray-600">Working with community groups to support long-term housing solutions for economically homeless families.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="py-20">
        <ContactCTA />
      </SectionContainer>
    </>
  )
}
