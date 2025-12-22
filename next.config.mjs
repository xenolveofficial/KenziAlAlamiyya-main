/**
 * Minimal Next 14 config for App Router + TypeScript
 */
import { join } from "path";

const nextConfig = {
   eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  compress: true,
  productionBrowserSourceMaps: false,
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
