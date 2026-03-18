import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CTASection } from '@/components/sections/CTASection'
import { FeatureGrid } from '@/components/sections/FeatureGrid'

export const metadata: Metadata = {
  title: 'MagnaRix — Decision Orchestration for the Enterprise',
  description:
    'MagnaRix gives enterprise organizations an operational memory, governance structure, and AI-assisted reasoning environment for their most consequential decisions.',
}

const capabilities = [
  {
    icon: '◈',
    title: 'Decision Canvas',
    description:
      'A structured environment for recording decisions in context — including the question asked, the options considered, the rationale behind the choice, the evidence examined, and the assumptions that shaped it.',
  },
  {
    icon: '⊡',
    title: 'Institutional Memory',
    description:
      'Every decision entered into MagnaRix becomes part of a durable, searchable record that survives team transitions, restructurings, and the passage of time.',
  },
  {
    icon: '◎',
    title: 'Governance Layer',
    description:
      'Authority structures, approval workflows, and accountability chains are embedded in the platform — not retrofitted after the fact.',
  },
  {
    icon: '◐',
    title: 'AI-Assisted Reasoning',
    description:
      'MagnaRix brings AI into the decision process not to replace judgment, but to surface relevant context, challenge assumptions, and support clearer thinking.',
  },
  {
    icon: '◉',
    title: 'Traceability',
    description:
      'Every decision is linked to its context, contributors, evidence, and downstream consequences. Audit trails are a structural property of the platform.',
  },
  {
    icon: '◫',
    title: 'Scenario Exploration',
    description:
      'Model alternative paths before committing. Revisit decisions as conditions change. Challenge past reasoning with new information.',
  },
]

const useCases = [
  {
    category: 'Enterprise Architecture',
    title: 'Preserving architectural decisions as organizational assets',
    description:
      'When key architects leave, the decisions they shaped disappear with them. MagnaRix captures the rationale behind platform choices, so future teams inherit understanding — not just outcomes.',
  },
  {
    category: 'Transformation Governance',
    title: 'Maintaining decision continuity across multi-year programs',
    description:
      'Large transformation programs involve hundreds of interdependent decisions. MagnaRix structures that decision landscape and keeps it navigable as teams, sponsors, and priorities evolve.',
  },
  {
    category: 'Risk & Compliance',
    title: 'Evidence-backed decision trails for regulated environments',
    description:
      'In governance-heavy sectors, the ability to reconstruct the reasoning behind a decision is not optional. MagnaRix makes auditability a design feature, not an afterthought.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-midnight grid-bg pt-28 pb-24 lg:pt-40 lg:pb-36">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-steel to-transparent" />

        <div className="section-container relative">
          <div className="max-w-4xl">
            <div className="mb-6">
              <SectionLabel>Decision Orchestration Platform</SectionLabel>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tightest text-white leading-none mb-8">
              Your organization makes<br />
              <span className="text-gradient-accent">consequential decisions</span>{' '}
              every day.<br />
              <span className="text-gradient">Most of them disappear.</span>
            </h1>

            <p className="text-xl text-frost leading-relaxed max-w-2xl mb-10">
              MagnaRix is an AI-native decision orchestration platform that gives enterprise
              organizations the memory, governance, and intelligent support their most
              important decisions deserve.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="/contact" size="lg">
                Request a Demo
              </Button>
              <Button href="/product" variant="secondary" size="lg">
                Explore the Platform
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-navy section-pad">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel className="mb-5 block">The Problem</SectionLabel>
              <h2 className="heading-lg mb-6">
                Decisions are made. The reasoning behind them is not preserved.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="body-lg text-frost">
                In most organizations, decisions are communicated through emails,
                captured in slide decks, discussed in meetings — and then effectively lost.
                What survives is the outcome, rarely the reasoning. What disappears is
                the context that made that outcome sensible.
              </p>
              <p className="body-lg text-frost">
                When conditions change, when teams turn over, when regulators ask questions,
                or when someone simply asks &quot;why did we do it this way?&quot; — organizations
                discover that they cannot answer with confidence.
              </p>
              <p className="body-lg text-frost">
                This is not a minor inefficiency. It is a structural liability that grows
                with organizational scale, decision volume, and the pace of change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What MagnaRix Is */}
      <section className="bg-midnight section-pad">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel className="mb-5 block">What MagnaRix Is</SectionLabel>
            <h2 className="heading-lg mb-5">
              A platform built around the decision, not around the document.
            </h2>
            <p className="body-lg text-frost">
              MagnaRix structures the decision itself — its context, options, rationale,
              evidence, assumptions, authority, and consequences — and gives organizations
              an intelligent environment for understanding and governing it over time.
            </p>
          </div>

          <FeatureGrid features={capabilities} columns={3} />
        </div>
      </section>

      {/* Decision Canvas Spotlight */}
      <section className="bg-navy section-pad">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel className="mb-5 block">Core Concept</SectionLabel>
              <h2 className="heading-lg mb-6">The Decision Canvas</h2>
              <p className="body-lg text-frost mb-6">
                At the core of MagnaRix is the Decision Canvas — a structured space that
                captures not just what was decided, but what was considered, what was
                assumed, what evidence was examined, and what alternatives were evaluated.
              </p>
              <p className="body-lg text-frost mb-8">
                It is designed for the kinds of decisions that matter: the ones that
                shape architecture, strategy, governance, and organizational direction.
                Not trivial or transient choices, but the ones that warrant scrutiny,
                continuity, and accountability.
              </p>
              <Button href="/product" variant="secondary">
                See How It Works
              </Button>
            </div>

            {/* Visual canvas mock */}
            <div className="relative">
              <div className="bg-slate-deep border border-steel rounded-2xl p-6 glow-sm">
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-steel/60">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-frost text-xs font-medium uppercase tracking-wider">Decision Canvas</span>
                </div>

                <div className="space-y-4">
                  {[
                    { label: 'Decision', value: 'Migrate core infrastructure to cloud-native architecture' },
                    { label: 'Context', value: 'Legacy platform reaching end-of-life; scale requirements increasing' },
                    { label: 'Options Considered', value: '3 alternatives evaluated' },
                    { label: 'Rationale', value: 'Selected approach balances migration risk against long-term scalability' },
                    { label: 'Assumptions', value: '4 documented' },
                    { label: 'Authority', value: 'CTO + Architecture Review Board' },
                    { label: 'Status', value: 'Active · Reviewing' },
                  ].map((row, i) => (
                    <div key={i} className="flex gap-4">
                      <span className="text-frost/60 text-xs w-32 flex-shrink-0 pt-0.5 uppercase tracking-wide">
                        {row.label}
                      </span>
                      <span className="text-off-white text-sm leading-snug flex-1">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-steel/60 flex items-center justify-between">
                  <span className="text-frost/50 text-xs">Last updated 2 days ago</span>
                  <span className="text-accent text-xs font-medium">View full canvas &rarr;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Preview */}
      <section className="bg-midnight section-pad">
        <div className="section-container">
          <div className="mb-12">
            <SectionLabel className="mb-4 block">Enterprise Use Cases</SectionLabel>
            <h2 className="heading-lg max-w-2xl">
              Where decision memory changes organizational outcomes
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-10">
            {useCases.map((uc, i) => (
              <Card key={i} hover>
                <div className="label-tag mb-3">{uc.category}</div>
                <h3 className="heading-sm mb-3">{uc.title}</h3>
                <p className="text-frost text-sm leading-relaxed">{uc.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button href="/use-cases" variant="secondary">
              View All Use Cases
            </Button>
          </div>
        </div>
      </section>

      {/* Enterprise Value */}
      <section className="bg-navy section-pad">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel className="mb-5 block">Enterprise Value</SectionLabel>
              <h2 className="heading-lg mb-6">
                What changes when decisions have an operational memory
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  metric: 'Decision Continuity',
                  description: 'Key decisions survive team transitions, reorganizations, and leadership changes.',
                },
                {
                  metric: 'Governance Integrity',
                  description: 'Authority structures are documented and verifiable. Accountability is traceable.',
                },
                {
                  metric: 'Audit Readiness',
                  description: 'Regulators and boards can reconstruct the reasoning behind critical choices.',
                },
                {
                  metric: 'Organizational Learning',
                  description: 'Past decisions become a living resource for improving future judgment.',
                },
              ].map((item, i) => (
                <div key={i} className="border border-steel/50 rounded-xl p-5">
                  <div className="w-1 h-8 bg-accent rounded-full mb-4" />
                  <h3 className="text-white font-semibold text-base mb-2">{item.metric}</h3>
                  <p className="text-frost text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to give your decisions the structure they deserve?"
        body="Connect with us to explore how MagnaRix can address your organization's specific decision governance challenges."
        secondaryLabel="Learn About the Platform"
        secondaryHref="/platform"
      />
    </>
  )
}
