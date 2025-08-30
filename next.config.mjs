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
};

export default nextConfig;
