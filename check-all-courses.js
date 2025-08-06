const fs = require('fs');
const path = require('path');

// List of all pages to check
const pagesToCheck = [
  'sap-basis-online-training',
  'sap-leonardo-training-hyderabad', 
  'sap-fico-online-training-in-hyderabad',
  'sap-sd-online-training-in-hyderabad',
  'sap-mm-online-training',
  'sap-hana-admin-training',
  'sap-ewm-online-training',
  'sap-security-training',
  'sap-s4Hana-simple-logistics-training',
  'salesforce-training-in-hyderabad'
];

async function checkAllCoursePages() {
  console.log('🔍 Checking all course pages for common issues...\n');

  for (const pageSlug of pagesToCheck) {
    const filePath = path.join(__dirname, 'src', 'app', pageSlug, 'page.js');
    
    try {
      if (!fs.existsSync(filePath)) {
        console.log(`❌ File not found: ${pageSlug}/page.js`);
        continue;
      }

      const content = fs.readFileSync(filePath, 'utf8');
      let issues = [];
      
      // Check for incomplete function declaration
      if (content.includes('export default async \n') || content.includes('export default async\n')) {
        issues.push('Incomplete function declaration');
      }
      
      // Check for missing structuredDataJson variable
      if (!content.includes('structuredDataJson = await getPageStructuredData()')) {
        issues.push('Missing structuredDataJson variable');
      }
      
      // Check for duplicate structured data blocks
      if (content.includes('JSON-LD Structured Data for SEO') || content.includes('Additional Review Schema')) {
        issues.push('Duplicate structured data blocks');
      }
      
      // Check for malformed JSX
      if (content.includes('getReviewStructuredData(') && content.includes('&& (')) {
        issues.push('Malformed JSX structure');
      }
      
      // Check for proper return structure
      if (!content.includes('return (\n    <>') && !content.includes('return (\n      <>')) {
        issues.push('Improper return structure');
      }

      if (issues.length > 0) {
        console.log(`⚠️  ${pageSlug}/page.js has issues:`);
        issues.forEach(issue => console.log(`   - ${issue}`));
      } else {
        console.log(`✅ ${pageSlug}/page.js looks good`);
      }
      
    } catch (error) {
      console.log(`❌ Error checking ${pageSlug}/page.js:`, error.message);
    }
  }
}

// Run the check
checkAllCoursePages().catch(console.error);
