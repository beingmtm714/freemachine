import type { Metadata } from 'next'
import { Unbounded, Epilogue } from 'next/font/google'
import '../styles/globals.css'

const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-unbounded',
  display: 'swap',
})

const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-epilogue',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Free Machine',
  description: 'Free Machine awakens civic participation where emerging technology, public policy, and culture meet.',
  openGraph: {
    title: 'Free Machine',
    description: 'Civic participation at the intersection of technology, policy, and culture.',
    url: 'https://freemachine.org',
    siteName: 'Free Machine',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${unbounded.variable} ${epilogue.variable}`}>
      <body>{children}</body>
    </html>
  )
}
