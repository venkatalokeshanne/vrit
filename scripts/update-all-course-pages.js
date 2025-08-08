#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to update course page imports
function updateImports(content) {
  // Replace old imports with new static imports
  let updatedContent = content.replace(
    /import { getPageMetadata, getStructuredData(?:, getReviewStructuredData)? } from '\.\.\/\.\.\/utils\/metadata';/g,
    "import { getCourseBySlugStatic } from '../../utils/staticCourses';"
  );
  
  // Also handle variations
  updatedContent = updatedContent.replace(
    /import { getPageMetadata, getStructuredData } from '\.\.\/\.\.\/utils\/metadata';/g,
    "import { getCourseBySlugStatic } from '../../utils/staticCourses';"
  );
  
  return updatedContent;
}

// Function to extract course slug from file path
function extractSlugFromPath(filePath) {
  const parts = filePath.split(path.sep);
  const folderName = parts[parts.length - 2]; // Get the folder name (course slug)
  return folderName;
}

// Function to add course slug constant
function addCourseSlugConstant(content, slug) {
  // Find the imports section and add the constant after it
  const importEndRegex = /} from 'lucide-react';\s*/;
  const match = content.match(importEndRegex);
  
  if (match) {
    const replacement = `} from 'lucide-react';

// Define the course slug as a constant
const COURSE_SLUG = '${slug}';`;
    
    return content.replace(importEndRegex, replacement);
  }
  
  return content;
}

// Function to update generateMetadata function
function updateGenerateMetadata(content) {
  // Replace old generateMetadata with new optimized version
  const oldPattern = /\/\/ Generate metadata for this page[\s\S]*?export async function generateMetadata\(\) \{[\s\S]*?return await getPageMetadata\([^)]+\);[\s\S]*?\}/;
  
  const newFunction = `// Generate metadata for this page using static data
export async function generateMetadata() {
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  return courseMetadata?.metadata || {};
}`;

  return content.replace(oldPattern, newFunction);
}

// Function to remove old structured data function
function removeOldStructuredDataFunction(content) {
  // Remove the old getPageStructuredData function
  const oldFunctionPattern = /\/\/ Generate structured data for SEO[\s\S]*?async function getPageStructuredData\(\) \{[\s\S]*?\}/;
  return content.replace(oldFunctionPattern, '');
}

// Function to update the main component function
function updateMainComponent(content) {
  // Find the export default function and update it
  const componentPattern = /export default async function ([^(]+)\([^)]*\) \{([\s\S]*?)const structuredDataJson = await getPageStructuredData\(\);[\s\S]*?const metadata = await getPageMetadata\([^)]+\);[\s\S]*?const mainImageUrl = metadata\?\.mainImage \|\| ([^;]+);/;
  
  const match = content.match(componentPattern);
  if (match) {
    const functionName = match[1];
    const beforeStructuredData = match[2];
    const fallbackImage = match[3];
    
    const newComponent = `export default function ${functionName}() {${beforeStructuredData}// Get the complete course metadata from static file
  const courseMetadata = getCourseBySlugStatic(COURSE_SLUG);
  
  // Get structured data directly from courseMetadata
  const structuredDataJson = courseMetadata?.structuredData ? 
    JSON.stringify(courseMetadata.structuredData) : null;

  // Use only mainImage for mainImageUrl
  const mainImageUrl = courseMetadata?.mainImage || ${fallbackImage};

  // Log the courseMetadata to see what we have
  console.log('📊 Course Metadata:', courseMetadata);`;
    
    return content.replace(componentPattern, newComponent);
  }
  
  return content;
}

// Function to process a single course page file
function processCoursePageFile(filePath) {
  try {
    console.log(`📝 Processing: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already updated (check for getCourseBySlugStatic import)
    if (content.includes('getCourseBySlugStatic')) {
      console.log(`⏭️  Skipping (already updated): ${path.basename(filePath)}`);
      return;
    }
    
    // Skip if doesn't use old pattern
    if (!content.includes('getPageMetadata') || !content.includes('getStructuredData')) {
      console.log(`⏭️  Skipping (doesn't use old pattern): ${path.basename(filePath)}`);
      return;
    }
    
    const slug = extractSlugFromPath(filePath);
    
    // Apply all transformations
    content = updateImports(content);
    content = addCourseSlugConstant(content, slug);
    content = updateGenerateMetadata(content);
    content = removeOldStructuredDataFunction(content);
    content = updateMainComponent(content);
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated: ${path.basename(filePath)} (slug: ${slug})`);
    
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

// Main function to find and update all course pages
async function updateAllCoursePages() {
  try {
    console.log('🚀 Starting course page updates...');
    
    // Find all page.js files in course directories (excluding components and utils)
    const appDir = path.join(process.cwd(), 'src', 'app');
    const pattern = path.join(appDir, '**', 'page.js').replace(/\\/g, '/');
    
    console.log(`🔍 Searching pattern: ${pattern}`);
    
    const pageFiles = glob.sync(pattern, {
      ignore: [
        '**/components/**',
        '**/utils/**',
        '**/layout.js',
        '**/loading.js',
        '**/error.js',
        '**/not-found.js'
      ]
    });
    
    console.log(`📊 Found ${pageFiles.length} page files to check`);
    
    if (pageFiles.length === 0) {
      // Fallback: try a simpler approach
      const fs = require('fs');
      const alternativeFiles = [];
      
      const searchDirectory = (dir) => {
        const items = fs.readdirSync(dir, { withFileTypes: true });
        
        for (const item of items) {
          const fullPath = path.join(dir, item.name);
          
          if (item.isDirectory() && !['components', 'utils'].includes(item.name)) {
            const pageFile = path.join(fullPath, 'page.js');
            if (fs.existsSync(pageFile)) {
              alternativeFiles.push(pageFile);
            }
            
            // Recursively search subdirectories
            try {
              searchDirectory(fullPath);
            } catch (e) {
              // Skip directories we can't read
            }
          }
        }
      };
      
      searchDirectory(appDir);
      console.log(`📊 Alternative search found ${alternativeFiles.length} page files`);
      
      // Use alternative files if found
      if (alternativeFiles.length > 0) {
        pageFiles.push(...alternativeFiles);
      }
    }
    
    let updatedCount = 0;
    let skippedCount = 0;
    
    for (const filePath of pageFiles) {
      const originalContent = fs.readFileSync(filePath, 'utf8');
      
      processCoursePageFile(filePath);
      
      const newContent = fs.readFileSync(filePath, 'utf8');
      
      if (originalContent !== newContent) {
        updatedCount++;
      } else {
        skippedCount++;
      }
    }
    
    console.log('\n🎉 Update completed!');
    console.log(`✅ Updated: ${updatedCount} files`);
    console.log(`⏭️  Skipped: ${skippedCount} files`);
    console.log('\n📋 Summary:');
    console.log('- All course pages now use optimized static data approach');
    console.log('- Removed redundant async calls');
    console.log('- Added COURSE_SLUG constants');
    console.log('- Simplified image handling with mainImage only');
    
  } catch (error) {
    console.error('❌ Error during bulk update:', error);
    process.exit(1);
  }
}

// Check if glob is available, if not provide instructions
try {
  require('glob');
} catch (error) {
  console.log('📦 Installing required dependency: glob');
  const { execSync } = require('child_process');
  try {
    execSync('npm install glob', { stdio: 'inherit' });
    console.log('✅ Dependency installed successfully');
  } catch (installError) {
    console.error('❌ Failed to install glob. Please run: npm install glob');
    process.exit(1);
  }
}

// Run the update script
updateAllCoursePages();
