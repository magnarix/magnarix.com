import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'MagnaRix — Decision Memory, Governance, and Advisory Intelligence',
    template: '%s | MagnaRix',
  },
  description:
    'MagnaRix is a system for structuring, governing, and preserving consequential decisions — with decision memory, advisory intelligence, and continuity across time.',
  keywords: [
    'decision memory',
    'decision governance',
    'institutional memory',
    'decision infrastructure',
    'advisory intelligence',
    'decision continuity',
  ],
  openGraph: {
    type: 'website',
    siteName: 'MagnaRix',
    title: 'MagnaRix — Decision Memory, Governance, and Advisory Intelligence',
    description:
      'MagnaRix preserves the reasoning behind consequential decisions through decision memory, governance, and AI-assisted analysis.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MagnaRix — Decision Memory, Governance, and Advisory Intelligence',
    description:
      'MagnaRix preserves the reasoning behind consequential decisions through decision memory, governance, and AI-assisted analysis.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-midnight text-off-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
