import { useState } from 'react';
import RichSnippetsManager from '../../utils/richSnippets';

/**
 * Rich Snippets UI Testing Component
 * Interactive tool for testing and validating Rich Snippets in real-time
 */
export default function RichSnippetsTester() {
  const [selectedSchema, setSelectedSchema] = useState('organization');
  const [_validationResults, _setValidationResults] = useState(null);
  const [showRawSchema, setShowRawSchema] = useState(false);

  // Available schema types for testing
  const schemaTypes = {
    organization: 'Organization Schema',
    website: 'Website & Sitelinks Schema',
    faq: 'FAQ Schema',
    breadcrumb: 'Breadcrumb Schema',
    localBusiness: 'Local Business Schema',
    course: 'Course Schema'
  };

  // Generate schema based on selection
  const generateSchema = () => {
    switch (selectedSchema) {
      case 'organization':
        return RichSnippetsManager.generateOrganizationSchema();
      case 'website':
        return RichSnippetsManager.generateWebsiteSchema();
      case 'faq':
        return RichSnippetsManager.generateFAQSchema();
      case 'breadcrumb':
        return RichSnippetsManager.generateBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Courses', url: '/courses' },
          { name: 'Data Science', url: '/data-science-training-in-hyderabad' }
        ]);
      case 'localBusiness':
        return RichSnippetsManager.generateLocalBusinessSchema();
      case 'course':
        return RichSnippetsManager.generateCourseSchema({
          title: 'Data Science Training',
          description: 'Complete Data Science course',
          keywords: ['data science', 'python', 'machine learning']
        });
      default:
        return {};
    }
  };

  // Validate schema structure
  const validateSchema = (schema) => {
    const results = {
      valid: true,
      errors: [],
      warnings: [],
      suggestions: []
    };

    // Basic validation
    if (!schema['@context']) {
      results.errors.push('Missing @context property');
      results.valid = false;
    }

    if (!schema['@type']) {
      results.errors.push('Missing @type property');
      results.valid = false;
    }

    // Type-specific validation
    if (schema['@type'] === 'Organization') {
      if (!schema.name) results.errors.push('Organization: Missing name');
      if (!schema.url) results.errors.push('Organization: Missing url');
      if (!schema.logo) results.warnings.push('Organization: Logo recommended');
      if (!schema.address) results.warnings.push('Organization: Address recommended');
    }

    if (schema['@type'] === 'Course') {
      if (!schema.offers) results.errors.push('Course: Missing offers');
      if (!schema.hasCourseInstance) results.errors.push('Course: Missing hasCourseInstance');
      if (!schema.provider) results.errors.push('Course: Missing provider');
    }

    if (schema['@type'] === 'FAQPage') {
      if (!schema.mainEntity || !Array.isArray(schema.mainEntity)) {
        results.errors.push('FAQPage: Missing or invalid mainEntity');
      }
    }

    return results;
  };

  const currentSchema = generateSchema();
  const validation = validateSchema(currentSchema);

  // Test with Google's Rich Results Test
  const testWithGoogle = () => {
    const url = `https://search.google.com/test/rich-results?url=${encodeURIComponent('https://vritsol.com')}`;
    window.open(url, '_blank');
  };

  // Test with Schema.org validator
  const testWithSchemaOrg = () => {
    const url = 'https://validator.schema.org/';
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          🔍 Rich Snippets UI Tester
        </h2>
        <p className="text-gray-600">
          Interactive tool to test and validate your Rich Snippets schema markup
        </p>
      </div>

      {/* Schema Type Selector */}
      <div className="mb-6">
        <label htmlFor="schema-select" className="block text-sm font-medium text-gray-700 mb-2">
          Select Schema Type to Test:
        </label>
        <select
          id="schema-select"
          value={selectedSchema}
          onChange={(e) => setSelectedSchema(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {Object.entries(schemaTypes).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </div>

      {/* Testing Tools */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <button
          onClick={testWithGoogle}
          className="flex items-center justify-center p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Google Rich Results Test
        </button>
        
        <button
          onClick={testWithSchemaOrg}
          className="flex items-center justify-center p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          Schema.org Validator
        </button>
        
        <button
          onClick={() => setShowRawSchema(!showRawSchema)}
          className="flex items-center justify-center p-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          {showRawSchema ? 'Hide' : 'Show'} Raw Schema
        </button>
      </div>

      {/* Validation Results */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">📊 Validation Results</h3>
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            {validation.valid ? (
              <div className="flex items-center text-green-600">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">Valid Schema</span>
              </div>
            ) : (
              <div className="flex items-center text-red-600">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">Schema Has Issues</span>
              </div>
            )}
          </div>

          {validation.errors.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-red-600 mb-2">❌ Errors:</h4>
              <ul className="list-disc list-inside text-red-600 space-y-1">
                {validation.errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          {validation.warnings.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-yellow-600 mb-2">⚠️ Warnings:</h4>
              <ul className="list-disc list-inside text-yellow-600 space-y-1">
                {validation.warnings.map((warning, index) => (
                  <li key={index}>{warning}</li>
                ))}
              </ul>
            </div>
          )}

          {validation.valid && validation.errors.length === 0 && (
            <div className="text-green-600">
              <h4 className="font-semibold mb-2">✅ Schema is valid and ready for Rich Snippets!</h4>
              <p>This schema should work well with Google's Rich Results.</p>
            </div>
          )}
        </div>
      </div>

      {/* Schema Preview */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">🎯 Schema Preview</h3>
        <div className="bg-gray-900 text-green-400 rounded-lg p-6 font-mono text-sm overflow-x-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="text-white font-semibold">JSON-LD Schema</span>
            <button
              onClick={() => navigator.clipboard.writeText(JSON.stringify(currentSchema, null, 2))}
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              📋 Copy to Clipboard
            </button>
          </div>
          <pre className="whitespace-pre-wrap">
            {JSON.stringify(currentSchema, null, 2)}
          </pre>
        </div>
      </div>

      {/* Testing Guide */}
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-xl font-bold text-blue-900 mb-4">🧪 Testing Guide</h3>
        <div className="space-y-4 text-blue-800">
          <div>
            <h4 className="font-semibold">1. Google Rich Results Test</h4>
            <p>Test how your page will appear in Google search results with rich snippets.</p>
          </div>
          <div>
            <h4 className="font-semibold">2. Schema.org Validator</h4>
            <p>Validate your structured data against official Schema.org specifications.</p>
          </div>
          <div>
            <h4 className="font-semibold">3. Google Search Console</h4>
            <p>Monitor rich snippets performance and identify issues in production.</p>
          </div>
          <div>
            <h4 className="font-semibold">4. Browser Developer Tools</h4>
            <p>Inspect the page source to verify JSON-LD schema is properly embedded.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
