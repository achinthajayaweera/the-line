import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/the-line",
  images: { unoptimized: true },
};

export default nextConfig;