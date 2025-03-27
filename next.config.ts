import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com', 'coffeefan.info'],
  },
  output: 'export',
  basePath: '/coffee-app'
};

export default nextConfig;
