import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ilguvbltlgafvgxgpdbl.supabase.co",
      },
      {
        protocol: "https",
        hostname: "pxtynmefyaicqlkzbpai.supabase.co",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  reactCompiler: true,
  // cacheComponents: true,
};

export default nextConfig;
