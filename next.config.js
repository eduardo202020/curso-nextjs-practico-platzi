/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'api.lorem.space',
      'cdn.pixabay.com',
      'placeimg.com',
      'www.libreriahuequito.com',
      'thumbs.dreamstime.com',
      'www.pexels.com',
      'empresas.blogthinkbig.com',
      'm.media-amazon.com',
      'upload.wikimedia.org',
    ],
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
});

module.exports = withPWA(nextConfig);
// module.exports = nextConfig;
