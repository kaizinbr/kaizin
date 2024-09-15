import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Livreto de projeto social | kaizin",
    description: "Este projeto consistiu na realização de uma ação social para a cadeira de Design, Sociedade e Cultura...",
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://www.kaizin.com.br/projetos/livreto-dsc",
        siteName: "kaizin",
        title: "Livreto de projeto social | kaizin",
        description:
            "Este projeto consistiu na realização de uma ação social para a cadeira de Design, Sociedade e Cultura...",
        images: [
            {
                url: "https://www.kaizin.com.br/fundos/social.webp",
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
                url: "https://www.kaizin.com.br/fundos/social.webp",
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
    return (
            <main
                className={
                    `
                    bg-white-seashell
                    text-neutral-900  
                    mt-20
                    flex flex-col
                    justify-center
                    overflow-x-hidden w-full items-center
                `
                }
            >
                    {children}
            </main>
    );
}
