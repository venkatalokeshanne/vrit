import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollingCourses from './components/ScrollingCourses';
import ScrollingBanner from './components/ScrollingBanner';
import ChatWidget from './components/ChatWidget';
import CourseNotificationsWrapper from './components/CourseNotificationsWrapper';
import RichSnippetsManager from '../utils/richSnippets';
import { getPageMetadataStatic, getStructuredDataStatic } from '../utils/staticCourses';
import Script from 'next/script';
import coursesData from '../data/courses-static.json';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Viewport configuration
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1e40af' },
    { media: '(prefers-color-scheme: dark)', color: '#1e40af' }
  ],
};

// Generate metadata dynamically for all pages
export async function generateMetadata({ params, searchParams }) {
  // Get the current page slug from params or default to 'index' for homepage
  const slug = 'index';
  
  // Get page metadata from your courses-static.json
  const pageMetadata = getPageMetadataStatic(slug);
  
  // Base URL for your site
  const baseUrl = 'https://vrit-nine.vercel.app/';
  
  // Merge your existing metadata with missing SEO properties
  return {
    metadataBase: new URL(baseUrl),
    title: pageMetadata.title || 'VR IT Solutions - Leading IT Training Institute in Hyderabad',
    description: pageMetadata.description || 'Leading IT training institute in Hyderabad offering comprehensive courses in SAP, ServiceNow, Salesforce, Cloud Technologies, and more with 95% placement guarantee.',
    keywords: pageMetadata.keywords || ['IT training', 'SAP training', 'ServiceNow training', 'Salesforce training', 'Hyderabad', 'placement guarantee'],
    
    // Add missing SEO properties
    authors: [{ name: 'VR IT Solutions' }],
    creator: 'VR IT Solutions',
    publisher: 'VR IT Solutions',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    
    // Geo-location meta tags
    other: {
      'geo.region': 'IN-TG',
      'geo.placename': 'Hyderabad',
      'geo.position': '17.4399;78.4983',
      'ICBM': '17.4399, 78.4983',
    },
    
    // OpenGraph - use your existing data structure
    openGraph: {
      ...pageMetadata.openGraph,
      siteName: 'VR IT Solutions',
      locale: 'en_US',
      type: pageMetadata.openGraph?.type || 'website',
      url: pageMetadata.openGraph?.url ? `${baseUrl}${pageMetadata.openGraph.url}` : baseUrl,
    },
    
    // Twitter - use your existing data structure  
    twitter: {
      ...pageMetadata.twitter,
      site: '@vritsolutions',
      creator: '@vritsolutions',
    },
    
    // Robots configuration
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
    
    // Canonical URL
    alternates: {
      canonical: pageMetadata.canonical ? `${baseUrl}${pageMetadata.canonical}` : baseUrl,
      ...pageMetadata.alternates,
    },
    
    // Verification codes
    verification: {
      google: 'your-google-verification-code', // Replace with your actual code
    },
  };
}

export default async function RootLayout({ children }) {
  // Get structured data for the homepage
  const structuredData = getStructuredDataStatic('index');
  
  // Get the importantText from the index data
  const indexData = coursesData.find(course => course.slug === 'index');
  const importantText = indexData?.importantText || '';

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Structured Data Scripts */}
        {structuredData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData)
            }}
          />
        )}
        
        {/* Additional Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "VR IT Solutions",
              "url": "https://www.vritsol.com",
              "logo": "https://www.vritsol.com/images/vritlogo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+919032734343",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["en", "hi", "te"]
              },
              "sameAs": [
                "https://www.facebook.com/vritsolutions/",
                "https://twitter.com/vritsolutions",
                "https://www.linkedin.com/company/vr-it-solutions",
                "https://www.youtube.com/channel/UCwasTbRqeFPtreZdVdcRbuA"
              ]
            })
          }}
        />

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

        {/* Preconnect Links for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="author" href="/humans.txt" />
        <link rel="help" href="/.well-known/security.txt" />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>

        <ScrollingBanner text={importantText} isVisible={!!importantText} />
        <Header />
        {children}
        <ScrollingCourses />
        <Footer />
        <ChatWidget />
        <CourseNotificationsWrapper />
      </body>
    </html>
  );
}
