/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.inclusiveafrica.org",
      },
    ],
  },
};

module.exports = nextConfig
