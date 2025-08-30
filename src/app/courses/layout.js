import { getCourseBySlugStatic } from '../../utils/staticCourses';

// Define the course slug as a constant
const COURSE_SLUG = 'courses';

// Generate metadata for the courses page
export async function generateMetadata() {
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  return courseMetadata?.metadata || {
    title: 'Professional Training Courses | VR IT Solutions',
    description: 'Explore our comprehensive range of professional training courses in technology, data science, cloud computing, and more. Expert instructors, hands-on learning, and placement assistance.',
    keywords: 'training courses, professional development, technology courses, data science, cloud computing, certification programs',
  };
}

export default function CoursesLayout({ children }) {
  return children;
}
