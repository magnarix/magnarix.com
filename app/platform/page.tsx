import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { CTASection } from '@/components/sections/CTASection'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Platform — Enterprise Architecture for Decision Intelligence',
  description:
    'The MagnaRix platform: memory layer, governance architecture, AI cognition layer, traceability, integration posture, and enterprise security design.',
}

const layers = [
  {
    id: '01',
    name: 'Memory Layer',
    description:
      'The foundation of MagnaRix is a structured, durable, and queryable decision record. This layer preserves the full content of every decision canvas — including its history, versions, contributors, and lifecycle state — and makes it accessible across the organization in controlled, governed ways.',
    capabilities: [
      'Versioned decision records with full history',
      'Searchable by context, topic, domain, contributor, and date',
      'Linked decision graphs showing dependencies and influences',
      'Longitudinal view of how decisions evolved over time',
    ],
  },
  {
    id: '02',
    name: 'Authority and Governance Layer',
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
    name: 'Cognition and AI Layer',
    description:
      'The AI capabilities of MagnaRix are embedded in the decision process, not appended to it. This layer provides intelligent assistance for decision authoring, assumption challenging, option analysis, rationale structuring, and contextual retrieval from the decision record.',
    capabilities: [
      'Context-aware retrieval from the decision record',
      'Assumption identification and challenge',
      'Structured reasoning support and trade-off analysis',
      'AI contribution attribution and auditability',
    ],
  },
  {
    id: '04',
    name: 'Traceability and Audit Layer',
    description:
      'Every interaction with MagnaRix generates a traceable record. This layer provides the complete audit infrastructure needed for regulatory compliance, internal governance, and organizational accountability — by design, not by retrofit.',
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
      'MagnaRix is designed to operate alongside the enterprise systems that organizations already use. The integration layer connects the decision record to external platforms, enabling MagnaRix to function as the decision intelligence layer in a broader enterprise architecture.',
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
        headline="An enterprise platform built around the discipline of decision governance."
        subheadline="MagnaRix is architected as a layered enterprise platform — with memory, governance, AI cognition, traceability, and integration as distinct, coherent layers that together support decision intelligence at organizational scale."
        cta={{
          primary: { label: 'Request a Demo', href: '/contact' },
          secondary: { label: 'See the Product', href: '/product' },
        }}
      />

      {/* Architecture Layers */}
      <section className="bg-navy section-pad">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel className="mb-4 block">Platform Layers</SectionLabel>
            <h2 className="heading-lg mb-5">
              Five coherent layers. One decision intelligence platform.
            </h2>
            <p className="body-lg text-frost">
              Each layer of MagnaRix addresses a distinct dimension of the enterprise
              decision challenge — and together they form an integrated platform that
              can be deployed, governed, and evolved as organizational requirements mature.
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
                Built to operate in demanding enterprise environments.
              </h2>
              <p className="body-lg text-frost mb-5">
                MagnaRix is designed from the ground up for organizations that take
                data governance, operational security, and platform reliability seriously.
                Enterprise readiness is a design orientation, not a feature checklist.
              </p>
              <p className="body-lg text-frost">
                We engage with enterprise security and architecture teams as part of
                the deployment process, and the platform is structured to support the
                due diligence that serious enterprise organizations require.
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
              AI that supports human judgment. Not AI that bypasses it.
            </h2>
            <p className="body-lg text-frost mb-6">
              The design posture of MagnaRix is that AI should make human decision-making
              better informed, more rigorous, and more transparent — not obscure how
              conclusions were reached or substitute for the authority that human
              decision-makers hold.
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
        headline="Discuss the architecture with our team."
        body="We welcome conversations with enterprise architects, CIOs, and technical evaluators who want to understand the platform design in depth."
        secondaryLabel="Explore Use Cases"
        secondaryHref="/use-cases"
      />
    </>
  )
}
