'use client';

import { useState } from 'react';
import Image from 'next/image';
import './animations.css';

export default function SEOTesterPage() {
  const [url, setUrl] = useState('');
  const [seoData, setSeoData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('url-analyzer');

  // Analyze URL for SEO elements
  const analyzeURL = async () => {
    if (!url) {
      setError('Please enter a valid URL');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // For demo purposes, we'll analyze the current site structure
      // In a real implementation, you might want to use a proxy or server-side function
      const response = await fetch(`/api/seo-analyzer?url=${encodeURIComponent(url)}`);
      
      if (!response.ok) {
        // Fallback to manual analysis for local URLs
        if (url.includes(window.location.hostname) || url.startsWith('/')) {
          analyzeSiteURL(url);
          return;
        }
        throw new Error('Failed to analyze URL');
      }

      const data = await response.json();
      setSeoData(data);
    } catch {
      // Fallback for local analysis
      if (url.includes(window.location.hostname) || url.startsWith('/')) {
        analyzeSiteURL(url);
      } else {
        setError('Unable to analyze external URL. Try a page from this site or check the URL format.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Analyze URLs from the current site
  const analyzeSiteURL = async (targetUrl) => {
    try {
      // Normalize URL
      let normalizedUrl = targetUrl;
      if (targetUrl.startsWith('/')) {
        normalizedUrl = window.location.origin + targetUrl;
      }

      // Try to fetch the page
      const response = await fetch(targetUrl.startsWith('/') ? targetUrl : '/');
      const html = await response.text();
      
      // Parse the HTML for SEO elements
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      
      // Enhanced function to extract text content from elements (including nested)
      const getTextContent = (elements) => {
        return Array.from(elements).map(el => el.textContent.trim()).filter(text => text.length > 0);
      };
      
      // Count images with and without alt text
      const allImages = Array.from(doc.querySelectorAll('img'));
      const _imagesWithAlt = allImages.filter(img => img.alt && img.alt.trim().length > 0);
      const _imagesWithoutAlt = allImages.filter(img => !img.alt || img.alt.trim().length === 0);
      
      const seoAnalysis = {
        title: doc.querySelector('title')?.textContent || 'No title found',
        metaDescription: doc.querySelector('meta[name="description"]')?.getAttribute('content') || 'No meta description found',
        metaKeywords: doc.querySelector('meta[name="keywords"]')?.getAttribute('content') || 'No meta keywords found',
        ogTitle: doc.querySelector('meta[property="og:title"]')?.getAttribute('content') || 'No OG title found',
        ogDescription: doc.querySelector('meta[property="og:description"]')?.getAttribute('content') || 'No OG description found',
        ogImage: doc.querySelector('meta[property="og:image"]')?.getAttribute('content') || 'No OG image found',
        twitterTitle: doc.querySelector('meta[name="twitter:title"]')?.getAttribute('content') || 'No Twitter title found',
        twitterDescription: doc.querySelector('meta[name="twitter:description"]')?.getAttribute('content') || 'No Twitter description found',
        twitterImage: doc.querySelector('meta[name="twitter:image"]')?.getAttribute('content') || 'No Twitter image found',
        canonical: doc.querySelector('link[rel="canonical"]')?.getAttribute('href') || 'No canonical URL found',
        structuredData: (() => {
          // Enhanced structured data detection with multiple selectors
          const selectors = [
            'script[type="application/ld+json"]',
            'script[type=\'application/ld+json\']',
            'script[type=application/ld+json]'
          ];
          
          let allStructuredData = [];
          
          selectors.forEach(selector => {
            const scripts = [...doc.querySelectorAll(selector)];
            scripts.forEach(script => {
              try {
                const content = script.textContent || script.innerHTML;
                if (content && content.trim()) {
                  const parsed = JSON.parse(content.trim());
                  
                  // Enhanced structured data object with metadata
                  allStructuredData.push({
                    type: parsed['@type'] || 'Unknown',
                    context: parsed['@context'] || 'Unknown',
                    name: parsed.name || parsed.headline || parsed.title || 'Unknown',
                    description: parsed.description || 'No description',
                    data: parsed,
                    isValid: true,
                    selector: selector
                  });
                }
              } catch (e) {
                // Include error information for debugging
                allStructuredData.push({
                  error: e.message,
                  rawContent: (script.textContent || script.innerHTML || '').substring(0, 200),
                  isValid: false,
                  selector: selector
                });
              }
            });
          });
          
          return allStructuredData;
        })(),
        headings: {
          h1: getTextContent(doc.querySelectorAll('h1')),
          h2: getTextContent(doc.querySelectorAll('h2')),
          h3: getTextContent(doc.querySelectorAll('h3')),
          h4: getTextContent(doc.querySelectorAll('h4')),
          h5: getTextContent(doc.querySelectorAll('h5')),
          h6: getTextContent(doc.querySelectorAll('h6')),
        },
        images: (() => {
          const images = [...doc.querySelectorAll('img')];
          
          return images.map(img => {
            const alt = img.getAttribute('alt') || '';
            const src = img.getAttribute('src') || img.getAttribute('data-src') || '';
            const title = img.getAttribute('title') || '';
            
            // More sophisticated alt text validation
            const hasValidAlt = alt && 
              alt.trim().length > 0 && 
              alt.toLowerCase() !== 'image' && 
              alt.toLowerCase() !== 'photo' && 
              alt.toLowerCase() !== 'picture' &&
              !alt.match(/^(img|image)_?\d*$/i); // Exclude generic alt like "img1", "image_2"
            
            return {
              src: src,
              alt: alt || 'No alt text',
              title: title || 'No title',
              hasAlt: hasValidAlt,
              width: img.naturalWidth || img.width || 0,
              height: img.naturalHeight || img.height || 0,
              isDecorative: img.getAttribute('role') === 'presentation' || img.getAttribute('aria-hidden') === 'true'
            };
          });
        })(),
        imageStats: (() => {
          const images = [...doc.querySelectorAll('img')];
          
          const processedImages = images.map(img => {
            const alt = img.getAttribute('alt') || '';
            
            const hasValidAlt = alt && 
              alt.trim().length > 0 && 
              alt.toLowerCase() !== 'image' && 
              alt.toLowerCase() !== 'photo' && 
              alt.toLowerCase() !== 'picture' &&
              !alt.match(/^(img|image)_?\d*$/i);
            
            const isDecorative = img.getAttribute('role') === 'presentation' || 
                               img.getAttribute('aria-hidden') === 'true' ||
                               alt === ''; // Empty alt indicates decorative
            
            return {
              hasAlt: hasValidAlt,
              isDecorative: isDecorative,
              alt: alt
            };
          });
          
          // Count only non-decorative images for percentage calculation
          const contentImages = processedImages.filter(img => !img.isDecorative);
          const imagesWithValidAlt = processedImages.filter(img => img.hasAlt);
          const imagesWithoutValidAlt = processedImages.filter(img => !img.hasAlt && !img.isDecorative);
          
          // Calculate percentage based on content images only (excluding decorative)
          const contentImagesCount = contentImages.length;
          const altPercentage = contentImagesCount > 0 ? 
            Math.round((imagesWithValidAlt.length / contentImagesCount) * 100) : 
            (processedImages.length === 0 ? 100 : 0); // 100% if no images, 0% if only decorative
          
          return {
            total: processedImages.length,
            withAlt: imagesWithValidAlt.length,
            withoutAlt: imagesWithoutValidAlt.length,
            decorative: processedImages.filter(img => img.isDecorative).length,
            contentImages: contentImagesCount,
            altPercentage: altPercentage
          };
        })(),
        links: [...doc.querySelectorAll('a[href]')].map(link => ({
          href: link.href,
          text: link.textContent.trim(),
          rel: link.rel || 'none',
          isExternal: link.hostname !== window.location.hostname,
          hasTitle: !!link.title
        })),
        url: normalizedUrl,
        // Additional technical SEO checks
        technicalSEO: {
          hasViewport: !!doc.querySelector('meta[name="viewport"]'),
          hasCharset: !!doc.querySelector('meta[charset]'),
          hasRobots: !!doc.querySelector('meta[name="robots"]'),
          hasLangAttribute: !!doc.documentElement.getAttribute('lang'),
          favicon: !!doc.querySelector('link[rel="icon"], link[rel="shortcut icon"]'),
        },
        
        // Comprehensive Accessibility Analysis
        accessibility: {
          // Image accessibility
          images: {
            totalImages: [...doc.querySelectorAll('img')].length,
            withAlt: [...doc.querySelectorAll('img[alt]')].filter(img => img.alt.trim().length > 0).length,
            withoutAlt: [...doc.querySelectorAll('img')].filter(img => !img.alt || img.alt.trim().length === 0).length,
            decorativeImages: [...doc.querySelectorAll('img[role="presentation"], img[aria-hidden="true"]')].length
          },
          
          // Link accessibility
          links: {
            totalLinks: [...doc.querySelectorAll('a')].length,
            withText: [...doc.querySelectorAll('a')].filter(link => link.textContent.trim().length > 0).length,
            withAriaLabel: [...doc.querySelectorAll('a[aria-label]')].length,
            withTitle: [...doc.querySelectorAll('a[title]')].length,
            emptyLinks: [...doc.querySelectorAll('a')].filter(link => 
              !link.textContent.trim() && !link.getAttribute('aria-label') && !link.getAttribute('title')
            ).length
          },
          
          // Heading structure
          headings: {
            h1Count: doc.querySelectorAll('h1').length,
            hasProperH1: doc.querySelectorAll('h1').length === 1,
            headingSequence: (() => {
              const headings = [...doc.querySelectorAll('h1, h2, h3, h4, h5, h6')];
              const levels = headings.map(h => parseInt(h.tagName.charAt(1)));
              let isProperSequence = true;
              let maxLevel = 0;
              
              for (let level of levels) {
                if (level > maxLevel + 1) {
                  isProperSequence = false;
                  break;
                }
                maxLevel = Math.max(maxLevel, level);
              }
              
              return {
                isProper: isProperSequence,
                sequence: levels,
                totalHeadings: headings.length
              };
            })()
          },
          
          // Form accessibility
          forms: {
            totalInputs: [...doc.querySelectorAll('input, textarea, select')].length,
            withLabels: [...doc.querySelectorAll('input, textarea, select')].filter(input => {
              const id = input.id;
              const hasLabel = id && doc.querySelector(`label[for="${id}"]`);
              const hasAriaLabel = input.getAttribute('aria-label');
              const hasAriaLabelledBy = input.getAttribute('aria-labelledby');
              return hasLabel || hasAriaLabel || hasAriaLabelledBy;
            }).length,
            withoutLabels: [...doc.querySelectorAll('input, textarea, select')].filter(input => {
              const id = input.id;
              const hasLabel = id && doc.querySelector(`label[for="${id}"]`);
              const hasAriaLabel = input.getAttribute('aria-label');
              const hasAriaLabelledBy = input.getAttribute('aria-labelledby');
              return !hasLabel && !hasAriaLabel && !hasAriaLabelledBy;
            }).length
          },
          
          // ARIA and semantic elements
          aria: {
            hasSkipLinks: !!doc.querySelector('a[href^="#"], a[href*="skip"]'),
            hasLandmarks: [...doc.querySelectorAll('[role="main"], [role="navigation"], [role="banner"], [role="contentinfo"], main, nav, header, footer')].length,
            hasAriaLabels: [...doc.querySelectorAll('[aria-label]')].length,
            hasAriaDescriptions: [...doc.querySelectorAll('[aria-describedby], [aria-description]')].length,
            hasTabIndex: [...doc.querySelectorAll('[tabindex]')].length,
            negativeTabIndex: [...doc.querySelectorAll('[tabindex="-1"]')].length
          },
          
          // Color and contrast (basic checks)
          colorContrast: {
            hasColorOnlyContent: [...doc.querySelectorAll('*')].some(el => {
              const style = window.getComputedStyle(el);
              return style.color && !el.textContent.trim();
            }),
            usesColorForInfo: [...doc.querySelectorAll('.text-red, .text-green, .text-yellow, .error, .success, .warning')].length > 0
          },
          
          // Media accessibility
          media: {
            videos: [...doc.querySelectorAll('video')].length,
            videosWithCaptions: [...doc.querySelectorAll('video track[kind="captions"], video track[kind="subtitles"]')].length,
            audios: [...doc.querySelectorAll('audio')].length,
            audiosWithTranscripts: [...doc.querySelectorAll('audio + .transcript, .transcript')].length
          }
        }
      };

      setSeoData(seoAnalysis);
    } catch {
      setError('Unable to analyze the page. Please check the URL.');
    }
  };

  // Quick site analysis for common pages
  const quickAnalyze = (path) => {
    setUrl(path);
    setTimeout(() => {
      analyzeSiteURL(path);
    }, 100);
  };

  const tabs = [
    { id: 'url-analyzer', label: 'URL Analyzer', icon: '🔍' },
    { id: 'meta-preview', label: 'Social Media Preview', icon: '📱' },
    { id: 'rich-snippets', label: 'Rich Snippets', icon: '✨' },
    { id: 'accessibility', label: 'Accessibility', icon: '♿' },
    { id: 'performance', label: 'SEO Checklist', icon: '📊' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 shadow-lg">
            <span className="text-3xl">🚀</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            SEO Testing & Analysis Tool
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive SEO analysis platform to test your pages, preview social media cards, 
            validate rich snippets, and optimize your site's search engine performance with 
            <span className="font-semibold text-blue-600"> real-time insights</span>.
          </p>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-3xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-2xl font-bold text-gray-900">Instant</div>
              <div className="text-sm text-gray-600">Real-time Analysis</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">Accurate Results</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="text-3xl mb-2">🔧</div>
              <div className="text-2xl font-bold text-gray-900">Pro</div>
              <div className="text-sm text-gray-600">Level Tools</div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-white/20 max-w-4xl mx-auto">
            <nav className="flex space-x-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 rounded-xl font-medium transition-all duration-300 flex-1 justify-center ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                      : 'text-gray-700 hover:bg-gray-100/80 hover:scale-102'
                  }`}
                >
                  <span className="mr-3 text-lg">{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* URL Analyzer Tab */}
        {activeTab === 'url-analyzer' && (
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 mb-8 overflow-hidden">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-8 text-white">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h2 className="text-3xl font-bold">URL SEO Analyzer</h2>
              </div>
              <p className="text-blue-100 text-lg">
                Enter any URL to get comprehensive SEO insights and recommendations
              </p>
            </div>

            <div className="p-8">
              {/* URL Input */}
              <div className="mb-8">
                <label htmlFor="url-input" className="block text-lg font-semibold text-gray-800 mb-4">
                  🌐 Enter URL to analyze:
                </label>
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <input
                      id="url-input"
                      type="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="https://vritsol.com/courses or /about-us"
                      className="w-full p-4 pl-12 text-lg border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-lg"
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      🔗
                    </div>
                  </div>
                  <button
                    onClick={analyzeURL}
                    disabled={loading}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg"
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <div className="spinner mr-3"></div>
                        Analyzing...
                      </span>
                    ) : 'Analyze 🚀'}
                  </button>
                </div>
              </div>

              {/* Quick Analysis Buttons */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="mr-3">⚡</span>
                  Quick Analysis (Site Pages):
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { path: '/', label: 'Homepage', icon: '🏠', color: 'from-green-500 to-green-600' },
                    { path: '/courses', label: 'Courses', icon: '📚', color: 'from-blue-500 to-blue-600' },
                    { path: '/aboutus', label: 'About Us', icon: '👥', color: 'from-purple-500 to-purple-600' },
                    { path: '/contactus', label: 'Contact', icon: '📞', color: 'from-red-500 to-red-600' },
                    { path: '/data-science-training-in-hyderabad', label: 'Data Science', icon: '📊', color: 'from-indigo-500 to-indigo-600' },
                    { path: '/blog', label: 'Blog', icon: '📝', color: 'from-yellow-500 to-yellow-600' },
                    { path: '/privacy-policy', label: 'Privacy', icon: '🔒', color: 'from-gray-500 to-gray-600' },
                    { path: '/terms-and-conditions', label: 'Terms', icon: '📋', color: 'from-teal-500 to-teal-600' }
                  ].map((page) => (
                    <button
                      key={page.path}
                      onClick={() => quickAnalyze(page.path)}
                      className={`group p-4 bg-gradient-to-r ${page.color} text-white rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2 hover:scale-105`}
                    >
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {page.icon}
                      </div>
                      <div className="text-sm font-semibold">{page.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Error Display */}
              {error && (
                <div className="mb-8 p-6 bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 rounded-2xl shadow-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-xl">❌</span>
                    </div>
                    <div>
                      <h3 className="text-red-800 font-semibold text-lg">Analysis Error</h3>
                      <p className="text-red-700">{error}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* SEO Analysis Results */}
              {seoData && (
                <div className="space-y-8">
                  {/* Basic SEO Elements */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white text-xl">📝</span>
                      </div>
                      <h3 className="text-2xl font-bold text-blue-900">Basic SEO Elements</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-white/80 rounded-2xl p-6 shadow-lg">
                        <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                          <span className="mr-2">🏷️</span>
                          Title Tag
                        </h4>
                        <p className="text-gray-600 break-words mb-3 p-3 bg-gray-50 rounded-lg">{seoData.title}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Length: {seoData.title.length} characters</span>
                          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            seoData.title.length >= 50 && seoData.title.length <= 60 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-orange-100 text-orange-800'
                          }`}>
                            {seoData.title.length >= 50 && seoData.title.length <= 60 ? '✅ Optimal' : '⚠️ Needs Optimization'}
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-2xl p-6 shadow-lg">
                        <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                          <span className="mr-2">📄</span>
                          Meta Description
                        </h4>
                        <p className="text-gray-600 break-words mb-3 p-3 bg-gray-50 rounded-lg">{seoData.metaDescription}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Length: {seoData.metaDescription.length} characters</span>
                          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            seoData.metaDescription.length >= 150 && seoData.metaDescription.length <= 160 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-orange-100 text-orange-800'
                          }`}>
                            {seoData.metaDescription.length >= 150 && seoData.metaDescription.length <= 160 ? '✅ Optimal' : '⚠️ Needs Optimization'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Headings Structure */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-200">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white text-xl">📋</span>
                      </div>
                      <h3 className="text-2xl font-bold text-purple-900">Heading Structure</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map((level) => (
                        <div key={level} className="bg-white/80 rounded-2xl p-6 shadow-lg">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="font-bold text-gray-800 uppercase">{level} Tags</h4>
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              level === 'h1' 
                                ? seoData.headings[level].length === 1 
                                  ? 'bg-green-100 text-green-800' 
                                  : seoData.headings[level].length === 0
                                    ? 'bg-red-100 text-red-800'
                                    : 'bg-orange-100 text-orange-800'
                                : seoData.headings[level].length > 0 
                                  ? 'bg-blue-100 text-blue-800' 
                                  : 'bg-gray-100 text-gray-800'
                            }`}>
                              {seoData.headings[level].length}
                            </span>
                          </div>
                          
                          {/* SEO Status Indicator */}
                          <div className="mb-3">
                            {level === 'h1' && (
                              <div className={`text-xs font-medium ${
                                seoData.headings[level].length === 1 
                                  ? 'text-green-600' 
                                  : seoData.headings[level].length === 0
                                    ? 'text-red-600'
                                    : 'text-orange-600'
                              }`}>
                                {seoData.headings[level].length === 1 
                                  ? '✅ Perfect: Exactly one H1 tag' 
                                  : seoData.headings[level].length === 0
                                    ? '❌ Missing: No H1 tag found'
                                    : `⚠️ Warning: ${seoData.headings[level].length} H1 tags (should be 1)`
                                }
                              </div>
                            )}
                            {level === 'h2' && (
                              <div className={`text-xs font-medium ${
                                seoData.headings[level].length > 0 ? 'text-green-600' : 'text-orange-600'
                              }`}>
                                {seoData.headings[level].length > 0 
                                  ? '✅ Good: Has H2 tags for content structure' 
                                  : '⚠️ Consider adding H2 tags for better structure'
                                }
                              </div>
                            )}
                            {['h3', 'h4', 'h5', 'h6'].includes(level) && seoData.headings[level].length > 0 && (
                              <div className="text-xs font-medium text-blue-600">
                                ✅ Good: Content hierarchy present
                              </div>
                            )}
                          </div>

                          {seoData.headings[level].length > 0 ? (
                            <div className="space-y-2 max-h-48 overflow-y-auto">
                              {seoData.headings[level].slice(0, 5).map((heading, index) => (
                                <div key={index} className="text-sm text-gray-600 p-2 bg-gray-50 rounded-lg border-l-4 border-purple-300">
                                  <div className="font-medium mb-1">#{index + 1}</div>
                                  <div className="line-clamp-2">{heading}</div>
                                  <div className="text-xs text-gray-500 mt-1">
                                    Length: {heading.length} characters
                                  </div>
                                </div>
                              ))}
                              {seoData.headings[level].length > 5 && (
                                <div className="text-sm text-gray-500 text-center py-2">
                                  ... and {seoData.headings[level].length - 5} more
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="text-center py-4">
                              <p className="text-sm text-gray-500 italic">No {level} tags found</p>
                              {level === 'h1' && (
                                <p className="text-xs text-red-500 mt-2">
                                  Every page should have exactly one H1 tag!
                                </p>
                              )}
                              {level === 'h2' && (
                                <p className="text-xs text-orange-500 mt-2">
                                  Consider adding H2 tags to structure your content
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Images Analysis */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white text-xl">🖼️</span>
                        </div>
                        <h3 className="text-2xl font-bold text-green-900">Images Analysis</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-800">{seoData.images.length}</div>
                        <div className="text-sm text-green-600">Total Images</div>
                      </div>
                    </div>

                    {/* Image Statistics */}
                    {seoData.imageStats && (
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <div className="bg-white/80 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-green-800">{seoData.imageStats.total}</div>
                          <div className="text-sm text-green-600">Total Images</div>
                        </div>
                        <div className="bg-white/80 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-green-800">{seoData.imageStats.withAlt}</div>
                          <div className="text-sm text-green-600">With Alt Text</div>
                        </div>
                        <div className="bg-white/80 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-red-800">{seoData.imageStats.withoutAlt}</div>
                          <div className="text-sm text-red-600">Missing Alt Text</div>
                        </div>
                        <div className="bg-white/80 rounded-xl p-4 text-center">
                          <div className={`text-2xl font-bold ${seoData.imageStats.altPercentage >= 90 ? 'text-green-800' : seoData.imageStats.altPercentage >= 70 ? 'text-yellow-800' : 'text-red-800'}`}>
                            {seoData.imageStats.altPercentage}%
                          </div>
                          <div className="text-sm text-gray-600">Alt Text Coverage</div>
                        </div>
                      </div>
                    )}

                    {/* Alt Text Coverage Bar */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Alt Text Coverage</span>
                        <span className={`text-sm font-bold ${seoData.imageStats?.altPercentage >= 90 ? 'text-green-600' : seoData.imageStats?.altPercentage >= 70 ? 'text-yellow-600' : 'text-red-600'}`}>
                          {seoData.imageStats?.altPercentage || 0}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full transition-all duration-500 ${
                            (seoData.imageStats?.altPercentage || 0) >= 90 ? 'bg-green-500' : 
                            (seoData.imageStats?.altPercentage || 0) >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${seoData.imageStats?.altPercentage || 0}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {(seoData.imageStats?.altPercentage || 0) >= 90 
                          ? '✅ Excellent alt text coverage!' 
                          : (seoData.imageStats?.altPercentage || 0) >= 70 
                            ? '⚠️ Good, but could be improved' 
                            : '❌ Poor alt text coverage - needs improvement'
                        }
                      </div>
                    </div>

                    {/* Detailed Image Analysis Debug */}
                    {seoData.images && seoData.images.length > 0 && (
                      <div className="bg-white/80 rounded-xl p-6 mb-6">
                        <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                          <span className="mr-2">🔍</span>
                          Image Analysis Details
                        </h4>
                        <div className="space-y-3 max-h-96 overflow-y-auto">
                          {seoData.images.slice(0, 10).map((image, index) => (
                            <div key={index} className={`border rounded-lg p-3 ${image.hasAlt ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'}`}>
                              <div className="flex items-start gap-3">
                                <div className="flex-shrink-0">
                                  <div className={`w-3 h-3 rounded-full ${image.hasAlt ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm">
                                    <span className="font-medium text-gray-800">Source:</span>
                                    <span className="ml-2 text-gray-600 break-all">{image.src?.substring(0, 80)}{image.src?.length > 80 ? '...' : ''}</span>
                                  </div>
                                  <div className="text-sm mt-1">
                                    <span className="font-medium text-gray-800">Alt Text:</span>
                                    <span className={`ml-2 ${image.hasAlt ? 'text-green-700' : 'text-red-700'}`}>
                                      {image.alt || 'No alt text'}
                                    </span>
                                  </div>
                                  {image.title && image.title !== 'No title' && (
                                    <div className="text-sm mt-1">
                                      <span className="font-medium text-gray-800">Title:</span>
                                      <span className="ml-2 text-gray-600">{image.title}</span>
                                    </div>
                                  )}
                                  {(image.width || image.height) && (
                                    <div className="text-sm mt-1">
                                      <span className="font-medium text-gray-800">Dimensions:</span>
                                      <span className="ml-2 text-gray-600">{image.width} × {image.height}</span>
                                    </div>
                                  )}
                                  {image.isDecorative && (
                                    <div className="text-sm mt-1">
                                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Decorative Image</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                          {seoData.images.length > 10 && (
                            <div className="text-center text-sm text-gray-500 mt-4">
                              Showing first 10 of {seoData.images.length} images
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
                      {seoData.images.slice(0, 10).map((img, index) => (
                        <div key={index} className="bg-white/80 rounded-2xl p-4 shadow-lg border border-white/50">
                          <div className="flex items-start gap-4">
                            <Image src={img.src} alt={img.alt} width={80} height={80} className="w-20 h-20 object-cover rounded-xl shadow-md" />
                            <div className="flex-1 min-w-0">
                              <div className="mb-2">
                                <span className="text-xs font-semibold text-gray-500">ALT TEXT:</span>
                                <p className={`text-sm font-medium break-words ${img.hasAlt ? 'text-gray-800' : 'text-red-600'}`}>
                                  {img.alt}
                                </p>
                              </div>
                              <div className="mb-2">
                                <span className="text-xs font-semibold text-gray-500">SOURCE:</span>
                                <p className="text-xs text-gray-600 break-all">{img.src}</p>
                              </div>
                              <div className="flex items-center justify-between">
                                {img.hasAlt ? (
                                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                                    ✅ Has Alt Text
                                  </span>
                                ) : (
                                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full">
                                    ❌ Missing Alt Text
                                  </span>
                                )}
                                {img.alt !== 'No alt text' && (
                                  <span className="text-xs text-gray-500">
                                    {img.alt.length} chars
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      {seoData.images.length > 10 && (
                        <div className="col-span-2 text-center py-4 text-gray-500">
                          ... and {seoData.images.length - 10} more images
                        </div>
                      )}
                    </div>

                    {/* Image SEO Recommendations */}
                    {seoData.imageStats && seoData.imageStats.withoutAlt > 0 && (
                      <div className="mt-6 p-4 bg-orange-100 rounded-xl border border-orange-200">
                        <h4 className="font-bold text-orange-800 mb-2 flex items-center">
                          <span className="mr-2">⚠️</span>
                          Image SEO Recommendations
                        </h4>
                        <ul className="text-sm text-orange-700 space-y-1">
                          <li>• Add descriptive alt text to {seoData.imageStats.withoutAlt} images</li>
                          <li>• Alt text should describe the image content and context</li>
                          <li>• Keep alt text between 5-125 characters for best results</li>
                          <li>• Don't use "image of" or "picture of" - just describe the content</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Social Media Preview Tab */}
        {activeTab === 'meta-preview' && (
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 mb-8 overflow-hidden">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 p-8 text-white">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h2 className="text-3xl font-bold">Social Media Preview</h2>
              </div>
              <p className="text-purple-100 text-lg">
                See how your content appears when shared on social platforms
              </p>
            </div>

            <div className="p-8">
              {seoData ? (
                <div className="space-y-12">
                  {/* Google Search Preview */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white text-lg">🔍</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">Google Search Result Preview</h3>
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg max-w-2xl">
                      <div className="text-sm text-green-700 mb-2 font-medium">{seoData.url}</div>
                      <div className="text-xl text-blue-600 hover:underline cursor-pointer mb-3 font-medium leading-tight">
                        {seoData.title}
                      </div>
                      <div className="text-gray-700 leading-relaxed">
                        {seoData.metaDescription}
                      </div>
                    </div>
                  </div>

                  {/* Facebook Preview */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white text-lg">📘</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">Facebook Preview</h3>
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-lg max-w-lg">
                      {seoData.ogImage && seoData.ogImage !== 'No OG image found' && (
                        <div className="relative">
                          <Image src={seoData.ogImage} alt="OG Preview" width={512} height={256} className="w-full h-64 object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                      )}
                      <div className="p-6">
                        <div className="text-xs text-gray-500 uppercase mb-2 font-semibold tracking-wider">
                          {new URL(seoData.url).hostname}
                        </div>
                        <div className="font-bold text-gray-900 mb-2 text-lg leading-tight">
                          {seoData.ogTitle !== 'No OG title found' ? seoData.ogTitle : seoData.title}
                        </div>
                        <div className="text-gray-600 leading-relaxed">
                          {seoData.ogDescription !== 'No OG description found' ? seoData.ogDescription : seoData.metaDescription}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Twitter Preview */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white text-lg">🐦</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">Twitter Preview</h3>
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-lg max-w-lg">
                      {seoData.twitterImage && seoData.twitterImage !== 'No Twitter image found' && (
                        <div className="relative">
                          <Image src={seoData.twitterImage} alt="Twitter Preview" width={512} height={256} className="w-full h-64 object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                      )}
                      <div className="p-6">
                        <div className="font-bold text-gray-900 mb-2 text-lg leading-tight">
                          {seoData.twitterTitle !== 'No Twitter title found' ? seoData.twitterTitle : seoData.title}
                        </div>
                        <div className="text-gray-600 mb-4 leading-relaxed">
                          {seoData.twitterDescription !== 'No Twitter description found' ? seoData.twitterDescription : seoData.metaDescription}
                        </div>
                        <div className="text-sm text-gray-500 font-medium">
                          {new URL(seoData.url).hostname}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn Preview */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white text-lg">💼</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">LinkedIn Preview</h3>
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-lg max-w-lg">
                      {seoData.ogImage && seoData.ogImage !== 'No OG image found' && (
                        <div className="relative">
                          <Image src={seoData.ogImage} alt="LinkedIn Preview" width={512} height={192} className="w-full h-48 object-cover" />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="font-bold text-gray-900 mb-2 text-lg leading-tight">
                          {seoData.ogTitle !== 'No OG title found' ? seoData.ogTitle : seoData.title}
                        </div>
                        <div className="text-gray-600 mb-3 leading-relaxed text-sm">
                          {seoData.ogDescription !== 'No OG description found' ? seoData.ogDescription : seoData.metaDescription}
                        </div>
                        <div className="text-xs text-gray-500 font-medium">
                          {new URL(seoData.url).hostname}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">📱</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">No URL Analyzed Yet</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Analyze a URL first to see how your content will appear when shared on social media platforms.
                  </p>
                  <button
                    onClick={() => setActiveTab('url-analyzer')}
                    className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-2xl hover:from-pink-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold"
                  >
                    Go to URL Analyzer 🚀
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Rich Snippets Tab */}
        {activeTab === 'rich-snippets' && (
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 mb-8 overflow-hidden">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 p-8 text-white">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h2 className="text-3xl font-bold">Rich Snippets & Structured Data</h2>
              </div>
              <p className="text-indigo-100 text-lg">
                Analyze your structured data implementation for better search visibility
              </p>
            </div>

            {/* Content Section */}
            <div className="p-8">
              {!url ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Enter a URL to Analyze</h3>
                  <p className="text-gray-600">
                    Enter a URL above to analyze structured data and rich snippets
                  </p>
                </div>
              ) : !seoData ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Analyzing structured data...</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {/* Structured Data Overview */}
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
                    <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                      <span className="mr-2">📊</span>
                      Structured Data Overview
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-purple-600">
                          {seoData.structuredData ? seoData.structuredData.length : 0}
                        </div>
                        <div className="text-sm text-gray-600">Schema.org Objects</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-600">
                          {seoData.structuredData ? seoData.structuredData.filter(item => item.isValid !== false).length : 0}
                        </div>
                        <div className="text-sm text-gray-600">Valid Objects</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-red-600">
                          {seoData.structuredData ? seoData.structuredData.filter(item => item.isValid === false).length : 0}
                        </div>
                        <div className="text-sm text-gray-600">Errors</div>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Structured Data Analysis */}
                  {seoData.structuredData && seoData.structuredData.length > 0 ? (
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-gray-800 flex items-center">
                        <span className="mr-2">🔍</span>
                        Detected Structured Data
                      </h3>
                      
                      {seoData.structuredData.map((item, index) => (
                        <div key={index} className={`border rounded-xl p-6 ${
                          item.isValid === false ? 'border-red-300 bg-red-50' : 'border-green-300 bg-green-50'
                        }`}>
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <span className={`w-3 h-3 rounded-full ${
                                  item.isValid === false ? 'bg-red-500' : 'bg-green-500'
                                }`}></span>
                                <span className="font-bold text-gray-800">
                                  {item.type || 'Unknown Type'}
                                </span>
                                {item.context && (
                                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                    {item.context}
                                  </span>
                                )}
                              </div>
                              {item.name && item.name !== 'Unknown' && (
                                <div className="text-gray-700 font-medium">{item.name}</div>
                              )}
                              {item.description && item.description !== 'No description' && (
                                <div className="text-gray-600 text-sm mt-1">{item.description}</div>
                              )}
                            </div>
                            {item.selector && (
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                {item.selector}
                              </span>
                            )}
                          </div>

                          {item.isValid === false ? (
                            <div className="bg-red-100 border border-red-300 rounded-lg p-4">
                              <div className="text-red-800 font-medium mb-2">Parsing Error:</div>
                              <div className="text-red-700 text-sm">{item.error}</div>
                              {item.rawContent && (
                                <details className="mt-3">
                                  <summary className="text-red-600 cursor-pointer text-sm">
                                    View Raw Content
                                  </summary>
                                  <pre className="mt-2 text-xs bg-red-50 p-2 rounded overflow-x-auto">
                                    {item.rawContent}
                                  </pre>
                                </details>
                              )}
                            </div>
                          ) : (
                            <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                              <div className="text-green-800 font-medium mb-2">Structured Data Properties:</div>
                              <div className="space-y-2 text-sm">
                                {item.data && Object.entries(item.data).slice(0, 10).map(([key, value]) => (
                                  <div key={key} className="flex items-start gap-2">
                                    <span className="font-medium text-green-700 min-w-0 flex-shrink-0">
                                      {key}:
                                    </span>
                                    <span className="text-green-600 break-all">
                                      {typeof value === 'object' ? JSON.stringify(value).substring(0, 100) + '...' : String(value).substring(0, 150)}
                                    </span>
                                  </div>
                                ))}
                                {item.data && Object.keys(item.data).length > 10 && (
                                  <div className="text-green-600 text-xs">
                                    ... and {Object.keys(item.data).length - 10} more properties
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-orange-50 rounded-xl border border-orange-200">
                      <div className="text-6xl mb-4">📝</div>
                      <h3 className="text-xl font-bold text-orange-800 mb-2">No Structured Data Found</h3>
                      <p className="text-orange-600 mb-4">
                        This page doesn't appear to have any JSON-LD structured data
                      </p>
                      <div className="bg-white rounded-lg p-4 text-left max-w-2xl mx-auto">
                        <h4 className="font-bold text-gray-800 mb-2">💡 Quick Implementation Tips:</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Add JSON-LD structured data to your &lt;head&gt; section</li>
                          <li>• Use schema.org types like Article, Product, Organization, etc.</li>
                          <li>• Test your structured data with Google's Rich Results Test</li>
                          <li>• Common types: WebSite, WebPage, Article, Course, Organization</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Rich Snippets Preview */}
                  {seoData.structuredData && seoData.structuredData.some(item => item.isValid !== false) && (
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                        <span className="mr-2">🎨</span>
                        Potential Rich Snippet Preview
                      </h3>
                      <div className="bg-white rounded-lg border p-4 max-w-lg">
                        <div className="text-blue-700 text-lg hover:underline cursor-pointer">
                          {seoData.title || 'Page Title'}
                        </div>
                        <div className="text-green-700 text-sm">
                          {url}
                        </div>
                        <div className="text-gray-700 text-sm mt-1">
                          {seoData.metaDescription || 'Meta description would appear here...'}
                        </div>
                        {seoData.structuredData.some(item => item.type === 'Course' || item.type === 'Article') && (
                          <div className="mt-2 text-xs text-gray-600">
                            ★★★★☆ Rating • {seoData.structuredData.find(item => item.type === 'Course' || item.type === 'Article')?.type} • Additional rich snippet features may appear
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Accessibility Analysis Tab */}
        {activeTab === 'accessibility' && (
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 mb-8 overflow-hidden">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 p-8 text-white">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">♿</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Accessibility Analysis</h2>
                  <p className="text-purple-100 mt-1">Web Content Accessibility Guidelines (WCAG) compliance check</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {seoData && seoData.accessibility ? (
                <div className="space-y-8">
                  
                  {/* Overall Accessibility Score */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">🎯 Accessibility Overview</h3>
                    
                    {/* Image Accessibility */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-3">📸 Image Accessibility</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Total Images:</span>
                            <span className="font-medium">{seoData.accessibility.images.totalImages}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">With Alt Text:</span>
                            <span className="font-medium text-green-600">{seoData.accessibility.images.withAlt}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Missing Alt Text:</span>
                            <span className="font-medium text-red-600">{seoData.accessibility.images.withoutAlt}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Decorative Images:</span>
                            <span className="font-medium text-blue-600">{seoData.accessibility.images.decorativeImages}</span>
                          </div>
                          
                          {/* Alt Text Coverage Progress */}
                          <div className="mt-4">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-gray-700">Alt Text Coverage</span>
                              <span className="text-sm font-bold text-gray-800">{seoData.imageStats?.altPercentage || 0}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                              <div 
                                className={`h-3 rounded-full transition-all duration-500 ${
                                  (seoData.imageStats?.altPercentage || 0) >= 90 ? 'bg-green-500' :
                                  (seoData.imageStats?.altPercentage || 0) >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                                }`}
                                style={{ width: `${seoData.imageStats?.altPercentage || 0}%` }}
                              ></div>
                            </div>
                            <p className="text-xs text-gray-600 mt-1">
                              {(seoData.imageStats?.altPercentage || 0) >= 90 
                                ? '✅ Excellent accessibility!' 
                                : (seoData.imageStats?.altPercentage || 0) >= 70 
                                  ? '⚠️ Good, but could improve' 
                                  : '❌ Needs improvement'}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Link Accessibility */}
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-3">🔗 Link Accessibility</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Total Links:</span>
                            <span className="font-medium">{seoData.accessibility.links.totalLinks}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">With Text:</span>
                            <span className="font-medium text-green-600">{seoData.accessibility.links.withText}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">With ARIA Labels:</span>
                            <span className="font-medium text-blue-600">{seoData.accessibility.links.withAriaLabel}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Empty Links:</span>
                            <span className={`font-medium ${seoData.accessibility.links.emptyLinks === 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {seoData.accessibility.links.emptyLinks}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Heading Structure */}
                    <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">📝 Heading Structure</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className={`text-2xl font-bold ${seoData.accessibility.headings.h1Count === 1 ? 'text-green-600' : 'text-red-600'}`}>
                            {seoData.accessibility.headings.h1Count}
                          </div>
                          <div className="text-sm text-gray-600">H1 Tags</div>
                          <div className="text-xs text-gray-500">
                            {seoData.accessibility.headings.h1Count === 1 ? '✅ Perfect' : '❌ Should be 1'}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className={`text-2xl font-bold ${seoData.accessibility.headings.headingSequence.isProper ? 'text-green-600' : 'text-yellow-600'}`}>
                            {seoData.accessibility.headings.headingSequence.isProper ? '✅' : '⚠️'}
                          </div>
                          <div className="text-sm text-gray-600">Heading Order</div>
                          <div className="text-xs text-gray-500">
                            {seoData.accessibility.headings.headingSequence.isProper ? 'Logical sequence' : 'Check sequence'}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">
                            {seoData.accessibility.headings.headingSequence.totalHeadings}
                          </div>
                          <div className="text-sm text-gray-600">Total Headings</div>
                          <div className="text-xs text-gray-500">All levels</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Forms & ARIA */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-3">📋 Form Accessibility</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Form Inputs:</span>
                            <span className="font-medium">{seoData.accessibility.forms.totalInputs}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">With Labels:</span>
                            <span className="font-medium text-green-600">{seoData.accessibility.forms.withLabels}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Without Labels:</span>
                            <span className={`font-medium ${seoData.accessibility.forms.withoutLabels === 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {seoData.accessibility.forms.withoutLabels}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-3">🏷️ ARIA & Semantics</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Landmarks:</span>
                            <span className="font-medium text-blue-600">{seoData.accessibility.aria.hasLandmarks}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">ARIA Labels:</span>
                            <span className="font-medium text-blue-600">{seoData.accessibility.aria.hasAriaLabels}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Skip Links:</span>
                            <span className={`font-medium ${seoData.accessibility.aria.hasSkipLinks ? 'text-green-600' : 'text-yellow-600'}`}>
                              {seoData.accessibility.aria.hasSkipLinks ? 'Yes' : 'No'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Detailed Recommendations */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">🚀 Accessibility Recommendations</h3>
                    <div className="space-y-3">
                      {seoData.accessibility.images.withoutAlt > 0 && (
                        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <span className="text-red-400">❌</span>
                            </div>
                            <div className="ml-3">
                              <h4 className="text-sm font-medium text-red-800">Missing Alt Text</h4>
                              <p className="text-sm text-red-700">
                                {seoData.accessibility.images.withoutAlt} images need descriptive alt text for screen readers.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {seoData.accessibility.headings.h1Count !== 1 && (
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <span className="text-yellow-400">⚠️</span>
                            </div>
                            <div className="ml-3">
                              <h4 className="text-sm font-medium text-yellow-800">H1 Structure Issue</h4>
                              <p className="text-sm text-yellow-700">
                                Pages should have exactly one H1 tag. Found: {seoData.accessibility.headings.h1Count}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {seoData.accessibility.links.emptyLinks > 0 && (
                        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <span className="text-red-400">❌</span>
                            </div>
                            <div className="ml-3">
                              <h4 className="text-sm font-medium text-red-800">Empty Links</h4>
                              <p className="text-sm text-red-700">
                                {seoData.accessibility.links.emptyLinks} links have no text or ARIA labels.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {seoData.accessibility.forms.withoutLabels > 0 && (
                        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <span className="text-orange-400">⚠️</span>
                            </div>
                            <div className="ml-3">
                              <h4 className="text-sm font-medium text-orange-800">Unlabeled Form Inputs</h4>
                              <p className="text-sm text-orange-700">
                                {seoData.accessibility.forms.withoutLabels} form inputs need proper labels or ARIA attributes.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {!seoData.accessibility.aria.hasSkipLinks && (
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <span className="text-blue-400">💡</span>
                            </div>
                            <div className="ml-3">
                              <h4 className="text-sm font-medium text-blue-800">Add Skip Links</h4>
                              <p className="text-sm text-blue-700">
                                Consider adding skip navigation links for keyboard users.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Success messages */}
                      {seoData.accessibility.images.withoutAlt === 0 && seoData.accessibility.images.totalImages > 0 && (
                        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <span className="text-green-400">✅</span>
                            </div>
                            <div className="ml-3">
                              <h4 className="text-sm font-medium text-green-800">Excellent Image Accessibility</h4>
                              <p className="text-sm text-green-700">
                                All images have proper alt text or are marked as decorative.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No Data Available</h3>
                  <p className="text-gray-600">Analyze a URL first to see accessibility insights.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* SEO Checklist Tab */}
        {activeTab === 'performance' && (
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 mb-8 overflow-hidden">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-8 text-white">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h2 className="text-3xl font-bold">SEO Performance Checklist</h2>
              </div>
              <p className="text-green-100 text-lg">
                Comprehensive SEO analysis with actionable recommendations
              </p>
            </div>

            <div className="p-8">
              {seoData ? (
                <div className="space-y-8">
                  {/* SEO Score Calculation */}
                  {(() => {
                    let score = 0;
                    const checks = [
                      // Title Tag (20 points total)
                      { 
                        condition: seoData.title && seoData.title !== 'No title found', 
                        points: 10, 
                        label: 'Has title tag', 
                        category: 'technical' 
                      },
                      { 
                        condition: seoData.title && seoData.title.length >= 30 && seoData.title.length <= 60, 
                        points: 10, 
                        label: 'Title tag optimal length (30-60 chars)', 
                        category: 'technical' 
                      },
                      
                      // Meta Description (15 points total)
                      { 
                        condition: seoData.metaDescription && seoData.metaDescription !== 'No meta description found', 
                        points: 8, 
                        label: 'Has meta description', 
                        category: 'technical' 
                      },
                      { 
                        condition: seoData.metaDescription && seoData.metaDescription.length >= 120 && seoData.metaDescription.length <= 160, 
                        points: 7, 
                        label: 'Meta description optimal length (120-160 chars)', 
                        category: 'technical' 
                      },
                      
                      // Heading Structure (15 points total)
                      { 
                        condition: seoData.headings.h1.length === 1, 
                        points: 10, 
                        label: 'Exactly one H1 tag', 
                        category: 'structure' 
                      },
                      { 
                        condition: seoData.headings.h2.length > 0, 
                        points: 5, 
                        label: 'Has H2 tags for content structure', 
                        category: 'structure' 
                      },
                      
                      // Open Graph / Social Media (20 points total)
                      { 
                        condition: seoData.ogTitle && seoData.ogTitle !== 'No OG title found', 
                        points: 7, 
                        label: 'Open Graph title', 
                        category: 'social' 
                      },
                      { 
                        condition: seoData.ogDescription && seoData.ogDescription !== 'No OG description found', 
                        points: 6, 
                        label: 'Open Graph description', 
                        category: 'social' 
                      },
                      { 
                        condition: seoData.ogImage && seoData.ogImage !== 'No OG image found', 
                        points: 7, 
                        label: 'Open Graph image', 
                        category: 'social' 
                      },
                      
                      // Technical SEO (15 points total)
                      { 
                        condition: seoData.canonical && seoData.canonical !== 'No canonical URL found', 
                        points: 5, 
                        label: 'Canonical URL set', 
                        category: 'technical' 
                      },
                      { 
                        condition: seoData.technicalSEO?.hasViewport, 
                        points: 3, 
                        label: 'Viewport meta tag', 
                        category: 'technical' 
                      },
                      { 
                        condition: seoData.technicalSEO?.hasCharset, 
                        points: 2, 
                        label: 'Character encoding set', 
                        category: 'technical' 
                      },
                      { 
                        condition: seoData.technicalSEO?.hasLangAttribute, 
                        points: 3, 
                        label: 'Language attribute set', 
                        category: 'technical' 
                      },
                      { 
                        condition: seoData.technicalSEO?.favicon, 
                        points: 2, 
                        label: 'Favicon present', 
                        category: 'technical' 
                      },
                      
                      // Structured Data (10 points)
                      { 
                        condition: seoData.structuredData && seoData.structuredData.length > 0, 
                        points: 10, 
                        label: 'Structured data implemented', 
                        category: 'rich-snippets' 
                      },
                      
                      // Images and Accessibility (25 points total)
                      { 
                        condition: seoData.imageStats && seoData.imageStats.altPercentage >= 95, 
                        points: 10, 
                        label: 'Excellent image alt text coverage (95%+)', 
                        category: 'accessibility' 
                      },
                      { 
                        condition: seoData.imageStats && seoData.imageStats.altPercentage >= 80, 
                        points: 7, 
                        label: 'Good image alt text coverage (80%+)', 
                        category: 'accessibility' 
                      },
                      { 
                        condition: seoData.imageStats && seoData.imageStats.altPercentage >= 60, 
                        points: 4, 
                        label: 'Fair image alt text coverage (60%+)', 
                        category: 'accessibility' 
                      },
                      
                      // Heading Structure Accessibility
                      { 
                        condition: seoData.accessibility?.headings?.hasProperH1, 
                        points: 3, 
                        label: 'Proper H1 structure', 
                        category: 'accessibility' 
                      },
                      { 
                        condition: seoData.accessibility?.headings?.headingSequence?.isProper, 
                        points: 3, 
                        label: 'Logical heading hierarchy', 
                        category: 'accessibility' 
                      },
                      
                      // Link Accessibility
                      { 
                        condition: seoData.accessibility?.links?.emptyLinks === 0, 
                        points: 2, 
                        label: 'No empty links', 
                        category: 'accessibility' 
                      },
                      
                      // Form Accessibility
                      { 
                        condition: seoData.accessibility?.forms?.totalInputs === 0 || 
                                  (seoData.accessibility?.forms?.withLabels / seoData.accessibility?.forms?.totalInputs) >= 0.9, 
                        points: 3, 
                        label: 'Form inputs properly labeled', 
                        category: 'accessibility' 
                      },
                      
                      // ARIA and Semantic Structure
                      { 
                        condition: seoData.accessibility?.aria?.hasLandmarks > 0, 
                        points: 2, 
                        label: 'Uses semantic landmarks', 
                        category: 'accessibility' 
                      }
                    ];

                    const passedChecks = checks.filter(check => check.condition);
                    score = passedChecks.reduce((sum, check) => sum + check.points, 0);

                    const getScoreColor = (score) => {
                      if (score >= 85) return 'from-green-500 to-emerald-500';
                      if (score >= 70) return 'from-blue-500 to-cyan-500';
                      if (score >= 55) return 'from-yellow-500 to-orange-500';
                      return 'from-red-500 to-pink-500';
                    };

                    const getScoreGrade = (score) => {
                      if (score >= 90) return { grade: 'A+', desc: 'Outstanding', color: 'text-green-600' };
                      if (score >= 85) return { grade: 'A', desc: 'Excellent', color: 'text-green-600' };
                      if (score >= 75) return { grade: 'B+', desc: 'Very Good', color: 'text-blue-600' };
                      if (score >= 65) return { grade: 'B', desc: 'Good', color: 'text-blue-600' };
                      if (score >= 55) return { grade: 'C+', desc: 'Fair', color: 'text-yellow-600' };
                      if (score >= 45) return { grade: 'C', desc: 'Needs Improvement', color: 'text-orange-600' };
                      if (score >= 35) return { grade: 'D', desc: 'Poor', color: 'text-red-600' };
                      return { grade: 'F', desc: 'Critical Issues', color: 'text-red-600' };
                    };

                    const scoreInfo = getScoreGrade(score);

                    return (
                      <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-3xl p-8 border border-gray-200">
                        <div className="text-center mb-8">
                          <div className={`w-32 h-32 bg-gradient-to-r ${getScoreColor(score)} rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl`}>
                            <div className="text-center text-white">
                              <div className="text-4xl font-bold">{score}</div>
                              <div className="text-sm opacity-90">/ 100</div>
                            </div>
                          </div>
                          <div className="mb-4">
                            <div className={`text-4xl font-bold mb-2 ${scoreInfo.color}`}>{scoreInfo.grade}</div>
                            <div className="text-xl text-gray-600">{scoreInfo.desc} SEO Performance</div>
                            <div className="text-sm text-gray-500 mt-2">
                              {score >= 85 && "Your page has excellent SEO optimization!"}
                              {score >= 70 && score < 85 && "Good SEO foundation with room for improvement."}
                              {score >= 55 && score < 70 && "Decent SEO but needs significant improvements."}
                              {score < 55 && "Critical SEO issues need immediate attention."}
                            </div>
                          </div>
                          
                          <div className="w-full bg-gray-200 rounded-full h-4 mb-6 shadow-inner">
                            <div 
                              className={`h-4 rounded-full bg-gradient-to-r ${getScoreColor(score)} transition-all duration-1000 ease-out shadow-lg`}
                              style={{ width: `${score}%` }}
                            ></div>
                          </div>
                        </div>

                        {/* Detailed Checks */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {['technical', 'structure', 'social', 'rich-snippets', 'accessibility'].map(category => {
                            const categoryChecks = checks.filter(check => check.category === category);
                            const categoryScore = categoryChecks.filter(check => check.condition).reduce((sum, check) => sum + check.points, 0);
                            const maxCategoryScore = categoryChecks.reduce((sum, check) => sum + check.points, 0);
                            const categoryPercentage = maxCategoryScore > 0 ? (categoryScore / maxCategoryScore) * 100 : 0;

                            const categoryIcons = {
                              technical: '⚙️',
                              structure: '🏗️',
                              social: '📱',
                              'rich-snippets': '✨',
                              accessibility: '♿'
                            };

                            const categoryNames = {
                              technical: 'Technical SEO',
                              structure: 'Content Structure',
                              social: 'Social Media',
                              'rich-snippets': 'Rich Snippets',
                              accessibility: 'Accessibility'
                            };

                            return (
                              <div key={category} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                <div className="flex items-center justify-between mb-4">
                                  <div className="flex items-center">
                                    <span className="text-2xl mr-3">{categoryIcons[category]}</span>
                                    <h4 className="font-bold text-gray-800">{categoryNames[category]}</h4>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-lg font-bold text-gray-800">{categoryScore}/{maxCategoryScore}</div>
                                    <div className="text-xs text-gray-500">{Math.round(categoryPercentage)}%</div>
                                  </div>
                                </div>
                                
                                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                                  <div 
                                    className={`h-2 rounded-full transition-all duration-500 ${
                                      categoryPercentage >= 80 ? 'bg-green-500' : 
                                      categoryPercentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                                    }`}
                                    style={{ width: `${categoryPercentage}%` }}
                                  ></div>
                                </div>

                                <div className="space-y-2">
                                  {categoryChecks.map((check, index) => (
                                    <div key={index} className="flex items-center justify-between text-sm">
                                      <span className="text-gray-700 flex-1">{check.label}</span>
                                      <div className="flex items-center ml-4">
                                        <span className="text-xs text-gray-500 mr-2">{check.points}pts</span>
                                        {check.condition ? (
                                          <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                                            <span className="text-green-600 text-xs">✓</span>
                                          </span>
                                        ) : (
                                          <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                                            <span className="text-red-600 text-xs">✗</span>
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })()}

                  {/* Recommendations */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white text-xl">💡</span>
                      </div>
                      <h3 className="text-2xl font-bold text-blue-900">SEO Recommendations</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        {
                          condition: !seoData.title || seoData.title === 'No title found',
                          icon: '🚨',
                          title: 'Missing Title Tag',
                          description: 'Add a unique, descriptive title tag to every page. This is critical for SEO.',
                          priority: 'critical'
                        },
                        {
                          condition: seoData.title && (seoData.title.length < 30 || seoData.title.length > 60),
                          icon: '📝',
                          title: 'Optimize Title Tag Length',
                          description: `Current length: ${seoData.title?.length || 0} characters. Aim for 30-60 characters for optimal display in search results.`,
                          priority: 'high'
                        },
                        {
                          condition: !seoData.metaDescription || seoData.metaDescription === 'No meta description found',
                          icon: '📄',
                          title: 'Add Meta Description',
                          description: 'Meta descriptions help search engines understand your content and improve click-through rates.',
                          priority: 'high'
                        },
                        {
                          condition: seoData.metaDescription && (seoData.metaDescription.length < 120 || seoData.metaDescription.length > 160),
                          icon: '�',
                          title: 'Optimize Meta Description Length',
                          description: `Current length: ${seoData.metaDescription?.length || 0} characters. Aim for 120-160 characters for best results.`,
                          priority: 'high'
                        },
                        {
                          condition: seoData.headings.h1.length === 0,
                          icon: '🏷️',
                          title: 'Add H1 Tag',
                          description: 'Every page must have exactly one H1 tag that clearly describes the main topic.',
                          priority: 'critical'
                        },
                        {
                          condition: seoData.headings.h1.length > 1,
                          icon: '⚠️',
                          title: 'Multiple H1 Tags Found',
                          description: `Found ${seoData.headings.h1.length} H1 tags. Use only one H1 per page for better SEO structure.`,
                          priority: 'high'
                        },
                        {
                          condition: seoData.headings.h2.length === 0 && seoData.headings.h3.length === 0,
                          icon: '🏗️',
                          title: 'Improve Content Structure',
                          description: 'Add H2 and H3 tags to create a clear content hierarchy and improve readability.',
                          priority: 'medium'
                        },
                        {
                          condition: seoData.ogImage === 'No OG image found',
                          icon: '🖼️',
                          title: 'Add Open Graph Image',
                          description: 'Include a 1200x630px image for better social media sharing. This significantly improves engagement.',
                          priority: 'medium'
                        },
                        {
                          condition: seoData.ogTitle === 'No OG title found',
                          icon: '📱',
                          title: 'Add Open Graph Title',
                          description: 'Set og:title for better social media previews. Can be same as title tag or optimized for social sharing.',
                          priority: 'medium'
                        },
                        {
                          condition: seoData.ogDescription === 'No OG description found',
                          icon: '💬',
                          title: 'Add Open Graph Description',
                          description: 'Set og:description to control how your content appears when shared on social media.',
                          priority: 'medium'
                        },
                        {
                          condition: seoData.structuredData.length === 0,
                          icon: '⚡',
                          title: 'Implement Structured Data',
                          description: 'Add JSON-LD structured data for rich snippets. This can significantly improve search visibility.',
                          priority: 'medium'
                        },
                        {
                          condition: seoData.imageStats && seoData.imageStats.altPercentage < 70,
                          icon: '♿',
                          title: 'Improve Image Accessibility',
                          description: `${seoData.imageStats?.withoutAlt || 0} images missing alt text. Alt text improves accessibility and SEO.`,
                          priority: 'medium'
                        },
                        {
                          condition: seoData.canonical === 'No canonical URL found',
                          icon: '🔗',
                          title: 'Set Canonical URL',
                          description: 'Add canonical URL to prevent duplicate content issues and consolidate link equity.',
                          priority: 'low'
                        },
                        {
                          condition: !seoData.technicalSEO?.hasViewport,
                          icon: '📱',
                          title: 'Add Viewport Meta Tag',
                          description: 'Include viewport meta tag for proper mobile responsiveness: <meta name="viewport" content="width=device-width, initial-scale=1">',
                          priority: 'high'
                        },
                        {
                          condition: !seoData.technicalSEO?.hasLangAttribute,
                          icon: '🌐',
                          title: 'Set Language Attribute',
                          description: 'Add lang attribute to <html> tag to help search engines understand your content language.',
                          priority: 'low'
                        },
                        {
                          condition: !seoData.technicalSEO?.favicon,
                          icon: '🎨',
                          title: 'Add Favicon',
                          description: 'Include a favicon for better brand recognition in browser tabs and bookmarks.',
                          priority: 'low'
                        }
                      ].filter(rec => rec.condition).slice(0, 8).map((recommendation, index) => (
                        <div key={index} className={`bg-white rounded-2xl p-6 shadow-lg border-l-4 ${
                          recommendation.priority === 'critical' ? 'border-red-600 bg-red-50' :
                          recommendation.priority === 'high' ? 'border-red-500 bg-red-50' :
                          recommendation.priority === 'medium' ? 'border-yellow-500 bg-yellow-50' : 'border-blue-500 bg-blue-50'
                        }`}>
                          <div className="flex items-start">
                            <div className="text-3xl mr-4">{recommendation.icon}</div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-bold text-gray-800">{recommendation.title}</h4>
                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                  recommendation.priority === 'critical' ? 'bg-red-600 text-white' :
                                  recommendation.priority === 'high' ? 'bg-red-500 text-white' :
                                  recommendation.priority === 'medium' ? 'bg-yellow-500 text-white' : 'bg-blue-500 text-white'
                                }`}>
                                  {recommendation.priority.toUpperCase()}
                                </span>
                              </div>
                              <p className="text-gray-700 text-sm leading-relaxed">{recommendation.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Additional SEO Tips */}
                    <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                      <h4 className="font-bold text-blue-800 mb-4 flex items-center">
                        <span className="mr-2">💡</span>
                        Quick SEO Tips
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span className="text-blue-700">Use keywords naturally in title, headings, and content</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span className="text-blue-700">Optimize images: compress, use appropriate formats, add alt text</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span className="text-blue-700">Create descriptive, keyword-rich URLs</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span className="text-blue-700">Ensure fast page loading speeds (&lt; 3 seconds)</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span className="text-blue-700">Make your site mobile-friendly and responsive</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span className="text-blue-700">Use internal linking to connect related content</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">📊</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">No Performance Data Available</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Analyze a URL first to see comprehensive SEO performance metrics and recommendations.
                  </p>
                  <button
                    onClick={() => setActiveTab('url-analyzer')}
                    className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-2xl hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold"
                  >
                    Start SEO Analysis 🚀
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tools and Resources */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black p-8 text-white">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h2 className="text-3xl font-bold">SEO Tools & Resources</h2>
            </div>
            <p className="text-gray-300 text-lg">
              Professional SEO tools to take your optimization to the next level
            </p>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Google Search Console',
                  description: 'Monitor your site\'s search performance and indexing status',
                  url: 'https://search.google.com/search-console',
                  icon: '📊',
                  category: 'Analytics',
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  title: 'Google Rich Results Test',
                  description: 'Test your rich snippets and structured data',
                  url: 'https://search.google.com/test/rich-results',
                  icon: '✨',
                  category: 'Testing',
                  color: 'from-purple-500 to-purple-600'
                },
                {
                  title: 'PageSpeed Insights',
                  description: 'Analyze your page loading speed and performance',
                  url: 'https://pagespeed.web.dev/',
                  icon: '⚡',
                  category: 'Performance',
                  color: 'from-yellow-500 to-orange-500'
                },
                {
                  title: 'Schema.org Validator',
                  description: 'Validate your structured data markup',
                  url: 'https://validator.schema.org/',
                  icon: '🔍',
                  category: 'Validation',
                  color: 'from-green-500 to-green-600'
                },
                {
                  title: 'Google Analytics',
                  description: 'Track your website traffic and user behavior',
                  url: 'https://analytics.google.com/',
                  icon: '📈',
                  category: 'Analytics',
                  color: 'from-indigo-500 to-indigo-600'
                },
                {
                  title: 'Lighthouse',
                  description: 'Comprehensive site audit for performance and SEO',
                  url: 'https://web.dev/lighthouse/',
                  icon: '🏆',
                  category: 'Audit',
                  color: 'from-red-500 to-red-600'
                },
                {
                  title: 'Google Keyword Planner',
                  description: 'Research keywords for your content strategy',
                  url: 'https://ads.google.com/intl/en_us/home/tools/keyword-planner/',
                  icon: '🎯',
                  category: 'Keywords',
                  color: 'from-pink-500 to-pink-600'
                },
                {
                  title: 'Mobile-Friendly Test',
                  description: 'Check if your pages are mobile-friendly',
                  url: 'https://search.google.com/test/mobile-friendly',
                  icon: '📱',
                  category: 'Mobile',
                  color: 'from-teal-500 to-teal-600'
                },
                {
                  title: 'Core Web Vitals',
                  description: 'Monitor essential user experience metrics',
                  url: 'https://web.dev/vitals/',
                  icon: '💓',
                  category: 'UX',
                  color: 'from-cyan-500 to-cyan-600'
                }
              ].map((tool, index) => (
                <a
                  key={index}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {tool.icon}
                    </div>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">
                      {tool.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-blue-600 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tool.description}
                  </p>
                  <div className="mt-4 flex items-center text-blue-600 font-medium text-sm">
                    <span>Open Tool</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* Additional Resources */}
            <div className="mt-12 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="mr-3">📚</span>
                Learning Resources
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-gray-800 mb-3">SEO Best Practices</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Use unique titles and descriptions</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Optimize images with alt text</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Create XML sitemaps</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Implement structured data</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-gray-800 mb-3">Quick Tips</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center"><span className="text-blue-500 mr-2">💡</span>Focus on user intent</li>
                    <li className="flex items-center"><span className="text-blue-500 mr-2">💡</span>Improve page loading speed</li>
                    <li className="flex items-center"><span className="text-blue-500 mr-2">💡</span>Make content mobile-friendly</li>
                    <li className="flex items-center"><span className="text-blue-500 mr-2">💡</span>Use HTTPS everywhere</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
