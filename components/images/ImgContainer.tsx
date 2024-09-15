"use client";

import Image from "next/image";
import ImgCard from "./Image";
import Link from "next/link";
import { useState, MouseEvent } from "react";

export default function ImageContainer(
    { images }: { images: string[] }
) {
    const [isHighlighted, setIsHighlighted] = useState<boolean>(false);

    function handleImageClick(e: MouseEvent<HTMLDivElement>) {
        e.preventDefault();
        setIsHighlighted(true);
    }

    return (
        <div className="col-span-12 flex flex-col mb-8  gap-4">
            {images.map((image, index) => (
                <ImgCard
                    key={index}
                    src={image}
                    alt="print"
                    width={400}
                    height={850}
                />
            ))}
            {/* <Image
                src="/nvtog/30072024-IMG_6638.webp"
                alt="print"
                width={400}
                height={850}
                className={`
                        rounded-xl w-full
                        group-hover:opacity-85
                        transition duration-200
                    `}
            />
            <Image
                src="/nvtog/30072024-IMG_6646.webp"
                alt="print"
                width={400}
                height={850}
                className={`
                        rounded-xl w-full
                        group-hover:opacity-85
                        transition duration-200
                    `}
            />
            <Image
                src="/nvtog/30072024-IMG_6649.webp"
                alt="print"
                width={400}
                height={850}
                className={`
                        rounded-xl w-full
                        group-hover:opacity-85
                        transition duration-200
                    `}
            /> */}
        </div>
    );
}
