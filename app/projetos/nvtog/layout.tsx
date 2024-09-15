import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fotografia acadêmica - Livro Ninguém Vai Te Ouvir Gritar | kaizin",
    description: "Fotografia acadêmica - Livro Ninguém Vai Te Ouvir Gritar.",
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://www.kaizin.com.br/projetos/nvtog",
        siteName: "kaizin",
        title: "Fotografia acadêmica - Livro Ninguém Vai Te Ouvir Gritar | kaizin",
        description:
            "Fotografia acadêmica - Livro Ninguém Vai Te Ouvir Gritar",
        images: [
            {
                url: "https://www.kaizin.com.br/fundos/nvtog.webp",
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
                url: "https://www.kaizin.com.br/fundos/nvtog.webp",
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
                    overflow-x-hidden
                `
                }
            >
                    {children}
            </main>
    );
}
