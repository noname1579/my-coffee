import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com', 'coffeefan.info'],
  },
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/coffee-app/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/coffee-app' : '',
}

export default nextConfig;
