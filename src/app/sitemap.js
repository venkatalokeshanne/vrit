import { getAllCoursesMetadata } from '../lib/sanity';

export default async function sitemap() {
  const baseUrl = 'https://vrit-rho.vercel.app';
  
  try {
    // Get all course metadata from Sanity
    const courses = await getAllCoursesMetadata();
    
    // Static pages
    const staticPages = [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1.0,
      },
      {
        url: `${baseUrl}/aboutus`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/courses`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/contactus`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/privacy-policy`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.3,
      },
      {
        url: `${baseUrl}/terms-and-conditions`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.3,
      },
    ];

    // Dynamic course pages from Sanity
    const coursePages = courses
      .filter(course => course && course.slug && course.slug.current) // Filter out null/invalid courses
      .map((course) => ({
        url: `${baseUrl}/${course.slug.current}`,
        lastModified: new Date(course._updatedAt || course._createdAt),
        changeFrequency: course.slug.current.includes('training') ? 'weekly' : 'monthly',
        priority: course.slug.current === 'index' ? 1.0 : 
                  course.slug.current.includes('training') ? 0.8 : 0.6,
      }));

    // Combine all pages
    const allPages = [...staticPages, ...coursePages];
    
    console.log(`Generated sitemap with ${allPages.length} pages`);
    
    return allPages;
    
  } catch (error) {
    console.error('Error generating sitemap:', error);
    
    // Fallback to static pages only
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1.0,
      },
      {
        url: `${baseUrl}/aboutus`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
    ];
  }
}
