import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar2";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import SmoothWrapper from "@/components/SmoothWrapper";

// Font files can be colocated inside of `app`
const myFont = localFont({
    src: "../resources/fonts/PassoVariableTest.ttf",
    display: "swap",
});

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Kaizin",
    description: "Portfólio de Kaio Lucas, desenvolvedor front end e designer.",	
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://kaizin.vercel.app",
        siteName: "Kaizin",
        title: "Kaizin",
        description: "Portfólio de Kaio Lucas, desenvolvedor front end e designer.",
        images: [
            {
                url: "https://kaizin.vercel.app/site-banner.png",
                width: 800,
                height: 600,
                alt: "Kaizin",
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
        <html lang="pt-br">
            <head>
                <link
                    rel="stylesheet"
                    href="https://use.typekit.net/oue7veo.css"
                ></link>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body
                className={
                    myFont.className +
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
                <SmoothWrapper>
                    <Navbar />
                    {children}
                    <Footer />
                </SmoothWrapper>
            </body>
        </html>
    );
}
