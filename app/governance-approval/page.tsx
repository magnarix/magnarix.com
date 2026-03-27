import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/sections/PageHero'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Governance & Approval — MagnaRix',
  description:
    'How consequential decisions move through explicit authority, approval, ownership, and accountability.',
}

export default function GovernanceApprovalPage() {
  return (
    <>
      <PageHero
        label="Governance & Approval"
        headline="Where authority becomes explicit."
        subheadline="Consequential decisions involve more than reasoning alone. They move through review, ownership, approval, and accountability. Governance & Approval makes these elements visible within the decision itself."
      />

      <section className="bg-navy section-pad">
        <div className="section-container max-w-3xl">
          <SectionLabel className="mb-5 block">The Condition</SectionLabel>

          <h2 className="heading-md mb-6">
            When authority remains implicit
          </h2>

          <div className="space-y-5 text-frost leading-relaxed">
            <p>
              In many organizations, decisions emerge through meetings, messages, and informal alignment. A direction may be understood, yet the authority behind it remains difficult to trace.
            </p>
            <p>
              Over time, uncertainty appears around who approved the decision, what level of review was applied, and whether the right governance path was followed.
            </p>
            <p>
              This ambiguity weakens continuity. What was once understood in the moment becomes difficult to verify later.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-midnight section-pad">
        <div className="section-container max-w-3xl">
          <SectionLabel className="mb-5 block">Governance & Approval</SectionLabel>

          <h2 className="heading-md mb-6">
            A decision with governed form
          </h2>

          <div className="space-y-5 text-frost leading-relaxed">
            <p>
              Governance & Approval makes authority part of the decision record itself. Ownership, review, approval, and governed state are preserved as explicit elements rather than assumed from surrounding process.
            </p>
            <p>
              Each decision can move through defined stages, with visible participants, decision rights, and approval structures appropriate to its significance.
            </p>
            <p>
              The result is not merely a record of what was chosen, but a record of how responsibility was exercised.
              Where analytical assistance participates in this process, it is described in{' '}
              <Link href="/advisory-intelligence" className="text-accent hover:text-accent-light transition-colors">Advisory Intelligence</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy section-pad">
        <div className="section-container max-w-3xl">
          <SectionLabel className="mb-5 block">What Becomes Visible</SectionLabel>

          <h2 className="heading-md mb-8">
            The elements governance must preserve
          </h2>

          <div className="space-y-8 text-frost leading-relaxed">
            <div>
              <h3 className="text-white font-semibold mb-2">Ownership</h3>
              <p>
                The person or role accountable for the decision as it moves through formation, review, and authorization.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Approval</h3>
              <p>
                The explicit act by which a decision is authorized, including who approved it and when that approval was given.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Decision rights</h3>
              <p>
                The authority structures that determine who may propose, review, advise, escalate, or approve.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Governed state</h3>
              <p>
                The stage a decision occupies within its lifecycle, including whether it is under review, approved, active, superseded, or retained for reference.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Accountability</h3>
              <p>
                A traceable record showing how review and authorization were exercised across time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-midnight section-pad">
        <div className="section-container max-w-3xl">
          <SectionLabel className="mb-5 block">Across the Organization</SectionLabel>

          <h2 className="heading-md mb-6">
            Governance that remains legible beyond the meeting
          </h2>

          <div className="space-y-5 text-frost leading-relaxed">
            <p>
              Governance often appears most clearly in the moment it is exercised. Once that moment passes, organizations are left with summaries, assumptions, and partial records.
            </p>
            <p>
              Governance & Approval allows the original authority structure to remain visible as teams change, programs evolve, and later reviews revisit the decision.
            </p>
            <p>
              This continuity supports architecture boards, executive committees, risk reviews, compliance functions, and any setting where responsibility must remain clear after the fact.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy section-pad">
        <div className="section-container max-w-3xl">
          <SectionLabel className="mb-5 block">Organizational Effect</SectionLabel>

          <h2 className="heading-md mb-6">
            When governance becomes structural
          </h2>

          <div className="space-y-5 text-frost leading-relaxed">
            <p>
              Governance & Approval reduces dependence on informal recollection and leaves a decision with an explicit path of review and authorization.
            </p>
            <p>
              Organizations gain a clearer understanding of how consequential choices were governed, who held authority, and how accountability was exercised.
            </p>
            <p>
              The decision remains intelligible as a governed act rather than only as an outcome.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-midnight section-pad border-t border-steel/50">
        <div className="section-container text-center max-w-2xl">
          <p className="text-frost mb-8 leading-relaxed">
            Governance & Approval allows consequential decisions to remain visible as acts of responsibility, review, and authorization across time.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/platform" className="btn-primary">
              View Platform Architecture
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
