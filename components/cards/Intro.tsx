"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Intro() {
    // <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} />
    return (
        <motion.div
        className={`
            col-span-6 row-span-4
            bg-neutral-800 rounded-3xl
            border border-neutral-700
            p-8
            hover:bg-neutral-700/60
            transition duration-300
                grid grid-cols-3 gap-4
        `}
        whileHover={{ scale: 1.03 }} 
        whileTap={{ scale: 0.9 }}
    >
                <Image
                    src="/1.jpeg"
                    alt="Kaizin"
                    width={512}
                    height={512}
                    className={`
                            rounded-full
                            size-32
                        `}
                />
                <div
                    className={`
                    col-span-2
                    text-5xl font-bold
                    text-stone-300
                    h-32 flex items-center
                `}
                >
                    <h1>Kai</h1>
                </div>
                <p
                    className={`
                    col-span-3
                    text-2xl font-bold
                    text-stone-300
                `}
                >
                    Desenvolvedor Front-end e Designer
                </p>
                <p
                    className={`
                    col-span-3
                    text-lg font-medium
                    text-stone-300
                `}
                >
                    Trilhando novos caminhos através de linhas de código, ótimas
                    paletas e muita criatividade. Perfeito para conversar sobre
                    músicas, livros e boas tipografias.
                </p>
    </motion.div>
    )
}