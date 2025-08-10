#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { createClient } = require('@sanity/client');
const imageUrlBuilder = require('@sanity/image-url');

// Sanity client configuration
const client = createClient({
  projectId: '3hir6j0e',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

// Image URL builder
const builder = imageUrlBuilder(client);
const urlFor = (source) => builder.image(source);

// GROQ query for your courseMetadata schema
const allCoursesQuery = `
  *[_type == "courseMetadata"] | order(_updatedAt desc) {
    _id,
    _updatedAt,
    slug,
    title,
    description,
    keywords,
    mainImage{
      asset->
    },
    importantText,
    bannerUrl,
    ogTitle,
    ogDescription,
    twitterTitle,
    twitterDescription,
    ogImage{
      asset->
    },
    twitterImage{
      asset->
    },
    ogUrl,
    twitterUrl,
    canonical,
    hreflang,
    reviewCount,
    ratingValue,
    organizationName,
    postalCode,
    streetAddress,
    courseContentPdf{
      asset->
    }
  }
`;

// Constants to avoid repetition
const DEFAULTS = {
  baseUrl: 'https://www.vritsol.com',
  organizationName: 'VR IT SOL',
  email: 'info@vritsol.com',
  phone: '+91-9032734343',
  address: 'Aditya enclave, Nilgiri block, 5th floor 506, a/a, Satyam Diature Road, Ameerpet',
  city: 'Hyderabad',
  state: 'Telangana',
  postalCode: '500073',
  country: 'IN',
  latitude: '17.4374',
  longitude: '78.4482',
  logo: '/images/vritlogo.png'
};

// Process Sanity image assets
function processImage(imageField) {
  if (!imageField) return '';
  if (imageField.asset) return urlFor(imageField).url();
  if (typeof imageField === 'string') return imageField;
  return '';
}

// Process Sanity file assets (PDFs)
function processFile(fileField) {
  if (!fileField) return '';
  
  if (fileField.asset) {
    // Check if _ref exists
    if (fileField.asset._ref) {
      // Return the direct URL to the file asset
      return `https://cdn.sanity.io/files/${client.config().projectId}/${client.config().dataset}/${fileField.asset._ref.replace('file-', '').replace('-pdf', '.pdf')}`;
    }
    // Check if url exists directly
    if (fileField.asset.url) {
      return fileField.asset.url;
    }
    // Check if _id exists (alternative approach)
    if (fileField.asset._id) {
      return `https://cdn.sanity.io/files/${client.config().projectId}/${client.config().dataset}/${fileField.asset._id.replace('file-', '').replace('-pdf', '.pdf')}`;
    }
  }
  
  if (typeof fileField === 'string') return fileField;
  return '';
}

// Process course metadata
function processCourseMetadata(courseData) {
  if (!courseData) return null;

  const slug = courseData.slug?.current || '';
  const title = courseData.title || '';
  const description = courseData.description || '';
  
  // Process images
  const mainImage = processImage(courseData.mainImage);
  const ogImage = processImage(courseData.ogImage);
  const twitterImage = processImage(courseData.twitterImage);
  
  // Process PDF file
  const courseContentPdf = processFile(courseData.courseContentPdf);
  
  // Process new properties
  const importantText = courseData.importantText || '';
  const bannerUrl = courseData.bannerUrl || '';
  
  // Build URLs
  const courseUrl = courseData.canonical || `${DEFAULTS.baseUrl}/${slug}`;
  const ogUrl = courseData.ogUrl || courseUrl;
  
  // Use provided data or fallbacks
  const organizationName = courseData.organizationName || title;
  const streetAddress = courseData.streetAddress || DEFAULTS.address;
  const postalCode = courseData.postalCode || DEFAULTS.postalCode;
  
  // Create Next.js metadata
  const metadata = {
    title,
    description,
    keywords: courseData.keywords || [],
    openGraph: {
      title: courseData.ogTitle || title,
      description: courseData.ogDescription || description,
      url: ogUrl,
      type: 'website',
      locale: 'en_US',
      siteName: DEFAULTS.organizationName,
      images: (ogImage || mainImage) ? [{ url: ogImage || mainImage }] : []
    },
    twitter: {
      card: 'summary_large_image',
      title: courseData.twitterTitle || courseData.ogTitle || title,
      description: courseData.twitterDescription || courseData.ogDescription || description,
      site: '@vritsolutions',
      creator: '@vritsolutions',
      images: (twitterImage || ogImage || mainImage) ? [twitterImage || ogImage || mainImage] : []
    },
    canonical: courseUrl,
    alternates: {
      canonical: courseUrl,
      languages: {
        'en-US': courseUrl,
        'en': courseUrl,
        'x-default': courseUrl,
        ...(courseData.hreflang ? { [courseData.hreflang]: courseUrl } : {})
      }
    },
    other: {
      'content-language': 'en-US'
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    }
  };

  // Create structured data - Multiple schemas for better SEO
  const structuredData = [
    // Main Organization Schema
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "EducationalOrganization"],
      "name": DEFAULTS.organizationName,
      "description": "Leading IT Training Institute in Ameerpet, Hyderabad offering professional courses",
      "url": DEFAULTS.baseUrl,
      "logo": `${DEFAULTS.baseUrl}${DEFAULTS.logo}`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": streetAddress,
        "addressLocality": DEFAULTS.city,
        "addressRegion": DEFAULTS.state,
        "postalCode": postalCode,
        "addressCountry": DEFAULTS.country
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": DEFAULTS.latitude,
        "longitude": DEFAULTS.longitude
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": DEFAULTS.phone,
        "email": DEFAULTS.email,
        "contactType": "customer service"
      },
      "openingHours": ["Mo-Sa 08:00-21:30", "Su 09:00-13:00"],
      "areaServed": {
        "@type": "Place",
        "name": `${DEFAULTS.city}, ${DEFAULTS.state}`
      },
      "sameAs": [
        "https://www.facebook.com/vritsolutions/",
        "https://twitter.com/vritsolutions",
        "https://www.youtube.com/channel/UCwasTbRqeFPtreZdVdcRbuA"
      ],
      // Add direct aggregateRating for better Google search visibility
      "aggregateRating": courseData.ratingValue ? {
        "@type": "AggregateRating",
        "ratingValue": courseData.ratingValue,
        "bestRating": "5",
        "worstRating": "1",
        "reviewCount": courseData.reviewCount || "150"
      } : undefined,
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "IT Training Courses",
        "itemListElement": [{
          "@type": "Course",
          "name": title,
          "description": description,
          "url": courseUrl,
          "courseMode": ["online", "onsite"],
          "educationalLevel": "professional",
          "provider": {
            "@type": "EducationalOrganization",
            "name": DEFAULTS.organizationName
          },
          "aggregateRating": courseData.ratingValue ? {
            "@type": "AggregateRating",
            "ratingValue": courseData.ratingValue,
            "bestRating": "5",
            "worstRating": "1",
            "reviewCount": courseData.reviewCount || "150"
          } : undefined
        }]
      }
    },
    // Dedicated Course Schema with Reviews
    courseData.ratingValue ? {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": title,
      "description": description,
      "url": courseUrl,
      "courseMode": ["online", "onsite"],
      "educationalLevel": "professional",
      "provider": {
        "@type": "EducationalOrganization",
        "name": DEFAULTS.organizationName,
        "url": DEFAULTS.baseUrl
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": courseData.ratingValue,
        "bestRating": "5",
        "worstRating": "1",
        "reviewCount": courseData.reviewCount || "150"
      },
      "review": [{
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": courseData.ratingValue,
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "IT Training Students"
        },
        "reviewBody": `Excellent ${title} training with hands-on experience and expert guidance.`
      }]
    } : null
  ].filter(Boolean);

  return {
    // Basic course info
    slug,
    mainImage,
    importantText,
    bannerUrl,
    courseContentPdf,
    // Additional metadata not in Next.js metadata
    hreflang: courseData.hreflang,
    reviewCount: courseData.reviewCount || '150',
    ratingValue: courseData.ratingValue || '4.8',
    organizationName,
    postalCode,
    streetAddress,
    
    // Sanity metadata
    _id: courseData._id,
    _updatedAt: courseData._updatedAt,
    
    // Processed data for Next.js (contains all the og/twitter data)
    metadata,
    structuredData
  };
}

// Main build function
async function buildCoursesData() {
  try {
    console.log('🚀 Fetching course metadata from Sanity...');
    
    const courses = await client.fetch(allCoursesQuery);
    console.log(`📊 Found ${courses.length} course metadata entries`);
    
    const processedCourses = courses
      .map(processCourseMetadata)
      .filter(Boolean);
    
    console.log(`✅ Processed ${processedCourses.length} valid courses`);
    
    // Create output directory
    const outputDir = path.join(process.cwd(), 'src', 'data');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Write JSON file
    const outputPath = path.join(outputDir, 'courses-static.json');
    fs.writeFileSync(outputPath, JSON.stringify(processedCourses, null, 2));
    
    console.log(`💾 Course metadata saved to: ${outputPath}`);
    
    // Log stats
    const fileSize = (fs.statSync(outputPath).size / 1024 / 1024).toFixed(2);
    const slugs = processedCourses.map(c => c.slug).filter(Boolean);
    
    console.log(`📁 File size: ${fileSize} MB`);
    console.log(`📝 Course slugs: ${slugs.slice(0, 5).join(', ')}... (${slugs.length} total)`);
    console.log('🎉 Build completed successfully!');
    
  } catch (error) {
    console.error('❌ Error building course metadata:', error);
    process.exit(1);
  }
}

// Run the build
buildCoursesData();
