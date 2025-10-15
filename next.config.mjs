/** @type {import('next').NextConfig} */
const nextConfig = {
  // Bundle optimization for modern browsers
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Modern JavaScript target to reduce polyfills
  swcMinify: true,
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    modernBrowsers: true,
  },
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/files/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 86400, // 24 hours
    dangerouslyAllowSVG: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Enable tree shaking
    config.optimization.usedExports = true;
    config.optimization.sideEffects = false;
    
    // Reduce bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: {
            minChunks: 1,
            priority: -20,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -10,
            chunks: 'all',
          },
        },
      };
    }
    
    return config;
  },
  // Headers for better SEO and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://embed.tawk.to https://*.tawk.to https://maps.googleapis.com https://www.google.com https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://cdn.jsdelivr.net",
              "style-src 'self' 'unsafe-inline' https://*.tawk.to https://fonts.googleapis.com https://cdn.jsdelivr.net",
              "img-src 'self' data: https://cdn.sanity.io https://*.tawk.to https://maps.googleapis.com https://maps.gstatic.com https://*.googleapis.com https://*.gstatic.com https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://*.googletagmanager.com https://cdn.jsdelivr.net",
              "font-src 'self' data: https://*.tawk.to https://fonts.gstatic.com https://cdn.jsdelivr.net",
              "connect-src 'self' https://*.sanity.io https://*.api.sanity.io https://*.tawk.to wss://*.tawk.to https://maps.googleapis.com https://api.emailjs.com https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://*.googletagmanager.com https://analytics.google.com https://*.analytics.google.com https://cdn.jsdelivr.net",
              "frame-src 'self' https://*.tawk.to https://www.google.com https://maps.google.com",
              "media-src 'self' https://cdn.sanity.io",
              "worker-src 'self' blob:",
              "object-src 'self' https://cdn.sanity.io"
            ].join('; ')
          },
        ],
      },
      {
        source: '/globals.css',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/css; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400',
          },
        ],
      },
    ];
  },

  // Redirects for old PHP URLs to new Next.js routes
  async redirects() {
    return [
      // PHP page redirects to Next.js equivalents
      {
        source: '/aboutus.php',
        destination: '/aboutus',
        permanent: true,
      },
      {
        source: '/contactus.php',
        destination: '/contactus',
        permanent: true,
      },
      {
        source: '/courses.php',
        destination: '/courses',
        permanent: true,
      },
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services.php',
        destination: '/courses',
        permanent: true,
      },
      {
        source: '/refund-and-course-rescheduling-policy.php',
        destination: '/refund-and-course-rescheduling-policy',
        permanent: true,
      },
      
      // Course page PHP redirects
      {
        source: '/azure-devops-training-in-hyderabad.php',
        destination: '/azure-devops-training-in-hyderabad',
        permanent: true,
      },
      {
        source: '/google-cloud-training.php',
        destination: '/google-cloud-training-in-hyderabad',
        permanent: true,
      },
      {
        source: '/google-cloud-training',
        destination: '/google-cloud-training-in-hyderabad',
        permanent: true,
      },
      {
        source: '/snowflake-training-in-hyderabad.php',
        destination: '/snowflake-training-in-hyderabad',
        permanent: true,
      },
      {
        source: '/servicenow-training-in-hyderabad.php',
        destination: '/servicenow-training-in-hyderabad',
        permanent: true,
      },
      {
        source: '/sas-clinical-online-training-in-us-uk-canada-australia.php',
        destination: '/sas-clinical-online-training-in-us-uk-canada-australia',
        permanent: true,
      },
      {
        source: '/sas-clinical-training-in-pune.php',
        destination: '/sas-clinical-training-in-pune',
        permanent: true,
      },
      {
        source: '/sap-central-finance-online-training.php',
        destination: '/sap-central-finance-online-training',
        permanent: true,
      },
      {
        source: '/sap-mm-online-training.php',
        destination: '/sap-mm-online-training',
        permanent: true,
      },
      {
        source: '/sap-security-training.php',
        destination: '/sap-security-training',
        permanent: true,
      },
      {
        source: '/informatica-mdm-training.php',
        destination: '/informatica-mdm-training',
        permanent: true,
      },
      {
        source: '/sap-basis-online-training.php',
        destination: '/sap-basis-online-training',
        permanent: true,
      },
      {
        source: '/mulesoft-training-in-hyderabad.php',
        destination: '/mulesoft-training-in-hyderabad',
        permanent: true,
      },
      {
        source: '/sap-leonardo-training-hyderabad.php',
        destination: '/sap-leonardo-training-hyderabad',
        permanent: true,
      },
      {
        source: '/edi-training.php',
        destination: '/edi-training',
        permanent: true,
      },
      {
        source: '/docker-with-kubernatees',
        destination: '/devops-training-in-hyderabad',
        permanent: true,
      },
      {
        source: '/sap-s4hana-simple-logistics-training',
        destination: '/sap-s4hana-simple-logistics-training',
        permanent: true,
      },

      // Blog and dynamic PHP files - redirect to main pages
      {
        source: '/blogloadData_cat.php',
        destination: '/blog',
        permanent: true,
      },

      // PDF redirects - redirect to relevant course pages
      {
        source: '/studypdfs/:path*.pdf',
        destination: '/courses',
        permanent: true,
      },
      
      // Catch-all for any remaining PHP files
      {
        source: '/:path*.php',
        destination: '/courses',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
