const fs = require('fs').promises;
const path = require('path');
const { createClient } = require('@sanity/client');

// Initialize Sanity client
const client = createClient({
  projectId: 'osamtsqm',
  dataset: 'production',
  useCdn: false, // Use false for write operations
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
});

// Helper function to extract metadata from course pages
async function extractCourseMetadata(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    
    // Extract metadata fields using regex patterns
    const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
    const descriptionMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/);
    const keywordsMatch = content.match(/keywords:\s*['"`]([^'"`]+)['"`]/);
    
    // Extract course-specific data
    const courseTitleMatch = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
    const priceMatch = content.match(/price['":\s]*(\d+)/i);
    const durationMatch = content.match(/duration['":\s]*['"`]?([^'"`\n]+)['"`]?/i);
    const modeMatch = content.match(/mode['":\s]*['"`]?([^'"`\n]+)['"`]?/i);
    
    // Get slug from file path
    const slug = path.basename(path.dirname(filePath));
    
    return {
      slug,
      seoTitle: titleMatch ? titleMatch[1] : '',
      seoDescription: descriptionMatch ? descriptionMatch[1] : '',
      seoKeywords: keywordsMatch ? keywordsMatch[1].split(',').map(k => k.trim()) : [],
      courseTitle: courseTitleMatch ? courseTitleMatch[1] : '',
      price: priceMatch ? parseInt(priceMatch[1]) : 0,
      duration: durationMatch ? durationMatch[1] : '',
      mode: modeMatch ? modeMatch[1] : 'Online',
      category: inferCategory(slug),
      filePath: filePath,
    };
  } catch (error) {
    console.error(`Error extracting metadata from ${filePath}:`, error.message);
    return null;
  }
}

// Helper function to infer category from slug
function inferCategory(slug) {
  if (slug.includes('sap-')) return 'SAP';
  if (slug.includes('azure') || slug.includes('devops')) return 'Cloud & DevOps';
  if (slug.includes('data-science') || slug.includes('machine-learning')) return 'Data Science';
  if (slug.includes('python') || slug.includes('full-stack')) return 'Programming';
  if (slug.includes('salesforce')) return 'CRM';
  if (slug.includes('pega')) return 'BPM';
  if (slug.includes('informatica')) return 'Data Integration';
  return 'Technology';
}

// Function to find all course pages
async function findCoursePages(dir) {
  const coursePages = [];
  
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory() && entry.name !== 'components' && entry.name !== 'blog') {
        // Check if directory contains a page.js file
        const pageFile = path.join(fullPath, 'page.js');
        try {
          await fs.access(pageFile);
          coursePages.push(pageFile);
        } catch {
          // No page.js file, skip
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
  
  return coursePages;
}

// Function to create course metadata document in Sanity
async function createCourseDocument(metadata) {
  try {
    const document = {
      _type: 'courseMetadata',
      slug: metadata.slug,
      seo: {
        title: metadata.seoTitle,
        description: metadata.seoDescription,
        keywords: metadata.seoKeywords,
      },
      courseTitle: metadata.courseTitle,
      shortDescription: metadata.seoDescription,
      category: metadata.category,
      pricing: {
        price: metadata.price,
        currency: 'INR',
        discountedPrice: metadata.price > 0 ? Math.floor(metadata.price * 0.8) : 0,
      },
      courseDetails: {
        duration: metadata.duration,
        mode: metadata.mode,
        level: 'Beginner to Advanced',
        language: 'English',
      },
      structuredData: {
        courseCode: metadata.slug.toUpperCase().replace(/-/g, '_'),
        provider: 'VR IT Solutions',
      },
      isActive: true,
    };
    
    const result = await client.create(document);
    console.log(`Created course document for ${metadata.slug}:`, result._id);
    return result;
  } catch (error) {
    console.error(`Error creating document for ${metadata.slug}:`, error.message);
    throw error;
  }
}

// Main migration function
async function migrateCourseMetadata() {
  console.log('Starting course metadata migration...');
  
  if (!process.env.SANITY_API_TOKEN) {
    console.error('SANITY_API_TOKEN environment variable is required');
    process.exit(1);
  }
  
  try {
    // Find all course pages
    const appDir = path.join(process.cwd(), 'src', 'app');
    const coursePages = await findCoursePages(appDir);
    
    console.log(`Found ${coursePages.length} course pages`);
    
    // Extract metadata and create documents
    const results = [];
    for (const pagePath of coursePages) {
      console.log(`Processing ${pagePath}...`);
      
      const metadata = await extractCourseMetadata(pagePath);
      if (metadata) {
        try {
          const document = await createCourseDocument(metadata);
          results.push({ success: true, slug: metadata.slug, id: document._id });
        } catch (error) {
          results.push({ success: false, slug: metadata.slug, error: error.message });
        }
      }
      
      // Add delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    // Summary
    const successful = results.filter(r => r.success);
    const failed = results.filter(r => !r.success);
    
    console.log('\n=== Migration Summary ===');
    console.log(`Successfully migrated: ${successful.length} courses`);
    console.log(`Failed: ${failed.length} courses`);
    
    if (failed.length > 0) {
      console.log('\nFailed courses:');
      failed.forEach(f => console.log(`- ${f.slug}: ${f.error}`));
    }
    
    console.log('\nMigration completed!');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

// Run migration if script is executed directly
if (require.main === module) {
  migrateCourseMetadata();
}

module.exports = { migrateCourseMetadata, extractCourseMetadata };
