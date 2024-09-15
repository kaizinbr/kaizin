import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Spotfaker | kaizin",
    description: "",
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://www.kaizin.com.br/projetos/spotfaker",
        siteName: "kaizin",
        title: "Spotfaker | kaizin",
        description:
            "Portfólio de Kaio Lucas, desenvolvedor front end e designer.",
        images: [
            {
                url: "https://www.kaizin.com.br/fundos/spot.webp",
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
                url: "https://www.kaizin.com.br/fundos/spot.webp",
                width: 800,
                height: 600,
                alt: "Kaizin",
            },
        ],
    },
};
