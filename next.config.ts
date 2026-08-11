import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/notes",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/notes/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
