/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains:[
    //   "files.edgesstore.dev"
    // ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

module.exports = nextConfig;
