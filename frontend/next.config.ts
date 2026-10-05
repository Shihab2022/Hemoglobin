import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // This app lives in a monorepo (frontend/ + server/). Pinning the
    // Turbopack root stops Next from guessing between the two lockfiles.
    root: path.resolve(__dirname, ".."),
  },
};

export default nextConfig;

