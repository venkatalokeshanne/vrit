// Direct import of static courses data
import coursesData from '../data/courses-static.json';

/**
 * Get all courses from the static JSON file
 */
export function getAllCoursesStatic() {
  return coursesData;
}

/**
 * Get a specific course by slug from static data
 */
export function getCourseBySlugStatic(slug) {
  return coursesData.find(course => course.slug === slug) || null;
}

/**
 * Get page metadata for a specific course slug
 */
export function getPageMetadataStatic(slug) {
  // Special handling for SEO tester page
  if (slug === 'seo-tester') {
    return {
      title: 'SEO Testing & Analysis Tool - VR IT Solutions',
      description: 'Comprehensive SEO analysis tool to test your pages, preview social media cards, validate rich snippets, and optimize your site\'s search engine performance.',
      keywords: 'SEO tool, SEO analyzer, meta tags, rich snippets, social media preview, search engine optimization',
      robots: 'index, follow',
      openGraph: {
        title: 'SEO Testing & Analysis Tool - VR IT Solutions',
        description: 'Comprehensive SEO analysis tool to test your pages, preview social media cards, validate rich snippets, and optimize your site\'s search engine performance.',
        url: 'https://www.vritsol.com/seo-tester',
        siteName: 'VR IT Solutions',
        type: 'website',
        images: [{
          url: 'https://www.vritsol.com/og-seo-tester.svg',
          width: 1200,
          height: 630,
          alt: 'SEO Testing Tool'
        }]
      },
      twitter: {
        card: 'summary_large_image',
        title: 'SEO Testing & Analysis Tool - VR IT Solutions',
        description: 'Comprehensive SEO analysis tool to test your pages, preview social media cards, validate rich snippets, and optimize your site\'s search engine performance.',
        images: ['https://www.vritsol.com/twitter-seo-tester.svg']
      }
    };
  }

  const course = getCourseBySlugStatic(slug);
  
  if (!course?.metadata) {
    // Return default metadata if course not found
    return {
      title: 'VR IT Solutions - Best Software Training Institute in Hyderabad',
      description: 'Leading IT training institute in Hyderabad offering professional courses in Python, Data Science, SAP, Salesforce with 100% placement assistance.',
    };
  }
  
  return course.metadata;
}

/**
 * Get structured data for a specific course slug
 */
export function getStructuredDataStatic(slug) {
  const course = getCourseBySlugStatic(slug);
  return course?.structuredData || null;
}

/**
 * Get course count from static data
 */
export function getCourseCount() {
  return coursesData.length;
}
