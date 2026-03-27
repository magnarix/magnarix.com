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
    default: 'MagnaRix — Decision Orchestration for the Enterprise',
    template: '%s | MagnaRix',
  },
  description:
    'MagnaRix is an AI-native decision orchestration platform that gives enterprise organizations memory, governance, and intelligent support for their most consequential decisions.',
  keywords: [
    'decision orchestration',
    'enterprise AI',
    'institutional memory',
    'decision governance',
    'AI platform',
    'decision intelligence',
  ],
  openGraph: {
    type: 'website',
    siteName: 'MagnaRix',
    title: 'MagnaRix — Decision Orchestration for the Enterprise',
    description:
      'Enterprise decision orchestration: memory, governance, and AI-assisted reasoning for your most consequential choices.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MagnaRix — Decision Orchestration for the Enterprise',
    description:
      'Enterprise decision orchestration: memory, governance, and AI-assisted reasoning for your most consequential choices.',
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
