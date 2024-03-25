import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import Footer from "@/components/Footer";

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
                {/* 
                <div className={`   
                    h-80 w-full absolute top-0 left-0
                    bg-gradient-to-b from-[#C0B9DD] to-transparent
                `}></div> */}

                <Navbar />
                {children}
                <Footer />
                {/* <div
                aria-hidden="true"
                className="absolute top-16 inset-0 grid grid-cols-2 -space-x-52 opacity-10 pointer-events-none"
            >
                <div className="fix-safari-blur blur-[106px] h-96 bg-gradient-to-br from-violet-500 to-purple-400 dark:from-fuchsia-700"></div>
                <div className="fix-safari-blur blur-[106px] h-56 bg-gradient-to-r from-fuchsia-400 to-purple-300 dark:to-violet-600"></div>
                {/* <div className="fix-safari-blur blur-[106px] h-56 bg-gradient-to-r from-teal-400 to-indigo-800 dark:to-violet-600"></div>
                <div className="fix-safari-blur blur-[106px] h-56 bg-gradient-to-r from-green-500 to-rose-800 dark:to-violet-600"></div> 
            </div> */}
            </body>
        </html>
    );
}
