/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Add this to bypass ESLint during build
  },
  images: {
    domains: ['bhattacharyacontact.com'],
    unoptimized: true,
  },
  output: 'standalone',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf|ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$/,
      type: 'asset/resource',
    });
    return config;
  },
}

module.exports = nextConfig;