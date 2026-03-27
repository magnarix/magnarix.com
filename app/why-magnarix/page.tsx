import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/sections/PageHero'
import { CTASection } from '@/components/sections/CTASection'
import { Card } from '@/components/ui/Card'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Why MagnaRix — MagnaRix',
  description:
    'Why consequential decisions are poorly preserved, why existing tools leave the condition unresolved, and why decision memory, governance, and advisory intelligence belong together.',
}

export default function WhyMagnarixPage() {
  return (
    <>
      <PageHero
        label="Why MagnaRix"
        headline="Organizations make decisions every day. What is often missing is the infrastructure that allows those decisions to remain governed across time."
        subheadline="MagnaRix takes form within a condition in which the tools organizations rely on were never designed to preserve, govern, or learn from consequential decisions as decisions."
        cta={{
          primary: { label: 'Begin a Conversation', href: '/contact' },
          secondary: { label: 'View the Product', href: '/product' },
        }}
      />

      {/* Why decisions are lost */}
      <section className="bg-navy section-pad">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionLabel className="mb-5 block">The Core Problem</SectionLabel>
              <h2 className="heading-lg mb-6">
                Why enterprise decisions are poorly preserved
              </h2>
              <p className="body-lg text-frost mb-5">
                Most organizations have well-developed processes for making decisions
                but almost no systematic infrastructure for preserving what was decided,
                why it was decided, and what conditions made it sensible at the time.
              </p>
              <p className="body-lg text-frost mb-5">
                Decisions are communicated through emails and presentations. Rationale
                lives in the minds of meeting participants. Evidence is attached to
                tickets that close. Options considered are rarely documented. The
                assumptions that made a decision reasonable fade as conditions change.
              </p>
              <p className="body-lg text-frost">
                The result is an organization that makes new decisions without adequate
                access to the reasoning that shaped prior ones — and that repeatedly
                encounters the costs of institutional amnesia.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  headline: 'Teams inherit outcomes, not understanding',
                  body: 'When decisions are not documented with their rationale, incoming team members are forced to reverse-engineer why choices were made — and often cannot. They may unknowingly revisit settled questions or fail to see why certain constraints exist.',
                },
                {
                  headline: 'Governance is applied retrospectively',
                  body: 'Without a structured decision record, governance bodies are left reviewing outcomes after the fact. Accountability becomes reactive, and the decisions that create exposure often remain invisible until their effects are already present.',
                },
                {
                  headline: 'Audit trails are constructed, not maintained',
                  body: 'When regulators or boards ask for the documentation supporting a significant decision, most organizations must reconstruct an account from scattered sources. This is time-consuming, incomplete, and exposes the organization to interpretive risk.',
                },
                {
                  headline: 'Organizational learning does not compound',
                  body: 'Without a governed record of past decisions, organizations cannot systematically learn from them. The same decision patterns recur. The same assumptions go unchallenged. The same governance failures repeat.',
                },
              ].map((item, i) => (
                <Card key={i}>
                  <h3 className="heading-sm mb-3">{item.headline}</h3>
                  <p className="text-frost text-sm leading-relaxed">{item.body}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why tools fail */}
      <section className="bg-midnight section-pad">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel className="mb-4 block">The Tool Gap</SectionLabel>
            <h2 className="heading-lg mb-5">
              Why existing tools are structurally insufficient
            </h2>
            <p className="body-lg text-frost">
              Organizations use many tools that touch on decisions, yet the decision itself
              rarely remains their primary object. Each addresses a fragment of the problem
              while leaving the most important gap open.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {[
              {
                tool: 'Document management and wikis',
                limitation:
                  'Capture outputs, not reasoning. Documents are rarely structured. There is no lifecycle, no governance model, and no intelligence layer. Organizational memory is stored as text, not as structured knowledge.',
              },
              {
                tool: 'Project management platforms',
                limitation:
                  'Organize work, not decisions. The decision that justified the work is rarely captured in the platform that managed its execution. When projects close, their decision record disappears with them.',
              },
              {
                tool: 'Meeting and collaboration tools',
                limitation:
                  'Facilitate communication, not documentation. What was discussed and what was decided are not the same thing. Action items are tracked; the reasoning behind them is not.',
              },
              {
                tool: 'General-purpose AI assistants',
                limitation:
                  'Generate responses, not governance. AI assistants can help draft or summarize, but they do not provide the structure, authority model, or traceability that decision governance requires. An AI response is not an auditable decision record.',
              },
              {
                tool: 'Business intelligence platforms',
                limitation:
                  'Provide data, not judgment infrastructure. BI tools surface information for decisions but do not capture what was done with that information — what was considered, what was concluded, or who was accountable.',
              },
              {
                tool: 'GRC and compliance tools',
                limitation:
                  'Address risk registers and controls, not decision intelligence. Governance in these tools is a tracking and certification activity, not an operational decision management capability.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-steel/40 rounded-xl p-6 hover:border-steel/70 transition-colors"
              >
                <h3 className="text-white font-semibold text-base mb-3">{item.tool}</h3>
                <p className="text-frost text-sm leading-relaxed">{item.limitation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The MagnaRix difference */}
      <section className="bg-navy section-pad">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel className="mb-5 block">A Distinct Capability</SectionLabel>
              <h2 className="heading-lg mb-6">
                Decision memory, governance, and advisory intelligence belong together.
              </h2>
              <p className="body-lg text-frost mb-5">
                What takes shape in MagnaRix is not a single feature or isolated function,
                but the convergence of three properties that together form a distinct
                organizational capability:
              </p>
              <div className="space-y-6 mt-8">
                {[
                  {
                    term: 'Memory',
                    definition:
                      'A structured, durable, governed record of decisions that persists beyond the individuals who made them and is accessible in controlled ways across the organization.',
                  },
                  {
                    term: 'Governance',
                    definition:
                      'An embedded governance model that makes decision rights, approval structures, and accountability chains explicit within the decision itself.',
                  },
                  {
                    term: <Link href="/advisory-intelligence" className="text-white hover:text-accent transition-colors">Advisory Intelligence</Link>,
                    definition:
                      'AI-assisted analysis that operates within the governed decision process — surfacing context, challenging assumptions, and supporting analysis with attribution and traceability.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-px bg-accent self-stretch flex-shrink-0 ml-2" />
                    <div>
                      <h3 className="text-white font-semibold text-base mb-2">{item.term}</h3>
                      <p className="text-frost text-sm leading-relaxed">{item.definition}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-slate-deep border border-steel rounded-2xl p-7">
                <h3 className="heading-sm mb-4">What this condition repeatedly makes visible</h3>
                <ul className="space-y-3">
                  {[
                    'A record of why we made this decision, not just that we made it',
                    'A way to verify that the right people were involved in a decision',
                    'Ability to reconstruct decision history for audit and review',
                    'A mechanism for decisions to survive team transitions',
                    'A governed way to involve AI in consequential decisions',
                    'Consistency in how decisions are documented across the organization',
                    'The ability to learn from past decisions, not just repeat them',
                  ].map((need, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-accent mt-0.5 flex-shrink-0">&#10003;</span>
                      <span className="text-off-white text-sm leading-snug">{need}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-deep border border-gold/20 rounded-2xl p-7">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold text-sm">&#9672;</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-2">
                      A note on category definition
                    </h3>
                    <p className="text-frost text-sm leading-relaxed">
                      Decision orchestration names a capability that has rarely been treated
                      directly in enterprise systems. It has often been dispersed across
                      documents, workflows, governance forums, and informal memory. MagnaRix
                      takes shape where that capability is gathered into a more coherent form.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Conversations around this work are welcome."
        body="If these conditions belong to your organization's experience, we would welcome the opportunity to think with you about them."
        secondaryLabel="View Use Cases"
        secondaryHref="/use-cases"
      />
    </>
  )
}
