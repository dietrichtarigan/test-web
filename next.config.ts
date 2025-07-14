import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Conditional export configuration untuk Netlify compatibility
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Enable API routes in development
  experimental: {
    serverComponentsExternalPackages: ['gray-matter']
  }
};

export default nextConfig;
