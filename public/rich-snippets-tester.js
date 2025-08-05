/**
 * Browser-based Rich Snippets Testing Utilities
 * Run these functions in your browser's console to test Rich Snippets
 */

// Test all JSON-LD scripts on the current page
function testPageSchemas() {
  console.log('🔍 Scanning page for JSON-LD schemas...\n');
  
  const scripts = document.querySelectorAll('script[type="application/ld+json"]');
  
  if (scripts.length === 0) {
    console.log('❌ No JSON-LD schemas found on this page');
    return;
  }
  
  console.log(`✅ Found ${scripts.length} JSON-LD schema(s)\n`);
  
  scripts.forEach((script, index) => {
    try {
      const schema = JSON.parse(script.textContent);
      console.log(`📋 Schema ${index + 1}:`);
      console.log(`   Type: ${schema['@type'] || 'Unknown'}`);
      console.log(`   Context: ${schema['@context'] || 'Missing'}`);
      
      if (schema.name) {
        console.log(`   Name: ${schema.name}`);
      }
      
      console.log('   Raw Schema:', schema);
      console.log('\n');
      
    } catch (error) {
      console.error(`❌ Schema ${index + 1}: Invalid JSON-LD`, error);
    }
  });
}

// Validate a specific schema type
function validateSchema(schemaType) {
  const scripts = document.querySelectorAll('script[type="application/ld+json"]');
  
  for (let script of scripts) {
    try {
      const schema = JSON.parse(script.textContent);
      
      if (schema['@type'] === schemaType) {
        console.log(`🔍 Validating ${schemaType} schema:`);
        
        // Basic validation
        const requiredFields = getRequiredFields(schemaType);
        const missingFields = requiredFields.filter(field => !schema[field]);
        
        if (missingFields.length === 0) {
          console.log('✅ All required fields present');
        } else {
          console.log('❌ Missing required fields:', missingFields);
        }
        
        console.log('📋 Schema details:', schema);
        return schema;
      }
    } catch (error) {
      console.error('❌ Invalid JSON-LD:', error);
    }
  }
  
  console.log(`❌ No ${schemaType} schema found on this page`);
}

// Get required fields for different schema types
function getRequiredFields(schemaType) {
  const requiredFields = {
    'Organization': ['@context', '@type', 'name', 'url'],
    'Course': ['@context', '@type', 'name', 'description', 'provider', 'offers', 'hasCourseInstance'],
    'FAQPage': ['@context', '@type', 'mainEntity'],
    'BreadcrumbList': ['@context', '@type', 'itemListElement'],
    'LocalBusiness': ['@context', '@type', 'name', 'address'],
    'Website': ['@context', '@type', 'name', 'url']
  };
  
  return requiredFields[schemaType] || ['@context', '@type'];
}

// Test with Google Rich Results API (if available)
function testWithGoogleAPI(url = window.location.href) {
  const testUrl = `https://search.google.com/test/rich-results?url=${encodeURIComponent(url)}`;
  console.log('🚀 Opening Google Rich Results Test...');
  console.log('URL:', testUrl);
  window.open(testUrl, '_blank');
}

// Extract and format all schemas for copying
function exportSchemas() {
  const scripts = document.querySelectorAll('script[type="application/ld+json"]');
  const schemas = [];
  
  scripts.forEach((script, index) => {
    try {
      const schema = JSON.parse(script.textContent);
      schemas.push({
        index: index + 1,
        type: schema['@type'],
        schema: schema
      });
    } catch (error) {
      console.error(`Schema ${index + 1} invalid:`, error);
    }
  });
  
  console.log('📤 All schemas exported:');
  console.log(JSON.stringify(schemas, null, 2));
  
  // Copy to clipboard if possible
  if (navigator.clipboard) {
    navigator.clipboard.writeText(JSON.stringify(schemas, null, 2))
      .then(() => console.log('✅ Schemas copied to clipboard!'))
      .catch(() => console.log('⚠️ Could not copy to clipboard'));
  }
  
  return schemas;
}

// Check if page is eligible for rich snippets
function checkRichSnippetsEligibility() {
  console.log('🎯 Checking Rich Snippets Eligibility...\n');
  
  const checks = [
    {
      name: 'JSON-LD Present',
      test: () => document.querySelectorAll('script[type="application/ld+json"]').length > 0,
      importance: 'critical'
    },
    {
      name: 'Valid JSON Format',
      test: () => {
        const scripts = document.querySelectorAll('script[type="application/ld+json"]');
        return Array.from(scripts).every(script => {
          try {
            JSON.parse(script.textContent);
            return true;
          } catch {
            return false;
          }
        });
      },
      importance: 'critical'
    },
    {
      name: 'Schema.org Context',
      test: () => {
        const scripts = document.querySelectorAll('script[type="application/ld+json"]');
        return Array.from(scripts).some(script => {
          try {
            const schema = JSON.parse(script.textContent);
            return schema['@context'] === 'https://schema.org';
          } catch {
            return false;
          }
        });
      },
      importance: 'critical'
    },
    {
      name: 'Multiple Schema Types',
      test: () => {
        const scripts = document.querySelectorAll('script[type="application/ld+json"]');
        const types = new Set();
        Array.from(scripts).forEach(script => {
          try {
            const schema = JSON.parse(script.textContent);
            if (schema['@type']) types.add(schema['@type']);
          } catch {}
        });
        return types.size >= 2;
      },
      importance: 'recommended'
    },
    {
      name: 'Organization Schema',
      test: () => validateSchema('Organization') !== undefined,
      importance: 'recommended'
    }
  ];
  
  let passed = 0;
  let critical = 0;
  let criticalPassed = 0;
  
  checks.forEach(check => {
    const result = check.test();
    const icon = result ? '✅' : '❌';
    const importance = check.importance === 'critical' ? '[CRITICAL]' : '[RECOMMENDED]';
    
    console.log(`${icon} ${importance} ${check.name}`);
    
    if (result) passed++;
    if (check.importance === 'critical') {
      critical++;
      if (result) criticalPassed++;
    }
  });
  
  console.log(`\n📊 Results: ${passed}/${checks.length} passed`);
  console.log(`🎯 Critical: ${criticalPassed}/${critical} passed`);
  
  if (criticalPassed === critical) {
    console.log('🎉 Your page is eligible for Rich Snippets!');
  } else {
    console.log('⚠️ Fix critical issues to qualify for Rich Snippets');
  }
}

// Quick test suite
function runQuickTest() {
  console.log('🚀 Running Quick Rich Snippets Test Suite...\n');
  
  testPageSchemas();
  checkRichSnippetsEligibility();
  
  console.log('\n💡 Available Commands:');
  console.log('- testPageSchemas() - Scan all schemas on page');
  console.log('- validateSchema("Course") - Validate specific schema type');
  console.log('- testWithGoogleAPI() - Open Google Rich Results Test');
  console.log('- exportSchemas() - Export all schemas');
  console.log('- checkRichSnippetsEligibility() - Check eligibility');
}

// Auto-run quick test when script loads
if (typeof window !== 'undefined') {
  console.log('🔧 Rich Snippets Testing Tools Loaded!');
  console.log('Run runQuickTest() to start testing');
}

// Export functions for use
window.richSnippetsTest = {
  testPageSchemas,
  validateSchema,
  testWithGoogleAPI,
  exportSchemas,
  checkRichSnippetsEligibility,
  runQuickTest
};
