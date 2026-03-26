/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Use server output when NEXT_OUTPUT_MODE=server (default for deployment builds).
  // Leave unset only for static export workflows.
  output: process.env.NEXT_OUTPUT_MODE === 'server' ? undefined : 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
