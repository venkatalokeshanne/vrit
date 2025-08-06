const fs = require('fs');
const path = require('path');

// List of all pages that need fixing
const pagesToFix = [
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

let successCount = 0;
let errorCount = 0;
let notFoundCount = 0;

async function fixAllCoursePages() {
  console.log('🔧 Starting comprehensive course page fixes...\n');

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
      let needsFix = false;
      
      // Fix 1: Incomplete function declaration
      if (content.includes('export default async \n  const')) {
        content = content.replace(
          /export default async \s*\n\s*const/g,
          `export default async function ${toCamelCase(pageSlug)}() {\n  const structuredDataJson = await getPageStructuredData();\n  \n  const`
        );
        needsFix = true;
      }
      
      // Fix 2: Remove duplicate structured data blocks at the top
      const duplicateStructuredDataRegex = /\s*\{\/\* JSON-LD Structured Data for SEO \*\/\}[\s\S]*?\{\/\* Course Schema \*\/\}[\s\S]*?\}\)\s*\n\s*<div className="min-h-screen/g;
      if (duplicateStructuredDataRegex.test(content)) {
        content = content.replace(duplicateStructuredDataRegex, '\n      <div className="min-h-screen');
        needsFix = true;
      }
      
      // Fix 3: Clean up malformed structured data at bottom
      const malformedBottomRegex = /\s*\{\/\* Structured Data \*\/\}[\s\S]*?\{getReviewStructuredData\([^)]+\) && \([\s\S]*?\}\)\s*\n\s*\}\)\s*<\/div>/g;
      if (malformedBottomRegex.test(content)) {
        content = content.replace(
          malformedBottomRegex,
          `\n      
      {/* Structured Data for SEO */}
      {structuredDataJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredDataJson }}
        />
      )}
      </div>`
        );
        needsFix = true;
      }
      
      // Fix 4: Ensure proper closing structure
      if (!content.includes('structuredDataJson = await getPageStructuredData();')) {
        // Find the function start and add the missing line
        content = content.replace(
          /export default async function \w+\(\) \{\s*\n\s*const courseModules/,
          `export default async function ${toCamelCase(pageSlug)}() {
  const structuredDataJson = await getPageStructuredData();
  
  const courseModules`
        );
        needsFix = true;
      }
      
      // Fix 5: Clean up any remaining malformed structured data
      content = content.replace(/\{\/\* Structured Data for SEO \*\/\}\s*\n\s*\{structuredDataJson && \(\s*\{\/\* Structured Data for SEO \*\/\}/g, '');
      content = content.replace(/\}\)\s*\n\s*\}\)/g, '})');
      
      // Fix 6: Ensure proper return statement structure
      if (!content.includes('return (\n    <>\n      <div className="min-h-screen')) {
        content = content.replace(
          /return \(\s*<>\s*\{\/\* JSON-LD Structured Data for SEO \*\/\}/,
          'return (\n    <>\n      <div className="min-h-screen'
        );
        needsFix = true;
      }
      
      if (needsFix) {
        // Write back to file
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed: ${pageSlug}/page.js`);
        successCount++;
      } else {
        console.log(`✨ Already correct: ${pageSlug}/page.js`);
        successCount++;
      }
      
    } catch (error) {
      console.log(`❌ Error fixing ${pageSlug}/page.js:`, error.message);
      errorCount++;
    }
  }

  console.log('\n📊 Course Page Fix Summary:');
  console.log(`✅ Successfully processed: ${successCount}`);
  console.log(`❌ Errors: ${errorCount}`);
  console.log(`📁 Files not found: ${notFoundCount}`);
  console.log(`📁 Total attempted: ${pagesToFix.length}`);
  
  console.log('\n🎉 Course page fixes complete!');
}

// Helper function to convert kebab-case to CamelCase
function toCamelCase(str) {
  return str
    .split('-')
    .map((word, index) => {
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
}

// Run the fix
fixAllCoursePages().catch(console.error);
