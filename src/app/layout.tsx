import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
})

export const metadata: Metadata = {
  title: {
    default: 'Aqwel AI - Safe Artificial General Intelligence | Advanced AI Research',
    template: '%s | Aqwel AI'
  },
  description: 'Aqwel AI is building safe artificial general intelligence that benefits all of humanity. Advanced AI models for natural language processing, code generation, machine learning research, and creative applications. 175+ functions across 12 modules.',
  keywords: [
    'artificial intelligence',
    'AI',
    'machine learning',
    'natural language processing',
    'code generation',
    'safe AI',
    'AGI',
    'artificial general intelligence',
    'AI research',
    'AI safety',
    'deep learning',
    'neural networks',
    'data science',
    'AI library',
    'Python AI',
    'machine learning library',
    'AI development',
    'intelligent systems',
    'AI innovation',
    'research AI',
    'AI tools',
    'artificial intelligence research',
    'AI technology',
    'machine learning tools',
    'AI programming',
    'intelligent automation',
    'AI algorithms',
    'cognitive computing',
    'AI solutions',
    'advanced AI'
  ],
  authors: [{ name: 'Aqwel AI Team', url: 'https://aqwel.ai/about' }],
  creator: 'Aqwel AI',
  publisher: 'Aqwel AI',
  applicationName: 'Aqwel AI',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aqwel.ai'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'en-GB': '/en-GB',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aqwel.ai',
    title: 'Aqwel AI - Safe Artificial General Intelligence | Advanced AI Research',
    description: 'Building safe artificial general intelligence that benefits all of humanity. Advanced AI models for natural language processing, code generation, machine learning research, and creative applications.',
    siteName: 'Aqwel AI',
    images: [
      {
        url: '/logo_website.png',
        width: 1200,
        height: 630,
        alt: 'Aqwel AI - Safe Artificial General Intelligence Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aqwelai',
    creator: '@aqwelai',
    title: 'Aqwel AI - Safe Artificial General Intelligence',
    description: 'Building safe artificial general intelligence that benefits all of humanity. Advanced AI research and development.',
    images: ['/logo_website.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
  category: 'technology',
  classification: 'AI Technology',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Aqwel AI',
    'mobile-web-app-capable': 'yes',
    'theme-color': '#000000',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Aqwel AI",
    "alternateName": "Aqwel Artificial Intelligence",
    "url": "https://aqwel.ai",
    "logo": "https://aqwel.ai/logo_website.png",
    "description": "Aqwel AI is building safe artificial general intelligence that benefits all of humanity. Advanced AI models for natural language processing, code generation, machine learning research, and creative applications.",
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "Aksel Aghajanyan",
        "url": "https://linkedin.com/in/aksel-aghajanyan"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-XXX-XXX-XXXX",
      "contactType": "customer service",
      "email": "aqwelai.company@gmail.com",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://github.com/Aqwel-AI",
      "https://www.linkedin.com/company/aqwelaiofficial/",
      "https://x.com/AkselDeveloper"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Natural Language Processing",
      "Deep Learning",
      "Neural Networks",
      "AI Safety",
      "Code Generation",
      "Data Science"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Research Tools and Libraries",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "Aqwel-Aion Research Library",
            "description": "Comprehensive AI library featuring 175+ functions across 12 modules for AI research, machine learning, and data science workflows",
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "Python",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          }
        }
      ]
    }
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://pypi.org" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Aqwel AI" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
