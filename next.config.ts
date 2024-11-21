import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,

  images: {
    domains: ['gravatar.com', 'lh3.googleusercontent.com'], // Add allowed domains
  },
};

export default nextConfig;
