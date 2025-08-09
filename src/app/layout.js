import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollingCourses from './components/ScrollingCourses';
import ScrollingBanner from './components/ScrollingBanner';
import ChatWidget from './components/ChatWidget';
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

// Generate metadata dynamically for the homepage
export async function generateMetadata() {
  return getPageMetadataStatic('index');
}

export default async function RootLayout({ children }) {
  // Get structured data for the homepage
  const structuredData = getStructuredDataStatic('index');
  
  // Get the importantText from the index data
  const indexData = coursesData.find(course => course.slug === 'index');
  const importantText = indexData?.importantText || '';

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
        <ScrollingBanner text={importantText} isVisible={!!importantText} />
        <Header />
        {children}
        <ScrollingCourses />
        <Footer />
        <ChatWidget />
        
        {/* Tawk.to Live Chat Widget */}
        <Script
          id="tawk-to-chat"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/689718b1c2a1861924262ae2/1j273guc9';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
              
              // Enhanced Tawk.to configuration
              Tawk_API.onLoad = function(){
                console.log('Tawk.to loaded successfully');
                
                // Dispatch custom event to notify our components
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new Event('tawkLoaded'));
                }
                
                // Set custom attributes
                try {
                  Tawk_API.setAttributes({
                    'name': 'VR IT Solutions Visitor',
                    'email': '',
                    'hash': ''
                  });
                } catch (e) {
                  console.log('Error setting Tawk.to attributes:', e);
                }
                
                // Hide the default widget initially (we'll show our custom button)
                try {
                  if (typeof Tawk_API.hideWidget === 'function') {
                    Tawk_API.hideWidget();
                  }
                } catch (e) {
                  console.log('Error hiding Tawk.to widget:', e);
                }
              };
              
              // Handle chat events
              Tawk_API.onChatStarted = function(){
                console.log('Chat started');
              };
              
              Tawk_API.onChatEnded = function(){
                console.log('Chat ended');
              };
              
              // Error handling
              Tawk_API.onError = function(error){
                console.error('Tawk.to error:', error);
              };
              
              // Custom styling
              Tawk_API.customStyle = {
                visibility: {
                  desktop: {
                    position: 'br',
                    xOffset: 20,
                    yOffset: 20
                  },
                  mobile: {
                    position: 'br',
                    xOffset: 10,
                    yOffset: 10
                  }
                }
              };
            `
          }}
        />
      </body>
    </html>
  );
}
