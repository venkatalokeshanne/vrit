/**
 * Advanced SEO Enhancement Utilities
 */

// Generate breadcrumb structured data
export function generateBreadcrumbSchema(slug, title) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.vritsol.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Courses",
        "item": "https://www.vritsol.com/courses"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": `https://www.vritsol.com/${slug}`
      }
    ]
  };
}

// Generate FAQ structured data
export function generateFAQSchema(faqs) {
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

// Generate course rating/review schema
export function generateCourseReviewSchema(courseTitle, rating = "4.8", reviewCount = "150") {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": courseTitle,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "reviewCount": reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Student Review"
        },
        "reviewBody": "Excellent training quality with hands-on projects and placement assistance."
      }
    ]
  };
}

// Generate video structured data
export function generateVideoSchema(title, description, thumbnailUrl, uploadDate) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": title,
    "description": description,
    "thumbnailUrl": thumbnailUrl,
    "uploadDate": uploadDate,
    "duration": "PT30M",
    "contentUrl": "https://www.vritsol.com/course-preview",
    "embedUrl": "https://www.vritsol.com/course-preview",
    "publisher": {
      "@type": "Organization",
      "name": "VR IT SOL",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.vritsol.com/images/vritlogo.png"
      }
    }
  };
}

// Generate job posting schema for career opportunities
export function generateJobPostingSchema(title, location = "Hyderabad, Telangana") {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": `${title} Professional`,
    "description": `Career opportunities for ${title} professionals with comprehensive training and placement assistance.`,
    "hiringOrganization": {
      "@type": "Organization",
      "name": "VR IT SOL",
      "sameAs": "https://www.vritsol.com"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "addressCountry": "IN"
      }
    },
    "datePosted": new Date().toISOString().split('T')[0],
    "employmentType": "FULL_TIME",
    "industry": "Information Technology"
  };
}

// Generate how-to schema for learning paths
export function generateHowToSchema(courseTitle, steps) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to Learn ${courseTitle}`,
    "description": `Step-by-step guide to master ${courseTitle} with VR IT SOL`,
    "image": "https://www.vritsol.com/images/course-guide.jpg",
    "totalTime": "PT60D",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": "25000"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Computer with Internet"
      },
      {
        "@type": "HowToSupply", 
        "name": "Course Materials"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Learning Management System"
      }
    ],
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.description,
      "image": step.image || "https://www.vritsol.com/images/step-guide.jpg"
    }))
  };
}

// Meta tags for better social sharing
export function generateEnhancedMetaTags(title, description, image, url) {
  return {
    // Enhanced Open Graph
    "og:type": "website",
    "og:site_name": "VR IT SOL - Best IT Training Institute",
    "og:locale": "en_US",
    "og:locale:alternate": ["en_GB", "en_CA", "en_AU"],
    
    // Twitter Card enhancements
    "twitter:card": "summary_large_image",
    "twitter:site": "@vritsolutions",
    "twitter:creator": "@vritsolutions",
    
    // Apple specific
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "VR IT SOL",
    
    // Microsoft specific
    "msapplication-TileColor": "#0066cc",
    "msapplication-config": "/browserconfig.xml",
    
    // Additional SEO
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1",
    "bingbot": "index, follow",
    "theme-color": "#0066cc"
  };
}
