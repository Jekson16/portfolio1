import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jekson Nababan | Full Stack Developer',
  description: 'Portfolio website showcasing projects, skills, and experience in web development',
  keywords: 'developer, portfolio, next.js, react, typescript, full-stack',
  authors: [{ name: 'Jekson Nababan' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jekson16.com',
    siteName: 'Jekson Portfolio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className="bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  )
}
