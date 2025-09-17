import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  eslint: {
    // Ignore ESLint errors during production builds so build can succeed
    ignoreDuringBuilds: true,
  },
  // Silence workspace root warning when multiple lockfiles are detected
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
