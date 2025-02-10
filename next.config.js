/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['drive.google.com'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
