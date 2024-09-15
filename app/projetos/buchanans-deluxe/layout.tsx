import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fotografia de produto - Buchanan's Deluxe 12 years | kaizin",
    description: "Um clássico por quase 100 anos, o whisky Buchanan's DeLuxe...",
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://www.kaizin.com.br/projetos/buchanans-deluxe",
        siteName: "kaizin",
        title: "kaizin",
        description:
            "Portfólio de Kaio Lucas, desenvolvedor front end e designer.",
        images: [
            {
                url: "https://www.kaizin.com.br/buchanans/366.webp",
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
                url: "https://www.kaizin.com.br/buchanans/366.webp",
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

