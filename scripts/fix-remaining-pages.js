const fs = require('fs');
const path = require('path');

// List of pages that need to be fixed
const PROBLEMATIC_PAGES = [
  'src/app/refund-and-course-rescheduling-policy/page.js',
  'src/app/python-with-aws-training/page.js', 
  'src/app/python-online-training/page.js',
  'src/app/azure-devops-online-training-in-pune/page.js'
];

function fixPage(filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`❌ File not found: ${filePath}`);
    return false;
  }

  let content = fs.readFileSync(fullPath, 'utf8');
  let modified = false;

  // Extract slug from file path
  const pathParts = filePath.split('/');
  const folderName = pathParts[pathParts.length - 2];
  const slug = folderName;

  // Fix imports
  if (content.includes("from '../../utils/metadata'")) {
    content = content.replace(
      /import { getPageMetadata(?:, getStructuredData)? } from '\.\.\/\.\.\/utils\/metadata';/g,
      "import { getCourseBySlugStatic, getPageMetadataStatic, getStructuredDataStatic } from '../../utils/staticCourses';"
    );
    modified = true;
  }

  // Add COURSE_SLUG constant if not present
  if (!content.includes('const COURSE_SLUG =')) {
    const constantDeclaration = `// Define the course slug as a constant\nconst COURSE_SLUG = '${slug}';\n\n`;
    
    // Insert before the first export
    const exportIndex = content.indexOf('export');
    if (exportIndex !== -1) {
      content = content.slice(0, exportIndex) + constantDeclaration + content.slice(exportIndex);
      modified = true;
    }
  }

  // Fix generateMetadata function
  const oldMetadataPattern = /export async function generateMetadata\(\) \{\s*return await getPageMetadata\([^)]+\);\s*\}/;
  if (oldMetadataPattern.test(content)) {
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

    content = content.replace(oldMetadataPattern, newGenerateMetadata);
    modified = true;
  }

  // Fix getStructuredData calls
  if (content.includes('getStructuredData(')) {
    content = content.replace(/getStructuredData\([^)]+\)/g, `getStructuredDataStatic(COURSE_SLUG)`);
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✅ Fixed: ${filePath}`);
    return true;
  } else {
    console.log(`⏭️  No changes needed: ${filePath}`);
    return false;
  }
}

console.log('🔧 Fixing remaining problematic pages...\n');

let fixedCount = 0;
PROBLEMATIC_PAGES.forEach(pagePath => {
  if (fixPage(pagePath)) {
    fixedCount++;
  }
});

console.log(`\n🎉 Fixed ${fixedCount} pages`);
