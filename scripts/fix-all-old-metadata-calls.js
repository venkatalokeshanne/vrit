const fs = require('fs');
const path = require('path');

const directoriesToSearch = ['src/app'];

function getAllPageFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item === 'page.js') {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

function fixOldMetadataCallsInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    let newContent = content;
    
    // Pattern 1: Fix generateMetadata function calls
    const generateMetadataPattern = /export async function generateMetadata\(\) \{[\s\S]*?return await getPageMetadata\(['"`]([^'"`]+)['"`]\);[\s\S]*?\}/g;
    if (generateMetadataPattern.test(content)) {
      newContent = newContent.replace(generateMetadataPattern, (match, slug) => {
        console.log(`  📝 Fixing generateMetadata in: ${filePath}`);
        return `export async function generateMetadata() {
  const courseMetadata = getCourseBySlugStatic('${slug}');
  return courseMetadata?.metadata || {};
}`;
      });
      modified = true;
    }
    
    // Pattern 2: Fix direct getPageMetadata calls
    const directCallPattern = /const metadata = await getPageMetadata\(['"`]([^'"`]+)['"`]\);/g;
    if (directCallPattern.test(content)) {
      newContent = newContent.replace(directCallPattern, (match, slug) => {
        console.log(`  📝 Fixing direct getPageMetadata call in: ${filePath}`);
        return `const courseData = getCourseBySlugStatic('${slug}');
  const metadata = courseData?.metadata;`;
      });
      modified = true;
    }
    
    // Pattern 3: Fix getPageStructuredData calls
    const structuredDataPattern = /const structuredDataJson = getPageStructuredData\(\);/g;
    if (structuredDataPattern.test(content)) {
      // Extract COURSE_SLUG from the file
      const courseSlugMatch = content.match(/const COURSE_SLUG = ['"`]([^'"`]+)['"`];/);
      if (courseSlugMatch) {
        const slug = courseSlugMatch[1];
        newContent = newContent.replace(structuredDataPattern, () => {
          console.log(`  📝 Fixing getPageStructuredData call in: ${filePath}`);
          return `const structuredDataJson = getStructuredDataStatic('${slug}');`;
        });
        modified = true;
      }
    }
    
    // Pattern 4: Fix async function declarations that shouldn't be async anymore
    const asyncFunctionPattern = /export default async\s+function/g;
    if (asyncFunctionPattern.test(content) && !content.includes('await ')) {
      newContent = newContent.replace(asyncFunctionPattern, 'export default function');
      console.log(`  📝 Removing unnecessary async from function in: ${filePath}`);
      modified = true;
    }
    
    // Pattern 5: Fix remaining await calls for getStructuredDataStatic
    const awaitStructuredDataPattern = /const structuredDataJson = await getStructuredDataStatic\(['"`]([^'"`]+)['"`]\);/g;
    if (awaitStructuredDataPattern.test(content)) {
      newContent = newContent.replace(awaitStructuredDataPattern, (match, slug) => {
        console.log(`  📝 Removing await from getStructuredDataStatic call in: ${filePath}`);
        return `const structuredDataJson = getStructuredDataStatic('${slug}');`;
      });
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('🔍 Searching for pages with old metadata function calls...');

let fixedFiles = 0;

for (const dir of directoriesToSearch) {
  const files = getAllPageFiles(dir);
  console.log(`📁 Found ${files.length} page files in ${dir}`);
  
  for (const file of files) {
    if (fixOldMetadataCallsInFile(file)) {
      fixedFiles++;
    }
  }
}

console.log(`\n🎉 Metadata fix complete! Fixed ${fixedFiles} files.`);
