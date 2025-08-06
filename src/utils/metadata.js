import coursesMetadata from '../data/coursesMetadata.json';

/**
 * Get metadata for a specific page/course
 * @param {string} slug - The page slug (e.g., 'servicenow-training-in-hyderabad')
 * @returns {object} - Metadata object for Next.js
 */
export function getPageMetadata(slug) {
  // Find the metadata for the specific slug
  const pageData = coursesMetadata.find(course => course.slug === slug);
  
  if (!pageData) {
    // Return default metadata if slug not found
    return {
      metadataBase: new URL('https://www.vritsol.com'),
      title: 'VR IT Solutions | Best Software Training Institute in Hyderabad',
      description: 'Leading software training institute in Hyderabad offering comprehensive IT courses with 100% placement assistance.',
      keywords: 'software training institute hyderabad, IT training, placement assistance',
    };
  }

  // Return formatted metadata for Next.js
  return {
    metadataBase: new URL('https://www.vritsol.com'),
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
  const pageData = coursesMetadata.find(course => course.slug === slug);
  
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
  const pageData = coursesMetadata.find(course => course.slug === slug);
  
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
  return coursesMetadata.map(course => course.slug);
}

/**
 * Get course data by slug
 * @param {string} slug - The course slug
 * @returns {object|null} - Course data object or null if not found
 */
export function getCourseData(slug) {
  return coursesMetadata.find(course => course.slug === slug) || null;
}

/**
 * Generate metadata for blog-related pages
 * @param {string} type - Type of blog page ('blog', 'post', 'category')
 * @param {object} data - Additional data for the page
 * @returns {object} - Metadata object for Next.js
 */
export function getBlogMetadata(type, data = {}) {
  const baseUrl = 'https://www.vritsol.com';
  
  switch (type) {
    case 'blog':
      return {
        metadataBase: new URL(baseUrl),
        title: 'Tech Blog | Latest IT Industry Insights & Training Tips | VR IT Solutions',
        description: 'Stay updated with the latest technology trends, career guidance, and training insights from VR IT Solutions. Expert articles on software development, cloud computing, data science, and more.',
        keywords: 'technology blog, IT industry insights, software development, cloud computing, data science, career guidance, training tips, VR IT Solutions',
        authors: [{ name: 'VR IT Solutions' }],
        creator: 'VR IT Solutions',
        publisher: 'VR IT Solutions',
        openGraph: {
          title: 'Tech Blog | VR IT Solutions',
          description: 'Latest IT industry insights, training tips, and technology trends from leading training institute',
          url: `${baseUrl}/blog`,
          siteName: 'VR IT Solutions',
          images: [
            {
              url: `${baseUrl}/logo.png`,
              width: 1200,
              height: 630,
              alt: 'VR IT Solutions Blog',
            },
          ],
          locale: 'en_US',
          type: 'website',
        },
        twitter: {
          card: 'summary_large_image',
          title: 'Tech Blog | VR IT Solutions',
          description: 'Latest IT industry insights and training tips',
          images: [`${baseUrl}/logo.png`],
          creator: '@vritsolutions',
        },
        alternates: {
          canonical: `${baseUrl}/blog`,
        },
        other: {
          'author': 'VR IT Solutions',
          'publisher': 'VR IT Solutions',
          'classification': 'Technology Blog',
        }
      };
      
    case 'category':
      return {
        metadataBase: new URL(baseUrl),
        title: `${data.title} Articles | VR IT Solutions Blog`,
        description: data.description || `Read the latest articles about ${data.title} from VR IT Solutions tech blog.`,
        keywords: `${data.title}, technology blog, IT training, VR IT Solutions`,
        authors: [{ name: 'VR IT Solutions' }],
        creator: 'VR IT Solutions',
        publisher: 'VR IT Solutions',
        openGraph: {
          title: `${data.title} Articles | VR IT Solutions Blog`,
          description: data.description || `Latest ${data.title} articles and insights`,
          url: `${baseUrl}/blog/category/${data.slug}`,
          siteName: 'VR IT Solutions',
          images: [
            {
              url: `${baseUrl}/logo.png`,
              width: 1200,
              height: 630,
              alt: `${data.title} Articles`,
            },
          ],
          locale: 'en_US',
          type: 'website',
        },
        twitter: {
          card: 'summary_large_image',
          title: `${data.title} Articles | VR IT Solutions Blog`,
          description: data.description || `Latest ${data.title} articles`,
          images: [`${baseUrl}/logo.png`],
          creator: '@vritsolutions',
        },
        alternates: {
          canonical: `${baseUrl}/blog/category/${data.slug}`,
        }
      };
      
    default:
      return {
        metadataBase: new URL(baseUrl),
        title: 'VR IT Solutions | Best Software Training Institute in Hyderabad',
        description: 'Leading software training institute in Hyderabad offering comprehensive IT courses with 100% placement assistance.',
        keywords: 'software training institute hyderabad, IT training, placement assistance',
      };
  }
}

/**
 * Generate structured data for blog pages
 * @param {string} type - Type of blog page
 * @param {object} data - Page data
 * @returns {object} - Structured data object
 */
export function getBlogStructuredData(type, data = {}) {
  const baseUrl = 'https://www.vritsol.com';
  
  switch (type) {
    case 'blog':
      return {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'VR IT Solutions Tech Blog',
        description: 'Latest technology insights, training tips, and career guidance from VR IT Solutions',
        url: `${baseUrl}/blog`,
        publisher: {
          '@type': 'Organization',
          name: 'VR IT Solutions',
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/logo.png`
          }
        },
        inLanguage: 'en-US'
      };
      
    case 'category':
      return {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: `${data.title} Articles | VR IT Solutions Blog`,
        description: data.description || `Articles about ${data.title}`,
        url: `${baseUrl}/blog/category/${data.slug}`,
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: data.postCount || 0
        }
      };
      
    default:
      return null;
  }
}
