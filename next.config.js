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
    unoptimized: true,
  },
  // Use trailing slash for consistent path handling
  trailingSlash: true,
   // Only add if you're doing a static export
  // output: 'export',
};

module.exports = nextConfig;