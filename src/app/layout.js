import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollingCourses from './components/ScrollingCourses';
import ScrollingBanner from './components/ScrollingBanner';
import ChatWidget from './components/ChatWidget';
import CourseNotificationsWrapper from './components/CourseNotificationsWrapper';
import CourseFormPopupWrapper from './components/CourseFormPopupWrapper';
import RichSnippetsManager from '../utils/richSnippets';
import { getPageMetadataStatic, getStructuredDataStatic } from '../utils/staticCourses';
import Script from 'next/script';
import coursesData from '../data/courses-static.json';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
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
  // Get structured data for the homepage
  const structuredData = getStructuredDataStatic('index');
  
  // Get the importantText from the index data
  const indexData = coursesData.find(course => course.slug === 'index');
  const importantText = indexData?.importantText || '';

  return (
    <html lang="en-US">
      <head>
        {/* Google Tag Manager - Move to head but change strategy */}
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MMT58B7M');`}
        </Script>
        
        {/* Performance optimizations for LCP */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        
        {/* Load fonts properly without preload warnings */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
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
              "name": "VR IT SOLUTIONS Clinical Sas Training | Salesforce training | Servicenow Training | EDI Training",
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


        {/* Tawk.to Chat Script */}
        <Script id="tawk-to-script" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/5cef5effb534676f32ac84a7/default';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>

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
