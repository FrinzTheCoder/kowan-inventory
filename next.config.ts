import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Other config options here */
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint checks during the build
  },
};

export default nextConfig;
