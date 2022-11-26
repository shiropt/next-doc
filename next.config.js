/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["via.placeholder.com"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "via.placeholder.com",
    //     port: "",
    //     pathname: "jsonplaceholder.typicode.com/**",
    //   },
    // ],
  },
};

module.exports = nextConfig;
