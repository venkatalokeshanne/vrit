import { NextResponse } from 'next/server';

const exactGonePaths = new Set([
  '/aboutus.php',
  '/services.php',
  '/courses.php',
  '/blogloadData_cat.php',
  '/sap-mm-online-training.php',
  '/snowflake-training-in-hyderabad.php',
  '/sas-clinical-online-training-in-us-uk-canada-australia.php',
  '/sas-clinical-training-in-pune.php',
  '/sap-s4Hana-simple-logistics-training.php',
  '/servicenow-training-in-hyderabad.php',
  '/google-cloud-training.php',
  '/refund-and-course-rescheduling-policy.php',
  '/sap-security-training.php',
  '/informatica-mdm-training.php',
  '/sap-basis-online-training.php',
  '/mulesoft-training-in-hyderabad.php',
  '/machine-learning-with-python-online-training-in-hyderabad.php',
  '/azure-devops-training-in-hyderabad.php',
  '/edi-training.php',
  '/sap-sd-online-training-in-hyderabad.php',
  '/blog/snowflake-training',
  '/pega-training-in-hyderabad.html',
  '/google-cloud-training',
  '/docker-with-kubernatees',
  '/sap-s4hana-simple-logistics-training',
]);

const prefixGonePaths = ['/courses&', '/sap-mm-online-', '/studypdfs/'];

const shouldReturnGone = (pathname) => {
  if (exactGonePaths.has(pathname)) {
    return true;
  }

  if (pathname.endsWith('.php') || pathname.endsWith('.pdf')) {
    return true;
  }

  return prefixGonePaths.some((prefix) => pathname.startsWith(prefix));
};

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (shouldReturnGone(pathname)) {
    return new NextResponse(null, { status: 410 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/courses&:path*',
    '/blog/snowflake-training',
    '/sap-mm-online-:path*',
    '/pega-training-in-hyderabad.html',
    '/google-cloud-training',
    '/docker-with-kubernatees',
    '/sap-s4hana-simple-logistics-training',
    '/studypdfs/:path*',
    '/:path*.php',
    '/:path*.pdf',
  ],
};
