"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        });
    }, []);



    return (
        <div className={`
            h-16 w-full flex items-center justify-center
            bg-stone-200/90 z-40 backdrop-blur-xl
            fixed top-0 left-0
            transition-all duration-300

            ${scroll ? 'bg-stone-200/80 shadow-sm' : ''}
        `}>
            <nav className={`
                m-auto w-full max-w-4xl h-full
                flex items-center justify-between
            `}
            >
                <Link href="/">Kaizin</Link>
                <ul className="flex items-center justify-between">
                    <li className="mx-4">
                        <Link href="/about">Sobre</Link>
                    </li>
                    <li className="mx-4">
                        <Link href="/projects">Habilidades</Link>
                    </li>
                    <li className="mx-4">
                        <Link href="/projects">Projetos</Link>
                    </li>
                    <li className="mx-4">
                        <Link href="/contact">Contato</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}