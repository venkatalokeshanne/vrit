import { getCourseBySlug, getCourseSlugs } from '../../lib/courses';
import { getCourseBySlugStatic } from '../../utils/staticCourses';
import DynamicCoursePage from '../components/DynamicCoursePage';
import { notFound } from 'next/navigation';

// Generate static params for dynamic courses only
export async function generateStaticParams() {
  try {
    // Get dynamic course slugs from Sanity
    const dynamicSlugs = await getCourseSlugs();
    
    return dynamicSlugs.map((slug) => ({
      slug: slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Generate metadata for each course
export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  try {
    // First try to get dynamic course from Sanity
    const dynamicCourse = await getCourseBySlug(slug);
    
    if (dynamicCourse) {
      // Use same pattern as static courses
      const courseMetadata = getCourseBySlugStatic(slug);
      return courseMetadata?.metadata || {};
    }
    
    // Fallback to static course metadata
    const staticCourse = getCourseBySlugStatic(slug);
    return staticCourse?.metadata || {};
  } catch (error) {
    console.error('Error generating metadata for slug:', slug, error);
    return {};
  }
}

// Main page component
export default async function CoursePage({ params }) {
  const { slug } = await params;
  
  try {
    // First try to get dynamic course from Sanity
    const dynamicCourse = await getCourseBySlug(slug);
    
    if (dynamicCourse) {
      // Render dynamic course page
      return <DynamicCoursePage course={dynamicCourse} />;
    }
    
    // If no dynamic course found, try to import static page
    try {
      const StaticPageComponent = await import(`../${slug}/page.js`).then(module => module.default);
      return <StaticPageComponent />;
    } catch {
      // If neither dynamic nor static page exists, return 404
      console.log(`No course found for slug: ${slug}`);
      notFound();
    }
  } catch (error) {
    console.error('Error rendering course page:', error);
    notFound();
  }
}

// Configure page options
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour
