const fs = require('fs');
const path = require('path');
const glob = require('glob');

function findAndFixAllIssues() {
  console.log('🔍 Finding all pages with old metadata function calls...\n');
  
  // Find all page.js files
  const pageFiles = glob.sync('src/app/**/page.js', { 
    cwd: process.cwd(),
    absolute: true 
  });

  let issues = [];
  
  // Scan all files for issues
  pageFiles.forEach(filePath => {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for problematic patterns
      const hasGetPageMetadata = content.includes('getPageMetadata(');
      const hasGetStructuredData = content.includes('getStructuredData('); 
      const hasGetPageStructuredData = content.includes('getPageStructuredData(');
      const hasOldImports = content.includes("from '../../utils/metadata'");
      const missingStaticImports = !content.includes("from '../../utils/staticCourses'") && 
                                   (hasGetPageMetadata || hasGetStructuredData || hasGetPageStructuredData);
      
      if (hasGetPageMetadata || hasGetStructuredData || hasGetPageStructuredData || hasOldImports || missingStaticImports) {
        const relativePath = path.relative(process.cwd(), filePath);
        issues.push({
          path: filePath,
          relativePath: relativePath,
          hasGetPageMetadata,
          hasGetStructuredData,
          hasGetPageStructuredData,
          hasOldImports,
          missingStaticImports
        });
      }
    } catch (error) {
      console.error(`❌ Error reading ${filePath}:`, error.message);
    }
  });

  console.log(`📊 Found ${issues.length} files with issues:\n`);
  
  issues.forEach(issue => {
    console.log(`📄 ${issue.relativePath}`);
    if (issue.hasGetPageMetadata) console.log('  - Has getPageMetadata calls');
    if (issue.hasGetStructuredData) console.log('  - Has getStructuredData calls');
    if (issue.hasGetPageStructuredData) console.log('  - Has getPageStructuredData calls');
    if (issue.hasOldImports) console.log('  - Has old metadata imports');
    if (issue.missingStaticImports) console.log('  - Missing static imports');
    console.log('');
  });

  // Fix all issues
  let fixedCount = 0;
  issues.forEach(issue => {
    if (fixPageIssues(issue)) {
      fixedCount++;
    }
  });

  console.log(`🎉 Fixed ${fixedCount} files with issues!`);
}

function fixPageIssues(issue) {
  console.log(`🔧 Fixing: ${issue.relativePath}`);
  
  try {
    let content = fs.readFileSync(issue.path, 'utf8');
    let modified = false;

    // Extract slug from file path
    const pathParts = issue.path.split(/[/\\]/);
    const folderName = pathParts[pathParts.length - 2];
    const slug = folderName;

    // Skip if this is the main page.js (client component)
    if (folderName === 'app') {
      console.log('  ⏭️  Skipping main page.js (client component)');
      return false;
    }

    // 1. Fix imports - replace old metadata imports with static imports
    if (issue.hasOldImports || issue.missingStaticImports) {
      // Remove old imports
      content = content.replace(
        /import { [^}]*(?:getPageMetadata|getStructuredData|getReviewStructuredData)[^}]* } from '\.\.\/\.\.\/utils\/metadata';?\s*/g,
        ''
      );
      
      // Add new import if not present
      if (!content.includes("from '../../utils/staticCourses'")) {
        const importLine = "import { getCourseBySlugStatic, getPageMetadataStatic, getStructuredDataStatic } from '../../utils/staticCourses';\n";
        
        // Find the best place to insert the import (after other imports)
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
    }

    // 2. Add COURSE_SLUG constant if not present
    if (!content.includes('const COURSE_SLUG =')) {
      const constantDeclaration = `\n// Define the course slug as a constant\nconst COURSE_SLUG = '${slug}';\n\n`;
      
      // Insert before the first export
      const exportIndex = content.indexOf('export');
      if (exportIndex !== -1) {
        content = content.slice(0, exportIndex) + constantDeclaration + content.slice(exportIndex);
        modified = true;
      }
    }

    // 3. Fix generateMetadata function if it uses old pattern
    const generateMetadataRegex = /export async function generateMetadata\(\) \{[^}]*return await getPageMetadata\([^)]+\);[^}]*\}/;
    if (generateMetadataRegex.test(content)) {
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

      content = content.replace(generateMetadataRegex, newGenerateMetadata);
      modified = true;
    }

    // 4. Fix component function if it uses old async pattern with getPageMetadata
    const componentAsyncRegex = /export default async\s+function[^{]+\{[^]*?const metadata = await getPageMetadata\([^)]+\);/;
    if (componentAsyncRegex.test(content)) {
      // Remove async from the function and fix the metadata call
      content = content.replace(/export default async(\s+function[^{]+\{)/, 'export default$1');
      content = content.replace(/const metadata = await getPageMetadata\([^)]+\);/, 'const courseData = getCourseBySlugStatic(COURSE_SLUG);\n  const metadata = courseData?.metadata;');
      modified = true;
    }

    // 5. Fix all function calls
    if (issue.hasGetPageMetadata) {
      content = content.replace(/getPageMetadata\([^)]+\)/g, `getPageMetadataStatic(COURSE_SLUG)`);
      modified = true;
    }

    if (issue.hasGetStructuredData) {
      content = content.replace(/getStructuredData\([^)]+\)/g, `getStructuredDataStatic(COURSE_SLUG)`);
      modified = true;
    }

    if (issue.hasGetPageStructuredData) {
      content = content.replace(/getPageStructuredData\(\)/g, `getStructuredDataStatic(COURSE_SLUG)`);
      content = content.replace(/await getPageStructuredData\(\)/g, `getStructuredDataStatic(COURSE_SLUG)`);
      modified = true;
    }

    // 6. Fix any remaining async calls that should be sync
    content = content.replace(/const structuredDataJson = await getStructuredDataStatic\(COURSE_SLUG\)/g, 'const structuredDataJson = getStructuredDataStatic(COURSE_SLUG)');

    if (modified) {
      fs.writeFileSync(issue.path, content, 'utf8');
      console.log(`  ✅ Fixed successfully`);
      return true;
    } else {
      console.log(`  ⏭️  No changes needed`);
      return false;
    }

  } catch (error) {
    console.error(`  ❌ Error fixing ${issue.relativePath}:`, error.message);
    return false;
  }
}

// Run the comprehensive fix
findAndFixAllIssues();
