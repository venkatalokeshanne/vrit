const fs = require('fs');
const path = require('path');

/**
 * Sitelinks Enhancement Script
 * Automatically generates and validates sitelinks structure
 */
class SitelinksEnhancer {
  constructor() {
    this.sitelinksData = require('../src/data/sitelinksData.json');
    this.baseUrl = 'https://vritsol.com';
  }

  /**
   * Generate sitemap entries for sitelinks
   */
  generateSitemapEntries() {
    const entries = [];
    
    this.sitelinksData.mainSitelinks.forEach(sitelink => {
      // Main sitelink
      entries.push({
        url: `${this.baseUrl}${sitelink.url}`,
        priority: this.getPriorityValue(sitelink.priority),
        changefreq: 'weekly',
        lastmod: new Date().toISOString().split('T')[0]
      });

      // Subsections
      if (sitelink.subsections) {
        sitelink.subsections.forEach(subsection => {
          entries.push({
            url: `${this.baseUrl}${subsection.url}`,
            priority: '0.7',
            changefreq: 'weekly',
            lastmod: new Date().toISOString().split('T')[0]
          });
        });
      }
    });

    return entries;
  }

  /**
   * Get priority value based on ranking
   */
  getPriorityValue(priority) {
    const priorityMap = {
      1: '1.0',
      2: '0.9', 
      3: '0.8',
      4: '0.7'
    };
    return priorityMap[priority] || '0.6';
  }

  /**
   * Validate sitelinks structure
   */
  validateSitelinks() {
    const errors = [];
    const warnings = [];

    this.sitelinksData.mainSitelinks.forEach((sitelink, index) => {
      // Check required fields
      if (!sitelink.name) {
        errors.push(`Sitelink ${index + 1}: Missing name`);
      }
      
      if (!sitelink.url) {
        errors.push(`Sitelink ${index + 1}: Missing URL`);
      }
      
      if (!sitelink.description) {
        warnings.push(`Sitelink ${index + 1}: Missing description`);
      }

      // Check URL format
      if (sitelink.url && !sitelink.url.startsWith('/')) {
        errors.push(`Sitelink ${index + 1}: URL should start with '/'`);
      }

      // Check subsections
      if (sitelink.subsections) {
        sitelink.subsections.forEach((subsection, subIndex) => {
          if (!subsection.name) {
            errors.push(`Sitelink ${index + 1}, Subsection ${subIndex + 1}: Missing name`);
          }
          
          if (!subsection.url) {
            errors.push(`Sitelink ${index + 1}, Subsection ${subIndex + 1}: Missing URL`);
          }
        });
      }
    });

    return { errors, warnings };
  }

  /**
   * Generate robots.txt entries for sitelinks
   */
  generateRobotsTxtEntries() {
    const entries = [];
    
    // Allow all main sitelinks
    this.sitelinksData.mainSitelinks.forEach(sitelink => {
      entries.push(`Allow: ${sitelink.url}`);
      
      if (sitelink.subsections) {
        sitelink.subsections.forEach(subsection => {
          entries.push(`Allow: ${subsection.url}`);
        });
      }
    });

    return entries;
  }

  /**
   * Generate navigation schema for header
   */
  generateNavigationSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      "name": "Main Navigation",
      "url": this.baseUrl,
      "hasPart": this.sitelinksData.mainSitelinks.map(sitelink => ({
        "@type": "WebPage",
        "name": sitelink.name,
        "description": sitelink.description,
        "url": `${this.baseUrl}${sitelink.url}`,
        "mainEntity": sitelink.subsections ? sitelink.subsections.map(sub => ({
          "@type": "WebPage",
          "name": sub.name,
          "description": sub.description,
          "url": `${this.baseUrl}${sub.url}`
        })) : undefined
      }))
    };
  }

  /**
   * Update sitemap.xml with sitelinks
   */
  updateSitemap() {
    const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
    
    if (!fs.existsSync(sitemapPath)) {
      console.log('❌ sitemap.xml not found');
      return false;
    }

    try {
      let sitemap = fs.readFileSync(sitemapPath, 'utf8');
      const entries = this.generateSitemapEntries();
      
      // Add entries to sitemap if not already present
      entries.forEach(entry => {
        if (!sitemap.includes(entry.url)) {
          const urlEntry = `
  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`;
          
          sitemap = sitemap.replace('</urlset>', urlEntry + '\n</urlset>');
        }
      });

      fs.writeFileSync(sitemapPath, sitemap);
      console.log('✅ Sitemap updated with sitelinks');
      return true;
    } catch (error) {
      console.error('❌ Error updating sitemap:', error.message);
      return false;
    }
  }

  /**
   * Generate comprehensive report
   */
  generateReport() {
    console.log('\n🔍 SITELINKS ENHANCEMENT REPORT');
    console.log('=====================================');
    
    const validation = this.validateSitelinks();
    
    console.log(`📊 Total Main Sitelinks: ${this.sitelinksData.mainSitelinks.length}`);
    console.log(`📊 Total Subsections: ${this.sitelinksData.mainSitelinks.reduce((total, link) => total + (link.subsections ? link.subsections.length : 0), 0)}`);
    
    if (validation.errors.length === 0) {
      console.log('✅ No validation errors found');
    } else {
      console.log('\n❌ VALIDATION ERRORS:');
      validation.errors.forEach(error => console.log(`   • ${error}`));
    }
    
    if (validation.warnings.length > 0) {
      console.log('\n⚠️  WARNINGS:');
      validation.warnings.forEach(warning => console.log(`   • ${warning}`));
    }

    console.log('\n📋 SITELINKS STRUCTURE:');
    this.sitelinksData.mainSitelinks.forEach((sitelink, index) => {
      console.log(`   ${index + 1}. ${sitelink.name} (${sitelink.url}) - Priority: ${sitelink.priority}`);
      if (sitelink.subsections) {
        sitelink.subsections.forEach((sub, subIndex) => {
          console.log(`      ${index + 1}.${subIndex + 1}. ${sub.name} (${sub.url})`);
        });
      }
    });

    console.log('\n🚀 RECOMMENDATIONS:');
    console.log('   • Ensure all sitelinks have unique, descriptive names');
    console.log('   • Add schema markup to all sitelink pages');
    console.log('   • Monitor click-through rates in Google Search Console');
    console.log('   • Update sitelinks based on user behavior analytics');
    
    return validation;
  }
}

// Run the enhancement
if (require.main === module) {
  const enhancer = new SitelinksEnhancer();
  
  console.log('🚀 Starting Sitelinks Enhancement...\n');
  
  // Generate report
  const validation = enhancer.generateReport();
  
  // Update sitemap
  enhancer.updateSitemap();
  
  if (validation.errors.length === 0) {
    console.log('\n🎉 Sitelinks enhancement completed successfully!');
  } else {
    console.log('\n⚠️  Sitelinks enhancement completed with errors. Please fix the issues above.');
  }
}

module.exports = SitelinksEnhancer;
