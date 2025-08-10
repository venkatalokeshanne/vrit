import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '3hir6j0e',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

// Get all published courses
export async function getAllCourses() {
  try {
    const courses = await client.fetch(`
      *[_type == "course" && status == "published"] | order(_createdAt desc) {
        _id,
        slug,
        title,
        description,
        duration,
        courseModules,
        whoShouldAttend,
        whatYouLearn,
        prerequisites,
        whyJoinCourse,
        customSections,
        keyDifferentiators,
        faqs
      }
    `)
    return courses
  } catch (error) {
    console.error('Error fetching courses:', error)
    return []
  }
}

// Get single course by slug
export async function getCourseBySlug(slug) {
  try {
    const course = await client.fetch(`
      *[_type == "course" && slug.current == $slug && status == "published"][0] {
        _id,
        slug,
        title,
        description,
        duration,
        courseModules,
        whoShouldAttend,
        whatYouLearn,
        prerequisites,
        whyJoinCourse,
        customSections,
        keyDifferentiators,
        faqs
      }
    `, { slug })
    return course
  } catch (error) {
    console.error('Error fetching course by slug:', error)
    return null
  }
}

// Get course slugs for static generation
export async function getCourseSlugs() {
  try {
    const slugs = await client.fetch(`
      *[_type == "course" && status == "published"] {
        "slug": slug.current
      }
    `)
    return slugs.map(item => item.slug)
  } catch (error) {
    console.error('Error fetching course slugs:', error)
    return []
  }
}
