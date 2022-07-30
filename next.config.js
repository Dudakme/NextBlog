/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/addBlog',
        destination: 'http://localhost:8080/addBlog',
      },
    ]
  },
}

module.exports = nextConfig
