import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "xisbank | kaizin",
    description: "Uma landing page para um banco.",
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://www.kaizin.com.br/projetos/xisbank",
        siteName: "kaizin",
        title: "xisbank | kaizin",
        description:
            "Portfólio de Kaio Lucas, desenvolvedor front end e designer.",
        images: [
            {
                url: "https://www.kaizin.com.br/fundos/xisbank.webp",
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
                url: "https://www.kaizin.com.br/fundos/xisbank.webp",
                width: 800,
                height: 600,
                alt: "Kaizin",
            },
        ],
    },
};
