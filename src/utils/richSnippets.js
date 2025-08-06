import sitelinksData from '../data/sitelinksData.json';

/**
 * Rich Snippets and Schema Markup Generator
 * Generates comprehensive structured data for better search engine visibility
 */
export class RichSnippetsManager {
  
  /**
   * Generate Organization schema with sitelinks
   */
  static generateOrganizationSchema() {
    const { mainSitelinks } = sitelinksData;
    
    return {
      "@context": "https://schema.org",
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "name": "VR IT Solutions",
      "alternateName": ["VRIT Solutions", "VR IT Training Institute"],
      "description": "Leading Software Training Institute in Hyderabad offering comprehensive IT courses with 100% placement assistance",
      "url": "https://vritsol.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vritsol.com/images/vritlogo.png",
        "width": 300,
        "height": 100
      },
      "image": "https://vritsol.com/images/vritlogo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "506/A, Aditya Enclave, Nilagiri Block, 5th Floor",
        "addressLocality": "Ameerpet",
        "addressRegion": "Telangana", 
        "postalCode": "500073",
        "addressCountry": "India"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "17.4399",
        "longitude": "78.3957"
      },
      "telephone": "+91-9032734343",
      "email": "info@vritsol.com",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-9032734343",
          "contactType": "customer service",
          "email": "info@vritsol.com",
          "availableLanguage": ["English", "Hindi", "Telugu"],
          "areaServed": "India",
          "serviceArea": {
            "@type": "Place",
            "name": "Hyderabad, India"
          }
        },
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "telephone": "+91-9032734343",
          "email": "admissions@vritsol.com"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/vritsolutions/",
        "https://twitter.com/vritsolutions",
        "https://www.linkedin.com/company/vritsolutions",
        "https://www.youtube.com/channel/UCwasTbRqeFPtreZdVdcRbuA",
        "https://www.instagram.com/vritsolutions"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "IT Training Courses",
        "itemListElement": this.generateCourseOfferings()
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "2500",
        "bestRating": "5",
        "worstRating": "1"
      },
      "priceRange": "₹₹",
      "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "UPI", "Net Banking"],
      "currenciesAccepted": "INR",
      "foundingDate": "2010",
      "employee": [
        {
          "@type": "Person",
          "name": "Expert Trainers",
          "jobTitle": "Senior IT Trainers"
        }
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "IT Training Institute Association"
      },
      "areaServed": [
        {
          "@type": "Place", 
          "name": "Hyderabad"
        },
        {
          "@type": "Place",
          "name": "India"
        },
        {
          "@type": "Place",
          "name": "Global Online"
        }
      ],
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://vritsol.com/courses?search={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      ]
    };
  }

  /**
   * Generate Course Offerings for Organization Schema
   */
  static generateCourseOfferings() {
    const courses = [
      {
        name: "Data Science Training",
        description: "Complete Data Science course with Python, Machine Learning, and AI",
        url: "/data-science-training-in-hyderabad",
        duration: "3 months"
      },
      {
        name: "Salesforce Training", 
        description: "Salesforce Admin and Developer certification training",
        url: "/salesforce-training-in-hyderabad",
        duration: "2 months"
      },
      {
        name: "Python Training",
        description: "Python programming from basics to advanced level",
        url: "/python-online-training",
        duration: "2 months"
      },
      {
        name: "ServiceNow Training",
        description: "ServiceNow platform training with hands-on projects",
        url: "/servicenow-training-in-hyderabad",
        duration: "3 months"
      }
    ];

    return courses.map((course, index) => ({
      "@type": "Course",
      "position": index + 1,
      "name": course.name,
      "description": course.description,
      "url": `https://vritsol.com${course.url}`,
      "provider": {
        "@type": "Organization",
        "name": "VR IT Solutions",
        "url": "https://vritsol.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://vritsol.com/images/vritlogo.png"
        }
      },
      "educationalLevel": "Beginner to Advanced",
      "timeRequired": course.duration,
      "inLanguage": ["en", "hi"],
      "courseMode": "blended",
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "courseMode": "online",
          "courseSchedule": {
            "@type": "Schedule",
            "duration": course.duration,
            "repeatFrequency": "Weekly",
            "repeatCount": 12
          },
          "instructor": [
            {
              "@type": "Person",
              "name": "Industry Expert Trainer",
              "description": "Senior IT Professional with 10+ years experience"
            }
          ],
          "location": {
            "@type": "VirtualLocation",
            "url": "https://vritsol.com/online-training"
          }
        },
        {
          "@type": "CourseInstance", 
          "courseMode": "onsite",
          "courseSchedule": {
            "@type": "Schedule",
            "duration": course.duration,
            "repeatFrequency": "Weekly",
            "repeatCount": 12
          },
          "instructor": [
            {
              "@type": "Person",
              "name": "Industry Expert Trainer",
              "description": "Senior IT Professional with 10+ years experience"
            }
          ],
          "location": {
            "@type": "Place",
            "name": "VR IT Solutions Training Center",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "506/A, Aditya Enclave, Ameerpet",
              "addressLocality": "Hyderabad",
              "addressRegion": "Telangana",
              "postalCode": "500073",
              "addressCountry": "India"
            }
          }
        }
      ],
      "coursePrerequisites": "Basic computer knowledge",
      "occupationalCredentialAwarded": {
        "@type": "EducationalOccupationalCredential",
        "name": `${course.name} Certificate`,
        "description": `Industry-recognized certificate in ${course.name}`
      },
      "teaches": course.name.includes("Data Science") ? 
        ["Python Programming", "Machine Learning", "Data Analysis", "Statistics"] :
        course.name.includes("Python") ?
        ["Python Basics", "Web Development", "Data Structures", "Algorithms"] :
        course.name.includes("Salesforce") ?
        ["Salesforce Admin", "Apex Programming", "Lightning Development", "Workflow Rules"] :
        ["Platform Administration", "Workflow Management", "Service Catalog", "Reporting"]
    }));
  }

  /**
   * Generate Website Navigation Schema (for Sitelinks)
   */
  static generateWebsiteSchema() {
    const { mainSitelinks } = sitelinksData;
    
    return {
      "@context": "https://schema.org",
      "@type": "Website", 
      "name": "VR IT Solutions",
      "url": "https://vritsol.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://vritsol.com/courses?search={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      "mainEntity": {
        "@type": "ItemList",
        "name": "Main Navigation",
        "itemListElement": mainSitelinks.map((link, index) => ({
          "@type": "SiteNavigationElement",
          "position": index + 1,
          "name": link.name,
          "description": link.description,
          "url": `https://vritsol.com${link.url}`,
          "potentialAction": {
            "@type": "ReadAction",
            "target": `https://vritsol.com${link.url}`
          }
        }))
      }
    };
  }

  /**
   * Generate FAQ Schema for Rich Snippets
   */
  static generateFAQSchema(faqs = []) {
    if (!faqs.length) {
      faqs = this.getDefaultFAQs();
    }

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
          "author": {
            "@type": "Organization",
            "name": "VR IT Solutions"
          }
        }
      }))
    };
  }

  /**
   * Generate Breadcrumb Schema
   */
  static generateBreadcrumbSchema(breadcrumbs) {
    return {
      "@context": "https://schema.org", 
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": {
          "@type": "WebPage",
          "url": `https://vritsol.com${crumb.url}`,
          "name": crumb.name
        }
      }))
    };
  }

  /**
   * Generate Local Business Schema for Rich Snippets
   */
  static generateLocalBusinessSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "VR IT Solutions",
      "image": "https://vritsol.com/images/vritlogo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "506/A, Aditya Enclave, Nilagiri Block, 5th Floor",
        "addressLocality": "Ameerpet",
        "addressRegion": "Telangana",
        "postalCode": "500073",
        "addressCountry": "India"
      },
      "geo": {
        "@type": "GeoCoordinates", 
        "latitude": "17.4399",
        "longitude": "78.3957"
      },
      "telephone": "+91-9032734343",
      "email": "info@vritsol.com",
      "url": "https://vritsol.com",
      "openingHours": [
        "Mo-Sa 09:00-18:00"
      ],
      "priceRange": "₹₹",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "2500"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Student Review"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "reviewBody": "Excellent training institute with experienced trainers and great placement support."
        }
      ]
    };
  }

  /**
   * Generate Article Schema for Course Pages
   */
  static generateArticleSchema(courseData) {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": courseData.title,
      "description": courseData.description,
      "image": `https://vritsol.com${courseData.ogImage}`,
      "author": {
        "@type": "Organization",
        "name": "VR IT Solutions"
      },
      "publisher": {
        "@type": "Organization",
        "name": "VR IT Solutions",
        "logo": {
          "@type": "ImageObject",
          "url": "https://vritsol.com/images/vritlogo.png"
        }
      },
      "datePublished": "2024-01-01",
      "dateModified": new Date().toISOString().split('T')[0],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "url": `https://vritsol.com/${courseData.slug}`
      },
      "articleSection": "Education",
      "keywords": courseData.keywords
    };
  }

  /**
   * Get Default FAQs
   */
  static getDefaultFAQs() {
    return [
      {
        question: "What courses do you offer at VR IT Solutions?",
        answer: "We offer comprehensive training in Data Science, Python, Salesforce, ServiceNow, SAP (FICO, SD, MM), DevOps, Machine Learning, and 20+ other technology courses."
      },
      {
        question: "Do you provide placement assistance?",
        answer: "Yes, we provide 100% placement assistance with our network of 500+ hiring partners, resume preparation, and interview coaching."
      },
      {
        question: "Are online training options available?",
        answer: "Yes, we offer both online and classroom training with live instructors, real-time projects, and 24/7 lab access."
      },
      {
        question: "What makes VR IT Solutions different?",
        answer: "We offer industry-experienced trainers, hands-on projects, flexible timings, lifetime course access, and guaranteed placement support."
      },
      {
        question: "Where is VR IT Solutions located?",
        answer: "We are located at 506/A, Aditya Enclave, Ameerpet, Hyderabad, Telangana 500073. We also provide online training globally."
      }
    ];
  }

  /**
   * Generate complete schema markup for a page
   */
  static generateCompleteSchema(pageType, pageData = {}) {
    const schemas = [];

    // Always include Organization schema
    schemas.push(this.generateOrganizationSchema());
    
    // Always include Website schema
    schemas.push(this.generateWebsiteSchema());

    // Page-specific schemas
    switch (pageType) {
      case 'home':
        // LocalBusiness properties already included in Organization schema via multiple @type
        // FAQ schema is handled by FAQRichSnippets component
        break;
        
      case 'course':
        schemas.push(this.generateArticleSchema(pageData));
        if (pageData.breadcrumbs) {
          schemas.push(this.generateBreadcrumbSchema(pageData.breadcrumbs));
        }
        break;
        
      case 'contact':
        schemas.push(this.generateLocalBusinessSchema());
        break;
        
      default:
        if (pageData.breadcrumbs) {
          schemas.push(this.generateBreadcrumbSchema(pageData.breadcrumbs));
        }
    }

    return schemas;
  }
}

export default RichSnippetsManager;
