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
            {
                source: "/sitemap]",
                destination: "https://drive.google.com/file/d/1fgg5D4OkknrzAI-zNuab-yfc3TcdEQ0S/view?usp=sharing",
                permanent: true,
            },
            {
                source: "/sitemap%5d",
                destination: "https://drive.google.com/file/d/1fgg5D4OkknrzAI-zNuab-yfc3TcdEQ0S/view?usp=sharing",
                permanent: true,
            },
            {
                source: "/sitemap%5d.",
                destination: "https://drive.google.com/file/d/1fgg5D4OkknrzAI-zNuab-yfc3TcdEQ0S/view?usp=sharing",
                permanent: true,
            },
            {
                source: "/mapa",
                destination: "https://drive.google.com/file/d/1rb0p2pUm1BqsTfxT8Z6mU_SU_LJzkPsa/view?usp=sharing",
                permanent: true,
            },
            {
                source: "/mapa]",
                destination: "https://drive.google.com/file/d/1rb0p2pUm1BqsTfxT8Z6mU_SU_LJzkPsa/view?usp=sharing",
                permanent: true,
            },
            {
                source: "/mapa%5d",
                destination: "https://drive.google.com/file/d/1rb0p2pUm1BqsTfxT8Z6mU_SU_LJzkPsa/view?usp=sharing",
                permanent: true,
            },
            {
                source: "/brainstorming",
                destination: "https://drive.google.com/file/d/14itE-ItNqM92xIYMNy1f0WRP0krCEzDo/view?usp=drive_link",
                permanent: true,
            },
            {
                source: "/brainstorming]",
                destination: "https://drive.google.com/file/d/14itE-ItNqM92xIYMNy1f0WRP0krCEzDo/view?usp=drive_link",
                permanent: true,
            },
            {
                source: "/brainstorming%5d",
                destination: "https://drive.google.com/file/d/14itE-ItNqM92xIYMNy1f0WRP0krCEzDo/view?usp=drive_link",
                permanent: true,
            },
            {
                source: "/prototipo",
                destination: "https://www.figma.com/proto/kCHROs6EtellBN0mYVhs70/wireframes?node-id=151-1193&t=RYkzH53ok4jx9ia1-1",
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
