// scripts/bulkUpdateCoursePages.js

const fs = require('fs');
const path = require('path');
const glob = require('glob').sync;

// Pattern to match all course page.js files
const COURSE_PAGE_PATTERN = path.join(__dirname, '../vr-it-sol/src/app/**/page.js');

// The code to insert for dynamic mainImage usage
const MAIN_IMAGE_SNIPPET = `
  // Fetch metadata for dynamic hero image
  const metadata = await getPageMetadata('__SLUG__');
  const mainImageUrl = metadata?.mainImage || '/logo.png';
`;

function getSlugFromPath(filePath) {
  // Extracts the slug from the path, e.g. .../src/app/edi-training/page.js => edi-training
  const parts = filePath.split(path.sep);
  const slugIndex = parts.indexOf('app') + 1;
  return parts[slugIndex];
}


const files = glob(COURSE_PAGE_PATTERN);
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const slug = getSlugFromPath(file);

  // Only update if not already using mainImageUrl
  if (!content.includes('mainImageUrl')) {
    // Insert the snippet after the first await getPageStructuredData() or similar
    content = content.replace(
      /(const structuredDataJson = await getPageStructuredData\(\);)/,
      `$1\n${MAIN_IMAGE_SNIPPET.replace('__SLUG__', slug)}`
    );

    // Replace static image src in hero section
    content = content.replace(
      /<img\s+src="[^"]*"/,
      '<img src={mainImageUrl}"'
    );

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated: ${file}`);
  }
}
console.log('All course pages updated!');