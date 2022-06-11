/** @type {import('next').NextConfig} */
const nextConfig = {
  // target: 'serverless',
  reactStrictMode: true,
  images: {
    // loader: 'akamai',
    // path: '/',
    domains: ['meongmeong-tui-img-storage.s3-ap-northeast-2.amazonaws.com'],
  },
};

module.exports = nextConfig;