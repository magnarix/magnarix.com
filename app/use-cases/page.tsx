import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/sections/PageHero'
import { CTASection } from '@/components/sections/CTASection'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Use Cases — MagnaRix',
  description:
    'Contexts in which decision memory, governance, and continuity become critical across enterprise organizations.',
}

const useCaseFamilies = [
  {
    id: 'ea',
    category: 'Enterprise Architecture',
    headline: 'Preserving the reasoning behind foundational technology choices',
    problem:
      "Enterprise architecture teams make decisions that shape the organization's technology landscape for years — platform selections, integration patterns, data architecture choices, structural conventions. These decisions are often documented in presentations or workshop outputs that do not survive the people who made them.",
    howWeHelp:
      'MagnaRix provides a structured canvas for each significant architectural decision, capturing options considered, trade-offs evaluated, principles applied, and authorities engaged. Architecture decisions become searchable, linked, and traceable organizational assets rather than isolated documents.',
    outcome:
      'Incoming architects inherit understanding alongside outcomes. Architecture reviews can examine the history of a decision, not just its current state. Governance bodies can verify that architectural choices were made with appropriate rigor.',
  },
  {
    id: 'tg',
    category: 'Transformation Governance',
    headline: 'Maintaining decision continuity across multi-year programs',
    problem:
      'Large transformation programs involve hundreds of interdependent decisions made by different teams, different governance bodies, and different sponsors over years. Decision records are scattered across program documentation, steering committee minutes, and project management tools — rarely coherent, rarely connected.',
    howWeHelp:
      'MagnaRix makes the decision landscape of a transformation visible as a linked network of canvases, each capturing its context, contributors, dependencies, and current status. Program governance boards can navigate the full decision record, understand how choices connect to each other, and identify when foundational assumptions need to be re-examined.',
    outcome:
      'Program continuity survives sponsor changes and team transitions. The reasoning behind early-program choices is recoverable when later-program conditions challenge them. Decision audit trails support program governance review.',
  },
  {
    id: 'rc',
    category: 'Risk, Policy, and Compliance',
    headline: 'Evidence-backed decision trails in regulated environments',
    problem:
      'In sectors subject to regulatory scrutiny — financial services, healthcare, critical infrastructure, government — the ability to reconstruct the reasoning behind consequential decisions is a governance requirement. Most organizations cannot produce this record reliably from existing documentation practices.',
    howWeHelp:
      'MagnaRix establishes a structured, auditable record of decisions including the evidence consulted, the risk considerations weighed, the authorities involved, and the rationale applied. The platform makes audit-readiness a property of normal operations.',
    outcome:
      'Regulatory reviews and internal audit functions have access to a coherent, searchable decision record. Compliance teams can demonstrate that decision governance processes were followed. Risk decisions are traceable to the conditions that produced them.',
  },
  {
    id: 'pi',
    category: 'Portfolio and Investment Decisions',
    headline: 'Structured governance for capital allocation and program commitments',
    problem:
      'Investment committee and portfolio governance decisions often lack structured documentation of how options were evaluated, what criteria were applied, what risks were acknowledged, and what conditions would trigger a review. Over time this makes portfolio management more reactive than deliberate.',
    howWeHelp:
      'MagnaRix provides a structured approach to portfolio governance with decision canvases for investment commitments, stage gate decisions, and strategic portfolio reviews. Each decision records the options, criteria, evidence, and assumptions that supported the allocation.',
    outcome:
      'Portfolio performance discussions are grounded in documented decision history. Stage gate reviews can reference prior decision rationale. The connection between strategic intent and investment decisions is traceable.',
  },
  {
    id: 'sp',
    category: 'Executive Scenario Planning',
    headline: 'Capturing and governing strategic choices under uncertainty',
    problem:
      'Senior leadership teams engage in scenario analysis, strategic option reviews, and directional decisions that have significant organizational consequences. These discussions often produce informal conclusions rather than structured records, with ambiguity about what was actually decided, by whom, and on what basis.',
    howWeHelp:
      'MagnaRix provides structure for scenario planning by capturing each scenario, its assumptions, its options, and the reasoning behind the path chosen. Alternative scenarios and their supporting analysis are preserved alongside the final decision, available for review as conditions evolve.',
    outcome:
      'Strategic decisions are documented with the rigor their consequences warrant. As market or competitive conditions shift, leadership can return to the original scenario analysis to assess which assumptions have changed and what implications follow.',
  },
  {
    id: 'kr',
    category: 'Knowledge Retention',
    headline: 'Preserving institutional judgment through organizational change',
    problem:
      'When experienced leaders, architects, or domain experts leave an organization, they take with them not just relationships and skills but a history of decisions they shaped — why the organization made certain structural choices, what alternatives were considered, what the conditions were that made those choices sensible. This knowledge loss is rarely measured but consistently consequential.',
    howWeHelp:
      'MagnaRix provides a mechanism for externalizing decision knowledge into a governed, durable record before expertise leaves the organization. The platform makes institutional memory a structural property of the organization rather than a function of individual tenure.',
    outcome:
      "Incoming talent inherits documented reasoning, not just outcomes. Knowledge continuity becomes a managed organizational capability. The organization's decision intelligence compounds over time rather than resetting with each personnel transition.",
  },
  {
    id: 'om',
    category: 'Operating Model Alignment',
    headline: 'Governing cross-functional decisions with authority clarity',
    problem:
      'Decisions that span functional boundaries — between technology and operations, between finance and strategy, between product and risk — are among the most consequential and the most poorly governed. Authority is ambiguous, accountability is diffuse, and the resulting decisions reflect negotiation more than structured reasoning.',
    howWeHelp:
      'MagnaRix provides structure for cross-functional decision governance by making authority structures explicit within the decision canvas. Each decision records who holds decision rights, who holds advisory rights, who is informed, and what the escalation path is. The governance model is embedded in the process.',
    outcome:
      'Cross-functional decisions are made with documented authority. Accountability is unambiguous and traceable. Decision reviews can verify that the right governance was applied to the right decisions.',
  },
]

export default function UseCasesPage() {
  return (
    <>
      <PageHero
        label="Use Cases"
        headline="Where decision memory becomes necessary."
        subheadline="These are contexts in which the reasoning behind consequential decisions must remain visible — across architecture, governance, compliance, and long-term organizational change."
        cta={{
          primary: { label: 'Begin a Conversation', href: '/contact' },
          secondary: { label: 'View the Product', href: '/product' },
        }}
      />

      <section className="bg-navy section-pad">
        <div className="section-container">
          {/* Index */}
          <div className="mb-16">
            <SectionLabel className="mb-6 block">Decision Domains</SectionLabel>
            <div className="flex flex-wrap gap-3">
              {useCaseFamilies.map((uc) => (
                <a
                  key={uc.id}
                  href={`#${uc.id}`}
                  className="px-4 py-2 rounded-lg border border-steel/60 text-frost text-sm hover:border-frost hover:text-white transition-colors"
                >
                  {uc.category}
                </a>
              ))}
            </div>
          </div>

          {/* Use cases */}
          <div className="space-y-12">
            {useCaseFamilies.map((uc) => (
              <div
                key={uc.id}
                id={uc.id}
                className="border border-steel/40 rounded-2xl p-8 lg:p-10 scroll-mt-24"
              >
                <div className="label-tag mb-3">{uc.category}</div>
                <h2 className="heading-md mb-6 max-w-2xl">{uc.headline}</h2>

                <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-frost text-xs font-semibold uppercase tracking-widest mb-3">
                      The Challenge
                    </h3>
                    <p className="text-off-white text-sm leading-relaxed">{uc.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-frost text-xs font-semibold uppercase tracking-widest mb-3">
                      How MagnaRix Helps
                    </h3>
                    <p className="text-off-white text-sm leading-relaxed">{uc.howWeHelp}</p>
                    {uc.id === 'om' && (
                      <p className="text-off-white text-sm leading-relaxed mt-3">
                        This dimension of the system is described more fully in{' '}
                        <Link href="/governance-approval" className="text-accent hover:text-accent-light transition-colors">Governance &amp; Approval</Link>.
                      </p>
                    )}
                  </div>
                  <div>
                    <h3 className="text-frost text-xs font-semibold uppercase tracking-widest mb-3">
                      What Becomes Better
                    </h3>
                    <p className="text-off-white text-sm leading-relaxed">{uc.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Where do these conditions appear in your organization?"
        body="We welcome a direct conversation about where decision continuity becomes difficult within your specific context."
        secondaryLabel="Why MagnaRix"
        secondaryHref="/why-magnarix"
      />
    </>
  )
}
