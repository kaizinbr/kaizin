"use client";

import { HiOutlineMail, HiMenuAlt4, HiX } from "react-icons/hi";
import { FaInstagram, FaBehance } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [scroll, setScroll] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 20) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        });
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else document.body.style.overflowY = "scroll";
        return () => {};
    }, [isOpen]);

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
                        ${
                            pathname === "/k/sobre"
                                ? "font-bold text-neutral-200"
                                : "text-neutral-400"
                        }
                    `}
            >
                <Link href="/k/sobre">Sobre</Link>
            </li>
            <li
                className={`
                        my-4 
                        ${
                            pathname === "/k/habilidades"
                                ? "font-bold text-neutral-200"
                                : "text-neutral-400"
                        }
                    `}
            >
                <Link href="/k/habilidades">Habilidades</Link>
            </li>
            <li
                className={`
                        my-4 
                        ${
                            pathname === "/k/qualificacoes"
                                ? "font-bold text-neutral-200"
                                : "text-neutral-400"
                        }
                    `}
            >
                <Link href="/k/qualificacoes">Qualificações</Link>
            </li>
            <li
                className={`
                        my-4 
                        ${
                            pathname === "/k/projetos"
                                ? "font-bold text-neutral-200"
                                : "text-neutral-400"
                        }
                    `}
            >
                <Link href="/k/projetos">Projetos</Link>
            </li>
            <li
                className={`
                        my-4 
                        ${
                            pathname === "/contact"
                                ? "font-bold text-neutral-200"
                                : "text-neutral-400"
                        }
                    `}
            >
                <Link href="/contact">Contato</Link>
            </li>
        </>
    );

    return (
        <>
            <header
                className={`
                    col-span-3 flex items-center justify-center
                    z-50 
                    w-full h-20 fixed top-0
                    transition-all duration-300
                    border-b backdrop-blur-3xl
            ${
                scroll
                    ? "bg-white-seashell-50 border-[#e7e6e4] "
                    : "bg-white-seashell border-transparent"
            }

        `}
            >
                <nav
                    className={`
                        m-auto w-full max-w-4xl h-full
                        flex flex-row wrap items-start justify-between
                        px-6 py-3 md:py-0 md:px-8
                                
                    `}
                >
                    <div
                        className={`
                    flex items-center justify-center
                    h-full
                    transition-all duration-300
                    mielle-title text-4xl
                `}
                    >
                        <Link
                            href="/"
                            className={`
                        font-bold
                    
                    `}
                        >
                            kai
                            <span
                                className={`
                            transition-all duration-300
                            ${scroll ? "opacity-0" : "opacity-100"}
                        `}
                            >
                                zin
                            </span>
                        </Link>
                    </div>

                    <div
                        className={`
                        flex-row gap-4
                        h-full items-center
                        gelica-menu hidden md:flex
                    `}
                    >
                        <div className={``}>
                            <Link href="/">projetos</Link>
                        </div>
                        <div className={``}>
                            <Link href="/habilidades">habilidades</Link>
                        </div>
                        <div className={``}>
                            <Link href="/sobre">sobre</Link>
                        </div>
                    </div>

                    {/* mobile menu */}

                    <div
                        className={`
                            md:hidden
                            h-full
                            flex items-center justify-center
                            gelica-menu
                    `}
                    >
                        <button
                            onClick={() => {
                                setIsOpen(!isOpen);
                                console.log("is open", isOpen);
                            }}
                        >
                            {isOpen ? (
                                <HiX className={` size-8`} />
                            ) : (
                                <HiMenuAlt4 className={` size-8`} />
                            )}
                        </button>
                    </div>
                </nav>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`
                    fixed top-0 left-0 w-full h-full
                    bg-white-seashell-50
                    flex items-center justify-center
                    z-40
                `}
                    >
                        <div
                            className={`
                                    absolute top-20 left-0 right-0
                                    h-[calc(100%-5rem)]
                                    flex backdrop-blur-3xl bg-white-seashell-50
                                `}
                        >
                            <div
                                className={`
                                    flex-col gap-4
                                    h-full items-start
                                    w-full px-4 pt-12
                                    gelica-menu flex
                                `}
                            >
                                <div className={`text-4xl`}>
                                    <Link
                                        href="/"
                                        onClick={() => {
                                            setIsOpen(false);
                                        }}
                                    >
                                        projetos
                                    </Link>
                                </div>
                                <div className={`text-4xl`}>
                                    <Link
                                        href="/habilidades"
                                        onClick={() => {
                                            setIsOpen(false);
                                        }}
                                    >
                                        habilidades
                                    </Link>
                                </div>
                                <div className={`text-4xl`}>
                                    <Link
                                        href="/sobre"
                                        onClick={() => {
                                            setIsOpen(false);
                                        }}
                                    >
                                        sobre
                                    </Link>
                                </div>

                                <div className="flex flex-row items-center justify-start mt-10 gap-3">
                                <Link href="mailto:kaiolucas1812@gmail.com" target="_blank">
                                    <HiOutlineMail className="size-6" />
                                </Link>
                                <Link href="https://www.behance.net/kaizin" target="_blank">
                                    <FaBehance className="size-6" />
                                </Link>
                                <Link href="https://www.instagram.com/05kaizin" target="_blank">
                                    <FaInstagram className="size-5" />
                                </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
