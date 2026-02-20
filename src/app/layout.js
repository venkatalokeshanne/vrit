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
              "@type": ["Organization", "LocalBusiness", "EducationalOrganization"],
              "name": "VR IT SOLUTIONS Clinical Sas Training | Salesforce training | Servicenow Training | EDI Training",
              "description": "Leading IT Training Institute in Ameerpet, Hyderabad offering professional courses",
              "url": "https://www.vritsol.com",
              "logo": "https://www.vritsol.com/images/vritlogo.png",
              "image": "https://www.vritsol.com/images/vritlogo.png",
              "telephone": "+91-9032734343",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "506/A, Aditya Enclave, Nilagiri Block, 5th Floor, Ameerpet, Hyderabad Telangana.",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500016",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "17.4374",
                "longitude": "78.4482"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9032734343",
                "email": "info@vritsol.com",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["en", "hi", "te"]
              },
              "openingHours": ["Mo-Sa 08:00-21:30", "Su 09:00-13:00"],
              "areaServed": { "@type": "Place", "name": "Hyderabad, Telangana" },
              "sameAs": [
                "https://www.facebook.com/vritsolutions/",
                "https://twitter.com/vritsolutions",
                "https://www.linkedin.com/company/vr-it-solutions",
                "https://www.youtube.com/channel/UCwasTbRqeFPtreZdVdcRbuA"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "IT Training Courses",
                "itemListElement": [
                  { 
                    "@type": "Course", 
                    "name": "ServiceNow Training", 
                    "description": "Master IT Service Management, workflow automation, and enterprise cloud solutions with hands-on ServiceNow platform experience.", 
                    "provider": { "@type": "Organization", "name": "VR IT Solutions" },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.9",
                      "reviewCount": "1250"
                    }
                  },
                  { 
                    "@type": "Course", 
                    "name": "Salesforce Training", 
                    "description": "Learn CRM fundamentals, Lightning Platform development, and Salesforce administration for career advancement.", 
                    "provider": { "@type": "Organization", "name": "VR IT Solutions" },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.8",
                      "reviewCount": "980"
                    }
                  },
                  { 
                    "@type": "Course", 
                    "name": "SAP FICO Training", 
                    "description": "Comprehensive SAP Financial Accounting and Controlling modules with real-world business scenarios and implementations.", 
                    "provider": { "@type": "Organization", "name": "VR IT Solutions" },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.9",
                      "reviewCount": "1450"
                    }
                  },
                  { 
                    "@type": "Course", 
                    "name": "SAP SD Training", 
                    "description": "Master SAP Sales and Distribution processes, order-to-cash cycle, pricing procedures, and customer management with online training.", 
                    "provider": { "@type": "Organization", "name": "VR IT Solutions" },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.8",
                      "reviewCount": "850"
                    }
                  },
                  { 
                    "@type": "Course", 
                    "name": "SAP MM Training", 
                    "description": "Master SAP Materials Management, purchasing processes, inventory control, and procurement workflows with comprehensive online training.", 
                    "provider": { "@type": "Organization", "name": "VR IT Solutions" },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.9",
                      "reviewCount": "1120"
                    }
                  },
                  { 
                    "@type": "Course", 
                    "name": "Pega Training", 
                    "description": "Build enterprise applications with Pega BPM, case management, and low-code development methodologies.", 
                    "provider": { "@type": "Organization", "name": "VR IT Solutions" },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.8",
                      "reviewCount": "760"
                    }
                  },
                  { 
                    "@type": "Course", 
                    "name": "Azure DevOps & AWS", 
                    "description": "Master cloud computing, CI/CD pipelines, containerization, and infrastructure automation across Azure and AWS platforms.", 
                    "provider": { "@type": "Organization", "name": "VR IT Solutions" },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.9",
                      "reviewCount": "1850"
                    }
                  },
                  { 
                    "@type": "Course", 
                    "name": "MuleSoft Training", 
                    "description": "Learn API-led connectivity, integration patterns, and enterprise service architecture with MuleSoft Anypoint Platform.", 
                    "provider": { "@type": "Organization", "name": "VR IT Solutions" },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.8",
                      "reviewCount": "640"
                    }
                  },
                  { 
                    "@type": "Course", 
                    "name": "SAS Clinical Training", 
                    "description": "Specialized training in clinical data analysis, regulatory reporting, and pharmaceutical industry standards using SAS.", 
                    "provider": { "@type": "Organization", "name": "VR IT Solutions" },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.9",
                      "reviewCount": "920"
                    }
                  },
                  { 
                    "@type": "Course", 
                    "name": "SAP Basis Training", 
                    "description": "SAP system administration, performance tuning, database management, and technical infrastructure maintenance.", 
                    "provider": { "@type": "Organization", "name": "VR IT Solutions" },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.8",
                      "reviewCount": "810"
                    }
                  },
                  { 
                    "@type": "Course", 
                    "name": "SAP EWM Training", 
                    "description": "Extended Warehouse Management solution covering inventory optimization, warehouse processes, and logistics automation.", 
                    "provider": { "@type": "Organization", "name": "VR IT Solutions" },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.9",
                      "reviewCount": "730"
                    }
                  },
                  { 
                    "@type": "Course", 
                    "name": "SAP HANA Admin", 
                    "description": "In-memory database administration, performance optimization, and advanced analytics with SAP HANA platform.", 
                    "provider": { "@type": "Organization", "name": "VR IT Solutions" },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.8",
                      "reviewCount": "650"
                    }
                  },
                  { 
                    "@type": "Course", 
                    "name": "SAP S/4HANA Finance", 
                    "description": "Next-generation ERP finance modules, real-time analytics, and digital transformation with S/4HANA Finance.", 
                    "provider": { "@type": "Organization", "name": "VR IT Solutions" },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.9",
                      "reviewCount": "890"
                    }
                  },
                  { 
                    "@type": "Course", 
                    "name": "SAP Leonardo", 
                    "description": "Explore AI, machine learning, IoT, and digital innovation platform capabilities within the SAP ecosystem.", 
                    "provider": { "@type": "Organization", "name": "VR IT Solutions" },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.7",
                      "reviewCount": "420"
                    }
                  },
                  { 
                    "@type": "Course", 
                    "name": "SAP Security & GRC", 
                    "description": "Enterprise security management, governance, risk, compliance, and access control in SAP environments.", 
                    "provider": { "@type": "Organization", "name": "VR IT Solutions" },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.8",
                      "reviewCount": "580"
                    }
                  },
                  { 
                    "@type": "Course", 
                    "name": "SAP Logistics", 
                    "description": "Supply chain management, procurement, inventory control, and logistics optimization using SAP S/4HANA.", 
                    "provider": { "@type": "Organization", "name": "VR IT Solutions" },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.8",
                      "reviewCount": "610"
                    }
                  },
                  { 
                    "@type": "Course", 
                    "name": "Data Science Course", 
                    "description": "Statistical analysis, machine learning algorithms, data visualization, and predictive modeling with Python and R.", 
                    "provider": { "@type": "Organization", "name": "VR IT Solutions" },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.9",
                      "reviewCount": "2100"
                    }
                  },
                  { 
                    "@type": "Course", 
                    "name": "Python Training", 
                    "description": "Programming fundamentals, web development with Django/Flask, automation scripting, and data manipulation libraries.", 
                    "provider": { "@type": "Organization", "name": "VR IT Solutions" },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.9",
                      "reviewCount": "2450"
                    }
                  },
                  { 
                    "@type": "Course", 
                    "name": "Python with AWS", 
                    "description": "Cloud-native Python development, serverless computing, AWS services integration, and scalable application deployment.", 
                    "provider": { "@type": "Organization", "name": "VR IT Solutions" },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.8",
                      "reviewCount": "1150"
                    }
                  },
                  { 
                    "@type": "Course", 
                    "name": "Workday Training", 
                    "description": "Human Capital Management, financial management, and enterprise planning with Workday cloud applications.", 
                    "provider": { "@type": "Organization", "name": "VR IT Solutions" },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.8",
                      "reviewCount": "840"
                    }
                  },
                  { 
                    "@type": "Course", 
                    "name": "Machine Learning", 
                    "description": "Advanced ML algorithms, neural networks, deep learning frameworks, and AI model deployment using Python.", 
                    "provider": { "@type": "Organization", "name": "VR IT Solutions" },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.9",
                      "reviewCount": "1650"
                    }
                  },
                  { 
                    "@type": "Course", 
                    "name": "AWS DevOps Training", 
                    "description": "Cloud infrastructure automation, continuous deployment, microservices architecture, and monitoring on AWS platform.", 
                    "provider": { "@type": "Organization", "name": "VR IT Solutions" },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.9",
                      "reviewCount": "1950"
                    }
                  },
                  { 
                    "@type": "Course", 
                    "name": "Informatica MDM", 
                    "description": "Master Data Management, data quality, data governance, and enterprise data integration using Informatica platform.", 
                    "provider": { "@type": "Organization", "name": "VR IT Solutions" },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.8",
                      "reviewCount": "720"
                    }
                  },
                  { 
                    "@type": "Course", 
                    "name": "Full Stack Developer", 
                    "description": "End-to-end web development with React, Node.js, databases, and modern JavaScript frameworks for complete applications.", 
                    "provider": { "@type": "Organization", "name": "VR IT Solutions" },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.9",
                      "reviewCount": "2200"
                    }
                  },
                  { 
                    "@type": "Course", 
                    "name": "EDI Training", 
                    "description": "Electronic Data Interchange standards, B2B communication protocols, and automated business document exchange.", 
                    "provider": { "@type": "Organization", "name": "VR IT Solutions" },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.8",
                      "reviewCount": "540"
                    }
                  },
                  { 
                    "@type": "Course", 
                    "name": "Hadoop Training", 
                    "description": "Big Data processing, distributed computing, HDFS, MapReduce, and ecosystem tools for large-scale data analytics.", 
                    "provider": { "@type": "Organization", "name": "VR IT Solutions" },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.8",
                      "reviewCount": "890"
                    }
                  },
                  { 
                    "@type": "Course", 
                    "name": "Snowflake Training", 
                    "description": "Cloud-based data warehousing platform with seamless collaboration, performance, flexibility and near-infinite scalability for complete database ecosystem.", 
                    "provider": { "@type": "Organization", "name": "VR IT Solutions" },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.9",
                      "reviewCount": "1350"
                    }
                  },
                  { 
                    "@type": "Course", 
                    "name": "Google Cloud (GCP)", 
                    "description": "Google Cloud Platform suite of cloud computing services with infrastructure, platform, and serverless computing environments for comprehensive cloud solutions.", 
                    "provider": { "@type": "Organization", "name": "VR IT Solutions" },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.8",
                      "reviewCount": "1050"
                    }
                  }
                ]
              }
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
