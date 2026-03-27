import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { CTASection } from '@/components/sections/CTASection'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'About — MagnaRix',
  description:
    'MagnaRix takes form within a condition long present in enterprise systems: the absence of a structured approach to consequential decisions.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        headline="Why MagnaRix exists"
        subheadline="MagnaRix takes form within a condition long present in enterprise organizations: decisions with lasting consequences are made every day, yet the reasoning that formed them rarely remains intact."
      />

      {/* Mission */}
      <section className="bg-navy section-pad">
        <div className="section-container">
          <div className="max-w-3xl">
            <SectionLabel className="mb-5 block">Mission</SectionLabel>
            <h2 className="heading-lg mb-8">
              Consequential decisions require structure, governance, and persistence.
            </h2>
            <p className="body-lg text-frost mb-6">
              Every organization we have worked with faces the same underlying problem:
              the decisions that most shape its trajectory are among the least well-preserved.
              They live in presentations, in meeting notes, in the institutional memory of
              individuals who may no longer be present — and they are effectively inaccessible
              to the governance, learning, and oversight functions that depend on them.
            </p>
            <p className="body-lg text-frost mb-6">
              MagnaRix takes form within this condition. It is a system designed around the
              specific structure and governance requirements of consequential organizational
              decisions — not as documents, dashboards, or disconnected fragments, but as
              durable objects of institutional reasoning.
            </p>
            <p className="body-lg text-frost">
              The quality of organizational decision-making is bound to the quality of
              institutional memory, the clarity of governance, and the discipline with which
              reasoning is preserved and examined. MagnaRix is designed in view of that
              relationship.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-midnight section-pad">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel className="mb-5 block">Long-Term Vision</SectionLabel>
              <h2 className="heading-lg mb-6">
                When organizational memory becomes a durable asset.
              </h2>
              <p className="body-lg text-frost mb-5">
                The longer-term vision behind MagnaRix is a world in which the decision
                history of an organization is a genuine strategic asset — accessible,
                structured, governed, and intelligent enough to inform future choices
                with the accumulated wisdom of past ones.
              </p>
              <p className="body-lg text-frost mb-5">
                An organization that has ten years of well-governed, well-structured
                decision records has a materially different decision-making capability
                than one that does not. It can see patterns. It can identify where its
                reasoning has been consistently strong and where it has been consistently
                flawed. It can verify that its governance processes have been applied
                consistently. It can train incoming leaders faster and more effectively.
              </p>
              <p className="body-lg text-frost">
                MagnaRix is taking shape in view of that future, with the discipline and
                seriousness required wherever decisions carry lasting consequence.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  principle: 'Substance over appearance',
                  description:
                    "We build in response to problems that are structural, not superficial. The value of MagnaRix lies in whether decision reasoning can truly remain visible, governed, and durable across time.",
                },
                {
                  principle: 'Governance as part of design',
                  description:
                    'Governance belongs in the architecture of how decisions are made. Every design choice in MagnaRix reflects the need for review, authorization, accountability, and continuity to remain present from the beginning.',
                },
                {
                  principle: 'AI in its proper role',
                  description:
                    'We are committed to AI that genuinely supports human judgment and is fully transparent about its contributions. We do not build toward AI that obscures how conclusions were reached.',
                },
                {
                  principle: 'Enterprise rigor with usable form',
                  description:
                    'The organizations MagnaRix serves have complex needs. MagnaRix is designed to meet those needs in a form that remains usable, disciplined, and proportionate to the work it supports.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="border border-steel/50 rounded-xl p-5 hover:border-steel transition-colors"
                >
                  <h3 className="text-white font-semibold text-base mb-2">{item.principle}</h3>
                  <p className="text-frost text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why we exist */}
      <section className="bg-navy section-pad">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <SectionLabel className="mb-5 block text-center">Why MagnaRix Exists</SectionLabel>
            <h2 className="heading-lg mb-8 text-center">
              The problem has long existed. The conditions for addressing it have become more visible.
            </h2>
            <div className="space-y-5">
              <p className="body-lg text-frost">
                Enterprise organizations have always faced the challenge of institutional
                memory loss. What is new is the combination of conditions that now make
                it meaningfully addressable: the availability of AI reasoning capabilities
                that can assist with structured analysis, the maturity of enterprise software
                platforms that can support complex governance models, and an organizational
                landscape in which the pace of change — in teams, in strategies, in markets —
                has elevated the cost of institutional amnesia to the point where it is
                no longer acceptable to treat it as unavoidable.
              </p>
              <p className="body-lg text-frost">
                MagnaRix emerges from long experience at the intersection of enterprise
                strategy, technology governance, and organizational design, where the absence
                of a serious system for decision continuity becomes difficult to ignore.
              </p>
              <p className="body-lg text-frost">
                Its purpose is to give consequential decisions a form in which they can remain
                visible, governed, and intelligible across time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Conversations around this work are welcome."
        body="If these conditions belong to your organization's experience, we would welcome the opportunity to think with you about them."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
        secondaryLabel="View Platform Architecture"
        secondaryHref="/platform"
      />
    </>
  )
}
