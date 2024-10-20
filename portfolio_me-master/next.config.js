/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
async headers() {
  const headers = [];
    headers.push({
      headers: [
        {
          key: 'X-Robots-Tag',
          value: 'all',
        }
      ],
      source:'/'
    });
  return headers;
},
}

module.exports = nextConfig
