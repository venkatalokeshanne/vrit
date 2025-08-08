import fs from 'fs';
import path from 'path';

// Path to the static courses data
const COURSES_DATA_PATH = path.join(process.cwd(), 'src', 'data', 'courses-static.json');

/**
 * Get all courses from the static JSON file
 * This replaces the getAllCourses function in metadata.js
 */
export function getAllCoursesStatic() {
  try {
    if (!fs.existsSync(COURSES_DATA_PATH)) {
      console.warn('Static courses data file not found. Run build-courses-data script first.');
      return [];
    }
    
    const fileContent = fs.readFileSync(COURSES_DATA_PATH, 'utf8');
    const courses = JSON.parse(fileContent);
    return courses;
  } catch (error) {
    console.error('Error reading static courses data:', error);
    return [];
  }
}

/**
 * Get a specific course by slug from static data
 */
export function getCourseBySlugStatic(slug) {
  const courses = getAllCoursesStatic();
  return courses.find(course => course.slug === slug) || null;
}

/**
 * Get page metadata for a specific course slug
 * This replaces getPageMetadata in metadata.js
 */
export function getPageMetadataStatic(slug) {
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
 * This replaces getStructuredData in metadata.js
 */
export function getStructuredDataStatic(slug) {
  const course = getCourseBySlugStatic(slug);
  return course?.structuredData || null;
}

/**
 * Get build timestamp to check when data was last updated
 */
export function getBuildTimestamp() {
  try {
    if (!fs.existsSync(COURSES_DATA_PATH)) {
      return null;
    }
    
    const stats = fs.statSync(COURSES_DATA_PATH);
    return stats.mtime.toISOString();
  } catch (error) {
    console.error('Error getting build timestamp:', error);
    return null;
  }
}

/**
 * Get course count from static data
 */
export function getCourseCount() {
  const courses = getAllCoursesStatic();
  return courses.length;
}
