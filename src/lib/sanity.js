import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { 
  getAllPostsFallback,
  getPostBySlugFallback,
  getFeaturedPostsFallback,
  getRelatedPostsFallback,
  getAllCategoriesFallback,
  getPostsByCategoryFallback,
  getPaginatedPostsFallback,
  getTotalPostsFallback,
  urlForFallback
} from './mockBlogData'

// Check if Sanity is configured
const isSanityConfigured = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && 
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'your-project-id'
);

export const client = isSanityConfigured ? createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-01-01', // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.SANITY_AUTH_TOKEN, // Only if you want to update content with the client
}) : null;

const builder = isSanityConfigured ? imageUrlBuilder(client) : null;

export function urlFor(source) {
  if (!isSanityConfigured || !builder) {
    return urlForFallback(source);
  }
  return builder.image(source);
}

// GROQ queries for blog posts
export const queries = {
  // Get all published blog posts
  allPosts: `
    *[_type == "post" && published == true] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      author->{
        name,
        image
      },
      mainImage,
      categories[]->{
        title,
        slug
      },
      tags,
      readingTime,
      featured
    }
  `,

  // Get a single blog post by slug
  postBySlug: `
    *[_type == "post" && slug.current == $slug && published == true][0] {
      _id,
      title,
      slug,
      publishedAt,
      _updatedAt,
      excerpt,
      author->{
        name,
        image,
        bio
      },
      mainImage,
      body,
      categories[]->{
        title,
        slug
      },
      tags,
      readingTime,
      featured,
      seo
    }
  `,

  // Get related posts
  relatedPosts: `
    *[_type == "post" && published == true && _id != $currentPostId && count((categories[]._ref)[@ in $categories]) > 0] | order(publishedAt desc) [0..2] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage,
      categories[]->{
        title,
        slug
      }
    }
  `,

  // Get featured posts
  featuredPosts: `
    *[_type == "post" && published == true && featured == true] | order(publishedAt desc) [0..5] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      author->{
        name,
        image
      },
      mainImage,
      categories[]->{
        title,
        slug
      },
      tags
    }
  `,

  // Get posts by category
  postsByCategory: `
    *[_type == "post" && published == true && $categorySlug in categories[]->slug.current] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      author->{
        name,
        image
      },
      mainImage,
      categories[]->{
        title,
        slug
      },
      tags
    }
  `,

  // Get all categories
  allCategories: `
    *[_type == "category"] | order(title) {
      _id,
      title,
      slug,
      description,
      "postCount": count(*[_type == "post" && published == true && references(^._id)])
    }
  `,

  // Get posts with pagination
  paginatedPosts: `
    *[_type == "post" && published == true] | order(publishedAt desc) [$start...$end] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      author->{
        name,
        image
      },
      mainImage,
      categories[]->{
        title,
        slug
      },
      tags,
      readingTime
    }
  `,

  // Get total post count
  totalPosts: `count(*[_type == "post" && published == true])`
}

// Helper functions with fallback support
export async function getAllPosts() {
  if (!isSanityConfigured) {
    console.log('Sanity not configured, using mock data');
    return getAllPostsFallback();
  }
  
  try {
    return await client.fetch(queries.allPosts);
  } catch (error) {
    console.warn('Sanity fetch failed, using fallback data:', error);
    return getAllPostsFallback();
  }
}

export async function getPostBySlug(slug) {
  if (!isSanityConfigured) {
    return getPostBySlugFallback(slug);
  }
  
  try {
    return await client.fetch(queries.postBySlug, { slug });
  } catch (error) {
    console.warn('Sanity fetch failed, using fallback data:', error);
    return getPostBySlugFallback(slug);
  }
}

export async function getFeaturedPosts() {
  if (!isSanityConfigured) {
    return getFeaturedPostsFallback();
  }
  
  try {
    return await client.fetch(queries.featuredPosts);
  } catch (error) {
    console.warn('Sanity fetch failed, using fallback data:', error);
    return getFeaturedPostsFallback();
  }
}

export async function getRelatedPosts(currentPostId, categories) {
  if (!isSanityConfigured) {
    return getRelatedPostsFallback(currentPostId, categories);
  }
  
  try {
    return await client.fetch(queries.relatedPosts, { 
      currentPostId, 
      categories: categories.map(cat => cat._ref || cat._id) 
    });
  } catch (error) {
    console.warn('Sanity fetch failed, using fallback data:', error);
    return getRelatedPostsFallback(currentPostId, categories);
  }
}

export async function getAllCategories() {
  if (!isSanityConfigured) {
    return getAllCategoriesFallback();
  }
  
  try {
    return await client.fetch(queries.allCategories);
  } catch (error) {
    console.warn('Sanity fetch failed, using fallback data:', error);
    return getAllCategoriesFallback();
  }
}

export async function getPostsByCategory(categorySlug) {
  if (!isSanityConfigured) {
    return getPostsByCategoryFallback(categorySlug);
  }
  
  try {
    return await client.fetch(queries.postsByCategory, { categorySlug });
  } catch (error) {
    console.warn('Sanity fetch failed, using fallback data:', error);
    return getPostsByCategoryFallback(categorySlug);
  }
}

export async function getPaginatedPosts(start = 0, end = 10) {
  if (!isSanityConfigured) {
    return getPaginatedPostsFallback(start, end);
  }
  
  try {
    return await client.fetch(queries.paginatedPosts, { start, end });
  } catch (error) {
    console.warn('Sanity fetch failed, using fallback data:', error);
    return getPaginatedPostsFallback(start, end);
  }
}

export async function getTotalPosts() {
  if (!isSanityConfigured) {
    return getTotalPostsFallback();
  }
  
  try {
    return await client.fetch(queries.totalPosts);
  } catch (error) {
    console.warn('Sanity fetch failed, using fallback data:', error);
    return getTotalPostsFallback();
  }
}

// SEO helper function for blog posts
export function generateBlogSEO(post) {
  const baseUrl = 'https://www.vritsol.com'
  
  return {
    metadataBase: new URL(baseUrl),
    title: post.seo?.title || `${post.title} | VR IT Solutions Blog`,
    description: post.seo?.description || post.excerpt || post.title,
    keywords: post.seo?.keywords || post.tags?.join(', ') || '',
    authors: [{ name: post.author?.name || 'VR IT Solutions' }],
    creator: 'VR IT Solutions',
    publisher: 'VR IT Solutions',
    openGraph: {
      title: post.seo?.ogTitle || post.title,
      description: post.seo?.ogDescription || post.excerpt || post.title,
      url: `${baseUrl}/blog/${post.slug.current}`,
      siteName: 'VR IT Solutions',
      images: [
        {
          url: post.seo?.ogImage || (post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : `${baseUrl}/logo.png`),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post._updatedAt,
      authors: [post.author?.name || 'VR IT Solutions'],
      tags: post.tags || [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo?.twitterTitle || post.title,
      description: post.seo?.twitterDescription || post.excerpt || post.title,
      images: [post.seo?.twitterImage || (post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : `${baseUrl}/logo.png`)],
      creator: '@vritsolutions',
    },
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug.current}`,
    },
    other: {
      'article:author': post.author?.name || 'VR IT Solutions',
      'article:published_time': post.publishedAt,
      'article:modified_time': post._updatedAt,
      'article:section': post.categories?.[0]?.title || 'Technology',
      'article:tag': post.tags?.join(', ') || '',
    }
  }
}

// Generate structured data for blog posts
export function generateBlogStructuredData(post) {
  const baseUrl = 'https://www.vritsol.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || post.title,
    image: post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : `${baseUrl}/logo.png`,
    author: {
      '@type': 'Person',
      name: post.author?.name || 'VR IT Solutions',
      image: post.author?.image ? urlFor(post.author.image).width(100).height(100).url() : `${baseUrl}/logo.png`
    },
    publisher: {
      '@type': 'Organization',
      name: 'VR IT Solutions',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
        width: 200,
        height: 60
      }
    },
    datePublished: post.publishedAt,
    dateModified: post._updatedAt || post.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/blog/${post.slug.current}`
    },
    url: `${baseUrl}/blog/${post.slug.current}`,
    articleSection: post.categories?.[0]?.title || 'Technology',
    keywords: post.tags?.join(', ') || '',
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    about: {
      '@type': 'Thing',
      name: 'IT Training and Technology Education'
    }
  }
}
