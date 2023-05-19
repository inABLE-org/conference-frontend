/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "content.inclusiveafrica.org",
      },
      {
        protocol: "https",
        hostname: "lobster-app-h426k.ondigitalocean.app",
      },
    ],
  },
};

module.exports = nextConfig;
