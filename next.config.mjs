/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { typedRoutes: true },
  reactStrictMode: true,
  env: {
    // Client-exposed keys (Next.js will inline them into the bundle)
    NEXT_PUBLIC_MAPTILER_KEY: process.env.NEXT_PUBLIC_MAPTILER_KEY || "lbzVs1kdbr7rizHMEzfH",
    NEXT_PUBLIC_LIBRETRANSLATE_URL: process.env.NEXT_PUBLIC_LIBRETRANSLATE_URL || "https://libretranslate.com",
    NEXT_PUBLIC_RADAR_PUBLISHABLE_KEY_TEST: process.env.NEXT_PUBLIC_RADAR_PUBLISHABLE_KEY_TEST || "prj_test_pk_aa9c8e11ed866ffde65930417d7776f731c93723",
    NEXT_PUBLIC_RADAR_PUBLISHABLE_KEY_LIVE: process.env.NEXT_PUBLIC_RADAR_PUBLISHABLE_KEY_LIVE || "prj_live_pk_d9b32b9b95fdebcd090a877252c7e557cd71176a"
  }
};

export default nextConfig;