import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { CTASection } from '@/components/sections/CTASection'
import { FeatureGrid } from '@/components/sections/FeatureGrid'
import { Card } from '@/components/ui/Card'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Product — Decision Canvas and Structured Decision Intelligence',
  description:
    'Explore the MagnaRix product: Decision Canvas, structured rationale capture, AI-assisted reasoning, governance workflows, and complete decision traceability.',
}

const canvasFeatures = [
  {
    icon: '▣',
    title: 'Structured Rationale Capture',
    description:
      'Record not just what was decided, but why — the options considered, the evidence examined, the trade-offs weighed, and the assumptions that underpinned the choice.',
  },
  {
    icon: '◈',
    title: 'Alternatives and Trade-offs',
    description:
      'Document rejected paths alongside the chosen one. When context changes, the full option space is available for review, not buried in forgotten attachments.',
  },
  {
    icon: '⊟',
    title: 'Assumption Logging',
    description:
      'Decisions are made under conditions that may not persist. MagnaRix makes those conditions explicit, so decisions can be re-evaluated when the assumptions that supported them shift.',
  },
  {
    icon: '◎',
    title: 'Evidence Linkage',
    description:
      'Attach source materials, analysis, data, and supporting documentation directly to the decision record. Context travels with the conclusion.',
  },
  {
    icon: '◉',
    title: 'Decision Lifecycle',
    description:
      'Decisions move through stages: proposed, under review, active, superseded, archived. Each state carries its own governance posture and visibility rules.',
  },
  {
    icon: '◫',
    title: 'Replay and Audit',
    description:
      'Reconstruct any decision at any point in its history. Understand what was known when, who contributed, and how the decision evolved.',
  },
]

const workflowFeatures = [
  {
    icon: '◐',
    title: 'Collaborative Authoring',
    description:
      'Multiple contributors can shape a decision record simultaneously, with structured roles and version control that preserves the full contribution history.',
  },
  {
    icon: '◑',
    title: 'Review and Approval Flows',
    description:
      'Define multi-stage review processes aligned with your governance model. Decisions route to the right people at the right time, with complete trail of who reviewed and approved.',
  },
  {
    icon: '◒',
    title: 'Notification and Escalation',
    description:
      'Configurable notification logic ensures that time-sensitive decisions are not delayed by manual follow-up. Escalation paths are defined, not improvised.',
  },
]

export default function ProductPage() {
  return (
    <>
      <PageHero
        label="Product"
        headline="Every decision deserves a record that endures."
        subheadline="MagnaRix structures the decisions that shape your organization — capturing the reasoning, governance, and context that turn a choice into institutional knowledge."
        cta={{
          primary: { label: 'Request a Demo', href: '/contact' },
          secondary: { label: 'Explore the Platform', href: '/platform' },
        }}
      />

      {/* Decision Canvas */}
      <section className="bg-navy section-pad">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <SectionLabel className="mb-5 block">Core Capability</SectionLabel>
              <h2 className="heading-lg mb-6">The Decision Canvas</h2>
              <p className="body-lg text-frost mb-5">
                The Decision Canvas is the foundational unit of MagnaRix. It is a structured
                record designed to capture a consequential decision in full — not as a
                summary or a title, but as a complete artifact of organizational reasoning.
              </p>
              <p className="body-lg text-frost mb-5">
                Each canvas captures the question posed, the organizational context
                in which it arose, the options that were evaluated, the criteria applied,
                the evidence consulted, the assumptions made, the authority engaged,
                and the rationale behind the conclusion.
              </p>
              <p className="body-lg text-frost">
                A Decision Canvas is designed to be useful not only at the moment a
                decision is made, but six months later when a team member asks why the
                platform was chosen, two years later when a regulator requests a
                documented audit trail, and five years later when an architect is
                considering whether to reverse a foundational choice.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { label: 'Decision Statement', detail: 'A precise articulation of what is being decided' },
                { label: 'Context and Background', detail: 'The conditions, pressures, and history that frame the decision' },
                { label: 'Options Evaluated', detail: 'All meaningful alternatives considered, with their merits and drawbacks' },
                { label: 'Evaluation Criteria', detail: 'The explicit basis on which options were compared' },
                { label: 'Evidence and Sources', detail: 'Linked materials, analysis, and data that informed the reasoning' },
                { label: 'Assumptions Made', detail: 'Conditions assumed true at the time, with their confidence levels' },
                { label: 'Rationale', detail: 'The substantive reasoning behind the final choice' },
                { label: 'Risks and Mitigations', detail: 'Known risks associated with the decision and how they are addressed' },
                { label: 'Authority and Approvers', detail: 'Who held decision rights and who ratified the outcome' },
                { label: 'Dependencies and Constraints', detail: 'What this decision depends on, and what it constrains' },
                { label: 'Review Conditions', detail: 'The triggers that should prompt this decision to be revisited' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-lg border border-steel/40 hover:border-steel transition-colors"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white text-sm font-medium">{item.label}</span>
                    <p className="text-frost text-xs mt-0.5 leading-snug">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Canvas Features */}
      <section className="bg-midnight section-pad">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel className="mb-4 block">Capabilities</SectionLabel>
            <h2 className="heading-lg">
              Built for how decisions actually work in organizations
            </h2>
          </div>
          <FeatureGrid features={canvasFeatures} columns={3} />
        </div>
      </section>

      {/* AI Reasoning */}
      <section className="bg-navy section-pad">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel className="mb-5 block">AI Assistance</SectionLabel>
              <h2 className="heading-lg mb-6">
                Intelligent support that extends judgment, not replaces it.
              </h2>
              <p className="body-lg text-frost mb-5">
                MagnaRix integrates AI assistance into the decision process in a way that
                is designed to support disciplined reasoning, not generate false confidence
                or replace the human judgment that complex decisions require.
              </p>
              <p className="body-lg text-frost mb-5">
                AI surfaces relevant prior decisions, identifies comparable situations
                in the decision record, challenges assumptions with contextual reasoning,
                suggests dimensions of the decision that may have been overlooked, and
                supports structured analysis of trade-offs.
              </p>
              <p className="body-lg text-frost">
                Every AI contribution to a decision record is marked, versioned, and
                traceable. The reasoning chain from human intent to AI output to final
                decision remains fully visible and auditable.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  title: 'Context retrieval',
                  description: 'Surface the decisions, evidence, and assumptions most relevant to the decision at hand, drawn from the organizational decision record.',
                },
                {
                  title: 'Assumption challenge',
                  description: 'Identify assumptions that may be weakly supported, in tension with each other, or contradicted by prior decisions elsewhere in the record.',
                },
                {
                  title: 'Option generation',
                  description: 'Propose alternatives that may not have been considered, with structured prompts that help decision authors evaluate their completeness.',
                },
                {
                  title: 'Trade-off articulation',
                  description: 'Help decision authors think through the second-order consequences of each option in a structured, systematic way.',
                },
                {
                  title: 'Rationale structuring',
                  description: 'Support the articulation of clear, coherent rationale that accurately reflects the reasoning behind a decision.',
                },
              ].map((item, i) => (
                <Card key={i}>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-accent text-xs">&#10022;</span>
                    </div>
                    <div>
                      <h3 className="text-white text-sm font-semibold mb-1.5">{item.title}</h3>
                      <p className="text-frost text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-midnight section-pad">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel className="mb-4 block">Decision Workflow</SectionLabel>
            <h2 className="heading-lg mb-5">
              Governance built into the process, not bolted on afterward.
            </h2>
            <p className="body-lg text-frost">
              MagnaRix structures the decision workflow from initiation through approval
              and into the decision record. Governance is not a separate compliance layer
              — it is how decisions move through the organization.
            </p>
          </div>
          <FeatureGrid features={workflowFeatures} columns={3} />
        </div>
      </section>

      <CTASection
        headline="See the Decision Canvas in action."
        body="We can walk you through how MagnaRix would work for the specific kinds of decisions your organization makes most frequently."
        secondaryLabel="View Platform Architecture"
        secondaryHref="/platform"
      />
    </>
  )
}
