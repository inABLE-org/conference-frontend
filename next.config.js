/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "content.inclusiveafrica.org",
      },
    ],
  },
};

module.exports = nextConfig;
