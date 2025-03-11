import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "deluxeman-us.backendless.app",
      },
    ],
  },
};

export default nextConfig;
