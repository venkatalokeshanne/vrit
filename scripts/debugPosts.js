// Debug script to check blog posts in Sanity
// Run this with: node scripts/debugPosts.js

const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'osamtsqm',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_AUTH_TOKEN
});

async function debugPosts() {
  console.log('🔍 Debugging blog posts...\n');
  
  try {
    // Check if Sanity is configured
    if (!client) {
      console.log('❌ Sanity client not configured. Using mock data.\n');
      return;
    }

    // Get all posts (regardless of published status)
    const allPosts = await client.fetch(`
      *[_type == "post"] {
        _id,
        title,
        slug,
        published,
        publishedAt,
        author->{name},
        _createdAt
      } | order(_createdAt desc)
    `);

    console.log(`📊 Total posts found: ${allPosts.length}\n`);

    allPosts.forEach((post, index) => {
      console.log(`${index + 1}. "${post.title}"`);
      console.log(`   Slug: ${post.slug?.current || 'No slug'}`);
      console.log(`   Published: ${post.published ? '✅ Yes' : '❌ No'}`);
      console.log(`   Published At: ${post.publishedAt || 'Not set'}`);
      console.log(`   Author: ${post.author?.name || 'No author'}`);
      console.log(`   Created: ${new Date(post._createdAt).toLocaleDateString()}`);
      console.log('');
    });

    // Check published posts specifically
    const publishedPosts = await client.fetch(`
      *[_type == "post" && published == true] | order(publishedAt desc) {
        _id,
        title,
        published,
        publishedAt
      }
    `);

    console.log(`✅ Published posts that will show on blog: ${publishedPosts.length}`);
    publishedPosts.forEach((post, index) => {
      console.log(`   ${index + 1}. "${post.title}" (${post.publishedAt})`);
    });

  } catch (error) {
    console.error('❌ Error fetching posts:', error.message);
  }
}

debugPosts();
