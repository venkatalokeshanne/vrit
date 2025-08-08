import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollingCourses from './components/ScrollingCourses';
import RichSnippetsManager from '../utils/richSnippets';
import { getPageMetadataStatic, getStructuredDataStatic } from '../utils/staticCourses';
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Generate metadata dynamically for the homepage
export async function generateMetadata() {
  return getPageMetadataStatic('index');
}

export default async function RootLayout({ children }) {
  // Get structured data for the homepage
  const structuredData = getStructuredDataStatic('index');

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.vritsol.com/" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.4399;78.4983" />
        <meta name="ICBM" content="17.4399, 78.4983" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="color-scheme" content="dark light" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Structured Data */}
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
        <ScrollingCourses />
        <Footer />
      </body>
    </html>
  );
}
