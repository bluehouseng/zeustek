/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig
// module.exports = nextConfig
module.exports = {
    nextConfig,
    images: {
        domains: ['res.cloudinary.com'],
      },

    // images: {
    //   remotePatterns: [
    //     {
    //       protocol: 'https',
    //       hostname: 'res.cloudinary.com',
    //       port: '',
    //       pathname: '/account123/**',
    //     },
    //   ],
    // },
  }
