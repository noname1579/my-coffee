import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com', 'coffeefan.info'],
    unoptimized: true
  },
  output: 'export',
}

export default nextConfig;