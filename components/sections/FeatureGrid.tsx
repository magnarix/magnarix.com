import { Card } from '@/components/ui/Card'

interface Feature {
  icon?: string
  title: string
  description: string
}

interface FeatureGridProps {
  features: Feature[]
  columns?: 2 | 3 | 4
}

export function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  const colClasses = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div className={`grid grid-cols-1 ${colClasses[columns]} gap-6`}>
      {features.map((feature, i) => (
        <Card key={i} hover>
          {feature.icon && (
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5 text-xl">
              {feature.icon}
            </div>
          )}
          <h3 className="heading-sm mb-3">{feature.title}</h3>
          <p className="text-frost text-sm leading-relaxed">{feature.description}</p>
        </Card>
      ))}
    </div>
  )
}
