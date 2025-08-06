const fs = require('fs');
const path = require('path');

// List of remaining pages that need fixing
const pagesToFix = [
  'sap-leonardo-training-hyderabad', 
  'sap-fico-online-training-in-hyderabad',
  'sap-sd-online-training-in-hyderabad',
  'sap-hana-admin-training',
  'sap-ewm-online-training',
  'sap-security-training',
  'salesforce-training-in-hyderabad'
];

function getFunctionName(slug) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

async function applyStandardFix() {
  console.log('🔧 Applying standard fix pattern...\n');

  for (const pageSlug of pagesToFix) {
    const filePath = path.join(__dirname, 'src', 'app', pageSlug, 'page.js');
    
    try {
      if (!fs.existsSync(filePath)) {
        console.log(`❌ File not found: ${pageSlug}/page.js`);
        continue;
      }

      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix 1: Replace static metadata export with async generateMetadata
      if (content.includes('export const metadata = getPageMetadata(')) {
        content = content.replace(
          /export const metadata = getPageMetadata\('([^']+)'\);/,
          `// Generate metadata for this page
export async function generateMetadata() {
  return await getPageMetadata('$1');
}

// Generate structured data for SEO
async function getPageStructuredData() {
  const structuredData = await getStructuredData('$1');
  return structuredData ? JSON.stringify(structuredData) : null;
}`
        );
      }
      
      // Fix 2: Convert function to async and add structuredDataJson
      const functionMatch = content.match(/export default function (\w+)\(\) \{/);
      if (functionMatch) {
        content = content.replace(
          /export default function \w+\(\) \{/,
          `export default async function ${functionMatch[1]}() {\n  const structuredDataJson = await getPageStructuredData();\n  `
        );
      }

      // Fix 3: Fix the ending structured data section
      // Remove the old JSON.stringify approach and replace with our standard pattern
      const endingPattern = /(.*<\/div>\s*<\/div>\s*)\s*<\/div>\s*\{\/\*[\s\S]*?(\s*<>\s*\);\s*\})/s;
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
    <>
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
  
  console.log('\n🎉 Standard fixes complete!');
}

// Run the fix
applyStandardFix().catch(console.error);
