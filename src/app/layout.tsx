import "./globals.css";
import type { Metadata } from "next";
import { Inter, Fira_Sans } from "next/font/google";
import Header from "../components/header/Header";

const inter = Inter({ subsets: ["latin"] });
const fira_sans = Fira_Sans({weight: "400", subsets: ["latin"]});

import localFont from "next/font/local";



export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={ `
               w-full text-zinc-100 bg-zinc-900 dark:ring-zinc-300/20 relative
            `}>
                <Header />
                <main
                    className={`
                    flex min-h-screen flex-col items-start justify-between 
                    max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8
                    mt-24 z-20 
                `}
                >
                    {children}
                </main>
            </body>
        </html>
    );
}