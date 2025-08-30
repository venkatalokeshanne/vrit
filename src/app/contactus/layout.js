import { getCourseBySlugStatic } from '../../utils/staticCourses';

// Define the course slug as a constant
const COURSE_SLUG = 'contactus';

// Generate metadata for the contact page
export async function generateMetadata() {
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  return courseMetadata?.metadata || {
    title: 'Contact Us | VR IT Solutions - Get in Touch',
    description: 'Contact VR IT Solutions for expert training in technology, data science, cloud computing and more. Get free consultation, course details, and career guidance from our experts.',
    keywords: 'contact VR IT Solutions, training institute contact, course enquiry, technology training contact, Hyderabad training contact',
  };
}

export default function ContactLayout({ children }) {
  return children;
}
