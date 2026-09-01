import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Home dir has a stray package-lock.json; pin Turbopack to this app.
  turbopack: { root },
  // Chrome hard-requests /favicon.ico. Serve square Eren PNG there too.
  // Do not add app/favicon.ico — Next hashes it and Chrome caches a C.
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/favicon.ico", destination: "/assets/eren-stay10.png" },
      ],
    };
  },
  async headers() {
    return [
      {
        source: "/favicon.ico",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
        ],
      },
      {
        source: "/assets/eren-stay10.png",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
        ],
      },
    ];
  },
};

export default nextConfig;
