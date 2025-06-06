/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "media.licdn.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "www.linkedin.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
