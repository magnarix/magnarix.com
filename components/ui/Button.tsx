import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const variantStyles = {
  primary:
    'bg-accent hover:bg-accent-light text-white',
  secondary:
    'bg-transparent border border-steel hover:border-frost text-off-white hover:text-white',
  ghost:
    'bg-transparent text-frost hover:text-white',
}

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const classes = `
    inline-flex items-center justify-center font-medium rounded-lg
    transition-colors duration-150 cursor-pointer
    ${variantStyles[variant]} ${sizeStyles[size]} ${className}
    ${disabled ? 'opacity-50 pointer-events-none' : ''}
  `.trim()

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
