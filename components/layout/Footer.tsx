import Link from 'next/link'

const footerNav = {
  Product: [
    { label: 'Product Overview', href: '/product' },
    { label: 'Platform', href: '/platform' },
    { label: 'Use Cases', href: '/use-cases' },
  ],
  Company: [
    { label: 'Why MagnaRix', href: '/why-magnarix' },
    { label: 'Company', href: '/company' },
    { label: 'Insights', href: '/insights' },
  ],
  'Get Started': [
    { label: 'Request a Demo', href: '/contact' },
    { label: 'Contact Us', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Use', href: '/terms' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-navy border-t border-steel/50">
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2.5 mb-4"
              aria-label="MagnaRix home"
            >
              <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-white font-semibold text-base tracking-tight">
                MagnaRix
              </span>
            </Link>
            <p className="text-frost text-sm leading-relaxed max-w-xs">
              Decision orchestration for organizations that take governance seriously.
            </p>
          </div>

          {/* Nav columns */}
          {Object.entries(footerNav).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-frost mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-frost hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider mt-12 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-frost text-sm">
            &copy; {new Date().getFullYear()} MagnaRix. All rights reserved.
          </p>
          <p className="text-frost/60 text-xs">
            Decision orchestration for the enterprise.
          </p>
        </div>
      </div>
    </footer>
  )
}
