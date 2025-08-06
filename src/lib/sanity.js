import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '3hir6j0e',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
})

// Image URL builder
const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

// Helper function to convert Sanity course data to the format your existing components expect
export function transformSanityCourse(sanityCourse) {
  if (!sanityCourse) return null;
  // console.log('Saibaba Transforming Sanity course:', sanityCourse)
  return {
    slug: sanityCourse.slug?.current || '',
    title: sanityCourse.title || '',
    description: sanityCourse.courseDetails?.description || sanityCourse.excerpt || '',
    keywords: sanityCourse.keywords || [],
    ogTitle: sanityCourse.ogTitle || sanityCourse.title || '',
    ogDescription: sanityCourse.ogDescription || sanityCourse.courseDetails?.description || sanityCourse.excerpt || '',
    twitterTitle: sanityCourse.twitterTitle || sanityCourse.ogTitle || sanityCourse.title || '',
    twitterDescription: sanityCourse.twitterDescription || sanityCourse.ogDescription || sanityCourse.courseDetails?.description || sanityCourse.excerpt || '',
    // ogImage and twitterImage are string paths (not image objects)
    ogImage: sanityCourse.ogImage || '',
    twitterImage: sanityCourse.twitterImage || sanityCourse.ogImage || '',
    reviewCount: sanityCourse.reviewsCount?.toString() || '0',
    ratingValue: sanityCourse.rating?.toString() || '5',
    organizationName: sanityCourse.organizationName || sanityCourse.title || '',
    postalCode: sanityCourse.postalCode || sanityCourse.location?.postalCode || '500073',
    streetAddress: sanityCourse.streetAddress || sanityCourse.location?.address || 'Aditya enclave, Nilgiri block, 5th floor 506, a/a, Satyam Diature Road, Ameerpet, Hyderabad, Telangana',
    structuredData: sanityCourse.structuredData || {
      "@context": "http://schema.org",
      "name": sanityCourse.title || '',
      "url": `/${sanityCourse.slug?.current || ''}`,
      "logo": "/images/vritlogo.png",
      "sameAs": [
        "https://www.facebook.com/vritsolutions/",
        "https://twitter.com/vritsolutions",
        "https://www.youtube.com/channel/UCwasTbRqeFPtreZdVdcRbuA"
      ],
      "openingHours": [
        "Mo-Sa 8:00-21:30",
        "Su 9:00-13:00"
      ],
      "contactPoint": [
        {
          "telephone": "9032734343",
          "contactType": "Enquiry",
          "email": "info@vritsol.com",
          "@type": "ContactPoint"
        }
      ],
      "@type": "LocalBusiness"
    }
  }
}

// GROQ query to fetch all course metadata in the format your site expects
export const allCoursesQuery = `
  *[_type == "courseMetadata"] | order(_updatedAt desc) {
    _id,
    _updatedAt,
    title,
    slug,
    excerpt,
    category,
    subcategory,
    duration,
    level,
    price,
    discountPrice,
    rating,
    reviewsCount,
    instructor,
    mainImage,
    courseDetails {
      description,
      objectives,
      prerequisites,
      syllabus,
      certification
    },
    pricing {
      originalPrice,
      discountedPrice,
      currency,
      validity,
      emiAvailable,
      emiStartingFrom
    },
    schedule {
      startDate,
      endDate,
      duration,
      mode,
      timings,
      weekdays
    },
    location {
      city,
      country,
      venue,
      address,
      mapUrl,
      nearbyLandmarks,
      postalCode
    },
    reviews[] {
      name,
      rating,
      comment,
      date,
      verified
    },
    metaTitle,
    metaDescription,
    keywords,
    canonicalUrl,
    noIndex,
    noFollow,
    ogTitle,
    ogDescription,
    ogImage,
    twitterTitle,
    twitterDescription,
    twitterImage,
    structuredData
  }
`

// Function to get all courses from Sanity and transform them
export async function getAllCoursesMetadata() {
  try {
    const courses = await client.fetch(allCoursesQuery)
    return courses.map(transformSanityCourse)
  } catch (error) {
    console.error('Error fetching courses from Sanity:', error)
    // Return empty array as fallback
    return []
  }
}

// Function to get a specific course by slug
export async function getCourseBySlug(slug) {
  try {
    const query = `*[_type == "courseMetadata" && slug.current == $slug][0] {
      _id,
      _updatedAt,
      title,
      slug,
      excerpt,
      category,
      subcategory,
      duration,
      level,
      price,
      discountPrice,
      rating,
      reviewsCount,
      instructor,
      mainImage,
      courseDetails {
        description,
        objectives,
        prerequisites,
        syllabus,
        certification
      },
      pricing {
        originalPrice,
        discountedPrice,
        currency,
        validity,
        emiAvailable,
        emiStartingFrom
      },
      schedule {
        startDate,
        endDate,
        duration,
        mode,
        timings,
        weekdays
      },
      location {
        city,
        country,
        venue,
        address,
        mapUrl,
        nearbyLandmarks,
        postalCode
      },
      reviews[] {
        name,
        rating,
        comment,
        date,
        verified
      },
      metaTitle,
      metaDescription,
      keywords,
      canonicalUrl,
      noIndex,
      noFollow,
      ogTitle,
      ogDescription,
      ogImage,
      twitterTitle,
      twitterDescription,
      twitterImage,
      structuredData
    }`
    
    const course = await client.fetch(query, { slug })
    return transformSanityCourse(course)
  } catch (error) {
    console.error('Error fetching course by slug from Sanity:', error)
    return null
  }
}
