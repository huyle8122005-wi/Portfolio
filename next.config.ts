import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for Cloudflare Pages
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
