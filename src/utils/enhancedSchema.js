/**
 * Enhanced Schema Markup for VR IT Solutions
 * Comprehensive structured data for better search engine understanding
 */

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "EducationalOrganization", "LocalBusiness"],
    "name": "VR IT SOLUTIONS Clinical Sas Training | Salesforce training | Servicenow Training | EDI Training",
    "alternateName": ["VR IT SOL", "VRIT Solutions", "VR IT Solutions"],
    "description": "Leading IT training institute in Hyderabad offering comprehensive courses in SAP, ServiceNow, Salesforce, Cloud Technologies, DevOps, Data Science, and more with 95% placement guarantee.",
    "url": "https://www.vritsol.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.vritsol.com/logo.png",
      "width": 300,
      "height": 100
    },
    "image": "https://www.vritsol.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/vritsolutions",
      "https://twitter.com/vritsolutions",
      "https://www.linkedin.com/company/vr-it-solutions",
      "https://www.youtube.com/channel/UCvritsolutions",
      "https://www.instagram.com/vritsolutions"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Aditya enclave, Nilgiri block, 5th floor 506, a/a, Satyam Theatre Road, Ameerpet",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500073",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "17.4374",
      "longitude": "78.4482"
    },
    "telephone": "+91-9032734343",
    "email": "info@vritsol.com",
    "foundingDate": "2010",
    "numberOfEmployees": "50-100",
    "priceRange": "₹₹",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "UPI", "Bank Transfer"],
    "currenciesAccepted": "INR",
    "areaServed": [
      {
        "@type": "Country",
        "name": "India"
      },
      {
        "@type": "Country", 
        "name": "United States"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      },
      {
        "@type": "Country",
        "name": "Canada"
      },
      {
        "@type": "Country",
        "name": "Australia"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "17.4374",
        "longitude": "78.4482"
      },
      "geoRadius": "50000"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional Certification",
        "name": "SAP Authorized Training Partner"
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "credentialCategory": "Professional Certification",
        "name": "Salesforce Authorized Training Partner"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500+",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Satisfied Student"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Excellent training institute with experienced trainers and great placement support."
      }
    ]
  };
}

export function getCourseSchema(courseData) {
  if (!courseData) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": courseData.metadata?.title || courseData.organizationName,
    "description": courseData.metadata?.description || "Professional IT training course",
    "provider": {
      "@type": "Organization",
      "name": "VR IT Solutions",
      "url": "https://www.vritsol.com"
    },
    "url": `https://www.vritsol.com/${courseData.slug}`,
    "courseMode": ["Online", "Classroom", "Blended"],
    "educationalLevel": "Professional",
    "teaches": courseData.metadata?.keywords || [],
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "Professional"
    },
    "offers": {
      "@type": "Offer",
      "category": "Professional Training",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": ["Online", "Classroom"],
      "instructor": {
        "@type": "Person",
        "name": "Expert Trainer",
        "worksFor": {
          "@type": "Organization", 
          "name": "VR IT SOLUTIONS Clinical Sas Training | Salesforce training | Servicenow Training | EDI Training"
        }
      }
    }
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "VR IT SOLUTIONS Clinical Sas Training | Salesforce training | Servicenow Training | EDI Training",
    "image": "https://www.vritsol.com/logo.png",
    "telephone": "+91-9032734343",
    "email": "info@vritsol.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Aditya enclave, Nilgiri block, 5th floor 506, a/a, Satyam Theatre Road, Ameerpet",
      "addressLocality": "Hyderabad", 
      "addressRegion": "Telangana",
      "postalCode": "500073",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.4374,
      "longitude": 78.4482
    },
    "url": "https://www.vritsol.com",
    "priceRange": "₹₹",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification", 
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "16:00"
      }
    ]
  };
}

export function getBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function getFAQSchema(faqs) {
  if (!faqs || faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "VR IT Solutions",
    "alternateName": "VRIT Solutions",
    "url": "https://www.vritsol.com",
    "publisher": {
      "@type": "Organization",
      "name": "VR IT Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.vritsol.com/logo.png"
      }
    }
  };
}