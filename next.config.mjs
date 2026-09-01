import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Home dir has a stray package-lock.json; pin Turbopack to this app.
  turbopack: { root },
};

export default nextConfig;
