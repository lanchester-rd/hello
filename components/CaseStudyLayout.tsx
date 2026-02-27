import { Project } from '../data/projects'
import AnimatedDivider from './AnimatedDivider'
import ContactCTA from './ContactCTA'

export default function CaseStudyLayout({ project, children }: { project: Project; children?: React.ReactNode }) {
  return (
    <div>
      <section className="py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-sm text-gray-600">{project.category}</div>
          <h1 className="text-3xl md:text-4xl font-semibold mt-2">{project.title}</h1>
          <p className="mt-4 text-gray-600 max-w-3xl">{project.shortDescription}</p>
          <div className="mt-8 h-64 bg-gray-100 rounded-lg flex items-center justify-center">Large visual placeholder</div>
        </div>
        <div className="mt-8"><AnimatedDivider /></div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold">The Problem</h3>
          <p className="mt-4 text-gray-600">Left-aligned detail about the problem space. Placeholder text describing the challenge.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold">Strategic Hypothesis</h3>
          <p className="mt-4 text-gray-600">Subtle contrast section outlining the strategic hypothesis.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold">System Architecture</h4>
            <p className="mt-3 text-gray-600">Text describing architecture and interactions.</p>
          </div>
          <div className="h-48 bg-gray-100 rounded-md flex items-center justify-center">Diagram placeholder</div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold">Product Execution</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-100 rounded-md">Execution pillar placeholder</div>
            <div className="p-4 border border-gray-100 rounded-md">Execution pillar placeholder</div>
            <div className="p-4 border border-gray-100 rounded-md">Execution pillar placeholder</div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold">Measurable Outcomes</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {project.metrics?.map((m, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-semibold">{m.value}</div>
                <div className="mt-2 text-sm text-gray-600">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold">What We'd Do Next</h3>
          <p className="mt-4 text-gray-600">Forward-looking perspective and next steps placeholder.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto">
          <ContactCTA />
        </div>
      </section>

          {children}
    </div>
  )
}
