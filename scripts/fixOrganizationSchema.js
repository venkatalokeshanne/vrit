/**
 * Fix Organization Schema Issue
 * Changes Organization type to LocalBusiness when openingHours is present
 */

const fs = require('fs');
const path = require('path');

const METADATA_FILE = path.join(__dirname, '../src/data/coursesMetadata.json');

async function fixOrganizationSchema() {
  try {
    console.log('🔧 FIXING ORGANIZATION SCHEMA ISSUE...\n');
    
    // Read the metadata file
    const data = fs.readFileSync(METADATA_FILE, 'utf8');
    let coursesMetadata = JSON.parse(data);
    
    let fixedCount = 0;
    
    // Process each course metadata
    coursesMetadata.forEach((course, index) => {
      if (course.structuredData && 
          course.structuredData.type === 'Organization' && 
          course.structuredData.openingHours) {
        
        console.log(`📝 Fixing ${course.slug}...`);
        
        // Change Organization to LocalBusiness
        course.structuredData.type = 'LocalBusiness';
        
        // Add @context if missing
        if (!course.structuredData['@context']) {
          course.structuredData['@context'] = 'https://schema.org';
        }
        
        // Change type to @type for consistency
        course.structuredData['@type'] = course.structuredData.type;
        delete course.structuredData.type;
        
        // Fix address structure if needed
        if (course.structuredData.address && Array.isArray(course.structuredData.address)) {
          course.structuredData.address = course.structuredData.address.map(addr => {
            if (addr.type === 'PostalAddress') {
              const newAddr = { ...addr };
              newAddr['@type'] = 'PostalAddress';
              delete newAddr.type;
              return newAddr;
            }
            return addr;
          });
          
          // If single address, convert to object
          if (course.structuredData.address.length === 1) {
            course.structuredData.address = course.structuredData.address[0];
          }
        }
        
        // Fix contactPoint structure if needed
        if (course.structuredData.contactPoint && Array.isArray(course.structuredData.contactPoint)) {
          course.structuredData.contactPoint = course.structuredData.contactPoint.map(contact => {
            if (contact.type === 'ContactPoint') {
              const newContact = { ...contact };
              newContact['@type'] = 'ContactPoint';
              delete newContact.type;
              return newContact;
            }
            return contact;
          });
        }
        
        fixedCount++;
      }
    });
    
    // Write the updated data back to file
    fs.writeFileSync(METADATA_FILE, JSON.stringify(coursesMetadata, null, 2));
    
    console.log(`\n✅ SCHEMA FIX COMPLETED!`);
    console.log(`📊 Fixed ${fixedCount} course entries`);
    console.log(`🎯 All Organization schemas with openingHours converted to LocalBusiness`);
    
  } catch (error) {
    console.error('❌ ERROR:', error.message);
    process.exit(1);
  }
}

// Run the fix
fixOrganizationSchema();
