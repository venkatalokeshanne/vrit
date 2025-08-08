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

function fixOldMethodsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    
    // Check if file uses old methods
    const usesOldMethods = content.includes('getPageMetadata(') || 
                          content.includes('getStructuredData(') || 
                          content.includes('getPageStructuredData(');
    
    if (!usesOldMethods) {
      return false;
    }
    
    console.log(`🔧 Fixing old methods in: ${filePath}`);
    
    // Fix imports - ensure we have the static versions
    if (content.includes("import { getCourseBySlugStatic } from '../../utils/staticCourses';")) {
      content = content.replace(
        "import { getCourseBySlugStatic } from '../../utils/staticCourses';",
        "import { getCourseBySlugStatic, getStructuredDataStatic } from '../../utils/staticCourses';"
      );
      changed = true;
    }
    
    // Replace generateMetadata function that uses getPageMetadata
    const oldGenerateMetadataPattern = /export async function generateMetadata\(\) \{\s*return await getPageMetadata\('([^']+)'\);\s*\}/;
    if (oldGenerateMetadataPattern.test(content)) {
      content = content.replace(
        oldGenerateMetadataPattern,
        (match, courseSlug) => {
          return `export async function generateMetadata() {
  const courseMetadata = getCourseBySlugStatic('${courseSlug}');
  return courseMetadata?.metadata || {};
}`;
        }
      );
      changed = true;
    }
    
    // Replace getPageStructuredData() with getStructuredDataStatic(COURSE_SLUG)
    if (content.includes('getPageStructuredData()')) {
      // First, extract the COURSE_SLUG constant value
      const courseSlugMatch = content.match(/const COURSE_SLUG = '([^']+)';/);
      if (courseSlugMatch) {
        const courseSlug = courseSlugMatch[1];
        content = content.replace(/getPageStructuredData\(\)/g, `getStructuredDataStatic('${courseSlug}')`);
        changed = true;
      }
    }
    
    // Replace getPageMetadata calls in component body
    const getPageMetadataPattern = /const metadata = getPageMetadata\('([^']+)'\);/;
    if (getPageMetadataPattern.test(content)) {
      content = content.replace(
        getPageMetadataPattern,
        (match, courseSlug) => {
          return `const courseData = getCourseBySlugStatic('${courseSlug}');
  const metadata = courseData?.metadata;`;
        }
      );
      changed = true;
    }
    
    // Replace getStructuredData calls
    const getStructuredDataPattern = /const structuredDataJson = getStructuredData\('([^']+)'\);/;
    if (getStructuredDataPattern.test(content)) {
      content = content.replace(
        getStructuredDataPattern,
        (match, courseSlug) => {
          return `const structuredDataJson = getStructuredDataStatic('${courseSlug}');`;
        }
      );
      changed = true;
    }
    
    // Replace any remaining getStructuredData calls with JSON.stringify
    const structuredDataJsonPattern = /JSON\.stringify\(getStructuredData\('([^']+)'\)\)/;
    if (structuredDataJsonPattern.test(content)) {
      content = content.replace(
        structuredDataJsonPattern,
        (match, courseSlug) => {
          return `JSON.stringify(getStructuredDataStatic('${courseSlug}'))`;
        }
      );
      changed = true;
    }
    
    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
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
console.log('🔍 Searching for pages with old method calls...');

let fixedFiles = 0;

for (const dir of directoriesToSearch) {
  const files = getAllPageFiles(dir);
  console.log(`📁 Found ${files.length} page files in ${dir}`);
  
  for (const file of files) {
    if (fixOldMethodsInFile(file)) {
      fixedFiles++;
    }
  }
}

console.log(`\n🎉 Old methods fix complete! Fixed ${fixedFiles} files.`);
