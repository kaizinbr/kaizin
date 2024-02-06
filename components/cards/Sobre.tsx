"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Sobre() {
    // <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} />
    return (
        <motion.div
        className={`
            col-span-4 row-span-4
            bg-neutral-800 rounded-3xl
            border border-neutral-700
        `}
        whileHover={{ scale: 1.03, backgroundColor: "rgba(64, 64, 64, 0.6)" }} 
        whileTap={{ scale: 0.8 }}
    >
        <Link
                href="/k/sobre"
                className={`
                    size-full
                    p-8
                    flex flex-col
                    justify-between
                `}
            >
                <h1 className="text-stone-300 text-3xl font-black mb-4">
                    sobre
                </h1>
                <p className="text-lg line-clamp-[8]">
                    Olá, meu nome é Kaio, mas pode me chamar de Kai. Sou um
                    desenvolvedor front-end e designer, apaixonado por
                    tecnologia e design.
                    <br /> <br />
                    Atualmente estou cursando o 2º ano do ensino médio, e estou
                    estudando desenvolvimento web desde o início de 2021.
                </p>
            </Link>
    </motion.div>
    )
}