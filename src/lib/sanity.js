import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import coursesMetadata from '../data/coursesMetadata.json'

export const client = createClient({
  projectId: '3hir6j0e',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: 'skv9IT9S6cNvFqAaWg3P1Ad1QfNuMhoL03eBlO0CtztlrklGusMBu0FdvTLwruvOnyBKj8DQM00wlL0z5upsxaut1ZW0gp2cPdY99eGrhCl3jTx4g5uIB7rOQFn46lSR50XHgqfeY03WjuilyEQx59oB0K0sORmXcyUh2eNjCg5PdHeesEkG',
})

// Admin client with write permissions for admin operations
export const sanityClient = createClient({
  projectId: '3hir6j0e',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: 'skv9IT9S6cNvFqAaWg3P1Ad1QfNuMhoL03eBlO0CtztlrklGusMBu0FdvTLwruvOnyBKj8DQM00wlL0z5upsxaut1ZW0gp2cPdY99eGrhCl3jTx4g5uIB7rOQFn46lSR50XHgqfeY03WjuilyEQx59oB0K0sORmXcyUh2eNjCg5PdHeesEkG',
})

// Image URL builder
const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

// Centralized function to create course object with all fields
function createCourseObject(courseData, isFromSanity = false) {
  if (!courseData) return null;

  let ogImageUrl = '';
  let twitterImageUrl = '';
  let _mainImageUrl = '';

  if (isFromSanity) {
    // Handle Sanity image assets
    if (courseData.ogImage && courseData.ogImage.asset) {
      ogImageUrl = urlFor(courseData.ogImage).url();
    } else if (typeof courseData.ogImage === 'string') {
      ogImageUrl = courseData.ogImage;
    }

    if (courseData.twitterImage && courseData.twitterImage.asset) {
      twitterImageUrl = urlFor(courseData.twitterImage).url();
    } else if (typeof courseData.twitterImage === 'string') {
      twitterImageUrl = courseData.twitterImage;
    }

    if (courseData.mainImage && courseData.mainImage.asset) {
      _mainImageUrl = urlFor(courseData.mainImage).url();
    } else if (typeof courseData.mainImage === 'string') {
      _mainImageUrl = courseData.mainImage;
    }
  } else {
    // Handle static metadata images
    ogImageUrl = courseData.ogImage || '';
    twitterImageUrl = courseData.twitterImage || '';
    _mainImageUrl = courseData.ogImage || ''; // Use ogImage as fallback for mainImage
  }

  const slug = isFromSanity ? (courseData.slug?.current || '') : courseData.slug;
  const title = courseData.title || '';
  const description = isFromSanity 
    ? (courseData.courseDetails?.description || courseData.excerpt || '') 
    : courseData.description;

  return {
    slug,
    title,
    description,
    keywords: isFromSanity 
      ? (courseData.keywords || []) 
      : (courseData.keywords ? courseData.keywords.split(',').map(k => k.trim()) : []),
    ogTitle: courseData.ogTitle || title,
    ogDescription: courseData.ogDescription || description,
    twitterTitle: courseData.twitterTitle || courseData.ogTitle || title,
    twitterDescription: courseData.twitterDescription || courseData.ogDescription || description,
    ogImage: ogImageUrl,
    mainImage: _mainImageUrl,
    twitterImage: twitterImageUrl || ogImageUrl || '',
    canonical: `https://vrit-rho.vercel.app/${slug}`,
    reviewCount: isFromSanity 
      ? (courseData.reviewsCount?.toString() || '0') 
      : '0',
    ratingValue: isFromSanity 
      ? (courseData.rating?.toString() || '5') 
      : '5',
    organizationName: isFromSanity 
      ? (courseData.organizationName || title) 
      : title,
    postalCode: isFromSanity 
      ? (courseData.postalCode || courseData.location?.postalCode || '500073') 
      : '500073',
    streetAddress: isFromSanity 
      ? (courseData.streetAddress || courseData.location?.address || 'Aditya enclave, Nilgiri block, 5th floor 506, a/a, Satyam Diature Road, Ameerpet, Hyderabad, Telangana') 
      : 'Aditya enclave, Nilgiri block, 5th floor 506, a/a, Satyam Diature Road, Ameerpet, Hyderabad, Telangana',
    structuredData: {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "EducationalOrganization"],
      "name": "VR IT SOL",
      "description": "Leading IT Training Institute in Ameerpet, Hyderabad offering professional courses",
      "url": "https://vrit-rho.vercel.app",
      "logo": "https://vrit-rho.vercel.app/images/vritlogo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Aditya enclave, Nilgiri block, 5th floor 506, a/a, Satyam Diature Road, Ameerpet",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500073",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "17.4374",
        "longitude": "78.4482"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9032734343",
        "email": "info@vritsol.com",
        "contactType": "customer service"
      },
      "openingHours": [
        "Mo-Sa 08:00-21:30",
        "Su 09:00-13:00"
      ],
      "areaServed": {
        "@type": "Place",
        "name": "Ameerpet, Hyderabad"
      },
      "sameAs": [
        "https://www.facebook.com/vritsolutions/",
        "https://twitter.com/vritsolutions",
        "https://www.youtube.com/channel/UCwasTbRqeFPtreZdVdcRbuA"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "IT Training Courses",
        "itemListElement": [
          {
            "@type": "Course",
            "name": title,
            "description": description,
            "url": `https://vrit-rho.vercel.app/${slug}`,
            "courseMode": ["online", "onsite"],
            "educationalLevel": "professional",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "VR IT SOL"
            }
          }
        ]
      }
    }
  };
}

// Helper function to convert Sanity course data to the format your existing components expect
export function transformSanityCourse(sanityCourse) {
  return createCourseObject(sanityCourse, true);
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
    mainImage{
      asset->
    },
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
    ogImage{
      asset->
    },
    twitterTitle,
    twitterDescription,
    twitterImage{
      asset->
    }
  }
`

// Function to get all courses from Sanity and transform them
export async function getAllCoursesMetadata() {
  try {
    const courses = await client.fetch(allCoursesQuery)
    return courses.map(transformSanityCourse)
  } catch (error) {
    console.error('Error fetching courses from Sanity:', error)
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
      mainImage{
        asset->
      },
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
      ogImage{
        asset->
      },
      twitterTitle,
      twitterDescription,
      twitterImage{
        asset->
      }
    }`
    
    const course = await client.fetch(query, { slug })
    
    // If course found in Sanity, return it
    if (course) {
      return transformSanityCourse(course)
    }
    
    // Fallback to static metadata
    const staticCourse = coursesMetadata.find(course => course.slug === slug)
    if (staticCourse) {
      return createCourseObject(staticCourse, false);
    }
    
    return null
  } catch (error) {
    console.error('Error fetching course by slug from Sanity:', error)
    
    // Fallback to static metadata on error
    const staticCourse = coursesMetadata.find(course => course.slug === slug)
    if (staticCourse) {
      return createCourseObject(staticCourse, false);
    }
    
    return null
  }
}
