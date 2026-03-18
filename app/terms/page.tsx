import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use — MagnaRix',
  description: 'MagnaRix Terms of Use for the MagnaRix website and online services.',
}

export default function TermsPage() {
  return (
    <section className="bg-midnight pt-28 pb-24 lg:pt-36 lg:pb-32">
      <div className="section-container">
        <div className="max-w-3xl">
          <p className="label-tag mb-5">Legal</p>
          <h1 className="heading-xl mb-4">Terms of Use</h1>
          <p className="text-frost text-sm mb-12">Last updated: March 2025</p>

          <div className="space-y-10">
            {[
              {
                title: '1. Acceptance of Terms',
                content:
                  'By accessing or using the MagnaRix website (magnarix.com) and any associated services, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.',
              },
              {
                title: '2. Use of the Website',
                content:
                  'You may use this website for lawful purposes and in accordance with these terms. You agree not to use the website in any manner that could damage, disable, or impair it, or in a way that interferes with other users\' access. You may not attempt to gain unauthorized access to any portion of the website or any systems connected to it.',
              },
              {
                title: '3. Intellectual Property',
                content:
                  'All content on this website — including text, graphics, logos, product names, and software — is the property of MagnaRix or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any content on this website without our express written permission.',
              },
              {
                title: '4. No Warranties',
                content:
                  'This website and its contents are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the website will be uninterrupted, error-free, or free of viruses.',
              },
              {
                title: '5. Limitation of Liability',
                content:
                  'To the fullest extent permitted by applicable law, MagnaRix shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of this website, even if we have been advised of the possibility of such damages.',
              },
              {
                title: '6. Third-Party Links',
                content:
                  'Our website may contain links to third-party websites for your convenience. We do not endorse or take responsibility for the content or practices of any third-party websites. Accessing those links is at your own risk.',
              },
              {
                title: '7. Privacy',
                content:
                  'Your use of this website is also governed by our Privacy Policy, which is incorporated into these Terms of Use by reference. Please review our Privacy Policy to understand our practices.',
              },
              {
                title: '8. Changes to Terms',
                content:
                  'We reserve the right to modify these Terms of Use at any time. Changes will be effective upon posting to the website. Your continued use of the website after such changes constitutes your acceptance of the updated terms.',
              },
              {
                title: '9. Governing Law',
                content:
                  'These Terms of Use shall be governed by and interpreted in accordance with applicable law. Any disputes arising from these terms or your use of the website shall be subject to the exclusive jurisdiction of the courts in the applicable jurisdiction.',
              },
              {
                title: '10. Contact',
                content:
                  'For questions about these Terms of Use, please contact us at: legal@magnarix.com or through our website contact form.',
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
