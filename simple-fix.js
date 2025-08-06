const fs = require('fs');
const path = require('path');

// List of all pages that need fixing
const pagesToFix = [
  'sap-basis-online-training',
  'sap-leonardo-training-hyderabad', 
  'sap-fico-online-training-in-hyderabad',
  'sap-sd-online-training-in-hyderabad',
  'sap-hana-admin-training',
  'sap-ewm-online-training',
  'sap-security-training',
  'salesforce-training-in-hyderabad'
];

async function simpleFix() {
  console.log('🔧 Applying simple targeted fixes...\n');

  for (const pageSlug of pagesToFix) {
    const filePath = path.join(__dirname, 'src', 'app', pageSlug, 'page.js');
    
    try {
      if (!fs.existsSync(filePath)) {
        console.log(`❌ File not found: ${pageSlug}/page.js`);
        continue;
      }

      let content = fs.readFileSync(filePath, 'utf8');

      // Simple approach: Find the function declaration and ensure it has the structured data variable
      const functionMatch = content.match(/export default async function (\w+)\(\) \{/);
      if (functionMatch && !content.includes('const structuredDataJson = await getPageStructuredData();')) {
        content = content.replace(
          /export default async function \w+\(\) \{\s*\n/,
          `export default async function ${functionMatch[1]}() {\n  const structuredDataJson = await getPageStructuredData();\n  \n`
        );
      }

      // Fix return statement structure
      content = content.replace(/return \(\s*<>\s*\{\/\*[\s\S]*?\*\/\}[\s\S]*?(?=<div className="min-h-screen)/, 'return (\n    <>\n      ');

      // Fix ending structure - replace everything after the last meaningful </div> with clean structure
      const endPattern = /(\s*<\/div>\s*<\/div>\s*)\s*\{\/\*[\s\S]*?$/;
      if (endPattern.test(content)) {
        content = content.replace(
          endPattern,
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
      }

      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${pageSlug}/page.js`);
      
    } catch (error) {
      console.log(`❌ Error fixing ${pageSlug}/page.js:`, error.message);
    }
  }
  
  console.log('\n🎉 Simple fixes complete!');
}

// Run the fix
simpleFix().catch(console.error);
