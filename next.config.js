/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
      removeConsole: process.env.NODE_ENV === 'production',
    },
    experimental: {
      optimizePackageImports: [
        'lucide-react', 
        '@clerk/nextjs'
      ],
    },
  };
  
  module.exports = nextConfig;