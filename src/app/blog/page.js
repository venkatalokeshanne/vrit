import React from 'react';
import { getAllPosts, getFeaturedPosts, getAllCategories } from '../../lib/sanity';
import BlogPageClient from './BlogPageClient';

// Generate metadata for the blog page
export const metadata = {
  metadataBase: new URL('https://www.vritsol.com'),
  title: 'Tech Blog | Latest IT Industry Insights & Training Tips | VR IT Solutions',
  description: 'Stay updated with the latest technology trends, career guidance, and training insights from VR IT Solutions. Expert articles on software development, cloud computing, data science, and more.',
  keywords: 'technology blog, IT industry insights, software development, cloud computing, data science, career guidance, training tips, VR IT Solutions',
  authors: [{ name: 'VR IT Solutions' }],
  creator: 'VR IT Solutions',
  publisher: 'VR IT Solutions',
  openGraph: {
    title: 'Tech Blog | VR IT Solutions',
    description: 'Latest IT industry insights, training tips, and technology trends from leading training institute',
    url: 'https://www.vritsol.com/blog',
    siteName: 'VR IT Solutions',
    images: [
      {
        url: 'https://www.vritsol.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'VR IT Solutions Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Blog | VR IT Solutions',
    description: 'Latest IT industry insights and training tips',
    images: ['https://www.vritsol.com/logo.png'],
    creator: '@vritsolutions',
  },
  alternates: {
    canonical: 'https://www.vritsol.com/blog',
  }
};

export default async function BlogPage({ searchParams }) {
  // Load data server-side
  const [allPosts, featured, allCategories] = await Promise.all([
    getAllPosts(),
    getFeaturedPosts(),
    getAllCategories()
  ]);

  return <BlogPageClient 
    initialPosts={allPosts}
    initialFeaturedPosts={featured}
    initialCategories={allCategories}
    searchParams={searchParams}
  />;
}
