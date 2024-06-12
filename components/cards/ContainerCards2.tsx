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
        chips: ["web design", "landing page", "website"],
    },
    {
        name: "xisbank",
        imageUrl: "/xisbank.png",
        linkPath: "/projetos/xisbank",
        chips: ["web design", "landing page"],
    },
    {
        name: "Identidade Visual SouDigital",
        imageUrl: "/sd.png",
        linkPath:
            "https://www.behance.net/gallery/187066273/SouDigital-Identidade-Visual",
        chips: ["web design", "identidade visual", "branding"],
    },
    {
        name: "Cartaz tipográfico Marília Mendonça",
        imageUrl: "/marilia.png",
        linkPath:
            "https://www.behance.net/gallery/181561229/Cartaz-tipografico-Marilia-Mendonca",
            chips: ["web design", "acadêmico"],
    },
    {
        name: "Embalagem Drip Coffee KAFFA",
        imageUrl: "/kaffa.png",
        linkPath: "https://www.behance.net/gallery/180723801/Drip-Coffee-KAFFA",
        chips: ["web design", "acadêmico", "packaging"],
    },
    {
        name: "Lyricard Generator",
        imageUrl: "/lyricardmain.png",
        linkPath: "/projetos/lyricard",
        chips: ["website"],
    },
    {
        name: "Instagram Clone",
        imageUrl: "/instakai.png",
        linkPath: "/projetos/instakai",
        chips: ["website"],
    },
];

    function Chip({ title }: { title: string }) {
        let backgroundColor = "";

        if (title === "landing page") {
            backgroundColor = "bg-emerald-400";
        } else if (title === "website") {
            backgroundColor = "bg-indigo-400";
        } else if (title === "web design") {
            backgroundColor = "bg-outrageous-orange-400";
        } else if (title === "identidade visual") {
            backgroundColor = "bg-mortar-900";
        } else if (title === "branding") {
            backgroundColor = "bg-purple-500";
        } else if (title === "acadêmico") {
            backgroundColor = "bg-pink-400";
        } else if (title === "packaging") {
            backgroundColor = "bg-indigo-500";
        } else {
            backgroundColor = "bg-gray-500";
        }

        return (
            <div
                className={`
                    chip  py-1 px-3 m-2 
                    text-white rounded-full text-xs gelica-menu
                    border border-white/30 ${backgroundColor} 
                `}
            >
                <span>{title}</span>
            </div>
        );

}

function Item({ imageUrl, linkPath, chips }: { imageUrl: string; linkPath: string; chips: string[]}) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scale = useTransform(scrollYProgress, [-0.7, 0.7, 1], [0.8, 1, 1]);
    const translateY = useTransform(scrollYProgress, [0, 1], [100, 0]);

    return (
        <motion.div
            ref={ref}
            className={`relative mb-8`}
            style={{ scale, translateY}}

        >
            <Link
                href={linkPath}
                className={`group flex h-[500px] w-fit flex-col items-center justify-start overflow-hidden rounded-xl transition duration-200 hover:text-neutral-800 hover:underline`}
            >
                <Image
                    src={imageUrl}
                    alt="print"
                    width={800}
                    height={450}
                    className={`h-full object-cover transition duration-200 group-hover:opacity-85`}
                />
            </Link>
            <div
                className="absolute bottom-0 left-0 z-10 flex flex-row"
            >
                {chips.map((chip, index) => (
                    <Chip key={index} title={chip} />
                ))}
            </div>
        </motion.div>
    );
}

export default function ContainerCards({ props }: { props?: any }) {
    return (
        <div
            className={`relative flex w-full flex-col  py-4 md:grid md:grid-cols-12 md:px-12 lg:px-0 ${props} `}
        >
            {cards.map((card, index) => (
                <Item
                    key={index}
                    imageUrl={card.imageUrl}
                    linkPath={card.linkPath}
                    chips={card.chips}
                />
            ))}
        </div>
    );
}
