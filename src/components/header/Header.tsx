"use client";

import {
    useAnimate,
    stagger,
    motion,
    AnimatePresence,
    usePresence,
} from "framer-motion";
import Image from "next/image";
import { MobileMenu } from "./Navbar";
import { FaChevronDown, FaSun, FaMoon, FaXmark } from "react-icons/fa6";
import { CgMenuRightAlt } from "react-icons/cg";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

type ModalProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    closeMenu: boolean;
    setCloseMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

function useMenuAnimation(closeMenu: boolean) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        // animate(".arrow", { rotate: closeMenu ? 180 : 0 }, { duration: 0.2 });

        animate(
            "nav",
            {
                clipPath: closeMenu
                    ? "inset(0% 0% 0% 0% round 10px)"
                    : //       top, right, bottom, left
                      "inset(10% 3% 90% 97% round 10px)",
            },
            {
                type: "spring",
                bounce: 0,
                duration: 0.5,
            }
        );

        animate(
            ".navlink",
            closeMenu
                ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
            {
                duration: 0.2,
                delay: closeMenu ? staggerMenuItems : 0,
            }
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [closeMenu]);

    return scope;
}

const DropdownMenu = ({ isOpen, setIsOpen, closeMenu, setCloseMenu }: ModalProps) => {
    const ref = useRef(null);
    // const [closeMenu, setCloseMenu] = useState(false);
    const scope = useMenuAnimation(closeMenu);

    useEffect(() => {
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);

    return (
        <div
            className={`
                    ${
                        isOpen
                            ? " bg-black/60 backdrop-blur-sm z-40 inset-0 fixed w-full h-screen"
                            : "-z-10"
                    }
                    px-4 
                `}
            ref={scope}
        >
            <nav
                className={`
                        flex flex-col gap-2
                        bg-zinc-900
                        fixed inset-x-4 top-8 z-50 origin-top rounded-3xl p-8 
                        border border-zinc-800 opacity-100 scale-100
                    `}
                ref={ref}
            >
                <div className="flex flex-row justify-between">
                    <span className="text-sm text-zinc-500 font-semibold">
                        menu
                    </span>
                    <button
                        onClick={() => {
                            setCloseMenu(!closeMenu);
                            setTimeout(() => {
                                setIsOpen(!isOpen);
                            }, 480);
                        }}
                    >
                        <FaXmark />
                    </button>
                </div>
                <ul className="divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                    <li
                        className={`
                                    py-3
                                    navlink
                                `}
                    >
                        <Link href="#">Home</Link>
                    </li>
                    <li
                        className={`
                                    py-3
                                    navlink
                                `}
                    >
                        <Link href="#">Home</Link>
                    </li>
                    <li
                        className={`
                                    py-3
                                    navlink
                                `}
                    >
                        <Link href="#">Home</Link>
                    </li>
                    <li
                        className={`
                                    py-3
                                    navlink
                                `}
                    >
                        <Link href="#">Home</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default function Header() {
    const [scrollY, setScrollY] = useState(0);
    const [scrollDirection, setScrollDirection] = useState("up");
    const [moreOptions, setMoreOptions] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [closeMenu, setCloseMenu] = useState(false);
    // const scope = useMenuAnimation(isOpen);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > scrollY) {
            setScrollDirection("down");
            console.log("down");
        } else {
            setScrollDirection("up");
            console.log("up");
        }
        setScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    });

    return (
        <header
            className={`
                fixed flex flex-col justify-start sm:px-8
                w-full h top-0 left-0 z-50
                transition-all duration-300 ease-in-out 
                ${isOpen ? "" : "overflow-clip"}
                px-4 pt-6 ${
                    scrollDirection === "up"
                        ? "translate-y-0"
                        : "-translate-y-full"
                }
            `}
        >
            <div className="flex justify-between w-full max-w-7xl lg:px-8">
                <picture
                    className={`
                        overflow-hidden rounded-full
                    `}
                >
                    <Image
                        src="/1.jpg"
                        alt="avatar"
                        width={48}
                        height={48}
                        className={`
                            rounded-full
                        `}
                    />

                    {/* <div className="h-8 w-8 rounded-full bg-violet-700"></div> */}
                </picture>
                <div className="flex gap-4 justify-normal items-start">
                    {/* <MobileMenu /> */}
                    <button
                        className={`
                            group flex gap-2 items-center rounded-full 
                            bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 
                            backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20
                        `}
                    >
                        <FaMoon className="h-[21px]" />
                    </button>
                    <button
                        className={`
                            group flex gap-2 items-center rounded-full 
                            bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 
                            backdrop-blur dark:bg-zinc-700/50 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20
                        `}
                        onClick={() => {
                            // setMoreOptions(!moreOptions);
                            setIsOpen(!isOpen);
                            setCloseMenu(!closeMenu);
                        }}
                    >
                        Menu <FaChevronDown className="h-3 w-3 arrow" />
                    </button>
                </div>
            </div>
            <DropdownMenu isOpen={isOpen} setIsOpen={setIsOpen} closeMenu={closeMenu} setCloseMenu={setCloseMenu} />
        </header>
    );
}
