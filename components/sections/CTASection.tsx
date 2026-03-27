import { Button } from '@/components/ui/Button'

interface CTASectionProps {
  headline?: string
  body?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export function CTASection({
  headline = 'Ready to bring structure to your decisions?',
  body = "Connect with us to explore how MagnaRix can support your organization's decision governance and institutional memory.",
  primaryLabel = 'Request a Demo',
  primaryHref = '/contact',
  secondaryLabel = 'Learn More',
  secondaryHref = '/product',
}: CTASectionProps) {
  return (
    <section className="bg-navy border-t border-steel/50">
      <div className="section-container section-pad">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="heading-lg mb-4">{headline}</h2>
          <p className="body-lg text-frost mb-8">{body}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href={primaryHref} size="lg">
              {primaryLabel}
            </Button>
            <Button href={secondaryHref} variant="secondary" size="lg">
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
