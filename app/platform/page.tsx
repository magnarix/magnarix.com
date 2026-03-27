import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/sections/PageHero'
import { CTASection } from '@/components/sections/CTASection'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Platform Architecture — MagnaRix',
  description:
    'The architecture of MagnaRix: decision memory, governance, advisory intelligence, traceability, integration, and enterprise discipline.',
}

const layers = [
  {
    id: '01',
    name: 'Decision Memory Layer',
    description:
      'At the foundation of MagnaRix is a structured, durable, and queryable decision record. This layer preserves the full content of every decision canvas — including its history, versions, contributors, and lifecycle state — and makes it accessible across the organization in controlled, governed ways.',
    capabilities: [
      'Versioned decision records with full history',
      'Searchable by context, topic, domain, contributor, and date',
      'Linked decision graphs showing dependencies and influences',
      'Longitudinal view of how decisions evolved over time',
    ],
  },
  {
    id: '02',
    name: 'Governance & Approval Layer',
    description:
      'MagnaRix models the governance structures of the organization within the platform. This includes decision rights, approval authorities, escalation paths, and the organizational hierarchy that determines who can make, review, approve, and access decisions.',
    capabilities: [
      'Role-based decision rights and access controls',
      'Multi-tier approval and review workflows',
      'Delegation and escalation management',
      'Organizational hierarchy modeling',
    ],
  },
  {
    id: '03',
    name: 'Advisory Intelligence Layer',
    description:
      'The AI capabilities of MagnaRix operate within the decision process itself. This layer provides intelligent assistance for decision authoring, assumption challenging, option analysis, rationale structuring, and contextual retrieval from the decision record.',
    capabilities: [
      'Context-aware retrieval from the decision record',
      'Assumption identification and challenge',
      'Structured reasoning support and trade-off analysis',
      'AI contribution attribution and auditability',
    ],
  },
  {
    id: '04',
    name: 'Traceability & Audit Layer',
    description:
      'Every interaction with MagnaRix generates a traceable record. This layer provides the audit infrastructure needed for regulatory compliance, internal governance, and organizational accountability as part of the platform\'s structure.',
    capabilities: [
      'Immutable audit logs for all decision interactions',
      'Full reconstruction of decision state at any point in time',
      'Contribution attribution and reviewer records',
      'Compliance-oriented export and reporting',
    ],
  },
  {
    id: '05',
    name: 'Integration Layer',
    description:
      'MagnaRix is designed to operate alongside the enterprise systems that organizations already use. The integration layer connects the decision record to external platforms, allowing MagnaRix to remain present wherever consequential work already takes place.',
    capabilities: [
      'API-first architecture for enterprise integration',
      'Connectors for enterprise content and collaboration platforms',
      'Webhook and event-driven integration support',
      'Identity provider integration for SSO and directory sync',
    ],
  },
]

export default function PlatformPage() {
  return (
    <>
      <PageHero
        label="Platform Architecture"
        headline="An architecture in which consequential decisions can remain visible across time."
        subheadline="MagnaRix is structured as a layered system — with decision memory, governance, advisory intelligence, traceability, and integration as distinct yet coherent dimensions of the same work: preserving the reasoning behind consequential decisions."
        cta={{
          primary: { label: 'Request a Demo', href: '/contact' },
          secondary: { label: 'View the Product', href: '/product' },
        }}
      />

      {/* Architecture Layers */}
      <section className="bg-navy section-pad">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel className="mb-4 block">Platform Layers</SectionLabel>
            <h2 className="heading-lg mb-5">
              Five coherent layers within a single decision architecture.
            </h2>
            <p className="body-lg text-frost">
              Each layer of MagnaRix preserves a distinct dimension of consequential
              decision-making. Together, they form an integrated architecture in which
              reasoning, governance, continuity, and accountability can remain intact over time.
            </p>
          </div>

          <div className="space-y-6">
            {layers.map((layer) => (
              <div
                key={layer.id}
                className="border border-steel/50 rounded-2xl p-7 lg:p-9 hover:border-steel transition-colors"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-frost/40 text-sm font-mono">{layer.id}</span>
                      <h3 className="heading-md">{layer.name}</h3>
                    </div>
                    <p className="body-base text-frost">{layer.description}</p>
                    {layer.id === '03' && (
                      <p className="body-base text-frost mt-4">
                        A fuller account of this analytical dimension is described in{' '}
                        <Link href="/advisory-intelligence" className="text-accent hover:text-accent-light transition-colors">Advisory Intelligence</Link>.
                      </p>
                    )}
                    {layer.id === '02' && (
                      <p className="body-base text-frost mt-4">
                        A fuller account of this authority structure is described in{' '}
                        <Link href="/governance-approval" className="text-accent hover:text-accent-light transition-colors">Governance &amp; Approval</Link>.
                      </p>
                    )}
                  </div>
                  <div>
                    <h4 className="text-frost text-xs font-semibold uppercase tracking-widest mb-4">
                      Key Capabilities
                    </h4>
                    <ul className="space-y-2.5">
                      {layer.capabilities.map((cap, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <span className="text-accent mt-1 flex-shrink-0 text-xs">&#9658;</span>
                          <span className="text-off-white text-sm leading-snug">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Readiness */}
      <section className="bg-midnight section-pad">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel className="mb-5 block">Enterprise Readiness</SectionLabel>
              <h2 className="heading-lg mb-6">
                Structured for organizations that require discipline, security, and control.
              </h2>
              <p className="body-lg text-frost mb-5">
                MagnaRix is designed for organizations where data governance, operational
                security, and platform reliability cannot remain secondary considerations.
                These concerns are part of the architecture from the beginning.
              </p>
              <p className="body-lg text-frost">
                The platform is structured to support the due diligence required by
                enterprise security and architecture teams, including the operational
                and governance questions that accompany serious evaluation.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Access Control', description: 'Role-based permissions, attribute-based access, and fine-grained data visibility controls.' },
                { title: 'Identity Integration', description: 'SSO support and enterprise directory integration for user lifecycle management.' },
                { title: 'Data Residency', description: 'Deployment configurations that support organizational data governance requirements.' },
                { title: 'Audit Infrastructure', description: 'Immutable, exportable audit trails for compliance and internal governance.' },
                { title: 'API Security', description: 'Authenticated, rate-limited, and monitored API access with comprehensive logging.' },
                { title: 'Responsible AI', description: 'AI contributions are attributed, traceable, and subject to human review at every step.' },
              ].map((item, i) => (
                <div key={i} className="border border-steel/50 rounded-xl p-4">
                  <h3 className="text-white text-sm font-semibold mb-2">{item.title}</h3>
                  <p className="text-frost text-xs leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Responsible AI */}
      <section className="bg-navy section-pad">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel className="mb-5 block">Responsible AI</SectionLabel>
            <h2 className="heading-lg mb-6">
              AI that remains within the structure of human judgment.
            </h2>
            <p className="body-lg text-frost mb-6">
              The design posture of MagnaRix is that AI should make human decision-making
              better informed, more rigorous, and more transparent while leaving visible
              how conclusions were reached and where authority remains.
            </p>
            <p className="body-lg text-frost">
              Every AI output in MagnaRix is marked as such, attributed, versioned, and
              subject to human review before it enters the authoritative decision record.
              Human oversight is a structural requirement, not an optional setting.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        headline="Conversations around the architecture are welcome."
        body="We welcome serious discussion with those responsible for governance, architecture, and technical evaluation."
        secondaryLabel="View Use Cases"
        secondaryHref="/use-cases"
      />
    </>
  )
}
