'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Product', href: '/product' },
  { label: 'Platform', href: '/platform' },
  { label: 'Use Cases', href: '/use-cases' },
  { label: 'Why MagnaRix', href: '/why-magnarix' },
  { label: 'Company', href: '/company' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activePathname, setActivePathname] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (activePathname !== null && activePathname !== pathname) {
      setMobileOpen(false)
    }
    setActivePathname(pathname)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-midnight/95 backdrop-blur-md border-b border-steel/50'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 flex-shrink-0"
            aria-label="MagnaRix home"
          >
            <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">
              MagnaRix
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-150 ${
                  pathname === link.href
                    ? 'text-white'
                    : 'text-frost hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="text-sm font-medium text-frost hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="btn-primary text-sm px-4 py-2"
            >
              Request a Demo
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-frost hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block w-full h-0.5 bg-current transition-all duration-200 origin-top-left ${
                  mobileOpen ? 'rotate-45 translate-y-px' : ''
                }`}
              />
              <span
                className={`block w-full h-0.5 bg-current transition-all duration-200 ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-full h-0.5 bg-current transition-all duration-200 origin-bottom-left ${
                  mobileOpen ? '-rotate-45 -translate-y-px' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy border-t border-steel/50">
          <nav className="section-container py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-white bg-slate-deep'
                    : 'text-frost hover:text-white hover:bg-slate-deep/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 pb-1 border-t border-steel/50 mt-2">
              <Link
                href="/contact"
                className="block w-full text-center bg-accent hover:bg-accent-light text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-colors"
              >
                Request a Demo
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
