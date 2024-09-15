import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Sobre mim | kaizin",
    description: "Portfólio de Kaio Lucas, desenvolvedor front end e designer.",
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://kaizin.com.br/sobre",
        siteName: "kaizin",
        title: "kaizin",
        description:
            "Portfólio de Kaio Lucas, desenvolvedor front end e designer.",
        images: [
            {
                url: "https://kaizin.vercel.app/site-banner.png",
                width: 800,
                height: 600,
                alt: "kaizin",
            },
        ],
    },
    twitter: {
        site: "kaizin",
        images: [
            {
                url: "https://kaizin.vercel.app/site-banner.png",
                width: 800,
                height: 600,
                alt: "Kaizin",
            },
        ],
    },
};
