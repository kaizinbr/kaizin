"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Qualificacoes() {
    // <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} />
    return (
        <motion.div
        className={`
            col-span-2 row-span-4
            bg-neutral-800 rounded-3xl
            border border-neutral-700
            p-8
            hover:bg-neutral-700/60
            transition duration-300
        `}
        whileHover={{ scale: 1.03 }} 
        whileTap={{ scale: 0.9 }}
    >
        
                <h1
                    className={`
                    text-stone-300 text-xl font-black 
                `}
                >
                    qualifi&shy;cações
                </h1>
    </motion.div>
    )
}