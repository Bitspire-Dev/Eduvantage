import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'dist',
  // Export as directories with index.html (e.g. /cookies/index.html)
  trailingSlash: true,
  images: {
    // Required because we use `output: 'export'` (no on-demand Image Optimization server)
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/:path*.{js,css,svg,webp,png,jpg,woff2}',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
