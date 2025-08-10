import { getPageMetadataStatic } from '../../utils/staticCourses';

export async function generateMetadata() {
  return getPageMetadataStatic('seo-tester');
}

export default function SEOTesterLayout({ children }) {
  return children;
}
