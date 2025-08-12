import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Completely disable ESLint during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignore TypeScript errors during builds
    ignoreBuildErrors: true,
  },
  // Configure for GitHub Pages static export
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/claude-implementation-dashboard' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/claude-implementation-dashboard/' : '',
  images: {
    unoptimized: true,
  },
  // Disable server-side features for static export
  experimental: {
    esmExternals: false,
  },
};

export default nextConfig;
