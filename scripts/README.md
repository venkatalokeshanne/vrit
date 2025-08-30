# Scripts Directory

This directory contains utility scripts for managing course data and Sanity CMS integration.

## Available Scripts

### add-simple-finance-metadata.js
Adds the Simple Finance training course metadata to Sanity CMS.

**Usage:**
```bash
npm run add:simple-finance
```

**What it does:**
- Creates a new courseMetadata document in Sanity
- Adds comprehensive SEO metadata for the Simple Finance course
- Includes structured data, keywords, and SEO headers
- Sets up Open Graph and Twitter card metadata

**Requirements:**
- Valid SANITY_API_TOKEN in .env.local
- @sanity/client package installed
- Proper Sanity project configuration

### build-courses-data.js
Builds static course data from various sources.

**Usage:**
```bash
npm run build:courses
```

### update-all-course-pages.js
Updates all course pages with latest data.

**Usage:**
```bash
npm run update:courses
```

## Environment Variables Required

Make sure your `.env.local` file contains:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
```

## Adding New Course Metadata Scripts

To create a new script for adding course metadata:

1. Copy the `add-simple-finance-metadata.js` template
2. Update the course data object with your course information
3. Change the slug to match your course URL
4. Add a script entry in `package.json`
5. Test with `node scripts/your-script.js`
