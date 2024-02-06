"use client";

import Intro from "@/components/cards/Intro";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Item {
    id: number;
    otherId: string;
    title: string;
    subtitle: string;
}

export default function Habilidades() {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const items: Item[] = [
        { id: 1, otherId: "1", title: "Title 1", subtitle: "Subtitle 1" },
        { id: 2, otherId: "2", title: "Title 2", subtitle: "Subtitle 2" },
        { id: 3, otherId: "3", title: "Title 3", subtitle: "Subtitle 3" },
    ];

    return (
        <div className="flex py-6">
            {items.map((item) => (
                <motion.div
                    className={`
                        w-32 h-32
                        bg-gray-200 text-gray-900
                        rounded-md
                        flex items-center justify-center
                        cursor-pointer m-4
                    
                    `}
                    key={item.id}
                    layoutId={item.otherId}
                    onClick={() => setSelectedId(item.otherId)}
                >
                    <motion.h5>{item.subtitle}</motion.h5>
                    {/* <motion.h2>{item.title}</motion.h2> */}
                </motion.div>
            ))}

            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        layoutId={selectedId}
                        onClick={() => setSelectedId(null)}
                        className={`
                            w-32 h-32
                            bg-gray-200 text-gray-900
                            rounded-md
                            flex items-center justify-center
                            cursor-pointer m-4
                            fixed top-0 left-0
                        `}
                    >
                        <motion.h5>Subtitle</motion.h5>
                        <motion.h2>Title</motion.h2>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
