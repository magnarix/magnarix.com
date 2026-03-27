import type { Metadata } from 'next'
import { ContactForm } from '@/components/sections/ContactForm'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Contact — MagnaRix',
  description:
    'Begin a conversation about decision infrastructure, governance, and the conditions under which consequential decisions must remain visible across time.',
}

export default function ContactPage() {
  return (
    <section className="relative bg-midnight grid-bg pt-28 pb-24 lg:pt-36 lg:pb-32 min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <SectionLabel className="mb-5 block">Contact</SectionLabel>
            <h1 className="heading-xl mb-6">
              Conversations around this work are welcome.
            </h1>
            <p className="body-lg text-frost mb-8">
              If the conditions described throughout this site belong to your
              organization&apos;s experience, we would welcome the opportunity to think
              with you about them. Whether the conversation is practical, strategic,
              or architectural, it can begin here.
            </p>

            <div className="space-y-6 mb-10">
              {[
                {
                  label: 'What to expect',
                  description:
                    'We will follow up within one business day to begin the conversation. Messages are read and answered directly, not routed through automated sequences.',
                },
                {
                  label: 'Who you will speak with',
                  description:
                    'Initial conversations are handled by people with direct product and enterprise context, so the discussion can begin at the level of the work itself.',
                },
                {
                  label: 'What we ask of you',
                  description:
                    'Enough context to make the conversation useful — the nature of your organization, the decision domain in view, and what you are hoping to understand.',
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
