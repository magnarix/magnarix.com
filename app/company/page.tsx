import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { CTASection } from '@/components/sections/CTASection'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Company — MagnaRix',
  description:
    'MagnaRix is building the decision orchestration platform for the enterprise. Our mission, philosophy, and the vision that guides our work.',
}

export default function CompanyPage() {
  return (
    <>
      <PageHero
        label="Company"
        headline="We are building the infrastructure for better organizational judgment."
        subheadline="MagnaRix was founded on the conviction that enterprise organizations deserve a serious, purpose-built platform for governing the decisions that shape them."
      />

      {/* Mission */}
      <section className="bg-navy section-pad">
        <div className="section-container">
          <div className="max-w-3xl">
            <SectionLabel className="mb-5 block">Mission</SectionLabel>
            <h2 className="heading-lg mb-8">
              To give consequential decisions the memory, governance, and intelligence they deserve.
            </h2>
            <p className="body-lg text-frost mb-6">
              Every organization we have worked with faces the same underlying problem:
              the decisions that most shape its trajectory are among the least well-preserved.
              They live in presentations, in meeting notes, in the institutional memory of
              individuals who may no longer be present — and they are effectively inaccessible
              to the governance, learning, and oversight functions that depend on them.
            </p>
            <p className="body-lg text-frost mb-6">
              MagnaRix was built to change that. Not with a document management layer,
              not with a reporting dashboard, and not with a general-purpose AI assistant —
              but with a platform designed from first principles around the specific structure
              and governance requirements of consequential organizational decisions.
            </p>
            <p className="body-lg text-frost">
              We think this is important work. The quality of organizational decision-making
              is closely correlated with the quality of institutional memory, the clarity of
              governance, and the discipline with which reasoning is preserved and examined.
              MagnaRix is designed to raise each of these.
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
                A future where organizational memory is an asset that compounds.
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
                MagnaRix is building toward that future with the discipline and seriousness
                that enterprise organizations require of the platforms they depend on.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  principle: 'Substance over appearance',
                  description:
                    "We build capabilities that address real problems deeply rather than surface-level problems broadly. The value of MagnaRix comes from what it actually does for an organization's decision governance, not from how many features it can list.",
                },
                {
                  principle: 'Governance as design, not constraint',
                  description:
                    'We believe governance belongs in the architecture of how decisions are made, not in a compliance layer applied afterward. Every design choice in MagnaRix reflects this conviction.',
                },
                {
                  principle: 'AI in its proper role',
                  description:
                    'We are committed to AI that genuinely supports human judgment and is fully transparent about its contributions. We do not build toward AI that obscures how conclusions were reached.',
                },
                {
                  principle: 'Enterprise rigor without enterprise complexity',
                  description:
                    'The organizations MagnaRix serves have complex needs. Our platform is designed to meet those needs without creating unnecessary operational burden or requiring implementation projects of unreasonable scope.',
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
              The problem we are solving has always existed. The conditions to solve it properly are now present.
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
                MagnaRix was founded by people who have spent careers working at the
                intersection of enterprise strategy, technology governance, and organizational
                design — and who recognized that no platform existed that addressed the
                decision governance problem with appropriate depth and seriousness.
              </p>
              <p className="body-lg text-frost">
                We are building that platform with the intention of making it one of the
                most trusted and consequential enterprise software products of the next decade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="We welcome conversations with organizations that take governance seriously."
        body="If the problems we are describing resonate with your experience, we would like to speak with you."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
        secondaryLabel="Explore the Platform"
        secondaryHref="/platform"
      />
    </>
  )
}
