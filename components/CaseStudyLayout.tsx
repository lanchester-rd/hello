import { Project } from '../data/projects'
import AnimatedDivider from './AnimatedDivider'
import ContactCTA from './ContactCTA'
import ComplexityTag from './ComplexityTag'

export default function CaseStudyLayout({ project, children }: { project: Project; children?: React.ReactNode }) {
  return (
    <div>
      <section className="py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-sm text-gray-600">{project.category}</div>
          <h1 className="text-3xl md:text-4xl font-semibold mt-2">{project.title}</h1>
          <p className="mt-4 text-gray-600 max-w-3xl">{project.shortDescription}</p>

          {project.complexityTags && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.complexityTags.map((t) => (
                <ComplexityTag key={t}>{t}</ComplexityTag>
              ))}
            </div>
          )}

          <div className="mt-8 h-64 bg-gray-100 rounded-lg flex items-center justify-center">Large visual placeholder</div>
        </div>
        <div className="mt-8"><AnimatedDivider /></div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold">The Problem</h3>
          <p className="mt-4 text-gray-600">{`Work with us to articulate the systemic tension this project addresses: operational constraints, user incentives, and regulatory boundaries that shape product choices.`}</p>
          <p className="mt-4 text-gray-600">{`We frame the problem in terms of the system: data flows, decision points, and where institutional friction accumulates.`}</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold">Strategic Hypothesis</h3>
          <p className="mt-4 text-gray-600">{`A concise leverage hypothesis that identifies where a small change in product or process yields sustained learning or reduced risk.`}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold">System Architecture</h4>
            <p className="mt-3 text-gray-600">{`Describe the primary workflows, the actors involved, and where data is persisted or transformed. Note audit and traceability touchpoints where relevant.`}</p>
            <p className="mt-3 text-gray-600">{`Outline service boundaries, key integration points, and the operational rules that make the system defensible.`}</p>
          </div>
          <div className="h-48 bg-gray-100 rounded-md flex items-center justify-center">Diagram placeholder</div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold">Product Execution</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-100 rounded-md">
              <h5 className="font-semibold">Prioritised Learning</h5>
              <p className="mt-2 text-gray-600">Define experiments that separate assumptions from facts and focus on the riskiest hypotheses.</p>
            </div>

            <div className="p-4 border border-gray-100 rounded-md">
              <h5 className="font-semibold">Incremental Delivery</h5>
              <p className="mt-2 text-gray-600">Ship narrow slices that produce usable outcomes and instrument them for learning.</p>
            </div>

            <div className="p-4 border border-gray-100 rounded-md">
              <h5 className="font-semibold">Governed Rollout</h5>
              <p className="mt-2 text-gray-600">Use guarded releases, monitoring and clear decision gates to expand reach safely.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold">Measurable Outcomes</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {project.metrics?.map((m, i) => (
              <div key={i} className="p-4 border rounded-md">
                <div className="text-sm text-gray-600">{m.label}</div>
                <div className="mt-2 text-gray-800">{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold">What We'd Do Next</h3>
          <p className="mt-4 text-gray-600">{`Refine the scope into a concise workplan with decision gates, instrumentation requirements, and an initial rollout guardrail.`}</p>
          <p className="mt-4 text-gray-600">{`Recommend immediate next steps that reduce the largest sources of uncertainty and preserve auditability where required.`}</p>
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
