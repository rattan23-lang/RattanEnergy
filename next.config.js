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
  
  output: 'export',
  // Disable automatic static optimization for specific paths
  trailingSlash: true,
  // Handle the export path conflicts
  exportPathMap: async function() {
    // Return empty object to let Next.js handle dynamic routes
    return {};
  },
};

module.exports = nextConfig;