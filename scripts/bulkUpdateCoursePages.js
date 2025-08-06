// scripts/bulkUpdateCoursePages.js

const fs = require('fs');
const path = require('path');
const glob = require('glob').sync;


console.log('Current working directory:', process.cwd());
// Try a relative pattern from project root for better compatibility
const COURSE_PAGE_PATTERN = 'src/app/**/page.js';

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
console.log('Matched files:', files);

if (files.length === 0) {
  console.log('No course page files found!');
} else {
  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    const slug = getSlugFromPath(file);

    if (!content.includes('mainImageUrl')) {
      content = content.replace(
        /(const structuredDataJson = await getPageStructuredData\(\);)/,
        `$1\n${MAIN_IMAGE_SNIPPET.replace('__SLUG__', slug)}`
      );
      content = content.replace(
        /<img\s+src="[^"]*"/,
        '<img src={mainImageUrl}'
      );
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated: ${file}`);
    } else {
      console.log(`Skipped (already updated): ${file}`);
    }
  }
  console.log('All course pages updated!');
}