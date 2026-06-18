import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/founders/ahmed-hafez",
        destination: "/founders/ahmed-shehada",
        permanent: true,
      },
      {
        source: "/founders/lina-faris",
        destination: "/founders/karam-al-hams",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
