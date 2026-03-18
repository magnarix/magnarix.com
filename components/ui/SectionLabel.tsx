interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span className={`label-tag ${className}`}>{children}</span>
  )
}
