import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Best Software Training Institute In Hyderabad | VR IT Solutions',
  description: 'Get knowledge in practical way, Everyone satisfied with our innovation way of knowledge transfer. Best Software Training Institute in Hyderabad for best brains! Online & Classroom training available.',
  keywords: 'software training institute hyderabad, best training institute hyderabad, online training, classroom training, placement assistance, job support, IT training, python training, data science training, servicenow training, salesforce training, SAP training, AWS training, DevOps training, Hadoop training, Pega training, Workday training, Mulesoft training, VR IT Solutions, Hyderabad IT training, software courses, placement guarantee, industry experts, IIT, NIT, live projects, mock interviews, certification support, corporate training',
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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Best Software Training Institute In Hyderabad | VR IT Solutions',
    description: 'Transform your career with VR IT Solutions - Best Software Training Institute in Hyderabad. 100% placement assistance, expert trainers, online & classroom training available.',
    url: 'https://www.vritsol.com',
    siteName: 'VR IT Solutions',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VR IT Solutions - Best Software Training Institute in Hyderabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Software Training Institute In Hyderabad | VR IT Solutions',
    description: 'Transform your career with VR IT Solutions - Best Software Training Institute in Hyderabad. 100% placement assistance, expert trainers.',
    site: '@vritsolutions',
    creator: '@vritsolutions',
    images: ['/twitter-image.jpg'],
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
        <meta name="DC.coverage" content="Hyderabad, India" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "VR IT Solutions",
              "alternateName": "VR IT Training Institute",
              "description": "Best Software Training Institute in Hyderabad offering comprehensive IT training courses with 100% placement assistance",
              "url": "https://www.vritsol.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.vritsol.com/logo.png"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "506/A, Aditya Enclave, Nilagiri Block, 5th Floor",
                "addressLocality": "Ameerpet",
                "addressRegion": "Telangana",
                "postalCode": "500016",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9032734343",
                "contactType": "customer service",
                "email": "info@vritsol.com",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.facebook.com/vritsolutions/",
                "https://twitter.com/vritsolutions",
                "https://www.youtube.com/channel/UCNbaPhgRjVUDcJSh70X-ZtA"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Software Training Courses",
                "itemListElement": [
                  {
                    "@type": "Course",
                    "name": "Python Training",
                    "description": "Comprehensive Python programming course",
                    "provider": {
                      "@type": "Organization",
                      "name": "VR IT Solutions"
                    }
                  },
                  {
                    "@type": "Course",
                    "name": "Data Science Training",
                    "description": "Complete Data Science course with practical projects",
                    "provider": {
                      "@type": "Organization",
                      "name": "VR IT Solutions"
                    }
                  },
                  {
                    "@type": "Course",
                    "name": "ServiceNow Training",
                    "description": "ServiceNow platform training with certification guidance",
                    "provider": {
                      "@type": "Organization",
                      "name": "VR IT Solutions"
                    }
                  }
                ]
              },
              "areaServed": {
                "@type": "Place",
                "name": "Hyderabad, India"
              },
              "foundingDate": "2019",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "500",
                "bestRating": "5"
              }
            })
          }}
        />
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
