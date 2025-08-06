const fs = require('fs');
const path = require('path');

// Find all JavaScript files with metadata exports
function findFilesWithMetadataExports(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (item === 'page.js' && fullPath.includes('\\app\\')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('export const metadata = getPageMetadata')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Fix a single file
function fixMetadataExport(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find the metadata export pattern
    const metadataPattern = /export const metadata = getPageMetadata\('([^']+)'\);?(\s*console\.log[^;]*;)?/g;
    
    let match;
    let modified = false;
    
    while ((match = metadataPattern.exec(content)) !== null) {
      const slug = match[1];
      const fullMatch = match[0];
      
      // Create the replacement
      const replacement = `export async function generateMetadata() {
  return await getPageMetadata('${slug}');
}`;
      
      // Replace the old export with the new generateMetadata function
      content = content.replace(fullMatch, replacement);
      modified = true;
      
      console.log(`✅ Fixed metadata export in: ${filePath.split('\\').pop()} (slug: ${slug})`);
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
function main() {
  const appDir = path.join('c:', 'Users', 'annev', 'workspace', 'vr-it-sol', 'src', 'app');
  
  console.log('🔍 Scanning for files with metadata exports...\n');
  
  const files = findFilesWithMetadataExports(appDir);
  
  console.log(`Found ${files.length} files to fix:\n`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const file of files) {
    const relativePath = file.replace(appDir + '\\', '');
    console.log(`Processing: ${relativePath}`);
    
    if (fixMetadataExport(file)) {
      fixedCount++;
    } else {
      errorCount++;
    }
  }
  
  console.log(`\n🎉 Conversion complete!`);
  console.log(`✅ Successfully fixed: ${fixedCount} files`);
  console.log(`❌ Errors: ${errorCount} files`);
  console.log(`\nAll pages now use generateMetadata() for async Sanity metadata fetching.`);
}

main();
