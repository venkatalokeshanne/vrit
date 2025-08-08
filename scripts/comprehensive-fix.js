const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixPageFile(filePath) {
  console.log(`📝 Processing: ${filePath}`);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Extract slug from file path
    const pathParts = filePath.split(/[/\\]/);
    const folderName = pathParts[pathParts.length - 2];
    const slug = folderName;

    // Skip if this looks like it's already been updated
    if (content.includes('getCourseBySlugStatic') && content.includes('const COURSE_SLUG =')) {
      console.log(`⏭️  Already updated: ${filePath}`);
      return false;
    }

    // Fix imports - handle all variations
    if (content.includes("from '../../utils/metadata'") || content.includes('getPageMetadata') || content.includes('getStructuredData')) {
      // Replace any metadata imports
      content = content.replace(
        /import { [^}]*getPageMetadata[^}]* } from '\.\.\/\.\.\/utils\/metadata';?/g,
        "import { getCourseBySlugStatic, getPageMetadataStatic, getStructuredDataStatic } from '../../utils/staticCourses';"
      );
      
      // Also add the import if it's missing but we have getPageMetadata calls
      if (!content.includes("from '../../utils/staticCourses'") && (content.includes('getPageMetadata') || content.includes('getStructuredData'))) {
        const importLine = "import { getCourseBySlugStatic, getPageMetadataStatic, getStructuredDataStatic } from '../../utils/staticCourses';\n";
        // Find the last import statement and add after it
        const importRegex = /import[^;]+;[\r\n]*/g;
        let lastImportIndex = 0;
        let match;
        while ((match = importRegex.exec(content)) !== null) {
          lastImportIndex = match.index + match[0].length;
        }
        if (lastImportIndex > 0) {
          content = content.slice(0, lastImportIndex) + importLine + content.slice(lastImportIndex);
          modified = true;
        }
      }
      modified = true;
    }

    // Add COURSE_SLUG constant if not present
    if (!content.includes('const COURSE_SLUG =')) {
      const constantDeclaration = `\n// Define the course slug as a constant\nconst COURSE_SLUG = '${slug}';\n\n`;
      
      // Insert before the first export
      const exportIndex = content.indexOf('export');
      if (exportIndex !== -1) {
        content = content.slice(0, exportIndex) + constantDeclaration + content.slice(exportIndex);
        modified = true;
      }
    }

    // Fix generateMetadata function - handle both patterns
    const oldMetadataPattern1 = /export async function generateMetadata\(\) \{\s*return await getPageMetadata\([^)]+\);\s*\}/;
    const oldMetadataPattern2 = /export async function generateMetadata\(\) \{[^}]*const metadata = await getPageMetadata\([^)]+\);[^}]*return metadata;[^}]*\}/s;
    
    if (oldMetadataPattern1.test(content) || oldMetadataPattern2.test(content)) {
      const newGenerateMetadata = `export async function generateMetadata() {
  const courseData = getCourseBySlugStatic(COURSE_SLUG);
  
  if (!courseData?.metadata) {
    return {
      title: 'VR IT Solutions - Best Software Training Institute in Hyderabad',
      description: 'Leading IT training institute in Hyderabad offering professional courses.',
    };
  }

  const { metadata } = courseData;
  
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords?.join(', '),
    openGraph: {
      title: metadata.openGraph?.title || metadata.title,
      description: metadata.openGraph?.description || metadata.description,
      url: metadata.openGraph?.url,
      type: metadata.openGraph?.type || 'website',
      images: metadata.openGraph?.images || [],
    },
    twitter: {
      card: metadata.twitter?.card || 'summary_large_image',
      title: metadata.twitter?.title || metadata.title,
      description: metadata.twitter?.description || metadata.description,
      images: metadata.twitter?.images || [],
    },
    canonical: metadata.canonical,
  };
}`;

      content = content.replace(oldMetadataPattern1, newGenerateMetadata);
      content = content.replace(oldMetadataPattern2, newGenerateMetadata);
      modified = true;
    }

    // Fix any remaining getPageMetadata calls
    if (content.includes('getPageMetadata(')) {
      content = content.replace(/getPageMetadata\([^)]+\)/g, `getPageMetadataStatic(COURSE_SLUG)`);
      modified = true;
    }

    // Fix getStructuredData calls
    if (content.includes('getStructuredData(')) {
      content = content.replace(/getStructuredData\([^)]+\)/g, `getStructuredDataStatic(COURSE_SLUG)`);
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    } else {
      console.log(`⏭️  No changes needed: ${filePath}`);
      return false;
    }

  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

console.log('🔧 Comprehensive fix for ALL remaining pages...\n');

// Find all page.js files
const pageFiles = glob.sync('src/app/**/page.js', { 
  cwd: process.cwd(),
  absolute: true 
});

console.log(`📊 Found ${pageFiles.length} page files to check\n`);

let fixedCount = 0;
pageFiles.forEach(filePath => {
  if (fixPageFile(filePath)) {
    fixedCount++;
  }
});

console.log(`\n🎉 Fixed ${fixedCount} pages out of ${pageFiles.length} total pages`);
