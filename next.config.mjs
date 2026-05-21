/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    const path = require('path');
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, 'src'),
        '@lib': path.resolve(__dirname, 'src/lib'),
      };
    } else {
      config.externals = [...(config.externals || []), 'mongodb'];
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, 'src'),
        '@lib': path.resolve(__dirname, 'src/lib'),
      };
    }
    return config;
  },
};

export default nextConfig;
