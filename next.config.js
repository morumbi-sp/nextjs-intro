/** @type {import('next').NextConfig} */

const API_KEY = process.env.NEXT_PUBLIC_API;
const BASE_MOVIE_URL = 'https://api.themoviedb.org/3';

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/old-blog/:path*',
        destination: '/new-sexy-blog/:path*',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `${BASE_MOVIE_URL}/movie/popular?api_key=${API_KEY}&language=ko&page=1`,
      },
    ];
  },
};

module.exports = nextConfig;
