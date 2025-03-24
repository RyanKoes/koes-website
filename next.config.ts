import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export
  output: 'export',
  
  // Configure base path (optional, use if deploying to a subpath)
  // basePath: '/your-repo-name',
  
  // Ensure trailing slashes for static export
  trailingSlash: true,
  
  // Disable server-side rendering features
  images: {
    unoptimized: true
  },

  // Optional: Configure webpack if needed
  webpack: (config) => {
    return config
  }
};

export default nextConfig;
