'use client';

import { usePathname } from 'next/navigation';
import CourseNotifications from './CourseNotifications';
import { getCourseBySlugClient, isCoursePageClient, getCleanCourseNameClient } from '../../utils/clientCourses';

const CourseNotificationsWrapper = () => {
  const pathname = usePathname();
  
  // Extract course slug from pathname
  const courseSlug = pathname.replace('/', '');
  
  // Show on homepage and course pages
  const isHomePage = pathname === '/';
  const isCourse = isCoursePageClient(courseSlug);
  
  if (!isHomePage && !isCourse) {
    return null; // Don't show on other pages like /about, /contact, etc.
  }
  
  // Get course name if on course page, otherwise use default
  let courseName = "VR IT Solutions";
  if (isCourse) {
    const courseData = getCourseBySlugClient(courseSlug);
    courseName = getCleanCourseNameClient(courseData) || courseName;
  }

  return <CourseNotifications courseName={courseName} />;
};

export default CourseNotificationsWrapper;
