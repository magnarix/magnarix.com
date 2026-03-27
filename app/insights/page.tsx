import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'

export const metadata: Metadata = {
  title: 'Insights — MagnaRix',
  description: 'Perspectives on decision governance, institutional memory, and enterprise AI from the MagnaRix team.',
}

export default function InsightsPage() {
  return (
    <>
      <PageHero
        label="Insights"
        headline="Perspectives on decision governance and institutional memory."
        subheadline="The MagnaRix team writes about the intersection of enterprise decision-making, organizational memory, governance, and AI. Content is published as our thinking matures."
        centered
      />

      <section className="bg-navy section-pad">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-slate-deep border border-steel rounded-2xl p-10">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <span className="text-accent text-xl">&#9672;</span>
              </div>
              <h2 className="heading-sm mb-3">Coming Soon</h2>
              <p className="text-frost text-sm leading-relaxed">
                We are preparing a series of substantive pieces on decision governance,
                institutional memory, and the organizational dynamics of consequential
                decision-making. These will be published as drafts are ready — not on a
                content calendar, but when they are genuinely worth reading.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
