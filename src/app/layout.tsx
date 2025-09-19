import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Sophie Uwase - Software Engineer & API Testing Specialist',
  description: 'Web developer and API tester with hands-on experience integrating RESTful services, validating JSON/XML exchanges, and improving system reliability. Based in Kigali, Rwanda.',
  keywords: [
    'Sophie Uwase',
    'Software Engineer',
    'API Testing',
    'Web Developer',
    'Postman',
    'RESTful APIs',
    'Kigali',
    'Rwanda',
    'JavaScript',
    'PHP',
    'Java'
  ],
  authors: [{ name: 'Sophie Uwase' }],
  creator: 'Sophie Uwase',
  publisher: 'Sophie Uwase',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sophie-uwase-portfolio.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sophie-uwase-portfolio.vercel.app',
    title: 'Sophie Uwase - Software Engineer & API Testing Specialist',
    description: 'Web developer and API tester with hands-on experience integrating RESTful services, validating JSON/XML exchanges, and improving system reliability.',
    siteName: 'Sophie Uwase Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sophie Uwase - Software Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sophie Uwase - Software Engineer & API Testing Specialist',
    description: 'Web developer and API tester specializing in RESTful services and system reliability.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4f46e5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}