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
        <div
            className={`
            col-span-3 flex items-center justify-center
            z-40 
            w-full sticky top-16
            transition-all duration-300

        `}
        >
            <nav
                className={`
                m-auto w-full max-w-4xl h-full
                flex flex-col items-start justify-start
                
            `}
            >
                {/* <div
                    className={`
                        grid grid-cols-[24px_minmax(60px,_1fr)_1px] 
                        w-full
                    `}
                >
                    <div className="w-6 h-full">
                        <span
                            className={`
                                flex
                            `}
                        ></span>
                    </div>
                    <Link href="/" className="col-span-2 my-4">Kaizin</Link>
                    <div className="w-6 flex justify-start items-center h-full">
                        <span
                            className={`
                                flex
                                size-2 rounded-full
                                bg-blue-500
                            `}
                        ></span>
                    </div>
                    <Link href="/" className="col-span-2 my-4">Kaizin</Link>
                    <div className="w-6 h-full">
                        <span
                            className={`
                                flex
                            `}
                        ></span>
                    </div>
                    <Link href="/" className="col-span-2 my-4">Kaizin</Link>
                    <div className="w-6 h-full">
                        <span
                            className={`
                                flex
                            `}
                        ></span>
                    </div>
                    <Link href="/" className="col-span-2 my-4">Kaizin</Link>
                </div> */}

                <ul className="flex flex-col items-start justify-between">
                    {lis}
                </ul>
            </nav>
        </div>
    );
}
