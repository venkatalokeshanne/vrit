require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: '2023-05-03',
  token: process.env.SANITY_API_TOKEN,
});

async function testSimpleFinanceMetadata() {
  try {
    console.log('🔍 Testing Simple Finance metadata in Sanity...');
    console.log(`📡 Project ID: ${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`);
    console.log(`📊 Dataset: ${process.env.NEXT_PUBLIC_SANITY_DATASET}`);
    
    // Query for the specific course metadata
    const query = `*[_type == "courseMetadata" && slug.current == "simple-finance-training-in-hyderabad"][0]{
      _id,
      _createdAt,
      _updatedAt,
      slug,
      title,
      description,
      keywords,
      organizationName,
      streetAddress,
      postalCode,
      reviewCount,
      ratingValue,
      ogTitle,
      ogDescription,
      canonical,
      seoHeaders[]{
        level,
        text
      }
    }`;

    const result = await client.fetch(query);
    
    if (result) {
      console.log('✅ Simple Finance metadata found successfully!');
      console.log('\n📄 Document Details:');
      console.log(`   Document ID: ${result._id}`);
      console.log(`   Created At: ${new Date(result._createdAt).toLocaleString()}`);
      console.log(`   Updated At: ${new Date(result._updatedAt).toLocaleString()}`);
      
      console.log('\n🏷️  Basic Info:');
      console.log(`   Slug: ${result.slug?.current}`);
      console.log(`   Title: ${result.title}`);
      console.log(`   Organization: ${result.organizationName}`);
      console.log(`   Address: ${result.streetAddress}, ${result.postalCode}`);
      console.log(`   Rating: ${result.ratingValue}/5 (${result.reviewCount} reviews)`);
      
      console.log('\n📝 SEO Description:');
      console.log(`   ${result.description?.substring(0, 100)}...`);
      
      console.log('\n🔍 Keywords:');
      console.log(`   ${result.keywords?.slice(0, 5).join(', ')}... (${result.keywords?.length} total)`);
      
      console.log('\n🏗️  SEO Headers:');
      result.seoHeaders?.forEach((header, index) => {
        console.log(`   H${header.level}: ${header.text}`);
      });
      
      console.log('\n🌐 Social Media:');
      console.log(`   OG Title: ${result.ogTitle}`);
      console.log(`   OG Description: ${result.ogDescription?.substring(0, 80)}...`);
      console.log(`   Canonical: ${result.canonical}`);
      
      console.log('\n🎉 Test completed successfully! Metadata is properly stored in Sanity.');
      
    } else {
      console.log('❌ Simple Finance metadata not found in Sanity!');
      console.log('🔍 Let me check all course metadata documents...');
      
      // Query all course metadata to see what exists
      const allCourses = await client.fetch(`*[_type == "courseMetadata"]{slug, title}`);
      console.log('\n📋 All course metadata in Sanity:');
      allCourses.forEach((course, index) => {
        console.log(`   ${index + 1}. ${course.slug?.current} - ${course.title}`);
      });
    }
    
  } catch (error) {
    console.error('❌ Error testing Simple Finance metadata:');
    console.error('📋 Error details:', error.message);
    
    if (error.statusCode === 401) {
      console.log('🔑 Authentication issue - please check your SANITY_API_TOKEN');
    } else if (error.statusCode === 403) {
      console.log('🚫 Permission issue - token may not have read permissions');
    } else {
      console.log('🔧 Other error - please check your Sanity configuration');
    }
  }
}

// Run the test
testSimpleFinanceMetadata();
