import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
  }

  try {
    // For external URLs, we'll use a simple fetch approach
    // Note: This might be blocked by CORS for external sites
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; SEO-Analyzer/1.0)',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const html = await response.text();
    
    // Parse HTML for SEO elements
    const seoData = extractSEOData(html, url);
    
    return NextResponse.json(seoData);
  } catch (error) {
    console.error('SEO analysis error:', error);
    return NextResponse.json(
      { error: 'Failed to analyze URL. This might be due to CORS restrictions.' },
      { status: 500 }
    );
  }
}

function extractSEOData(html, url) {
  // Enhanced HTML parsing for SEO elements with better accuracy
  // Handles nested elements and complex HTML structures
  
  const extractTag = (pattern) => {
    const match = html.match(pattern);
    return match ? match[1] : null;
  };

  const _extractAllTags = (pattern) => {
    const matches = [...html.matchAll(new RegExp(pattern, 'gi'))];
    return matches.map(match => match[1]);
  };

  // Enhanced function to extract text content from HTML tags (including nested elements)
  const extractTextFromTags = (tagName) => {
    const pattern = new RegExp(`<${tagName}[^>]*>(.*?)<\/${tagName}>`, 'gis');
    const matches = [...html.matchAll(pattern)];
    return matches.map(match => {
      // Remove all HTML tags from the content and clean up whitespace
      const textContent = match[1]
        .replace(/<[^>]*>/g, ' ') // Remove HTML tags
        .replace(/\s+/g, ' ') // Replace multiple whitespace with single space
        .trim(); // Remove leading/trailing whitespace
      return textContent;
    }).filter(text => text.length > 0); // Only return non-empty text
  };

  return {
    title: extractTag(/<title[^>]*>([^<]*)<\/title>/i) || 'No title found',
    metaDescription: extractTag(/<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"\']*)["\'][^>]*>/i) || 'No meta description found',
    metaKeywords: extractTag(/<meta[^>]*name=["\']keywords["\'][^>]*content=["\']([^"\']*)["\'][^>]*>/i) || 'No meta keywords found',
    ogTitle: extractTag(/<meta[^>]*property=["\']og:title["\'][^>]*content=["\']([^"\']*)["\'][^>]*>/i) || 'No OG title found',
    ogDescription: extractTag(/<meta[^>]*property=["\']og:description["\'][^>]*content=["\']([^"\']*)["\'][^>]*>/i) || 'No OG description found',
    ogImage: extractTag(/<meta[^>]*property=["\']og:image["\'][^>]*content=["\']([^"\']*)["\'][^>]*>/i) || 'No OG image found',
    twitterTitle: extractTag(/<meta[^>]*name=["\']twitter:title["\'][^>]*content=["\']([^"\']*)["\'][^>]*>/i) || 'No Twitter title found',
    twitterDescription: extractTag(/<meta[^>]*name=["\']twitter:description["\'][^>]*content=["\']([^"\']*)["\'][^>]*>/i) || 'No Twitter description found',
    twitterImage: extractTag(/<meta[^>]*name=["\']twitter:image["\'][^>]*content=["\']([^"\']*)["\'][^>]*>/i) || 'No Twitter image found',
    canonical: extractTag(/<link[^>]*rel=["\']canonical["\'][^>]*href=["\']([^"\']*)["\'][^>]*>/i) || 'No canonical URL found',
    
    // Extract headings with improved accuracy
    headings: {
      h1: extractTextFromTags('h1'),
      h2: extractTextFromTags('h2'),
      h3: extractTextFromTags('h3'),
      h4: extractTextFromTags('h4'),
      h5: extractTextFromTags('h5'),
      h6: extractTextFromTags('h6'),
    },
    
    // Extract structured data with enhanced patterns
    structuredData: (() => {
      // Multiple patterns to catch different structured data formats
      const patterns = [
        /<script[^>]*type=["\']application\/ld\+json["\'][^>]*>([\s\S]*?)<\/script>/gi,
        /<script[^>]*type=application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi,
        /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi,
        /<script[^>]*type='application\/ld\+json'[^>]*>([\s\S]*?)<\/script>/gi
      ];
      
      let allScripts = [];
      
      // Try all patterns to catch structured data
      patterns.forEach(pattern => {
        const matches = [...html.matchAll(pattern)];
        matches.forEach(match => {
          if (match[1]) {
            allScripts.push(match[1].trim());
          }
        });
      });
      
      // Remove duplicates and parse JSON
      const uniqueScripts = [...new Set(allScripts)];
      
      return uniqueScripts.map(script => {
        try {
          // Clean up the script content
          const cleanedScript = script
            .replace(/^\s*<!--.*?-->\s*/g, '') // Remove HTML comments
            .replace(/^\s*\/\*.*?\*\/\s*/g, '') // Remove CSS comments
            .replace(/^\s*\/\/.*$/gm, '') // Remove single line comments
            .trim();
          
          const parsed = JSON.parse(cleanedScript);
          
          // Return structured data with type information
          return {
            type: parsed['@type'] || 'Unknown',
            context: parsed['@context'] || 'Unknown',
            name: parsed.name || parsed.headline || 'Unknown',
            data: parsed,
            isValid: true
          };
        } catch (e) {
          // Return error info for debugging
          return {
            error: e.message,
            rawContent: script.substring(0, 200) + (script.length > 200 ? '...' : ''),
            isValid: false
          };
        }
      });
    })(),
    
    // Extract images with enhanced parsing and debugging
    images: (() => {
      // Multiple regex patterns to catch different image formats
      const imgPatterns = [
        /<img[^>]*>/gi,  // Standard img tags
        /<image[^>]*>/gi, // SVG image tags
        /src=["']([^"']*\.(jpg|jpeg|png|gif|webp|svg))[^"']*["']/gi // Direct src patterns
      ];
      
      let allImgMatches = [];
      
      // Collect matches from all patterns
      imgPatterns.forEach(pattern => {
        const matches = [...html.matchAll(pattern)];
        allImgMatches = allImgMatches.concat(matches);
      });
      
      // Remove duplicates and process
      const uniqueMatches = [...new Set(allImgMatches.map(match => match[0]))];
      
      return uniqueMatches.slice(0, 30).map(imgTag => {
        // Enhanced attribute extraction with multiple quote styles
        const srcPatterns = [
          /src=["']([^"']*)["']/i,
          /src=([^\s>]+)/i,
          /data-src=["']([^"']*)["']/i // Lazy loading
        ];
        
        const altPatterns = [
          /alt=["']([^"']*)["']/i,
          /alt=([^\s>]+)/i
        ];
        
        const titlePatterns = [
          /title=["']([^"']*)["']/i,
          /title=([^\s>]+)/i
        ];
        
        // Find matches for each attribute
        let src = '';
        let alt = '';
        let title = '';
        
        // Extract src
        for (const pattern of srcPatterns) {
          const match = imgTag.match(pattern);
          if (match && match[1]) {
            src = match[1];
            break;
          }
        }
        
        // Extract alt
        for (const pattern of altPatterns) {
          const match = imgTag.match(pattern);
          if (match && match[1]) {
            alt = match[1];
            break;
          }
        }
        
        // Extract title
        for (const pattern of titlePatterns) {
          const match = imgTag.match(pattern);
          if (match && match[1]) {
            title = match[1];
            break;
          }
        }
        
        // Clean up extracted values
        src = src.replace(/["']/g, '').trim();
        alt = alt.replace(/["']/g, '').trim();
        title = title.replace(/["']/g, '').trim();
        
        // Determine if alt text exists and is meaningful
        const hasAlt = alt && alt.length > 0 && alt !== 'No alt text' && alt !== 'image';
        
        return {
          src: src || 'No src found',
          alt: alt || 'No alt text',
          title: title || 'No title',
          hasAlt: hasAlt,
          rawTag: imgTag.length > 200 ? imgTag.substring(0, 200) + '...' : imgTag // For debugging
        };
      });
    })(),
    
    // Extract links (simplified)
    links: (() => {
      const linkMatches = [...html.matchAll(/<a[^>]*href=["\']([^"\']*)["\'][^>]*>([^<]*)<\/a>/gi)];
      return linkMatches.slice(0, 50).map(match => ({
        href: match[1],
        text: match[2],
        rel: 'none' // Would need more complex parsing for rel attribute
      }));
    })(),
    
    url: url
  };
}
