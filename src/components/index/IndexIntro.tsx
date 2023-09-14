"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaChevronRight, FaSun, FaMoon, FaXmark } from "react-icons/fa6";

export default function Index() {
    return (
        // <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
        <div
            className={`
            mb-8 h-[calc(100vh-8rem)] w-full flex flex-col 
        `}
        >
            <picture
                className={`
                        
                    `}
            >
                <motion.img
                    src="/beomgyu.webp"
                    alt="avatar"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    className={`
                            rounded-full
                            h-44 w-44
                        `}
                />

                {/* <div className="h-8 w-8 rounded-full bg-violet-700"></div> */}
            </picture>
            <h1
                className={`
                text-4xl font-bold text-zinc-100 space-grotesk 
                mt-8
            `}
            >
                Beomgyu
            </h1>

            <h2
                className={`
                text-zinc-300 text-xl space-grotesk 
                mt-3
            `}
            >
                Frontend Developer
            </h2>

            <p className="text-zinc-400 text-lg mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis aliquid nobis at? Dignissimos repellat ab alias
                delectus, quaerat nostrum aliquid nihil error cum, maxime
                accusamus molestiae? Aliquid saepe maiores omnis.
            </p>

            <motion.a
                className={`
                    mt-8 px-6 py-2 rounded-xl bg-violet-400/20 text-zinc-100
                    border border-violet-400/30
                    hover:bg-violet-600 font-semibold space-grotesk text-base
                    text-center flex items-center justify-center
                    transition duration-200 ease-in-out
                `}
                // whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="/about"
            >
                    Mais sobre mim <FaChevronRight className=" inline h-3" />
            </motion.a>

        </div>
    );
}
