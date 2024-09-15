import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Instakai | kaizin",
    description: "",
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://www.kaizin.com.br/projetos/instakai",
        siteName: "kaizin",
        title: "Instakai | kaizin",
        description:
            "",
        images: [
            {
                url: "https://www.kaizin.com.br/fundos/instakai.webp",
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
                url: "https://www.kaizin.com.br/fundos/instakai.webp",
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
                    justify-center items-start
                    overflow-x-hidden
                `
                }
            >
                    {children}
            </main>
    );
}
