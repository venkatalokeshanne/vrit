import coursesMetadata from '../data/coursesMetadata.json';

/**
 * Get metadata for a specific page/course
 * @param {string} slug - The page slug (e.g., 'servicenow-training-in-hyderabad')
 * @returns {object} - Metadata object for Next.js
 */
export function getPageMetadata(slug) {
  // Find the metadata for the specific slug
  const pageData = coursesMetadata.find(course => course.id === slug);
  
  if (!pageData) {
    // Return default metadata if slug not found
    return {
      title: 'VR IT Solutions | Best Software Training Institute in Hyderabad',
      description: 'Leading software training institute in Hyderabad offering comprehensive IT courses with 100% placement assistance.',
      keywords: 'software training institute hyderabad, IT training, placement assistance',
    };
  }

  // Return formatted metadata for Next.js
  return {
    title: pageData.title,
    description: pageData.description,
    keywords: pageData.keywords,
    authors: [{ name: 'VR IT Solutions' }],
    creator: 'VR IT Solutions',
    publisher: 'VR IT Solutions',
    openGraph: {
      title: pageData.ogTitle,
      description: pageData.ogDescription,
      url: `https://www.vritsol.com${pageData.ogUrl}`,
      siteName: 'VR IT Solutions',
      images: [
        {
          url: pageData.ogImage,
          width: 800,
          height: 600,
          alt: pageData.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageData.twitterTitle,
      description: pageData.twitterDescription,
      images: [pageData.twitterImage],
      creator: '@vritsolutions',
    },
    alternates: {
      canonical: `https://www.vritsol.com${pageData.ogUrl}`,
    },
    other: {
      'author': 'VR IT Solutions',
      'publisher': 'VR IT Solutions',
      'owner': 'VR IT Solutions',
      'classification': 'Training',
    }
  };
}

/**
 * Generate structured data (JSON-LD) for a specific page
 * @param {string} slug - The page slug
 * @returns {object} - Structured data object
 */
export function getStructuredData(slug) {
  const pageData = coursesMetadata.find(course => course.id === slug);
  
  if (!pageData || !pageData.structuredData) {
    return null;
  }

  // Convert relative URLs to absolute URLs
  const structuredData = { ...pageData.structuredData };
  
  if (structuredData.url) {
    structuredData.url = `https://www.vritsol.com${structuredData.url}`;
  }
  
  if (structuredData.logo) {
    structuredData.logo = `https://www.vritsol.com${structuredData.logo}`;
  }

  return structuredData;
}

/**
 * Generate review/rating structured data
 * @param {string} slug - The page slug
 * @returns {object} - Review structured data
 */
export function getReviewStructuredData(slug) {
  const pageData = coursesMetadata.find(course => course.id === slug);
  
  if (!pageData || !pageData.reviewCount || pageData.reviewCount === "0") {
    return null;
  }

  return {
    "@context": "http://schema.org",
    "@type": "AggregateRating",
    "ratingValue": pageData.ratingValue,
    "reviewCount": pageData.reviewCount,
    "bestRating": "5",
    "worstRating": "1"
  };
}

/**
 * Get all available course slugs
 * @returns {string[]} - Array of all course slugs
 */
export function getAllCourseSlugs() {
  return coursesMetadata.map(course => course.id);
}

/**
 * Get course data by slug
 * @param {string} slug - The course slug
 * @returns {object|null} - Course data object or null if not found
 */
export function getCourseData(slug) {
  return coursesMetadata.find(course => course.id === slug) || null;
}
