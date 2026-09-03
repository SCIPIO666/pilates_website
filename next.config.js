/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false,
  },
  experimental: {
    optimizePackageImports: ['gsap'],
  },
};

module.exports = nextConfig;
