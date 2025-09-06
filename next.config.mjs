/** @type {import('next').NextConfig} */
const nextConfig = {
  // SEO Optimizations
  poweredByHeader: false,
  generateEtags: true,
  compress: true,
  
  // Image optimization
  images: {
    domains: ['awsdevopstraininghyderabad.com'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  
  // Headers for SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/aws-training',
        destination: '/',
        permanent: true,
      },
      {
        source: '/devops-training',
        destination: '/',
        permanent: true,
      },
    ];
  },

  // Rewrites for better URLs
  async rewrites() {
    return [
      {
        source: '/aws-cloud-online-training-in-hyderabad',
        destination: '/courses/aws-cloud-online-training-in-hyderabad',
      },
      {
        source: '/aws-devops-online-training-in-hyderabad', 
        destination: '/courses/aws-devops-online-training-in-hyderabad',
      },
      {
        source: '/aws-data-engineering-online-training-in-hyderabad',
        destination: '/courses/aws-data-engineering-online-training-in-hyderabad',
      },
    ];
  },
};

export default nextConfig;
