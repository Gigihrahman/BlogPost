import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "joysomecream-us.backendless.app",
      },
    ],
  },
};

export default nextConfig;
