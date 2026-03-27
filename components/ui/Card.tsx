interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`
        card-base
        ${hover ? 'hover:border-frost/50 hover:bg-slate-deep/80 transition-all duration-200 cursor-default' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
