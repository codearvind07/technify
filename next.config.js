/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed output: 'export' for Vercel compatibility
  images: { unoptimized: true },
};

module.exports = nextConfig;
