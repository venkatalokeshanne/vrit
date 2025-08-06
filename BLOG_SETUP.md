# VR IT Solutions Blog Setup Guide

This blog system is built with Sanity CMS and Next.js, providing a powerful content management system with excellent SEO capabilities.

## Features

- **Sanity CMS Integration**: Full-featured content management system
- **SEO Optimized**: Comprehensive meta tags, structured data, and sitemaps
- **Responsive Design**: Beautiful blog layout that works on all devices
- **Rich Content**: Support for images, code blocks, callouts, and more
- **Category System**: Organize posts by categories with dedicated pages
- **Author Management**: Multi-author support with bio pages
- **Related Posts**: Automatic related post suggestions
- **Search & Filter**: Client-side search and category filtering
- **Table of Contents**: Auto-generated TOC for long articles
- **Social Sharing**: Built-in sharing functionality

## Setup Instructions

### 1. Install Dependencies

```bash
npm install @sanity/client @sanity/image-url next-sanity @portabletext/react @sanity/vision sanity
```

### 2. Create Sanity Project

```bash
# Initialize a new Sanity project
npx sanity init

# Follow the prompts:
# - Choose "Create new project"
# - Enter your project name
# - Choose dataset name (usually "production")
# - Choose project template (select "Clean project with no predefined schemas")
```

### 3. Environment Variables

Create a `.env.local` file in your project root:

```env
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_AUTH_TOKEN=your-auth-token-here
```

To get these values:
- **Project ID**: Found in your Sanity project dashboard
- **Dataset**: Usually "production"
- **Auth Token**: Create one in your Sanity project settings → API → Tokens

### 4. Deploy Sanity Studio

The blog includes an integrated Sanity Studio accessible at `/admin`. No separate deployment needed.

### 5. Content Schema

The blog includes these content types:
- **Posts**: Blog articles with rich content
- **Authors**: Author profiles and bios
- **Categories**: Post categorization
- **SEO**: Advanced SEO settings per post

### 6. Start Creating Content

1. Navigate to `/admin` in your browser
2. Log in with your Sanity account
3. Start creating authors, categories, and posts

## Blog Structure

```
src/
├── app/
│   ├── blog/                    # Main blog page
│   │   ├── [slug]/             # Individual blog posts
│   │   ├── category/[slug]/    # Category pages
│   │   └── sitemap.js          # Blog sitemap
│   └── admin/[[...tool]]/      # Sanity Studio
├── components/
│   └── PortableTextRenderer.js # Rich content renderer
├── lib/
│   └── sanity.js               # Sanity client & queries
└── utils/
    └── metadata.js             # SEO utilities
```

## SEO Features

### Automatic SEO
- Meta titles and descriptions
- Open Graph tags
- Twitter Cards
- Canonical URLs
- Structured data (JSON-LD)

### Blog-Specific SEO
- Article schema markup
- Author information
- Reading time calculation
- Category organization
- Related posts
- Sitemap generation

### Rich Snippets
- Article snippets in search results
- Author information
- Publication dates
- Category breadcrumbs

## Content Management

### Writing Posts
1. Create a new post in Sanity Studio
2. Add title, content, and meta information
3. Upload featured image
4. Select categories and add tags
5. Set author and publish date
6. Configure SEO settings
7. Publish when ready

### Content Types Supported
- Rich text with formatting
- Images with captions
- Code blocks with syntax highlighting
- Info/warning/error callouts
- Embedded links
- Lists and tables

### Author Management
- Author profiles with photos
- Bio and social links
- Multiple author support

### Category Organization
- Hierarchical categories
- Category descriptions
- Color coding
- Post count tracking

## Performance Optimizations

- Static generation for blog posts
- Image optimization with Next.js
- Lazy loading for images
- Efficient Sanity queries
- CDN delivery through Sanity

## Deployment

The blog works seamlessly with your existing Next.js deployment. No additional configuration needed for:
- Vercel
- Netlify
- AWS
- Any Node.js hosting platform

## Customization

### Styling
The blog uses Tailwind CSS and can be customized by modifying:
- Component styles in `/src/app/blog/`
- Color schemes in Tailwind config
- Layout components

### Functionality
- Add new content types in `/sanity/schemas/`
- Extend queries in `/src/lib/sanity.js`
- Add new page types as needed

## Best Practices

### Content Creation
- Write compelling titles (under 60 characters)
- Create engaging excerpts (under 160 characters)
- Use descriptive alt text for images
- Add relevant tags and categories
- Include reading time estimates

### SEO Optimization
- Use proper heading hierarchy (H1, H2, H3)
- Include internal links to related posts
- Optimize images with descriptive filenames
- Write meta descriptions for each post
- Use structured data for rich snippets

### Performance
- Optimize images before uploading
- Keep content well-organized
- Use caching for frequently accessed content
- Monitor loading times

## Support

For questions or issues:
1. Check Sanity documentation: https://www.sanity.io/docs
2. Review Next.js documentation: https://nextjs.org/docs
3. Contact the development team

## Migration

To migrate existing blog content:
1. Export content from current system
2. Transform to Sanity format
3. Import using Sanity CLI or API
4. Update internal links and references

The blog system is designed to be flexible and scalable, supporting growth from a few posts to thousands of articles with consistent performance and SEO benefits.
