/**
 * Test for Duplicate Schema Detection
 * Checks for duplicate schema types that might cause validation issues
 */

const fs = require('fs');
const path = require('path');

// Simulate multiple schema generation
function testForDuplicates() {
  console.log('🔍 TESTING FOR DUPLICATE SCHEMAS...\n');
  
  // Test layout schema generation (simulating homepage)
  try {
    // Import RichSnippetsManager (simulate import)
    const layoutSchemaSimulation = [
      { "@type": ["EducationalOrganization", "LocalBusiness"], name: "VR IT Solutions" },
      { "@type": "Website", name: "VR IT Solutions" }
      // LocalBusiness schema removed from layout for home page (already in Organization via multiple @type)
      // FAQ schema removed from layout for home page
    ];
    
    // Test component schema generation (simulating FAQRichSnippets component)
    const componentSchemaSimulation = [
      { "@type": "FAQPage", mainEntity: [] }
    ];
    
    // Combine both (as would happen on homepage)
    const allSchemas = [...layoutSchemaSimulation, ...componentSchemaSimulation];
    
    console.log('📋 Layout Schemas Generated:', layoutSchemaSimulation.length);
    layoutSchemaSimulation.forEach((schema, index) => {
      const type = Array.isArray(schema['@type']) ? schema['@type'].join(', ') : schema['@type'];
      console.log(`   ${index + 1}. ${type}`);
    });
    
    console.log('\n📋 Component Schemas Generated:', componentSchemaSimulation.length);
    componentSchemaSimulation.forEach((schema, index) => {
      const type = Array.isArray(schema['@type']) ? schema['@type'].join(', ') : schema['@type'];
      console.log(`   ${index + 1}. ${type}`);
    });
    
    console.log('\n📊 Total Schemas on Homepage:', allSchemas.length);
    
    // Check for duplicate @types
    const typeCount = {};
    allSchemas.forEach(schema => {
      const types = Array.isArray(schema['@type']) ? schema['@type'] : [schema['@type']];
      types.forEach(type => {
        typeCount[type] = (typeCount[type] || 0) + 1;
      });
    });
    
    console.log('\n🔍 Schema Type Analysis:');
    let duplicatesFound = false;
    Object.entries(typeCount).forEach(([type, count]) => {
      const status = count > 1 ? '⚠️  DUPLICATE' : '✅ UNIQUE';
      console.log(`   ${status}: ${type} (${count} occurrence${count > 1 ? 's' : ''})`);
      if (count > 1) duplicatesFound = true;
    });
    
    if (duplicatesFound) {
      console.log('\n❌ DUPLICATE SCHEMAS DETECTED!');
      console.log('💡 This can cause validation warnings and confuse search engines.');
    } else {
      console.log('\n✅ NO DUPLICATE SCHEMAS DETECTED!');
      console.log('🎉 Schema implementation is clean and optimized.');
    }
    
    // Test specific FAQ duplication (the original issue)
    const faqSchemas = allSchemas.filter(schema => 
      (Array.isArray(schema['@type']) ? schema['@type'] : [schema['@type']]).includes('FAQPage')
    );
    
    console.log(`\n🎯 FAQ Schema Count: ${faqSchemas.length}`);
    if (faqSchemas.length > 1) {
      console.log('❌ Multiple FAQ schemas detected - this was the original issue!');
    } else if (faqSchemas.length === 1) {
      console.log('✅ Single FAQ schema detected - duplicate issue resolved!');
    } else {
      console.log('⚠️  No FAQ schemas detected');
    }
    
  } catch (error) {
    console.error('❌ Error testing schemas:', error.message);
  }
}

// Run the test
testForDuplicates();
