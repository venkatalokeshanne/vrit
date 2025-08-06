import { getAllCoursesMetadata, getCourseBySlug } from '../lib/sanity';
import { unstable_cache } from 'next/cache';

// Cache courses data for 1 hour
const getCachedCourseData = unstable_cache(
  async (slug) => {
    const pageData = await getCourseBySlug(slug);
    return pageData;
  },
  ['course-metadata'],
  {
    revalidate: 3600, // 1 hour
    tags: ['course-metadata']
  }
);

/**
 * Get metadata for a specific page/course with caching
 * @param {string} slug - The page slug
 * @returns {object} - Metadata object for Next.js
 */
export async function getPageMetadata(slug) {
  try {
    // Get cached course data
    const pageData = await getCachedCourseData(slug);
    
    if (!pageData) {
      // Return default metadata if slug not found
      return {
        metadataBase: new URL('https://www.vritsol.com'),
        title: 'VR IT Solutions | Best Software Training Institute in Hyderabad',
        description: 'Leading software training institute in Hyderabad offering comprehensive IT courses with 100% placement assistance.',
        keywords: ['software training institute hyderabad', 'IT training', 'placement assistance'],
        alternates: {
          canonical: `https://www.vritsol.com/${slug}`,
        },
      };
    }

    // Return formatted metadata for Next.js with full SEO optimization
    return {
      metadataBase: new URL('https://www.vritsol.com'),
      title: pageData.title,
      description: pageData.description,
      keywords: pageData.keywords,
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
        canonical: pageData.canonical || `https://www.vritsol.com/${slug}`,
      },
      openGraph: {
        title: pageData.ogTitle || pageData.title,
        description: pageData.ogDescription || pageData.description,
        url: pageData.ogUrl || `https://www.vritsol.com/${slug}`,
        siteName: 'VR IT Solutions',
        type: 'website',
        locale: 'en_US',
        images: pageData.ogImage ? [
          {
            url: `https://www.vritsol.com${pageData.ogImage}`,
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
        images: pageData.twitterImage ? [`https://www.vritsol.com${pageData.twitterImage}`] : ['https://www.vritsol.com/images/twitter-default.jpg'],
        creator: '@vritsolutions',
        site: '@vritsolutions',
      },
      verification: {
        google: 'your-google-verification-code',
        yandex: 'your-yandex-verification-code',
        yahoo: 'your-yahoo-verification-code',
      },
      other: {
        'theme-color': '#1e40af',
        'color-scheme': 'dark light',
        'format-detection': 'telephone=no',
      },
    };
  } catch (error) {
    console.error('Error fetching metadata:', error);
    // Fallback to default metadata
    return {
      metadataBase: new URL('https://www.vritsol.com'),
      title: 'VR IT Solutions | Best Software Training Institute in Hyderabad',
      description: 'Leading software training institute in Hyderabad offering comprehensive IT courses with 100% placement assistance.',
    };
  }
}

/**
 * Get structured data for a specific page/course
 * @param {string} slug - The page slug
 * @returns {object} - JSON-LD structured data
 */
export async function getStructuredData(slug) {
  try {
    const pageData = await getCachedCourseData(slug);
    
    if (!pageData || !pageData.structuredData) {
      return null;
    }

    // Transform Sanity structured data to JSON-LD format
    const structuredData = {
      '@context': pageData.structuredData.context || 'https://schema.org',
      '@type': pageData.structuredData.type || 'LocalBusiness',
      name: pageData.structuredData.name || pageData.organizationName,
      url: pageData.structuredData.url || `https://www.vritsol.com/${slug}`,
      logo: pageData.structuredData.logo ? `https://www.vritsol.com${pageData.structuredData.logo}` : 'https://www.vritsol.com/images/vritlogo.png',
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
    if (pageData.structuredData.address) {
      structuredData.address = {
        '@type': pageData.structuredData.address.type || 'PostalAddress',
        streetAddress: pageData.structuredData.address.streetAddress || pageData.streetAddress,
        addressLocality: pageData.structuredData.address.addressLocality || 'Hyderabad',
        addressRegion: pageData.structuredData.address.addressRegion || 'Telangana',
        postalCode: pageData.structuredData.address.postalCode || pageData.postalCode,
        addressCountry: pageData.structuredData.address.addressCountry || 'IN',
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
    console.error('Error generating structured data:', error);
    return null;
  }
}

// Cache invalidation helper
export function revalidateMetadataCache() {
  // This would be called when you update content in Sanity
  // You can trigger this via webhook or manual revalidation
  return fetch('/api/revalidate?tag=course-metadata');
}
