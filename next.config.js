/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['m.media-amazon.com', 'lh3.googleusercontent.com']
  },
  env: {
    stripe_secret: process.env.STRIPE_SECRET,
    stripe_webkook_secret: process.env.STRIPE_WEBHOOK_SECRET,
  }
};

module.exports = nextConfig;