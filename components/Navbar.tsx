"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 20) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        });
    }, []);

    const pathname = usePathname();

    const lis = (
        <>
            <li
                className={`
                        my-4 
                        ${pathname === "/" ? "font-bold" : ""}
                    `}
            >
                <Link href="/" className="col-span-2">
                    Kaizin
                </Link>
            </li>
            <li
                className={`
                        my-4 
                        ${pathname === "/k/sobre" ? "font-bold text-neutral-200" : "text-neutral-400"}
                    `}
            >
                <Link href="/k/sobre">Sobre</Link>
            </li>
            <li
                className={`
                        my-4 
                        ${pathname === "/k/habilidades" ? "font-bold text-neutral-200" : "text-neutral-400"}
                    `}
            >
                <Link href="/k/habilidades">Habilidades</Link>
            </li>
            <li
                className={`
                        my-4 
                        ${pathname === "/k/qualificacoes" ? "font-bold text-neutral-200" : "text-neutral-400"}
                    `}
            >
                <Link href="/k/qualificacoes">Qualificações</Link>
            </li>
            <li
                className={`
                        my-4 
                        ${pathname === "/k/projetos" ? "font-bold text-neutral-200" : "text-neutral-400"}
                    `}
            >
                <Link href="/k/projetos">Projetos</Link>
            </li>
            <li
                className={`
                        my-4 
                        ${pathname === "/contact" ? "font-bold text-neutral-200" : "text-neutral-400"}
                    `}
            >
                <Link href="/contact">Contato</Link>
            </li>
        </>
    );

    return (
        <header
            className={`
            col-span-3 flex items-center justify-center
            z-40 
            w-full h-20 fixed top-0
            transition-all duration-300
            border-b backdrop-blur-xl
            ${scroll ? "bg-white-seashell-50 border-[#e7e6e4] " : "bg-white-seashell border-transparent"}

        `}
        >
            <nav
                className={`
                m-auto w-full max-w-4xl h-full
                flex flex-row items-start justify-between
                px-8
                
            `}
            >

                <div className={`
                    flex items-center justify-center
                    h-full
                    transition-all duration-300
                    mielle-title text-4xl
                `}>
                    <Link href="/" className={`
                        font-bold
                    
                    `}>
                        kai<span className={`
                            transition-all duration-300
                            ${scroll ? "opacity-0" : "opacity-100"}
                        `}>zin</span>
                    </Link>
                </div>

                <div className={`
                    flex flex-row gap-4
                    h-full items-center
                    gelica-menu
                `}>
                    <div className={``}>
                        <Link href="/">portfolio</Link>
                    </div>
                    <div className={``}>
                        <Link href="/skills">habilidades</Link>
                    </div>
                    <div className={``}>
                        <Link href="/about">sobre</Link>
                    </div>
                </div>
                

                {/* <ul className="flex flex-col items-start justify-between">
                    {lis}
                </ul> */}
            </nav>
        </header>
    );
}
