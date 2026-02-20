import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Script from 'next/script';
import coursesData from '../data/courses-static.json';
import { getPageMetadataStatic } from '../utils/staticCourses';
import dynamic from 'next/dynamic';

// Dynamic imports for non-critical components to reduce bundle size
const ScrollingCourses = dynamic(() => import('./components/ScrollingCourses'), {
  loading: () => null,
});
const ScrollingBanner = dynamic(() => import('./components/ScrollingBanner'), {
  loading: () => null,
});
const ChatWidget = dynamic(() => import('./components/ChatWidget'), {
  loading: () => null,
});
const CourseNotificationsWrapper = dynamic(() => import('./components/CourseNotificationsWrapper'), {
  loading: () => null,
});
const CourseFormPopupWrapper = dynamic(() => import('./components/CourseFormPopupWrapper'), {
  loading: () => null,
});
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "optional", // Changed from swap to optional for better performance
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "optional", // Changed from swap to optional for better performance
  preload: false, // Don't preload mono font since it's less critical
  fallback: ['ui-monospace', 'monospace'],
});

// Viewport configuration
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1e40af' },
    { media: '(prefers-color-scheme: dark)', color: '#1e40af' }
  ],
};

// Generate metadata dynamically for all pages
export async function generateMetadata({ params: _params, searchParams: _searchParams }) {
  // Get the current page slug from params or default to 'index' for homepage
  const slug = 'index';
  
  // Get page metadata from your courses-static.json
  const pageMetadata = getPageMetadataStatic(slug);
  
  // Base URL for your site
  const baseUrl = 'https://www.vritsol.com/';
  
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
      'content-language': 'en-US',
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
    
    // Canonical URL and hreflang
    alternates: {
      canonical: pageMetadata.canonical ? `${baseUrl}${pageMetadata.canonical}` : baseUrl,
      languages: {
        'en-US': baseUrl,
        'en': baseUrl,
        'x-default': baseUrl
      },
      ...pageMetadata.alternates,
    },
    
    // Verification codes
    verification: {
      google: 'AKRqWmEWNbzpVdyE0jzqX1tyaNhLfczFbczd3cOsGfE',
    },
  };
}

export default async function RootLayout({ children }) {
  // Get the importantText from the index data
  const indexData = coursesData.find(course => course.slug === 'index');
  const importantText = indexData?.importantText || '';

  return (
    <html lang="en-US">
      <head>
        {/* Google Tag Manager - Lazy load for better performance */}
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MMT58B7M');`}
        </Script>
        
        {/* Essential preconnects only (limit to 4) */}
        <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://3hir6j0e.apicdn.sanity.io" crossOrigin="anonymous" />

        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-MMT58B7M"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          ></iframe>
        </noscript>
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "VR IT SOLUTIONS Clinical Sas Training | Salesforce training | Servicenow Training | EDI Training",
              "url": "https://www.vritsol.com",
              "logo": "https://www.vritsol.com/images/vritlogo.png",
              "image": "https://www.vritsol.com/images/vritlogo.png",
              "telephone": "+919032734343",
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

        {/* Additional metadata links */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="author" href="/humans.txt" />
        <link rel="help" href="/.well-known/security.txt" />

        <ScrollingBanner text={importantText} isVisible={!!importantText} />
        <div className="pt-[48px]">
          <SpeedInsights/>
          <Analytics/>
          <Header />
          {children}
          <ScrollingCourses />
          <Footer />
        </div>
        <ChatWidget />
        <CourseNotificationsWrapper />
        <CourseFormPopupWrapper />
      </body>
    </html>
  );
}
