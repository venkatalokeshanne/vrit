import { getAllCoursesMetadata, getCourseBySlug } from '../lib/sanity';

/**
 * Get metadata for a specific page/course with enhanced SEO
 * @param {string} slug - The page slug
 * @returns {object} - Metadata object for Next.js
 */
export async function getPageMetadata(slug) {
  try {
    // Get course data directly
    const pageData = await getCourseBySlug(slug);
    
    if (!pageData) {
      // Return enhanced default metadata if slug not found
      return {
        metadataBase: new URL('https://www.vritsol.com'),
        title: 'VR IT Solutions | Best Software Training Institute in Hyderabad',
        description: 'Leading software training institute in Hyderabad offering comprehensive IT courses with 100% placement assistance. Expert trainers, hands-on projects, and career support.',
        keywords: ['software training institute hyderabad', 'IT training', 'placement assistance', 'online training', 'classroom training'],
        authors: [{ name: 'VR IT Solutions' }],
        creator: 'VR IT Solutions',
        publisher: 'VR IT Solutions',
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
        alternates: {
          canonical: `https://www.vritsol.com/${slug}`,
        },
        openGraph: {
          title: 'VR IT Solutions | Best Software Training Institute in Hyderabad',
          description: 'Leading software training institute in Hyderabad offering comprehensive IT courses with 100% placement assistance.',
          url: `https://www.vritsol.com/${slug}`,
          siteName: 'VR IT Solutions',
          type: 'website',
          locale: 'en_US',
          images: [
            {
              url: 'https://www.vritsol.com/images/og-default.jpg',
              width: 1200,
              height: 630,
              alt: 'VR IT Solutions - Best Software Training Institute',
            }
          ],
        },
        twitter: {
          card: 'summary_large_image',
          title: 'VR IT Solutions | Best Software Training Institute in Hyderabad',
          description: 'Leading software training institute in Hyderabad offering comprehensive IT courses with 100% placement assistance.',
          images: ['https://www.vritsol.com/images/twitter-default.jpg'],
          creator: '@vritsolutions',
          site: '@vritsolutions',
        },
      };
    }
    // console.log('Saibaba Fetched metadata for slug:', slug, pageData);
    // Return comprehensive metadata with all SEO optimizations
    return {
      metadataBase: new URL('https://www.vritsol.com'),
      title: pageData.title,
      description: pageData.description,
      mainImage: pageData.mainImage,
      keywords: pageData.keywords || [],
      authors: [{ name: 'VR IT Solutions' }],
      creator: 'VR IT Solutions',
      publisher: 'VR IT Solutions',
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
      alternates: {
        canonical: pageData.canonical || `https://www.vritsol.com/${pageData.slug?.current || slug}`,
      },
      openGraph: {
        title: pageData.ogTitle || pageData.title,
        description: pageData.ogDescription || pageData.description,
        url: pageData.ogUrl || `https://www.vritsol.com/${pageData.slug?.current || slug}`,
        siteName: 'VR IT Solutions',
        type: 'website',
        locale: 'en_US',
        images: pageData.ogImage ? [
          {
            url: pageData.ogImage.startsWith('http') ? pageData.ogImage : `https://www.vritsol.com${pageData.ogImage}`,
            width: 1200,
            height: 630,
            alt: pageData.ogTitle || pageData.title,
          }
        ] : [
          {
            url: 'https://www.vritsol.com/images/og-default.jpg',
            width: 1200,
            height: 630,
            alt: 'VR IT Solutions - Best Software Training Institute',
          }
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: pageData.twitterTitle || pageData.ogTitle || pageData.title,
        description: pageData.twitterDescription || pageData.ogDescription || pageData.description,
        images: pageData.twitterImage ? 
          [pageData.twitterImage.startsWith('http') ? pageData.twitterImage : `https://www.vritsol.com${pageData.twitterImage}`] : 
          ['https://www.vritsol.com/images/twitter-default.jpg'],
        creator: '@vritsolutions',
        site: '@vritsolutions',
      },
      verification: {
        google: process.env.GOOGLE_VERIFICATION_CODE,
        yandex: process.env.YANDEX_VERIFICATION_CODE,
      },
      other: {
        'theme-color': '#1e40af',
        'color-scheme': 'dark light',
        'format-detection': 'telephone=no',
      },
    };

  } catch (error) {
    console.error('Error fetching metadata for slug:', slug, error);
    // Fallback metadata
    return {
      metadataBase: new URL('https://www.vritsol.com'),
      title: 'VR IT Solutions | Best Software Training Institute in Hyderabad',
      description: 'Leading software training institute in Hyderabad offering comprehensive IT courses with 100% placement assistance.',
      alternates: {
        canonical: `https://www.vritsol.com/${slug}`,
      },
    };
  }
}

/**
 * Get structured data for a specific page/course with enhanced SEO
 * @param {string} slug - The page slug
 * @returns {object} - JSON-LD structured data
 */
export async function getStructuredData(slug) {
  try {
    const pageData = await getCourseBySlug(slug);
    
    if (!pageData || !pageData.structuredData) {
      // Return basic organization structured data
      return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'VR IT Solutions',
        url: `https://www.vritsol.com/${slug}`,
        logo: 'https://www.vritsol.com/images/vritlogo.png',
        description: 'Best software training institute in Hyderabad offering comprehensive IT courses with placement assistance.',
        telephone: '+919032734343',
        email: 'info@vritsol.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '506/A, Aditya Enclave, Nilagiri Block, 5th Floor, Ameerpet',
          addressLocality: 'Hyderabad',
          addressRegion: 'Telangana',
          postalCode: '500016',
          addressCountry: 'IN',
        },
        sameAs: [
          'https://www.facebook.com/vritsolutions/',
          'https://twitter.com/vritsolutions',
          'https://www.youtube.com/channel/UCwasTbRqeFPtreZdVdcRbuA'
        ],
      };
    }

    // Transform Sanity structured data to JSON-LD format
    const structuredData = {
      '@context': pageData.structuredData.context || 'https://schema.org',
      '@type': pageData.structuredData.type || 'LocalBusiness',
      name: pageData.structuredData.name || pageData.organizationName || pageData.title,
      url: pageData.structuredData.url || `https://www.vritsol.com/${pageData.slug?.current || slug}`,
      logo: pageData.structuredData.logo ? 
        (pageData.structuredData.logo.startsWith('http') ? pageData.structuredData.logo : `https://www.vritsol.com${pageData.structuredData.logo}`) :
        'https://www.vritsol.com/images/vritlogo.png',
      description: pageData.description,
      telephone: pageData.structuredData.contactPoint?.[0]?.telephone || '+919032734343',
      email: pageData.structuredData.contactPoint?.[0]?.email || 'info@vritsol.com',
      sameAs: pageData.structuredData.sameAs || [
        'https://www.facebook.com/vritsolutions/',
        'https://twitter.com/vritsolutions',
        'https://www.youtube.com/channel/UCwasTbRqeFPtreZdVdcRbuA'
      ],
    };

    // Add address if available
    if (pageData.structuredData.address || pageData.streetAddress) {
      structuredData.address = {
        '@type': 'PostalAddress',
        streetAddress: pageData.structuredData.address?.streetAddress || pageData.streetAddress || '506/A, Aditya Enclave, Nilagiri Block, 5th Floor, Ameerpet',
        addressLocality: pageData.structuredData.address?.addressLocality || 'Hyderabad',
        addressRegion: pageData.structuredData.address?.addressRegion || 'Telangana',
        postalCode: pageData.structuredData.address?.postalCode || pageData.postalCode || '500016',
        addressCountry: pageData.structuredData.address?.addressCountry || 'IN',
      };
    }

    // Add opening hours if available
    if (pageData.structuredData.openingHours?.length > 0) {
      structuredData.openingHours = pageData.structuredData.openingHours;
    }

    // Add aggregate rating if available
    if (pageData.reviewCount && pageData.ratingValue) {
      structuredData.aggregateRating = {
        '@type': 'AggregateRating',
        ratingValue: pageData.ratingValue,
        reviewCount: pageData.reviewCount,
        bestRating: '5',
        worstRating: '1'
      };
    }

    return structuredData;
    
  } catch (error) {
    console.error('Error generating structured data for slug:', slug, error);
    return null;
  }
}

/**
 * Get all courses data with caching
 */
export async function getAllCourses() {
  return await getAllCoursesMetadata();
}

/**
 * Generate robots.txt content
 */
export function generateRobotsTxt() {
  return `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://www.vritsol.com/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /studio/

# Allow important pages
Allow: /courses
Allow: /aboutus
Allow: /contactus
Allow: /blog
Allow: /
`;
}

/**
 * Get enhanced structured data with multiple schema types using Sanity data
 * @param {string} slug - The page slug
 * @param {Array} faqs - Optional FAQ data to include FAQ schema
 * @returns {Array} - Array of structured data objects
 */
export async function getEnhancedStructuredData(slug, faqs = []) {
  try {
    const pageData = await getCourseBySlug(slug);
    const schemas = [];
    
    // Add main course/business structured data
    const mainStructuredData = await getStructuredData(slug);
    if (mainStructuredData) {
      schemas.push(mainStructuredData);
    }
    
    // Add breadcrumb schema using Sanity data
    if (pageData) {
      schemas.push({
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
            "name": pageData.title,
            "item": `https://www.vritsol.com/${slug}`
          }
        ]
      });
    }
    
    // Add FAQ schema if faqs are provided
    if (faqs && faqs.length > 0) {
      schemas.push({
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
      });
    }
    
    // Add course review schema using Sanity data
    if (pageData && pageData.ratingValue) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": pageData.title,
        "description": pageData.description,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": pageData.ratingValue,
          "reviewCount": pageData.reviewCount || "150",
          "bestRating": "5",
          "worstRating": "1"
        },
        "provider": {
          "@type": "EducationalOrganization",
          "name": "VR IT SOL"
        }
      });
    }
    
    return schemas;
  } catch (error) {
    console.error('Error generating enhanced structured data:', error);
    return [];
  }
}
