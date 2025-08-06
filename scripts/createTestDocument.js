const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'osamtsqm',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk0oq9EjJvBgq7xTvTjqWArO7KQ3k1ipmU6A8XNbWw6N9ltufQFbETH1IfvlZ6DFp9ku9JH2UqrJSC2iS6qEcI9mvkhZCREcAkACe5IXQBQNeryATypuElMcckk7x91S5RPLC6uzTkYnCWZMOhiUe56HQXFYWB71IcoWTLgvmvm6xxgVETgN',
});

async function createTestDocument() {
  console.log('🧪 Creating test document to verify schema access...\n');

  try {
    // Create a test document
    const testDoc = {
      _type: 'testSchema',
      title: 'Test Document - Schema Verification',
      description: 'This is a simple test document to verify that schemas are working in Sanity Studio.',
      isActive: true
    };

    const createdDoc = await client.create(testDoc);
    console.log('✅ Test document created successfully!');
    console.log('   ID:', createdDoc._id);
    console.log('   Title:', createdDoc.title);
    
    // Verify we can query the test schema
    const testDocs = await client.fetch('*[_type == "testSchema"]');
    console.log(`\n✅ Found ${testDocs.length} test schema document(s)`);
    
    // Check both schemas
    console.log('\n🔍 Checking all schema types:');
    
    const courseCount = await client.fetch('count(*[_type == "courseMetadata"])');
    const testCount = await client.fetch('count(*[_type == "testSchema"])');
    const postCount = await client.fetch('count(*[_type == "post"])');
    
    console.log(`   📚 courseMetadata: ${courseCount} documents`);
    console.log(`   🧪 testSchema: ${testCount} documents`);
    console.log(`   📝 post: ${postCount} documents`);
    
    console.log('\n🎯 Now try accessing Sanity Studio:');
    console.log('1. Open: http://localhost:3000/admin');
    console.log('2. You should see "🧪 Test Schema" at the top of the left sidebar');
    console.log('3. Below that should be "📚 Course Metadata"');
    console.log('4. If you see the Test Schema but not Course Metadata, there might be an issue with the courseMetadata schema specifically');
    
    console.log('\n📍 Direct Links:');
    console.log('- Test Schema: http://localhost:3000/admin/structure/testSchema');
    console.log('- Course Metadata: http://localhost:3000/admin/structure/courseMetadata');
    
  } catch (error) {
    console.error('❌ Error creating test document:', error.message);
    
    if (error.message.includes('Unknown type')) {
      console.log('\n💡 The schema might not be properly registered.');
      console.log('Try refreshing the browser or restarting the dev server.');
    }
  }
}

createTestDocument();
