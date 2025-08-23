"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import EnquiryModal from "./EnquiryModal";

const CourseFormPopupWrapper = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Exclude these paths from showing the modal
    const excludedPaths = [
      '/',
      '/aboutus',
      '/courses',
      '/contactus',
      '/refund-and-course-rescheduling-policy',
      '/terms-and-conditions',
      '/privacy-policy',
      '/add-testimonial',
      '/admin'
    ];
    // Exclude /blog/*
    const isBlog = pathname.startsWith('/blog/');
    const isExactExcluded = excludedPaths.includes(pathname);
    if (!isBlog && !isExactExcluded) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const handleClose = () => setIsOpen(false);

  // Optionally, extract course name from pathname or props if needed
  let courseName = "Course";
  if (/^\/courses\/[\w-]+/.test(pathname)) {
    courseName = decodeURIComponent(pathname.split("/")[2] || "Course");
  }

  return (
    <EnquiryModal
      isOpen={isOpen}
      onClose={handleClose}
      courseName={courseName}
    />
  );
};

export default CourseFormPopupWrapper;
