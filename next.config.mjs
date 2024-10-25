/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.unsplash.com", "api.microlink.io", "skillicons.dev", "unsplash.com", "pbs.twimg.com"],
        dangerouslyAllowSVG: true
    }
};

export default nextConfig;
