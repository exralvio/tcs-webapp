import type { NextConfig } from "next";

const basePath = "/tcs-webapp";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
