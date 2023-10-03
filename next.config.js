/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  image: {
    domain: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;
