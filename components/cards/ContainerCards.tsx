"use client";

import Image from "next/image";
import Link from "next/link";
import {
    motion,
    useScroll,
    useMotionValueEvent,
    useTransform,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";

const cards = [
    {
        name: "Djamena Agency",
        imageUrl: "/djamena.png",
        linkPath: "/projetos/djamena",
    },
    {
        name: "xisbank",
        imageUrl: "/xisbank.png",
        linkPath: "/projetos/xisbank",
    },
    {
        name: "Identidade Visual SouDigital",
        imageUrl: "/sd.png",
        linkPath:
            "https://www.behance.net/gallery/187066273/SouDigital-Identidade-Visual",
    },
    {
        name: "Cartaz tipográfico Marília Mendonça",
        imageUrl: "/marilia.png",
        linkPath:
            "https://www.behance.net/gallery/181561229/Cartaz-tipografico-Marilia-Mendonca",
    },
    {
        name: "Embalagem Drip Coffee KAFFA",
        imageUrl: "/kaffa.png",
        linkPath: "https://www.behance.net/gallery/180723801/Drip-Coffee-KAFFA",
    },
    {
        name: "Lyricard Generator",
        imageUrl: "/lyricardmain.png",
        linkPath: "/projetos/lyricard",
    },
    {
        name: "Instagram Clone",
        imageUrl: "/instakai.png",
        linkPath: "/projetos/instakai",
    },
];

function Item({ imageUrl, linkPath }: { imageUrl: string; linkPath: string }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end start"],
    });

    return (
        <motion.div
            ref={ref}
            className={`transition duration-700`}
            initial={{
                scale: 0.9,
            }}
            whileInView={{
                scale: 1,
            }}
            viewport={{
                once: false,
                margin: "-300px",
                // amount: "all",
            }}

        >
            <Link
                href={linkPath}
                className={`
                        group flex w-fit flex-col items-center justify-start 
                        transition duration-200 hover:text-neutral-800 hover:underline
                        h-[calc(100vh/2)] rounded-xl overflow-hidden
                    `}
            >
                <Image
                    src={imageUrl}
                    alt="print"
                    width={800}
                    height={450}
                    className={`h-full object-cover transition duration-200 group-hover:opacity-85`}
                />
                {/* <h2 className={`mb-2 mt-4 text-2xl font-bold`}>{card.name}</h2> */}
            </Link>
        </motion.div>
    );
}

export default function ContainerCards({ props }: { props?: any }) {
    return (
        <div
            className={`relative flex w-full flex-col gap-60 py-4 md:grid md:grid-cols-12 md:px-12 lg:px-0 ${props} `}
        >
            {cards.map((card, index) => (
                <Item
                    key={index}
                    imageUrl={card.imageUrl}
                    linkPath={card.linkPath}
                />
            ))}
        </div>
    );
}
