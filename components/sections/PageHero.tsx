import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'

interface PageHeroProps {
  label?: string
  headline: string
  subheadline: string
  cta?: {
    primary?: { label: string; href: string }
    secondary?: { label: string; href: string }
  }
  centered?: boolean
}

export function PageHero({
  label,
  headline,
  subheadline,
  cta,
  centered = false,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-midnight grid-bg pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="section-container relative">
        <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
          {label && (
            <div className={`mb-5 ${centered ? 'flex justify-center' : ''}`}>
              <SectionLabel>{label}</SectionLabel>
            </div>
          )}
          <h1 className="heading-xl mb-6">{headline}</h1>
          <p className={`body-lg text-frost max-w-2xl ${centered ? 'mx-auto' : ''} mb-8`}>
            {subheadline}
          </p>
          {cta && (
            <div className={`flex flex-wrap gap-4 ${centered ? 'justify-center' : ''}`}>
              {cta.primary && (
                <Button href={cta.primary.href} size="lg">
                  {cta.primary.label}
                </Button>
              )}
              {cta.secondary && (
                <Button href={cta.secondary.href} variant="secondary" size="lg">
                  {cta.secondary.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
