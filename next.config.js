/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  assetPrefix: 'https://laivdata-aitutor.netlify.app/',

  images: {
    unoptimized: true,
    loader: 'default',
  },

  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
};

export default nextConfig;
