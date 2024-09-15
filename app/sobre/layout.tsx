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
