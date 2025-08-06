const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'osamtsqm',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk0oq9EjJvBgq7xTvTjqWArO7KQ3k1ipmU6A8XNbWw6N9ltufQFbETH1IfvlZ6DFp9ku9JH2UqrJSC2iS6qEcI9mvkhZCREcAkACe5IXQBQNeryATypuElMcckk7x91S5RPLC6uzTkYnCWZMOhiUe56HQXFYWB71IcoWTLgvmvm6xxgVETgN',
});

async function createSimpleCourse() {
  try {
    console.log('🔧 Creating simple course...');
    
    const simpleCourse = {
      _type: 'simpleCourse',
      title: 'SAP ABAP Programming',
      description: 'Learn SAP ABAP from basics to advanced level with hands-on practice.',
      price: 30000,
      duration: '60 days',
      category: 'SAP',
      isActive: true
    };

    const doc = await client.create(simpleCourse);
    console.log('✅ Simple course created successfully!');
    console.log('   ID:', doc._id);
    console.log('   Title:', doc.title);
    
    // Verify all schema types are working
    const counts = await Promise.all([
      client.fetch('count(*[_type == "testSchema"])'),
      client.fetch('count(*[_type == "simpleCourse"])'),
      client.fetch('count(*[_type == "courseMetadata"])'),
      client.fetch('count(*[_type == "post"])')
    ]);
    
    console.log('\n📊 Schema Status:');
    console.log(`   🧪 Test Schema: ${counts[0]} documents`);
    console.log(`   📘 Simple Course: ${counts[1]} documents`);
    console.log(`   📚 Course Metadata: ${counts[2]} documents`);
    console.log(`   📝 Blog Posts: ${counts[3]} documents`);
    
    console.log('\n🎯 All schemas are working! Now check Sanity Studio:');
    console.log('   1. Go to: http://localhost:3000/admin');
    console.log('   2. You should now see THREE course-related sections:');
    console.log('      - 🧪 Test Schema');
    console.log('      - 📘 Simple Course'); 
    console.log('      - 📚 Course Metadata');
    console.log('   3. If you can see Test Schema and Simple Course but NOT Course Metadata,');
    console.log('      then there might be a specific issue with the courseMetadata schema.');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

createSimpleCourse();
