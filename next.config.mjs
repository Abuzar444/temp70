/** @type {import('next').NextConfig} */
const nextConfig = {
  // without this config, images won't work
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "lqwsarshfucesldaurcz.supabase.co",
      },
    ],
  },
};

export default nextConfig;
