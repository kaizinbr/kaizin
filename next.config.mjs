/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
    },
    async redirects() {
        return [
            // Basic redirect
            {
                source: "/sitemap",
                destination: "https://drive.google.com/file/d/1fgg5D4OkknrzAI-zNuab-yfc3TcdEQ0S/view?usp=sharing",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;

// import million from "million/compiler";

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// const millionConfig = {
//   auto: true,// if you're using RSC: auto: { rsc: true },
// };

// export default million.next(nextConfig, millionConfig);
