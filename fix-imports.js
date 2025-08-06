const fs = require('fs');
const path = require('path');

// List of all pages that were updated by the previous script
const pagesToFix = [
  'sap-s4Hana-simple-logistics-training',
  'sap-basis-online-training',
  'sap-leonardo-training-hyderabad',
  'sap-fico-online-training-in-hyderabad',
  'sap-sd-online-training-in-hyderabad',
  'sap-mm-online-training',
  'sap-hana-admin-training',
  'sap-ewm-online-training',
  'sap-security-training',
  'sap-bods-online-training',
  'sap-business-objects-training-hyderabad',
  'oracle-dba-training-in-hyderabad',
  'oracle-plsql-online-training',
  'mysql-database-training-hyderabad',
  'sql-server-dba-training-in-hyderabad',
  'microsoft-azure-training-online',
  'azure-devops-training',
  'amazon-web-services-training',
  'docker-training-hyderabad',
  'kubernetes-training-hyderabad',
  'jenkins-training-hyderabad',
  'ansible-training-hyderabad',
  'terraform-training-hyderabad',
  'chef-training-hyderabad',
  'puppet-training-hyderabad',
  'nagios-training-hyderabad',
  'python-training-in-hyderabad',
  'django-training-in-hyderabad',
  'java-training-in-hyderabad',
  'dot-net-training-in-hyderabad',
  'reactjs-training-hyderabad',
  'angular-training-in-hyderabad',
  'nodejs-training-hyderabad',
  'power-bi-training-hyderabad',
  'tableau-training-hyderabad',
  'qlikview-training-hyderabad',
  'selenium-automation-testing-training-hyderabad',
  'manual-testing-training-in-hyderabad',
  'salesforce-training-in-hyderabad',
  'servicenow-training-hyderabad',
  'workday-training-hyderabad'
];

let successCount = 0;
let errorCount = 0;
let notFoundCount = 0;

async function fixImports() {
  console.log('🔧 Starting import fixes...\n');

  for (const pageSlug of pagesToFix) {
    const filePath = path.join(__dirname, 'src', 'app', pageSlug, 'page.js');
    
    try {
      // Check if file exists
      if (!fs.existsSync(filePath)) {
        console.log(`❌ File not found: ${pageSlug}/page.js`);
        notFoundCount++;
        continue;
      }

      // Read the file
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Check if it needs fixing
      if (content.includes("from '../../utils/metadata'")) {
        // Fix the import
        content = content.replace(
          /import \{ getPageMetadata, getStructuredData(?:, getReviewStructuredData)? \} from '\.\.\/\.\.\/utils\/metadata';/g,
          "import { getPageMetadata, getStructuredData } from '../../utils/metadata';"
        );
        
        // Write back to file
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed: ${pageSlug}/page.js`);
        successCount++;
      } else if (content.includes("from '../../utils/metadata'")) {
        console.log(`✨ Already correct: ${pageSlug}/page.js`);
        successCount++;
      } else {
        console.log(`⚠️  No metadata import found: ${pageSlug}/page.js`);
      }
      
    } catch (error) {
      console.log(`❌ Error fixing ${pageSlug}/page.js:`, error.message);
      errorCount++;
    }
  }

  console.log('\n📊 Import Fix Summary:');
  console.log(`✅ Successfully fixed: ${successCount}`);
  console.log(`❌ Errors: ${errorCount}`);
  console.log(`📁 Files not found: ${notFoundCount}`);
  console.log(`📁 Total processed: ${pagesToFix.length}`);
  
  console.log('\n🎉 Import fix complete!');
}

// Run the fix
fixImports().catch(console.error);
