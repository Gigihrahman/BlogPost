import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://deluxeman-us.backendless.app/api",
      },
    ],
  },
};

export default nextConfig;
