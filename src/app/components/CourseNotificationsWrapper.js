'use client';

import { usePathname } from 'next/navigation';
import CourseNotifications from './CourseNotifications';
import { getCourseBySlugClient, isCoursePageClient, getCleanCourseNameClient } from '../../utils/clientCourses';

const CourseNotificationsWrapper = () => {
  const pathname = usePathname();
  
  // Extract course slug from pathname
  const courseSlug = pathname.replace('/', '');
  
  // Check if this is a course page
  if (!isCoursePageClient(courseSlug)) {
    return null;
  }
  
  // Get course data and extract clean course name
  const courseData = getCourseBySlugClient(courseSlug);
  const courseName = getCleanCourseNameClient(courseData);
  
  if (!courseName) {
    return null;
  }

  return <CourseNotifications courseName={courseName} />;
};

export default CourseNotificationsWrapper;
