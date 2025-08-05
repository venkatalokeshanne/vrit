/**
 * SEO Analysis Script for VR IT Solutions
 * Run this script to analyze your website's SEO performance
 */

const fs = require('fs');
const path = require('path');

class SEOAnalyzer {
  constructor() {
    this.results = {
      errors: [],
      warnings: [],
      suggestions: [],
      score: 0
    };
  }

  // Check if all required files exist
  checkRequiredFiles() {
    const requiredFiles = [
      'public/sitemap.xml',
      'public/robots.txt',
      'public/site.webmanifest',
      'public/humans.txt',
      'public/.well-known/security.txt',
      'public/favicon.ico'
    ];

    requiredFiles.forEach(file => {
      if (!fs.existsSync(path.join(process.cwd(), file))) {
        this.results.errors.push(`Missing required file: ${file}`);
      } else {
        this.results.score += 10;
      }
    });
  }

  // Analyze sitemap.xml
  analyzeSitemap() {
    const sitemapPath = path.join(process.cwd(), 'public/sitemap.xml');
    if (fs.existsSync(sitemapPath)) {
      const content = fs.readFileSync(sitemapPath, 'utf8');
      
      // Check for image sitemap
      if (content.includes('xmlns:image')) {
        this.results.score += 15;
      } else {
        this.results.suggestions.push('Consider adding image sitemap for better image SEO');
      }

      // Count URLs
      const urlCount = (content.match(/<url>/g) || []).length;
      if (urlCount > 50) {
        this.results.score += 10;
      } else {
        this.results.warnings.push(`Sitemap has ${urlCount} URLs. Consider adding more pages.`);
      }

      // Check for proper priorities
      if (content.includes('<priority>')) {
        this.results.score += 5;
      }
    }
  }

  // Analyze metadata completeness
  analyzeMetadata() {
    const metadataPath = path.join(process.cwd(), 'src/data/coursesMetadata.json');
    if (fs.existsSync(metadataPath)) {
      const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
      
      let completeEntries = 0;
      metadata.forEach(entry => {
        if (entry.title && entry.description && entry.keywords && entry.ogTitle) {
          completeEntries++;
        }
      });

      const completionRate = (completeEntries / metadata.length) * 100;
      this.results.score += Math.floor(completionRate / 10);
      
      if (completionRate < 90) {
        this.results.warnings.push(`Metadata completion rate: ${completionRate.toFixed(1)}%`);
      }
    }
  }

  // Check robots.txt
  analyzeRobots() {
    const robotsPath = path.join(process.cwd(), 'public/robots.txt');
    if (fs.existsSync(robotsPath)) {
      const content = fs.readFileSync(robotsPath, 'utf8');
      
      if (content.includes('Sitemap:')) {
        this.results.score += 5;
      } else {
        this.results.warnings.push('robots.txt should include sitemap location');
      }

      if (content.includes('User-agent: *')) {
        this.results.score += 5;
      }
    }
  }

  // Performance suggestions
  performanceSuggestions() {
    this.results.suggestions.push('Consider implementing lazy loading for images');
    this.results.suggestions.push('Add preload hints for critical resources');
    this.results.suggestions.push('Implement service worker for offline functionality');
    this.results.suggestions.push('Consider adding breadcrumb schema markup');
    this.results.suggestions.push('Add FAQ schema markup for better search snippets');
  }

  // Run full analysis
  analyze() {
    console.log('🔍 Starting SEO Analysis for VR IT Solutions...\n');
    
    this.checkRequiredFiles();
    this.analyzeSitemap();
    this.analyzeMetadata();
    this.analyzeRobots();
    this.performanceSuggestions();

    // Calculate final score
    this.results.score = Math.min(this.results.score, 100);

    return this.results;
  }

  // Generate report
  generateReport() {
    const results = this.analyze();
    
    console.log('='.repeat(60));
    console.log('📊 SEO ANALYSIS REPORT - VR IT SOLUTIONS');
    console.log('='.repeat(60));
    console.log(`🏆 SEO Score: ${results.score}/100\n`);

    if (results.errors.length > 0) {
      console.log('🚫 ERRORS:');
      results.errors.forEach(error => console.log(`   ❌ ${error}`));
      console.log();
    }

    if (results.warnings.length > 0) {
      console.log('⚠️  WARNINGS:');
      results.warnings.forEach(warning => console.log(`   ⚠️  ${warning}`));
      console.log();
    }

    if (results.suggestions.length > 0) {
      console.log('💡 SUGGESTIONS:');
      results.suggestions.forEach(suggestion => console.log(`   💡 ${suggestion}`));
      console.log();
    }

    // Grade system
    let grade = 'F';
    if (results.score >= 90) grade = 'A+';
    else if (results.score >= 80) grade = 'A';
    else if (results.score >= 70) grade = 'B';
    else if (results.score >= 60) grade = 'C';
    else if (results.score >= 50) grade = 'D';

    console.log(`📈 Overall Grade: ${grade}`);
    console.log('='.repeat(60));
    
    return results;
  }
}

// Export for use in other scripts
module.exports = SEOAnalyzer;

// Run analysis if called directly
if (require.main === module) {
  const analyzer = new SEOAnalyzer();
  analyzer.generateReport();
}
