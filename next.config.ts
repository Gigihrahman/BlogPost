import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "classicfear-us.backendless.app",
      },
    ],
  },
};

export default nextConfig;
