import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/sections/PageHero'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Advisory Intelligence — MagnaRix',
  description:
    'How AI-assisted analysis operates within consequential decisions through context, assumptions, structured reasoning, and traceability.',
}

export default function AdvisoryIntelligencePage() {
  return (
    <>
      <PageHero
        label="Advisory Intelligence"
        headline="Where intelligence remains within judgment."
        subheadline="Consequential decisions benefit from analysis, pattern recognition, and contextual retrieval. Advisory Intelligence allows these forms of assistance to remain visible within the governed decision process."
      />

      <section className="bg-navy section-pad">
        <div className="section-container max-w-3xl">
          <SectionLabel className="mb-5 block">The Condition</SectionLabel>

          <h2 className="heading-md mb-6">
            When analysis remains external to the decision
          </h2>

          <div className="space-y-5 text-frost leading-relaxed">
            <p>
              Organizations increasingly rely on AI to summarize information, retrieve context, and surface patterns. Yet this assistance often appears outside the decision itself, disconnected from the record in which the decision is formed and governed.
            </p>
            <p>
              As a result, analysis may influence a decision without remaining fully visible within it. Later participants may see the outcome without understanding what assistance was used, what assumptions were surfaced, or what context shaped the recommendation.
            </p>
            <p>
              This weakens traceability. The decision may remain recorded, while part of the reasoning process remains external to it.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-midnight section-pad">
        <div className="section-container max-w-3xl">
          <SectionLabel className="mb-5 block">Advisory Intelligence</SectionLabel>

          <h2 className="heading-md mb-6">
            AI-assisted analysis within the governed decision
          </h2>

          <div className="space-y-5 text-frost leading-relaxed">
            <p>
              Advisory Intelligence brings AI-assisted analysis into the decision process itself. Context retrieval, assumption surfacing, structured summaries, and analytical support remain attached to the decision record rather than appearing as separate, ungoverned outputs.
            </p>
            <p>
              This allows intelligence to participate in the formation of a decision while remaining visible, attributable, and reviewable across time.
            </p>
            <p>
              The decision continues to show not only what was chosen, but how assistance entered the process and how it informed the reasoning that followed.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy section-pad">
        <div className="section-container max-w-3xl">
          <SectionLabel className="mb-5 block">What Becomes Visible</SectionLabel>

          <h2 className="heading-md mb-8">
            The forms of assistance that remain attached to the record
          </h2>

          <div className="space-y-8 text-frost leading-relaxed">
            <div>
              <h3 className="text-white font-semibold mb-2">Context retrieval</h3>
              <p>
                Prior decisions, related records, and surrounding information can be surfaced within the decision process itself.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Assumption surfacing</h3>
              <p>
                The analysis can make implicit assumptions more visible so they can be examined directly.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Structured summaries</h3>
              <p>
                Large volumes of surrounding material can be condensed in ways that remain attributable to the decision record.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Alternative exploration</h3>
              <p>
                Additional paths, scenarios, or analytical perspectives can be surfaced while remaining visible within the governed process.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Traceable analytical support</h3>
              <p>
                The role of assistance remains visible as part of the record, making later review possible without obscuring how the decision was formed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-midnight section-pad">
        <div className="section-container max-w-3xl">
          <SectionLabel className="mb-5 block">Human Authority</SectionLabel>

          <h2 className="heading-md mb-6">
            Assistance without displacement
          </h2>

          <div className="space-y-5 text-frost leading-relaxed">
            <p>
              Advisory Intelligence does not remove judgment from the decision. Responsibility, approval, and accountability remain with the people and governance structures that authorize consequential choices.
            </p>
            <p>
              AI-assisted analysis can extend attention, widen context, and make patterns more visible, yet authority remains explicit within the decision record.
            </p>
            <p>
              This allows intelligence to support the work of reasoning without dissolving the boundary between assistance and authorization.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy section-pad">
        <div className="section-container max-w-3xl">
          <SectionLabel className="mb-5 block">Organizational Effect</SectionLabel>

          <h2 className="heading-md mb-6">
            When analysis becomes part of continuity
          </h2>

          <div className="space-y-5 text-frost leading-relaxed">
            <p>
              Advisory Intelligence allows organizations to retain not only decisions, but the visible analytical assistance that participated in forming them.
            </p>
            <p>
              This improves reviewability across time, as later participants can examine how context was surfaced, how assumptions were made visible, and how structured analysis contributed to the decision.
            </p>
            <p>
              The result is a form of intelligence that remains governed, traceable, and continuous with the rest of the record.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-midnight section-pad border-t border-steel/50">
        <div className="section-container text-center max-w-2xl">
          <p className="text-frost mb-8 leading-relaxed">
            Advisory Intelligence allows consequential decisions to retain the analytical assistance that shaped them without obscuring where authority remains.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/product" className="btn-primary">
              View the Product
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
