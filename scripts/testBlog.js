// Demo script to test blog functionality
// Run with: node scripts/testBlog.js

const { getAllPosts, getFeaturedPosts, getAllCategories } = require('../src/lib/sanity');

async function testBlogFunctionality() {
  console.log('🚀 Testing Blog Functionality...\n');
  
  try {
    console.log('📄 Loading all posts...');
    const posts = await getAllPosts();
    console.log(`✅ Found ${posts.length} posts\n`);
    
    console.log('⭐ Loading featured posts...');
    const featured = await getFeaturedPosts();
    console.log(`✅ Found ${featured.length} featured posts\n`);
    
    console.log('📁 Loading categories...');
    const categories = await getAllCategories();
    console.log(`✅ Found ${categories.length} categories\n`);
    
    console.log('📝 Sample post:');
    if (posts.length > 0) {
      const samplePost = posts[0];
      console.log(`- Title: ${samplePost.title}`);
      console.log(`- Slug: ${samplePost.slug.current}`);
      console.log(`- Author: ${samplePost.author?.name || 'Unknown'}`);
      console.log(`- Categories: ${samplePost.categories?.map(c => c.title).join(', ') || 'None'}`);
      console.log(`- Published: ${new Date(samplePost.publishedAt).toLocaleDateString()}`);
      console.log(`- Reading Time: ${samplePost.readingTime || 'Unknown'} minutes`);
      console.log(`- Featured: ${samplePost.featured ? 'Yes' : 'No'}\n`);
    }
    
    console.log('📂 Categories:');
    categories.forEach(category => {
      console.log(`- ${category.title} (${category.postCount || 0} posts)`);
    });
    
    console.log('\n🎉 Blog system is working correctly!');
    console.log('📱 You can now:');
    console.log('- Visit /blog to see all posts');
    console.log('- Visit /blog/[slug] to see individual posts');
    console.log('- Visit /blog/category/[slug] to see category pages');
    console.log('- Visit /admin to manage content (when Sanity is configured)');
    
  } catch (error) {
    console.error('❌ Error testing blog functionality:', error);
  }
}

// Run the test
testBlogFunctionality();
