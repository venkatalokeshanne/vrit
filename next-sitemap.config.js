/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.vritsol.com',
  generateRobotsTxt: false, // We already have a custom robots.txt
  changefreq: 'monthly',
  priority: 0.8,
  
  // Static sitemap entries - matches our static sitemap.xml
  additionalPaths: async (config) => {
    return [
      // Main Pages
      {
        loc: '/',
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 1.0
      },
      {
        loc: '/courses',
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 1.0
      },
      {
        loc: '/aboutus',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.6
      },
      {
        loc: '/contactus',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        loc: '/blog',
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.5
      },

      // Policy Pages
      {
        loc: '/privacy-policy',
        lastmod: new Date().toISOString(),
        changefreq: 'yearly',
        priority: 0.4
      },
      {
        loc: '/terms-and-conditions',
        lastmod: new Date().toISOString(),
        changefreq: 'yearly',
        priority: 0.4
      },
      {
        loc: '/refund-and-course-rescheduling-policy',
        lastmod: new Date().toISOString(),
        changefreq: 'yearly',
        priority: 0.4
      },

      // Azure DevOps Training Courses (Priority 1.0)
      {
        loc: '/azure-devops-training-in-us-uk-canada-australia',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 1.0
      },
      {
        loc: '/azure-devops-online-training-in-bangalore',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 1.0
      },
      {
        loc: '/azure-devops-online-training-in-chennai',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 1.0
      },
      {
        loc: '/azure-devops-online-training-in-pune',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 1.0
      },
      {
        loc: '/azure-devops-online-training-in-noida',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 1.0
      },
      {
        loc: '/azure-devops-training-in-hyderabad',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 1.0
      },

      // Top Tier Courses (Priority 0.9)
      {
        loc: '/google-cloud-training-in-hyderabad',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.9
      },
      {
        loc: '/google-cloud-training-in-us-uk-canada-australia',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.9
      },
      {
        loc: '/devops-training-in-hyderabad',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.9
      },
      {
        loc: '/data-science-training-in-hyderabad',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.9
      },
      {
        loc: '/data-science-training-in-us-uk-canada-australia',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.9
      },
      {
        loc: '/python-online-training',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.9
      },
      {
        loc: '/python-with-aws-training',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.9
      },
      {
        loc: '/full-stack-developer-training-in-hyderabad',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.9
      },
      {
        loc: '/machine-learning-with-python-training-in-hyderabad',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.9
      },
      {
        loc: '/machine-learning-with-python-online-training-in-hyderabad',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.9
      },
      {
        loc: '/machine-learning-with-python-training-in-us-uk-canada-australia',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.9
      },
      {
        loc: '/salesforce-training-in-hyderabad',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.9
      },
      {
        loc: '/salesforce-training-in-us-uk-canada-australia',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.9
      },
      {
        loc: '/sap-fico-training-in-hyderabad',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.9
      },
      {
        loc: '/sap-fico-online-training-in-hyderabad',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.9
      },
      {
        loc: '/sap-fico-training-in-us-uk-canada-australia',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.9
      },
      {
        loc: '/sap-fico-online-training-in-us-uk-canada-australia',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.9
      },

      // High Priority Courses (Priority 0.8)
      {
        loc: '/hadoop-online-training',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/snowflake-training-in-hyderabad',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/servicenow-training-in-hyderabad',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/workday-training-in-hyderabad',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/workday-training-in-us-uk-canada-australia',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/mulesoft-training-in-hyderabad',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/informatica-mdm-training',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/edi-training',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/edi-training-in-us-uk-canada-australia',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/sap-sd-online-training-in-hyderabad',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/sap-sd-training-in-us-uk-canada-australia',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/sap-mm-online-training',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/sap-ewm-online-training',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/sap-ewm-training-in-us-uk-canada-australia',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/sap-ewm-online-training-in-us-uk-canada-australia',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/sap-basis-online-training',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/sap-hana-admin-training',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/sap-s4hana-simple-logistics-training',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/sap-central-finance-online-training',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/sap-central-finance-online-training-in-hyderabad',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/sas-clinical-online-training-in-hyderabad',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/sas-clinical-online-training-in-us-uk-canada-australia',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/sas-clinical-training-in-bangalore',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/sas-clinical-training-in-chennai',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/sas-clinical-training-in-pune',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/pega-training-in-hyderabad',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/pega-training-in-us-uk-canada-australia',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8
      },

      // Lower Priority Courses (Priority 0.7)
      {
        loc: '/sap-leonardo-training-hyderabad',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        loc: '/sap-security-training',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.7
      }
    ];
  },

  // Transform function for custom sitemap entries
  transform: async (config, path) => {
    // Custom priority based on path - matches static sitemap.xml exactly
    let priority = 0.8;
    let changefreq = 'monthly';
    
    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (path === '/courses') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (path.includes('azure-devops')) {
      priority = 1.0;
      changefreq = 'monthly';
    } else if (path.includes('python') || path.includes('salesforce') || path.includes('data-science') || path.includes('sap-fico') || path.includes('machine-learning') || path.includes('google-cloud') || path.includes('devops-training')) {
      priority = 0.9;
      changefreq = 'monthly';
    } else if (path.includes('policy') || path.includes('terms') || path.includes('refund')) {
      priority = 0.4;
      changefreq = 'yearly';
    } else if (path === '/contactus') {
      priority = 0.7;
      changefreq = 'monthly';
    } else if (path === '/aboutus') {
      priority = 0.6;
      changefreq = 'monthly';
    } else if (path === '/blog') {
      priority = 0.5;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      lastmod: new Date().toISOString(),
      changefreq,
      priority,
    };
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/_next/', '/studio/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1,
      }
    ],
    additionalSitemaps: [
      'https://www.vritsol.com/sitemap.xml',
    ],
  },
  
  // Exclude certain paths
  exclude: [
    '/api/*',
    '/admin/*',
    '/studio/*',
    '/_next/*',
    '/404',
    '/500'
  ],
  
  // Generate index sitemap for large sites
  generateIndexSitemap: false,
}
