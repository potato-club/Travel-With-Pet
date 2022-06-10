/** @type {import('next').NextConfig} */
const nextConfig = {
  target: 'serverless',
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',
  },
};

module.exports = nextConfig;
