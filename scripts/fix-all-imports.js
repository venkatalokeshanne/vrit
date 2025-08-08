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

function fixImportsInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file uses getStructuredDataStatic but doesn't import it
    const usesGetStructuredDataStatic = content.includes('getStructuredDataStatic(');
    const importsGetStructuredDataStatic = content.includes('getStructuredDataStatic') && content.includes('import');
    
    if (usesGetStructuredDataStatic && !importsGetStructuredDataStatic) {
      console.log(`🔧 Fixing imports in: ${filePath}`);
      
      // Pattern to match import line that imports getCourseBySlugStatic but not getStructuredDataStatic
      const importPattern = /import { getCourseBySlugStatic } from '\.\.\/\.\.\/utils\/staticCourses';/;
      
      if (importPattern.test(content)) {
        const newContent = content.replace(
          importPattern,
          "import { getCourseBySlugStatic, getStructuredDataStatic } from '../../utils/staticCourses';"
        );
        
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`✅ Fixed: ${filePath}`);
        return true;
      } else {
        console.log(`⚠️  Unusual import pattern in: ${filePath}`);
        return false;
      }
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('🔍 Searching for page files with import issues...');

let fixedFiles = 0;

for (const dir of directoriesToSearch) {
  const files = getAllPageFiles(dir);
  console.log(`📁 Found ${files.length} page files in ${dir}`);
  
  for (const file of files) {
    if (fixImportsInFile(file)) {
      fixedFiles++;
    }
  }
}

console.log(`\n🎉 Import fix complete! Fixed ${fixedFiles} files.`);
