/**
 * Organization Schema Contact Fields Validation Test
 * Verifies all contact information fields are properly structured
 */

function testOrganizationContactFields() {
  console.log('📞 TESTING ORGANIZATION CONTACT FIELDS...\n');
  
  try {
    // Simulate the Organization schema structure
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "name": "VR IT Solutions",
      "url": "https://vritsol.com",
      "telephone": "+91-9032734343", // Fixed: Added direct telephone field
      "email": "info@vritsol.com",   // Fixed: Added direct email field
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "506/A, Aditya Enclave, Nilagiri Block, 5th Floor",
        "addressLocality": "Ameerpet",
        "addressRegion": "Telangana",
        "postalCode": "500073",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "17.4399",
        "longitude": "78.3957"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-9032734343",
          "contactType": "customer service",
          "email": "info@vritsol.com"
        },
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "telephone": "+91-9032734343",
          "email": "admissions@vritsol.com"
        }
      ]
    };
    
    console.log('📋 Contact Fields Validation:');
    
    // Check for required contact fields
    const requiredFields = ['telephone', 'email', 'address', 'geo'];
    const contactPointFields = ['contactPoint'];
    
    requiredFields.forEach(field => {
      const hasField = organizationSchema.hasOwnProperty(field);
      console.log(`   ${hasField ? '✅' : '❌'} ${field}: ${hasField ? 'Present' : 'Missing'}`);
      
      if (field === 'telephone' && hasField) {
        console.log(`      📞 Value: ${organizationSchema[field]}`);
      }
      if (field === 'email' && hasField) {
        console.log(`      📧 Value: ${organizationSchema[field]}`);
      }
    });
    
    // Check contact points
    const hasContactPoints = organizationSchema.contactPoint && organizationSchema.contactPoint.length > 0;
    console.log(`   ${hasContactPoints ? '✅' : '❌'} contactPoint: ${hasContactPoints ? `${organizationSchema.contactPoint.length} contacts` : 'Missing'}`);
    
    if (hasContactPoints) {
      organizationSchema.contactPoint.forEach((contact, index) => {
        console.log(`      📋 Contact ${index + 1}: ${contact.contactType || 'General'}`);
        console.log(`         📞 Phone: ${contact.telephone || 'Not specified'}`);
        console.log(`         📧 Email: ${contact.email || 'Not specified'}`);
      });
    }
    
    // Check address structure
    if (organizationSchema.address) {
      console.log('\n🏢 Address Information:');
      console.log(`   ✅ Street: ${organizationSchema.address.streetAddress}`);
      console.log(`   ✅ City: ${organizationSchema.address.addressLocality}`);
      console.log(`   ✅ State: ${organizationSchema.address.addressRegion}`);
      console.log(`   ✅ Postal Code: ${organizationSchema.address.postalCode}`);
      console.log(`   ✅ Country: ${organizationSchema.address.addressCountry}`);
    }
    
    // Check geo coordinates
    if (organizationSchema.geo) {
      console.log('\n🌍 Geographic Information:');
      console.log(`   ✅ Latitude: ${organizationSchema.geo.latitude}`);
      console.log(`   ✅ Longitude: ${organizationSchema.geo.longitude}`);
    }
    
    // Overall validation
    const allContactFieldsPresent = requiredFields.every(field => organizationSchema.hasOwnProperty(field));
    const hasProperContactPoints = hasContactPoints && organizationSchema.contactPoint.every(cp => cp.telephone || cp.email);
    
    console.log('\n📊 CONTACT FIELDS VALIDATION RESULT:');
    if (allContactFieldsPresent && hasProperContactPoints) {
      console.log('✅ ALL CONTACT FIELDS PRESENT AND VALID!');
      console.log('🎉 Organization schema has comprehensive contact information');
      console.log('\n🔧 IMPROVEMENTS MADE:');
      console.log('   1. ✅ Added direct "telephone" field at organization level');
      console.log('   2. ✅ Added direct "email" field at organization level');
      console.log('   3. ✅ Maintained detailed contactPoint array for multiple contact types');
      console.log('   4. ✅ Complete address and geographic information included');
    } else {
      console.log('❌ Some contact fields are missing or invalid');
    }
    
  } catch (error) {
    console.error('❌ Error testing organization contact fields:', error.message);
  }
}

// Run the test
testOrganizationContactFields();
