/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["drive.google.com", "lh3.googleusercontent.com", "images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/uc/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
    unoptimized: true, // Fine for static export; remove if using Vercel's image optimization
    disableStaticImages: false,
  },
  // For static export with App Router
  output: 'export',
  // Use trailing slash for consistent path handling
  trailingSlash: true,
  // Remove exportPathMap as it's not compatible with App Router
};

module.exports = nextConfig;