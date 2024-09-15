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
import gsap from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const cards = [
    {
        name: "Buchanan's Deluxe",
        imageUrl: "/fundos/buchanans.webp",
        linkPath: "/projetos/buchanans-deluxe",
        chips: ["fotografia", "produto"],
    },
    {
        name: "Fotografia acadêmica - Livro Ninguém Vai Te Ouvir Gritar",
        imageUrl: "/fundos/nvtog.webp",
        linkPath: "/projetos/nvtog",
        chips: ["fotografia", "produto"],
    },
    {
        name: "Livreto de ação social",
        imageUrl: "/fundos/social.webp",
        linkPath: "/projetos/livreto-dsc",
        chips: ["editorial"],
    },
    {
        name: "Spotfaker",
        imageUrl: "/fundos/spot.webp",
        linkPath: "/projetos/spotfaker",
        chips: ["website"],
    },
    {
        name: "xisbank",
        imageUrl: "/fundos/xisbank.webp",
        linkPath: "/projetos/xisbank",
        chips: ["web design", "landing page"],
    },
    {
        name: "Identidade Visual SouDigital",
        imageUrl: "/fundos/sd.webp",
        linkPath:
            "https://www.behance.net/gallery/187066273/SouDigital-Identidade-Visual",
        chips: ["web design", "identidade visual", "branding"],
    },
    {
        name: "Djamena Agency",
        imageUrl: "/fundos/djamena.webp",
        linkPath: "/projetos/djamena",
        chips: ["web design", "landing page", "website"],
    },
    {
        name: "Cartaz tipográfico Marília Mendonça",
        imageUrl: "/fundos/marilia.webp",
        linkPath:
            "https://www.behance.net/gallery/181561229/Cartaz-tipografico-Marilia-Mendonca",
        chips: ["web design", "colaborativo"],
    },
    {
        name: "Embalagem Drip Coffee KAFFA",
        imageUrl: "/fundos/kaffa.webp",
        linkPath: "https://www.behance.net/gallery/180723801/Drip-Coffee-KAFFA",
        chips: ["web design", "colaborativo", "packaging"],
    },
    {
        name: "Instagram Clone",
        imageUrl: "/fundos/instakai.webp",
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
    } else if (title === "colaborativo") {
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

function Item({
    imageUrl,
    linkPath,
    chips,
}: {
    imageUrl: string;
    linkPath: string;
    chips: string[];
}) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scale = useTransform(scrollYProgress, [-0.7, 0.7, 1], [0.8, 1, 1]);
    const translateY = useTransform(scrollYProgress, [0, 1], [100, 0]);

    return (
        <div
            ref={ref}
            className={`
                relative  w-full md:w-[calc(50%-16px)] md:mx-2 h-8 box 
                flex justify-center items-center overflow-hidden rounded-none hover:rounded-3xl
                bg-center bg-cover transition-all duration-200   
                hover:shadow-lg group
            `}
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <Link
                href={linkPath}
                className={`
                    group flex h-full w-full flex-col items-center justify-center 
                    overflow-hidden rounded-xl transition duration-200 bg-transparent backdrop-blur-0
                    text-neutral-200 hover:underline group-hover:bg-black/40 backdrop-filter hover:backdrop-blur-md
                `}
            >
                <h1 className="gelica-title text-3xl opacity-0 transition-all duration-200 group-hover:opacity-100">
                    Ver projeto
                </h1>
            </Link>
            {/* <div className="absolute bottom-0 left-0 z-10 flex flex-row">
                {chips.map((chip, index) => (
                    <Chip key={index} title={chip} />
                ))}
            </div> */}
        </div>
    );
}

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Feed({ props }: { props?: any }) {
    gsap.registerPlugin(useGSAP);

    const container = useRef<HTMLElement | any>();

    useGSAP(
        () => {
            const boxes = gsap.utils.toArray<HTMLElement>(".box");

            const conts = gsap.utils.toArray<HTMLElement>(".cont");
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 90%",
                    end: "top top",
                    scrub: 1.5,
                },
            });

            boxes.forEach((box, index) => {
                const cont = conts[index];
                gsap.to(box, {
                    height: "400px",
                    duration: 1,
                    scrollTrigger: {
                        trigger: cont,
                        start: "top 90%",
                        end: "top top",
                        scrub: 1.5,
                        // markers: true,
                    },
                });
            });
        },
        { scope: container }
    );

    return (
        <div
            className={`relative w-full py-4 pb-10 h- overflow-hidden flex flex-row flex-wrap  justify-start gap-y-4  ${props} `}
            ref={container}
        >
            {/* <div className="flex flex-row gap-4 justify-center items-center w-full h-16">
            <p className="px-6 py-2 rounded-full bg-outrageous-orange-400 text-mortar-50">todos</p>
            <p className="px-6 py-2 rounded-full bg-outrageous-orange-400 text-mortar-50">identidade visual</p>
            <p className="px-6 py-2 rounded-full bg-outrageous-orange-400 text-mortar-50">websites</p>
            <p className="px-6 py-2 rounded-full bg-outrageous-orange-200 ">acadêmico</p>
            </div> */}
            <div className="absolute w-full top-0 h-auto flex flex-wrap -z-10 invisible">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-red-600/20  w-full md:w-1/2 h-[400px] cont"
                    ></div>
                ))}
            </div>

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
