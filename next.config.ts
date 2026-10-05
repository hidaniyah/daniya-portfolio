import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Static-friendly portfolio; no special config needed for Netlify.
  reactStrictMode: true,
  // The standalone work index was folded into the home page.
  async redirects() {
    return [{ source: '/work', destination: '/#work', permanent: false }]
  },
}

export default nextConfig
