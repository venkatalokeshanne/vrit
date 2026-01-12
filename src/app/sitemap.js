import { getCourseSlugs } from '../lib/courses';
import { client } from '../lib/sanity';
import { getAllCoursesStatic } from '../utils/staticCourses';

const BASE_URL = 'https://www.vritsol.com';
const EXTRA_PATHS = ['services'];

const normalizeSlug = (slug) => {
  if (!slug) {
    return null;
  }

  if (slug === 'index') {
    return '';
  }

  return slug.replace(/^\/+/, '');
};

const buildUrl = (slug) => {
  if (!slug) {
    return BASE_URL;
  }

  return `${BASE_URL}/${slug}`;
};

const getBlogSlugs = async () => {
  try {
    const posts = await client.fetch(`
      *[_type == "post" && published == true]{
        "slug": slug.current
      }
    `);

    return posts.map((post) => post.slug).filter(Boolean);
  } catch (error) {
    console.error('Error fetching blog slugs for sitemap:', error);
    return [];
  }
};

export default async function sitemap() {
  const staticCourses = getAllCoursesStatic();
  const staticSlugs = staticCourses.map((course) => course.slug).filter(Boolean);
  const dynamicSlugs = await getCourseSlugs();
  const blogSlugs = await getBlogSlugs();

  const allSlugs = new Set([
    ...staticSlugs,
    ...dynamicSlugs,
    ...blogSlugs.map((slug) => `blog/${slug}`),
    ...EXTRA_PATHS,
  ]);

  const lastModified = new Date().toISOString();

  return Array.from(allSlugs)
    .map(normalizeSlug)
    .filter((slug) => slug !== null)
    .map((slug) => ({
      url: buildUrl(slug),
      lastModified,
    }));
}
