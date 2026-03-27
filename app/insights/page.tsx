import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'

export const metadata: Metadata = {
  title: 'Insights — MagnaRix',
  description: 'Perspectives on decision governance, institutional memory, and the conditions under which organizational continuity is preserved or lost.',
}

export default function InsightsPage() {
  return (
    <>
      <PageHero
        label="Insights"
        headline="Perspectives on decision infrastructure and institutional memory."
        subheadline="Observations on how organizations form, govern, and preserve consequential decisions — and on the conditions under which that continuity begins to fail."
        centered
      />

      <section className="bg-navy section-pad">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-slate-deep border border-steel rounded-2xl p-10">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <span className="text-accent text-xl">&#9672;</span>
              </div>
              <h2 className="heading-sm mb-3">A field of reflection is taking form</h2>
              <p className="text-frost text-sm leading-relaxed">
                These reflections arise from the conditions within which MagnaRix became
                necessary: the fragmentation of reasoning, the loss of continuity across
                time, the difficulty of governance after the moment of decision, and the
                emerging role of AI within institutional judgment. Pieces will appear here
                as they take finished form.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
