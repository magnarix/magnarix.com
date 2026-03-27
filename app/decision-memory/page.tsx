import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/sections/PageHero'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Decision Memory — MagnaRix',
  description:
    'A structured approach to preserving the reasoning, context, and lineage of consequential decisions.',
}

export default function DecisionMemoryPage() {
  return (
    <>
      <PageHero
        label="Decision Memory"
        headline="Where decisions remain visible across time."
        subheadline="Decisions shape systems, direction, and outcomes. The reasoning behind them rarely remains intact. Decision Memory provides a way for decisions to persist as coherent, governed records rather than fragments dispersed across documents and conversations."
      />

      {/* The Problem */}
      <section className="bg-navy section-pad">
        <div className="section-container max-w-3xl">
          <SectionLabel className="mb-5 block">The Problem</SectionLabel>

          <h2 className="heading-md mb-6">
            When decisions do not persist
          </h2>

          <div className="space-y-5 text-frost leading-relaxed">
            <p>
              Decisions are made across documents, presentations, meetings, and informal exchanges. The reasoning that forms them is distributed across these artifacts and rarely preserved as a coherent whole.
            </p>
            <p>
              Over time, the original context becomes difficult to reconstruct. Teams revisit outcomes without direct access to the assumptions, constraints, and alternatives that shaped them.
            </p>
            <p>
              As individuals move on, the decision becomes dependent on recollection rather than record. What remains is often partial, fragmented, or inferred.
            </p>
          </div>
        </div>
      </section>

      {/* What Decision Memory Is */}
      <section className="bg-midnight section-pad">
        <div className="section-container max-w-3xl">
          <SectionLabel className="mb-5 block">Decision Memory</SectionLabel>

          <h2 className="heading-md mb-6">
            A decision as a durable record
          </h2>

          <div className="space-y-5 text-frost leading-relaxed">
            <p>
              Decision Memory treats the decision itself as a distinct, structured entity. Each decision is recorded with its reasoning, alternatives, constraints, risks, and the context in which it was made.
            </p>
            <p>
              The record is versioned, governed, and queryable. It can be revisited, examined, and extended without requiring reconstruction from surrounding artifacts.
            </p>
            <p>
              The decision remains intact as a coherent object, rather than dissolving into the systems it influences.
              This continuity depends on{' '}
              <Link href="/governance-approval" className="text-accent hover:text-accent-light transition-colors">Governance &amp; Approval</Link>{' '}
              remaining visible within the record itself.
              Where analysis participates in that record, it is further described in{' '}
              <Link href="/advisory-intelligence" className="text-accent hover:text-accent-light transition-colors">Advisory Intelligence</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* What Is Preserved */}
      <section className="bg-navy section-pad">
        <div className="section-container max-w-3xl">
          <SectionLabel className="mb-5 block">What Is Preserved</SectionLabel>

          <h2 className="heading-md mb-8">
            The elements that typically disappear
          </h2>

          <div className="space-y-8 text-frost leading-relaxed">

            <div>
              <h3 className="text-white font-semibold mb-2">Reasoning</h3>
              <p>
                The logic that led to a decision, including how different factors were interpreted and weighed.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Context</h3>
              <p>
                The conditions under which the decision was made, including constraints, timing, and external pressures.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Alternatives and trade-offs</h3>
              <p>
                The options considered and the trade-offs evaluated before arriving at a direction.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Accountability</h3>
              <p>
                The individuals and roles involved in forming, reviewing, and approving the decision.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Lineage</h3>
              <p>
                How the decision relates to prior decisions and how it informs those that follow.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Across Time */}
      <section className="bg-midnight section-pad">
        <div className="section-container max-w-3xl">
          <SectionLabel className="mb-5 block">Across Time</SectionLabel>

          <h2 className="heading-md mb-6">
            Continuity beyond the moment of decision
          </h2>

          <div className="space-y-5 text-frost leading-relaxed">
            <p>
              Decisions are often revisited long after they are made. Without a preserved record, teams must reconstruct intent from incomplete information.
            </p>
            <p>
              Decision Memory allows the original reasoning to remain visible. New participants can understand the basis for prior choices without relying on second-hand interpretation.
            </p>
            <p>
              Continuity is maintained even as roles change, teams evolve, and organizational context shifts.
            </p>
          </div>
        </div>
      </section>

      {/* Organizational Effect */}
      <section className="bg-navy section-pad">
        <div className="section-container max-w-3xl">
          <SectionLabel className="mb-5 block">Organizational Effect</SectionLabel>

          <h2 className="heading-md mb-6">
            When memory becomes structural
          </h2>

          <div className="space-y-5 text-frost leading-relaxed">
            <p>
              Decision Memory reduces dependence on individual recollection and makes institutional knowledge accessible beyond the moment in which it was formed.
            </p>
            <p>
              Governance becomes more grounded, as decisions can be examined directly rather than inferred from outcomes.
            </p>
            <p>
              Organizations gain the ability to revisit, understand, and extend prior decisions with greater clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-midnight section-pad border-t border-steel/50">
        <div className="section-container text-center max-w-2xl">
          <p className="text-frost mb-8 leading-relaxed">
            Decision Memory allows the reasoning behind consequential decisions to remain visible. What was once reconstructed can now be examined directly.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="/product" className="btn-primary">
              View the Product
            </a>
            <a href="/contact" className="btn-secondary">
              Contact
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
