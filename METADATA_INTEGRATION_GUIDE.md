# Metadata Integration Guide for VR IT Solutions

## Overview
This guide explains how to integrate the centralized metadata from `coursesMetadata.json` into your Next.js pages.

## Files Created

### 1. Metadata JSON File
- **Location**: `src/data/coursesMetadata.json`
- **Purpose**: Centralized metadata for all courses and pages
- **Total Entries**: 58 (49 courses + 9 utility pages)

### 2. Metadata Utility Functions  
- **Location**: `src/utils/metadata.js`
- **Functions**:
  - `getPageMetadata(slug)`: Returns Next.js metadata object
  - `getStructuredData(slug)`: Returns Schema.org structured data
  - `getReviewStructuredData(slug)`: Returns review/rating data
  - `getAllCourseSlugs()`: Returns all available slugs
  - `getCourseData(slug)`: Returns complete course data

## Integration Steps

### For Server Components (Most Pages)

#### Step 1: Import the utilities
```javascript
import { getPageMetadata, getStructuredData, getReviewStructuredData } from '../../utils/metadata';
```

#### Step 2: Update metadata export
Replace your existing metadata with:
```javascript
export const metadata = getPageMetadata('your-page-slug');
```

#### Step 3: Add structured data
Add before closing JSX tags:
```javascript
{/* Structured Data */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(getStructuredData('your-page-slug'))
  }}
/>

{/* Review Data (if available) */}
{getReviewStructuredData('your-page-slug') && (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(getReviewStructuredData('your-page-slug'))
    }}
  />
)}
```

### For Client Components

For client components (marked with 'use client'), you'll need to:

1. Create a separate metadata file for the page
2. Use Next.js head management or a wrapper component
3. Or convert to server component if possible

## Page Slugs Reference

### Course Pages
- `servicenow-training-in-hyderabad`
- `salesforce-training-in-hyderabad`
- `sap-fico-training-in-hyderabad`
- `pega-training-in-hyderabad`
- `azure-devops-training-in-hyderabad`
- `mulesoft-training-in-hyderabad`
- `sas-clinical-online-training-in-hyderabad`
- `sas-clinical-training-in-hyderabad`
- `sap-basis-training-in-hyderabad`
- `sap-ewm-training-in-hyderabad`
- `sap-hana-admin-training-in-hyderabad`
- `s4-hana-finance-training-in-hyderabad`
- `sap-leonardo-training-in-hyderabad`
- `sap-security-grc-training-in-hyderabad`
- `sap-s4hana-simple-logistics-training-in-hyderabad`
- `data-science-training-in-hyderabad`
- `python-online-training`
- `python-with-aws-training`
- `workday-training-in-hyderabad`
- `machine-learning-with-python-training-in-hyderabad`
- `devops-training-in-hyderabad`
- `informatica-mdm-training`
- `full-stack-developer-training-in-hyderabad`
- `edi-training`
- `hadoop-online-training`
- And more...

### Utility Pages
- `index` (home page)
- `aboutus`
- `courses`
- `contactus`
- `services`
- `blog`
- `privacy-policy`
- `terms-and-conditions`
- `refund-and-course-rescheduling-policy`

## Already Updated Pages

✅ **Home Page** (`src/app/page.js`)
✅ **About Us** (`src/app/aboutus/page.js`)  
✅ **ServiceNow Training** (`src/app/servicenow-training-in-hyderabad/page.js`)

## Benefits

1. **Centralized Management**: Single source of truth for all metadata
2. **SEO Optimization**: Complete meta tags, Open Graph, Twitter cards
3. **Structured Data**: Schema.org markup for rich snippets
4. **Review Integration**: Star ratings and review counts
5. **Consistent Branding**: Uniform metadata across all pages
6. **Easy Updates**: Change metadata in one place, applies everywhere

## Next Steps

To complete the integration:

1. Update remaining course pages using the template
2. Test each page for proper metadata rendering
3. Validate structured data using Google's Rich Results Test
4. Monitor search console for any issues
5. Consider adding page-specific metadata customizations if needed

## Maintenance

- Update `coursesMetadata.json` when adding new courses
- Review and update metadata periodically for SEO optimization
- Monitor search performance and adjust metadata as needed
