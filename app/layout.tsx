import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Saurabh Shinde - Software Engineer & Data Scientist Portfolio',
    template: '%s | Saurabh Shinde'
  },
  description: 'Portfolio of Saurabh Shinde - Software Engineer and Data Scientist. Building innovative solutions through code and data-driven insights. Specialized in full-stack development, machine learning, and data analytics.',
  keywords: [
    'Software Engineer',
    'Data Scientist',
    'Full Stack Developer',
    'Machine Learning',
    'Web Development',
    'React',
    'Node.js',
    'Python',
    'Data Analytics',
    'Portfolio',
    'Saurabh Shinde'
  ],
  authors: [{ name: 'Saurabh Shinde' }],
  creator: 'Saurabh Shinde',
  publisher: 'Saurabh Shinde',
  metadataBase: new URL('https://your-domain.com'), // Update with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com', // Update with your actual domain
    title: 'Saurabh Shinde - Software Engineer & Data Scientist',
    description: 'Portfolio of Saurabh Shinde - Software Engineer and Data Scientist. Building innovative solutions through code and data-driven insights.',
    siteName: 'Saurabh Shinde Portfolio',
    images: [
      {
        url: '/og-image.jpg', // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: 'Saurabh Shinde - Software Engineer & Data Scientist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saurabh Shinde - Software Engineer & Data Scientist',
    description: 'Portfolio of Saurabh Shinde - Software Engineer and Data Scientist. Building innovative solutions through code and data-driven insights.',
    images: ['/og-image.jpg'], // Add your Twitter card image
    creator: '@yourtwitter', // Update with your Twitter handle
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
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StructuredData />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

