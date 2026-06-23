import type { Metadata } from 'next'
import { Syne, Outfit } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import StructuredData from './StructuredData'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-syne',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://innovate-elevate.ai'),
  title: 'Innovate + Elevate — AI strategy and executive coaching for HR & L&D leaders',
  description:
    'Two practices under one roof: AI strategy, governance, and workforce enablement (Innovate) + executive and career coaching, learning strategy (Elevate).',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${outfit.variable}`}>
      <head>
        <StructuredData />
        {/* Plausible analytics */}
        <script async src="https://plausible.io/js/pa-sBqv-z1FC4Njri1WQyvHb.js" />
        <script dangerouslySetInnerHTML={{ __html: `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()` }} />
      </head>
      <body className="font-body">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
