import Script from 'next/script'
import { getPageMetadata, getStructuredData } from '../utils/metadata'

/**
 * SEO Analytics Component for tracking and monitoring
 */
export default function SEOAnalytics({ slug = 'index' }) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

  return (
    <>
      {/* Google Analytics 4 */}
      {GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_title: document.title,
                page_location: window.location.href,
                content_group1: '${slug}',
                custom_map: {
                  dimension1: 'user_engagement'
                }
              });
              
              // Enhanced ecommerce tracking for course pages
              gtag('event', 'page_view', {
                page_title: document.title,
                page_location: window.location.href,
                content_group1: '${slug}',
                send_to: '${GA_MEASUREMENT_ID}'
              });
            `}
          </Script>
        </>
      )}

      {/* Google Tag Manager */}
      {GTM_ID && (
        <>
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        </>
      )}

      {/* Microsoft Clarity */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
        `}
      </Script>

      {/* Schema.org Monitoring Script */}
      <Script id="schema-monitoring" strategy="afterInteractive">
        {`
          // Monitor structured data rendering
          window.addEventListener('load', function() {
            const scripts = document.querySelectorAll('script[type="application/ld+json"]');
            console.log('Structured Data Scripts Found:', scripts.length);
            
            scripts.forEach((script, index) => {
              try {
                const data = JSON.parse(script.textContent);
                console.log('Structured Data', index + 1, ':', data);
                
                // Track structured data in GA
                if (window.gtag) {
                  gtag('event', 'structured_data_loaded', {
                    custom_parameter_1: data['@type'] || 'unknown',
                    custom_parameter_2: '${slug}',
                  });
                }
              } catch (error) {
                console.error('Invalid JSON-LD:', script.textContent, error);
              }
            });
          });

          // Monitor Core Web Vitals
          function reportWebVital({name, value, id}) {
            if (window.gtag) {
              gtag('event', name, {
                event_category: 'Web Vitals',
                value: Math.round(name === 'CLS' ? value * 1000 : value),
                event_label: id,
                non_interaction: true,
              });
            }
          }

          // Load web vitals library and report
          import('web-vitals').then(({getCLS, getFID, getFCP, getLCP, getTTFB}) => {
            getCLS(reportWebVital);
            getFID(reportWebVital);
            getFCP(reportWebVital);
            getLCP(reportWebVital);
            getTTFB(reportWebVital);
          });
        `}
      </Script>

      {/* SEO Performance Monitoring */}
      <Script id="seo-performance" strategy="afterInteractive">
        {`
          window.addEventListener('load', function() {
            // Check for essential SEO elements
            const seoChecks = {
              title: document.title ? document.title.length > 0 : false,
              description: document.querySelector('meta[name="description"]')?.content?.length > 0,
              canonical: !!document.querySelector('link[rel="canonical"]'),
              ogTitle: !!document.querySelector('meta[property="og:title"]'),
              ogDescription: !!document.querySelector('meta[property="og:description"]'),
              ogImage: !!document.querySelector('meta[property="og:image"]'),
              structuredData: document.querySelectorAll('script[type="application/ld+json"]').length > 0,
              viewport: !!document.querySelector('meta[name="viewport"]'),
              robots: !!document.querySelector('meta[name="robots"]')
            };

            // Log SEO health
            console.log('SEO Health Check:', seoChecks);
            
            // Track SEO completeness in analytics
            const seoScore = Object.values(seoChecks).filter(Boolean).length;
            if (window.gtag) {
              gtag('event', 'seo_health_check', {
                event_category: 'SEO',
                value: seoScore,
                custom_parameter_1: '${slug}',
                non_interaction: true,
              });
            }

            // Check page loading performance
            if (window.performance) {
              const navigationTiming = window.performance.getEntriesByType('navigation')[0];
              if (navigationTiming && window.gtag) {
                gtag('event', 'page_load_performance', {
                  event_category: 'Performance',
                  value: Math.round(navigationTiming.loadEventEnd - navigationTiming.loadEventStart),
                  custom_parameter_1: '${slug}',
                  non_interaction: true,
                });
              }
            }
          });
        `}
      </Script>

      {/* Hotjar Tracking (optional) */}
      {process.env.NEXT_PUBLIC_HOTJAR_ID && (
        <Script id="hotjar" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR_ID},hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
      )}
    </>
  )
}

/**
 * Custom hook for tracking SEO events
 */
export function useSEOTracking() {
  const trackSEOEvent = (eventName, parameters = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        event_category: 'SEO',
        ...parameters,
      })
    }
  }

  const trackConversion = (eventName, value = 0) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        event_category: 'Conversions',
        value: value,
        currency: 'INR',
      })
    }
  }

  return { trackSEOEvent, trackConversion }
}
