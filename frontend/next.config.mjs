/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  output: "export", // 👈 IMPORTANT (creates out folder)

  images: {
    unoptimized: true, // 👈 REQUIRED for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;