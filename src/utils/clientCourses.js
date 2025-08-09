// Client-safe course utilities that can be used in client components
import coursesData from '../data/courses-static.json';

/**
 * Get all courses from the static JSON data (client-safe)
 */
export function getAllCoursesClient() {
  return coursesData || [];
}

/**
 * Get a specific course by slug from static data (client-safe)
 */
export function getCourseBySlugClient(slug) {
  const courses = getAllCoursesClient();
  return courses.find(course => course.slug === slug) || null;
}

/**
 * Check if a slug corresponds to a valid course page
 */
export function isCoursePageClient(slug) {
  if (!slug || slug === 'index' || slug === '' || 
      slug === 'aboutus' || slug === 'contact' || 
      slug === 'privacy-policy' || slug === 'terms-and-conditions' ||
      slug === 'admin' || slug === 'blog' || slug === 'refund-and-course-rescheduling-policy') {
    return false;
  }
  
  const course = getCourseBySlugClient(slug);
  return !!course;
}

/**
 * Extract clean course name from course data
 */
export function getCleanCourseNameClient(courseData) {
  if (!courseData) return null;
  
  let courseName = '';
  
  if (courseData?.metadata?.title) {
    // Try to extract course name from title by looking for patterns
    const title = courseData.metadata.title;
    
    // Remove common patterns and extract the main course name
    const cleanTitle = title
      .replace(/NO\.1\s+/i, '')
      .replace(/Best\s+/i, '')
      .replace(/\s+(Online\s+)?Training\s+in\s+[\w\s,]+/i, '')
      .replace(/\s+Course\s+in\s+[\w\s,]+/i, '')
      .replace(/\s+\|\s+.*$/, '') // Remove everything after |
      .replace(/Call@\d+/, '')
      .trim();
    
    courseName = cleanTitle || courseData.organizationName || 'Training Course';
  } else if (courseData?.organizationName) {
    courseName = courseData.organizationName.replace(/\s+\|\s+.*$/, '').trim();
  } else {
    // Fallback: format slug as title case
    courseName = courseData.slug
      ?.replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase())
      .replace(/\s+Training.*$/, ' Training') || 'Training Course';
  }

  return courseName;
}
