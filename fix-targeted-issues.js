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

async function fixAllCoursePageIssues() {
  console.log('🔧 Fixing all course page issues...\n');

  let successCount = 0;
  let errorCount = 0;

  for (const pageSlug of pagesToFix) {
    const filePath = path.join(__dirname, 'src', 'app', pageSlug, 'page.js');
    
    try {
      if (!fs.existsSync(filePath)) {
        console.log(`❌ File not found: ${pageSlug}/page.js`);
        continue;
      }

      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Fix 1: Add missing structuredDataJson variable if not present
      if (!content.includes('structuredDataJson = await getPageStructuredData()')) {
        // Find the function name and add the variable
        const functionMatch = content.match(/export default async function (\w+)\(\) \{/);
        if (functionMatch) {
          content = content.replace(
            /export default async function \w+\(\) \{\s*\n/,
            `export default async function ${functionMatch[1]}() {\n  const structuredDataJson = await getPageStructuredData();\n  \n`
          );
          modified = true;
        }
      }

      // Fix 2: Remove duplicate structured data blocks at the top
      if (content.includes('JSON-LD Structured Data for SEO') || content.includes('Additional Review Schema')) {
        // Remove the entire duplicate section from the return statement
        content = content.replace(
          /return \(\s*<>\s*\{\/\*[\s\S]*?\*\/\}[\s\S]*?(?=<div className="min-h-screen)/,
          'return (\n    <>\n      '
        );
        modified = true;
      }

      // Fix 3: Fix malformed JSX structure at the bottom
      if (content.includes('getReviewStructuredData(') && content.includes('&& (')) {
        // Remove malformed review structured data section
        content = content.replace(
          /\{\/\* Review Structured Data \*\/\}\s*\{getReviewStructuredData\([^)]+\) && \([\s\S]*?\}\)\s*\n\s*\}\)/,
          ''
        );
        modified = true;
      }

      // Fix 4: Ensure proper return structure and clean ending
      if (!content.includes('return (\n    <>') && !content.includes('return (\n      <>')) {
        content = content.replace(/return \(\s*<>/, 'return (\n    <>');
        modified = true;
      }

      // Fix 5: Clean up the ending structure to ensure proper structured data
      const endingPattern = /(\s*<\/div>\s*<\/div>\s*)\s*\{\/\* Structured Data[\s\S]*?<\/div>\s*<>\s*\);/;
      if (endingPattern.test(content)) {
        content = content.replace(
          endingPattern,
          `$1
      
      {/* Structured Data for SEO */}
      {structuredDataJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredDataJson }}
        />
      )}
      </div>
    </>
  );`
        );
        modified = true;
      }

      // Fix 6: Ensure proper ending if not already fixed
      if (!content.includes('</div>\n    </>\n  );')) {
        // Find the last </div> before potential structured data and fix the structure
        content = content.replace(
          /(.*<\/div>\s*)\s*<\/div>\s*<>\s*\);\s*\}/,
          `$1
      
      {/* Structured Data for SEO */}
      {structuredDataJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredDataJson }}
        />
      )}
      </div>
    </>
  );
}`
        );
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed: ${pageSlug}/page.js`);
        successCount++;
      } else {
        console.log(`✨ No changes needed: ${pageSlug}/page.js`);
        successCount++;
      }
      
    } catch (error) {
      console.log(`❌ Error fixing ${pageSlug}/page.js:`, error.message);
      errorCount++;
    }
  }

  console.log('\n📊 Fix Summary:');
  console.log(`✅ Successfully processed: ${successCount}`);
  console.log(`❌ Errors: ${errorCount}`);
  console.log(`📁 Total files: ${pagesToFix.length}`);
  
  console.log('\n🎉 Course page fixes complete!');
}

// Run the fix
fixAllCoursePageIssues().catch(console.error);
