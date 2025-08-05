const fs = require('fs');
const path = require('path');

// Read the richSnippets.js file and extract the Organization schema
const filePath = path.join(__dirname, '../src/utils/richSnippets.js');
const content = fs.readFileSync(filePath, 'utf8');

// Find the Organization schema generation method
const organizationMethod = content.match(/static generateOrganizationSchema\(\) \{[\s\S]*?return \{[\s\S]*?\};\s*\}/);

if (organizationMethod) {
  const methodContent = organizationMethod[0];
  
  // Check for the multiple @type
  if (methodContent.includes('"@type": ["EducationalOrganization", "LocalBusiness"]')) {
    console.log('✅ Organization schema successfully updated to multiple types');
    console.log('📋 Schema now supports both:');
    console.log('   - EducationalOrganization properties');
    console.log('   - LocalBusiness properties (priceRange, paymentAccepted, currenciesAccepted)');
  } else {
    console.log('❌ Schema type not properly updated');
  }
  
  // Check for problematic properties
  const hasPaymentAccepted = methodContent.includes('paymentAccepted');
  const hasPriceRange = methodContent.includes('priceRange');
  const hasCurrenciesAccepted = methodContent.includes('currenciesAccepted');
  
  console.log('\n📊 Business Properties Status:');
  console.log(`   ${hasPaymentAccepted ? '✅' : '❌'} paymentAccepted`);
  console.log(`   ${hasPriceRange ? '✅' : '❌'} priceRange`);
  console.log(`   ${hasCurrenciesAccepted ? '✅' : '❌'} currenciesAccepted`);
  
  if (hasPaymentAccepted && hasPriceRange && hasCurrenciesAccepted) {
    console.log('\n🎉 All LocalBusiness properties are now valid with multiple @type!');
  }
  
} else {
  console.log('❌ Could not find Organization schema method');
}
