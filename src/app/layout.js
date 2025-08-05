import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';
import RichSnippetsManager from '../utils/richSnippets';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'VR IT Solutions | Best Software Training Institute in Hyderabad',
    template: '%s | VR IT Solutions'
  },
  description: 'Leading software training institute in Hyderabad offering 20+ technology courses with 100% placement assistance. Expert trainers, practical learning, online & classroom training.',
  keywords: 'software training institute hyderabad, IT training, placement assistance, technology courses, VR IT Solutions',
  authors: [{ name: 'VR IT Solutions' }],
  creator: 'VR IT Solutions',
  publisher: 'VR IT Solutions',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.vritsol.com'),
  openGraph: {
    title: 'VR IT Solutions | Best Software Training Institute in Hyderabad',
    description: 'Leading software training institute in Hyderabad offering 20+ technology courses with 100% placement assistance.',
    url: 'https://www.vritsol.com',
    siteName: 'VR IT Solutions',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'VR IT Solutions - Best Software Training Institute in Hyderabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VR IT Solutions | Best Software Training Institute in Hyderabad',
    description: 'Leading software training institute in Hyderabad offering 20+ technology courses with 100% placement assistance.',
    site: '@vritsolutions',
    creator: '@vritsolutions',
    images: ['/logo.png'],
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  category: 'Education',
  classification: 'Software Training Institute',
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://www.vritsol.com',
    languages: {
      'en-US': 'https://www.vritsol.com',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.vritsol.com/" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.3850;78.4867" />
        <meta name="ICBM" content="17.3850, 78.4867" />
        <meta name="DC.title" content="Best Software Training Institute In Hyderabad | VR IT Solutions" />
        <meta name="DC.subject" content="Software Training, IT Training, Programming Courses" />
        <meta name="DC.description" content="Best Software Training Institute in Hyderabad offering Python, Data Science, SAP, Salesforce, ServiceNow training with 100% placement assistance" />
        <meta name="DC.language" content="en" />
        <meta name="DC.creator" content="VR IT Solutions" />
        <meta name="DC.publisher" content="VR IT Solutions" />
        <meta name="DC.rights" content="© 2024 VR IT Solutions. All rights reserved." />
        
        {/* Enhanced SEO Meta Tags */}
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* Additional security and performance headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        
        {/* Link to humans.txt and security.txt */}
        <link rel="author" href="/humans.txt" />
        <link rel="help" href="/.well-known/security.txt" />
        <meta name="DC.coverage" content="Hyderabad, India" />
        
        {/* Enhanced Rich Snippets and Schema Markup */}
        {RichSnippetsManager.generateCompleteSchema('home').map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema)
            }}
          />
        ))}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
