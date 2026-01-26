/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  basePath: '/futuramed',
  assetPrefix: '/futuramed',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig;
