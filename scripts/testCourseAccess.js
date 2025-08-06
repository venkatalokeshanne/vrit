const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'osamtsqm',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk0oq9EjJvBgq7xTvTjqWArO7KQ3k1ipmU6A8XNbWw6N9ltufQFbETH1IfvlZ6DFp9ku9JH2UqrJSC2iS6qEcI9mvkhZCREcAkACe5IXQBQNeryATypuElMcckk7x91S5RPLC6uzTkYnCWZMOhiUe56HQXFYWB71IcoWTLgvmvm6xxgVETgN',
});

async function testCourseMetadataAccess() {
  console.log('🧪 Testing Course Metadata Access...\n');

  try {
    // Get all courseMetadata documents
    const courses = await client.fetch(`
      *[_type == "courseMetadata"]{
        _id,
        slug,
        courseTitle,
        shortDescription,
        category,
        pricing,
        courseDetails,
        features,
        isActive,
        _createdAt
      }
    `);

    console.log(`✅ Successfully fetched ${courses.length} course metadata documents\n`);

    courses.forEach((course, index) => {
      console.log(`📘 Course ${index + 1}:`);
      console.log(`   ID: ${course._id}`);
      console.log(`   Title: ${course.courseTitle}`);
      console.log(`   Slug: ${course.slug}`);
      console.log(`   Category: ${course.category}`);
      console.log(`   Price: ₹${course.pricing?.price || 'Not set'}`);
      console.log(`   Duration: ${course.courseDetails?.duration || 'Not set'}`);
      console.log(`   Features: ${course.features?.length || 0} items`);
      console.log(`   Status: ${course.isActive ? 'Active ✅' : 'Inactive ❌'}`);
      console.log(`   Created: ${new Date(course._createdAt).toLocaleDateString()}`);
      console.log('');
    });

    // Test creating a new document to verify write access
    console.log('🔧 Testing document creation...');
    const testDoc = {
      _type: 'courseMetadata',
      slug: 'test-course-' + Date.now(),
      courseTitle: 'Test Course',
      shortDescription: 'This is a test course to verify schema access',
      category: 'Technology',
      isActive: false,
      seo: {
        title: 'Test Course',
        description: 'Test course description',
        keywords: ['test', 'course']
      },
      pricing: {
        price: 1000,
        currency: 'INR'
      },
      courseDetails: {
        duration: '1 day',
        mode: 'Online',
        level: 'Beginner'
      }
    };

    const createdDoc = await client.create(testDoc);
    console.log(`✅ Successfully created test document: ${createdDoc._id}`);

    // Clean up - delete the test document
    await client.delete(createdDoc._id);
    console.log('🗑️ Test document cleaned up');

    console.log('\n🎉 CONCLUSION: Course Metadata schema is WORKING perfectly!');
    console.log('The schema is properly registered and accessible.');
    console.log('You can now use it in Sanity Studio and in your application.');
    
    console.log('\n📍 To access in Sanity Studio:');
    console.log('1. Open: http://localhost:3000/admin');
    console.log('2. Look for "Course Metadata" in the left sidebar');
    console.log('3. If not visible, refresh the page or clear browser cache');

  } catch (error) {
    console.error('❌ Error testing course metadata:', error.message);
    
    if (error.message.includes('Unauthorized')) {
      console.log('\n🔐 Suggestion: Check your API token permissions');
    } else if (error.message.includes('not found')) {
      console.log('\n📋 Suggestion: The schema might not be properly deployed');
    }
  }
}

testCourseMetadataAccess();
