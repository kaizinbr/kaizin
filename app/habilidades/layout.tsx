import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Habilidades | kaizin",
    description: "Um clássico por quase 100 anos, o whisky Buchanan's DeLuxe...",
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://www.kaizin.com.br/habilidades",
        siteName: "kaizin",
        title: "Habilidades | kaizin",
        description:
            "Portfólio de Kaio Lucas, desenvolvedor front end e designer.",
        images: [
            {
                url: "https://kaizin.com.br/site-banner.png",
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
                url: "https://kaizin.com.br/site-banner.png",
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
