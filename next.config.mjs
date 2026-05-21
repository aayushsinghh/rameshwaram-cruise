import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(process.cwd(), 'src'),
      '@lib': path.resolve(process.cwd(), 'src/lib'),
    };
    if (isServer) {
      config.externals = [...(config.externals || []), 'mongodb'];
    }
    return config;
  },
};

export default nextConfig;
