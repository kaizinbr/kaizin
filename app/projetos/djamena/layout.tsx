import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
    title: "Landing page Djamena Agency | kaizin",
    description: "Uma landing page para a agência de viagens Djamena Agency...",
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://www.kaizin.com.br/projetos/djamena",
        siteName: "kaizin",
        title: "Landing page Djamena Agency | kaizin",
        description:
            "Portfólio de Kaio Lucas, desenvolvedor front end e designer.",
        images: [
            {
                url: "https://www.kaizin.com.br/fundos/djamena.webp",
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
                url: "https://www.kaizin.com.br/fundos/djamena.webp",
                width: 800,
                height: 600,
                alt: "Kaizin",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div>{children}</div>;
}
