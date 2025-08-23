// lib/sanity.js
import { createClient } from 'next-sanity';

export const sanityClient = createClient({
  projectId: '3hir6j0e',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
});

export async function fetchCourseNotifications() {
  const query = `*[_type == "notification"] | order(_createdAt desc) {
    _id,
    name,
    location,
    type,
    message,
    course-> {
      title,
      slug,
      courseName
    }
  }`;
  try {
    const result = await sanityClient.fetch(query);
    console.log('Sanity query result:', result);
    return result;
  } catch (error) {
    console.error('Sanity fetch error:', error);
    throw error;
  }
}
