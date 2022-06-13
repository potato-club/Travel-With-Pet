/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['meongmeong-tui-img-storage.s3-ap-northeast-2.amazonaws.com'],
  },
};

module.exports = nextConfig;