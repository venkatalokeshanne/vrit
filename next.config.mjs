/** @type {import('next').NextConfig} */
const nextConfig = {
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
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
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
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://embed.tawk.to https://*.tawk.to https://maps.googleapis.com https://www.google.com",
              "style-src 'self' 'unsafe-inline' https://*.tawk.to https://fonts.googleapis.com",
              "img-src 'self' data: https://cdn.sanity.io https://*.tawk.to https://maps.googleapis.com https://maps.gstatic.com https://*.googleapis.com https://*.gstatic.com",
              "font-src 'self' data: https://*.tawk.to https://fonts.gstatic.com",
              "connect-src 'self' https://*.sanity.io https://*.api.sanity.io https://*.tawk.to wss://*.tawk.to https://maps.googleapis.com https://api.emailjs.com",
              "frame-src 'self' https://*.tawk.to https://www.google.com https://maps.google.com",
              "media-src 'self' https://cdn.sanity.io",
              "worker-src 'self' blob:",
              "object-src 'self' https://cdn.sanity.io"
            ].join('; ')
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
