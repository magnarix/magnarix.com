import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — MagnaRix',
  description: 'MagnaRix Privacy Policy — what information we collect, how we use it, and the choices available to you.',
}

export default function PrivacyPage() {
  return (
    <section className="bg-midnight pt-28 pb-24 lg:pt-36 lg:pb-32">
      <div className="section-container">
        <div className="max-w-3xl">
          <p className="label-tag mb-5">Legal</p>
          <h1 className="heading-xl mb-4">Privacy Policy</h1>
          <p className="text-frost text-sm mb-12">Last updated: March 27, 2026</p>

          <div className="space-y-10">
            {[
              {
                title: '1. Introduction',
                content:
                  'MagnaRix ("we", "our", or "us") is committed to protecting the privacy of individuals who interact with our website and services. This Privacy Policy describes how we collect, use, store, and share information when you visit our website (magnarix.com) or contact us through our inquiry forms. By accessing our website, you acknowledge this policy.',
              },
              {
                title: '2. Information We Collect',
                content:
                  'We collect information you provide directly to us, including when you submit a contact form or other direct inquiry. This may include your name, work email address, company name, job title, and the content of your message. We may also collect standard technical information through web server logs and limited analytics tools, including IP address, browser type, pages visited, and referring URLs.',
              },
              {
                title: '3. How We Use Your Information',
                content:
                  'We use the information you provide to respond to your inquiries, continue relevant conversations you initiate, and provide information related to MagnaRix where appropriate. Technical information is used to improve the performance, security, and usability of our website and to understand aggregate usage patterns. We do not use your information to build advertising profiles or sell it to third parties.',
              },
              {
                title: '4. Information Sharing',
                content:
                  'We do not sell, trade, or otherwise transfer your personal information to third parties except as described in this policy. We may share information with service providers who assist us in operating our website, maintaining communications, and supporting related business operations, subject to appropriate confidentiality obligations. We may also disclose information where required by law or where reasonably necessary to protect the rights, safety, and security of MagnaRix and its users.',
              },
              {
                title: '5. Data Retention',
                content:
                  'We retain personal information only for as long as reasonably necessary for the purposes described in this policy, including responding to your inquiry, maintaining relevant business records, and complying with applicable law. You may request deletion of your personal information by contacting us at the address below, subject to any legal obligations that require retention.',
              },
              {
                title: '6. Security',
                content:
                  'We take reasonable technical and organizational measures to protect the information we collect against unauthorized access, disclosure, alteration, or destruction. However, no transmission of data over the internet can be guaranteed to be completely secure.',
              },
              {
                title: '7. Cookies and Analytics',
                content:
                  'Our website may use limited cookies or similar technologies necessary for site functionality and basic analytics. You may control cookie settings through your browser. If analytics are enabled, they are used to understand aggregate website usage rather than to build advertising profiles.',
              },
              {
                title: '8. Your Rights',
                content:
                  'Depending on your jurisdiction, you may have rights to access, correct, or delete personal information we hold about you. To exercise these rights, please contact us at the address below. We will respond to requests within the timeframes required by applicable law.',
              },
              {
                title: '9. Changes to This Policy',
                content:
                  'We may update this Privacy Policy from time to time. When we do, we will revise the "last updated" date at the top of this page. We encourage you to review this policy periodically.',
              },
              {
                title: '10. Contact',
                content:
                  'For questions or requests related to this Privacy Policy, please contact us at: privacy@magnarix.com or through our website contact form.',
              },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="heading-sm mb-3">{section.title}</h2>
                <p className="text-frost leading-relaxed text-base">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
