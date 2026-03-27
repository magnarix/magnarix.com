'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/* ----------------------------------------------------------------
   Navigation data
   ---------------------------------------------------------------- */

type NavLink = { label: string; href: string }
type NavDirect = { kind: 'direct' } & NavLink
type NavGroup = {
  kind: 'group'
  label: string
  items: NavLink[]
}
type NavEntry = NavDirect | NavGroup

const navigation: NavEntry[] = [
  { kind: 'direct', label: 'Home', href: '/' },
  {
    kind: 'group',
    label: 'Product',
    items: [
      { label: 'Overview', href: '/product' },
      { label: 'Decision Memory', href: '/decision-memory' },
      { label: 'Governance & Approval', href: '/governance-approval' },
      { label: 'Advisory Intelligence', href: '/advisory-intelligence' },
      { label: 'Platform', href: '/platform' },
    ],
  },
  {
    kind: 'group',
    label: 'Solutions',
    items: [
      { label: 'Use Cases', href: '/use-cases' },
      { label: 'Why MagnaRix', href: '/why-magnarix' },
    ],
  },
  {
    kind: 'group',
    label: 'Company',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

function groupContainsPath(group: NavGroup, path: string): boolean {
  return group.items.some((item) => item.href === path)
}

/* ----------------------------------------------------------------
   Chevron icon (small, inline)
   ---------------------------------------------------------------- */

function ChevronDown({ className = '' }: { className?: string }) {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M1 1L5 5L9 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* ----------------------------------------------------------------
   Desktop dropdown
   ---------------------------------------------------------------- */

function DesktopDropdown({
  group,
  pathname,
  openLabel,
  onToggle,
}: {
  group: NavGroup
  pathname: string
  openLabel: string | null
  onToggle: (label: string) => void
}) {
  const isOpen = openLabel === group.label
  const isGroupActive = groupContainsPath(group, pathname)
  const id = `dropdown-${group.label.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <div className="relative">
      <button
        className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-150 ${
          isGroupActive ? 'text-white' : 'text-frost hover:text-white'
        }`}
        onClick={() => onToggle(group.label)}
        aria-expanded={isOpen}
        aria-controls={id}
      >
        {group.label}
        <ChevronDown
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div
          id={id}
          role="menu"
          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[200px] rounded-xl border border-steel/50 bg-navy/95 backdrop-blur-lg shadow-lg shadow-black/30 py-2"
        >
          {group.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              className={`block px-4 py-2 text-sm transition-colors duration-150 ${
                pathname === item.href
                  ? 'text-white bg-slate-deep/60'
                  : 'text-frost hover:text-white hover:bg-slate-deep/40'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

/* ----------------------------------------------------------------
   Mobile accordion group
   ---------------------------------------------------------------- */

function MobileGroup({
  group,
  pathname,
  expandedLabel,
  onToggle,
}: {
  group: NavGroup
  pathname: string
  expandedLabel: string | null
  onToggle: (label: string) => void
}) {
  const isExpanded = expandedLabel === group.label
  const isGroupActive = groupContainsPath(group, pathname)
  const id = `mobile-group-${group.label.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <div>
      <button
        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
          isGroupActive
            ? 'text-white'
            : 'text-frost hover:text-white'
        }`}
        onClick={() => onToggle(group.label)}
        aria-expanded={isExpanded}
        aria-controls={id}
      >
        {group.label}
        <ChevronDown
          className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
        />
      </button>

      {isExpanded && (
        <div id={id} role="group" className="pl-3 pb-1">
          {group.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                pathname === item.href
                  ? 'text-white bg-slate-deep/60'
                  : 'text-frost/80 hover:text-white hover:bg-slate-deep/40'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

/* ----------------------------------------------------------------
   Header
   ---------------------------------------------------------------- */

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [prevPathname, setPrevPathname] = useState<string | null>(null)

  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)

  // Close menus on route change
  useEffect(() => {
    if (prevPathname !== null && prevPathname !== pathname) {
      setMobileOpen(false)
      setDesktopOpen(null)
      setMobileExpanded(null)
    }
    setPrevPathname(pathname)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  // Scroll detection
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close desktop dropdown on outside click
  useEffect(() => {
    if (!desktopOpen) return
    const handler = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setDesktopOpen(null)
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [desktopOpen])

  // Close desktop dropdown on Escape
  useEffect(() => {
    if (!desktopOpen && !mobileOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDesktopOpen(null)
        setMobileExpanded(null)
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [desktopOpen, mobileOpen])

  const toggleDesktop = useCallback(
    (label: string) => setDesktopOpen((prev: string | null) => (prev === label ? null : label)),
    []
  )

  const toggleMobileGroup = useCallback(
    (label: string) => setMobileExpanded((prev: string | null) => (prev === label ? null : label)),
    []
  )

  return (
    <header
      ref={headerRef}
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
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {navigation.map((entry) =>
              entry.kind === 'direct' ? (
                <Link
                  key={entry.href}
                  href={entry.href}
                  className={`text-sm font-medium transition-colors duration-150 ${
                    pathname === entry.href
                      ? 'text-white'
                      : 'text-frost hover:text-white'
                  }`}
                >
                  {entry.label}
                </Link>
              ) : (
                <DesktopDropdown
                  key={entry.label}
                  group={entry}
                  pathname={pathname}
                  openLabel={desktopOpen}
                  onToggle={toggleDesktop}
                />
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="btn-primary text-sm px-4 py-2"
            >
              Begin a Conversation
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
          <nav className="section-container py-4 flex flex-col gap-0.5" aria-label="Mobile navigation">
            {navigation.map((entry) =>
              entry.kind === 'direct' ? (
                <Link
                  key={entry.href}
                  href={entry.href}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    pathname === entry.href
                      ? 'text-white bg-slate-deep'
                      : 'text-frost hover:text-white hover:bg-slate-deep/50'
                  }`}
                >
                  {entry.label}
                </Link>
              ) : (
                <MobileGroup
                  key={entry.label}
                  group={entry}
                  pathname={pathname}
                  expandedLabel={mobileExpanded}
                  onToggle={toggleMobileGroup}
                />
              )
            )}
            <div className="pt-3 pb-1 border-t border-steel/50 mt-2">
              <Link
                href="/contact"
                className="block w-full text-center bg-accent hover:bg-accent-light text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-colors"
              >
                Begin a Conversation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
