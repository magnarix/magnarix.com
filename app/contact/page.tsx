import type { Metadata } from 'next'
import { ContactForm } from '@/components/sections/ContactForm'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Contact — Request a Demo or Conversation',
  description:
    'Request a demo or start a conversation with the MagnaRix team about decision governance for your enterprise.',
}

export default function ContactPage() {
  return (
    <section className="relative bg-midnight grid-bg pt-28 pb-24 lg:pt-36 lg:pb-32 min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <SectionLabel className="mb-5 block">Get in Touch</SectionLabel>
            <h1 className="heading-xl mb-6">
              Let&apos;s discuss your decision governance challenges.
            </h1>
            <p className="body-lg text-frost mb-8">
              We engage in depth with enterprise organizations that are evaluating
              MagnaRix. Whether you are exploring a specific use case, conducting a
              technical evaluation, or simply looking to understand what decision
              orchestration means in practice — we welcome the conversation.
            </p>

            <div className="space-y-6 mb-10">
              {[
                {
                  label: 'What to expect',
                  description:
                    'We will follow up within one business day to schedule an initial conversation. We do not route demo requests through automated sequences.',
                },
                {
                  label: 'Who you will speak with',
                  description:
                    'Initial conversations are conducted by people with direct product and enterprise context — not by sales development representatives following a script.',
                },
                {
                  label: 'What we ask of you',
                  description:
                    'Enough context to make the conversation useful — the nature of your organization, the decision domain you are focused on, and what you are hoping to understand.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-px bg-steel self-stretch flex-shrink-0 ml-1" />
                  <div>
                    <h3 className="text-white text-sm font-semibold mb-1">{item.label}</h3>
                    <p className="text-frost text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-steel/50 pt-6">
              <p className="text-frost text-sm">
                Alternatively, you can reach us directly at{' '}
                <a
                  href="mailto:hello@magnarix.com"
                  className="text-accent hover:text-accent-light transition-colors"
                >
                  hello@magnarix.com
                </a>
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
