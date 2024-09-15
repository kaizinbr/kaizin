"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, MouseEvent } from "react";
import ExpandedView from "../modal/modalImage";

export default function ImgCard({
    src,
    alt,
    width,
    height,
    className,
}: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
}) {
    const [mediaIndex, setMediaIndex] = useState<number>(0);
    const [isHighlighted, setIsHighlighted] = useState<boolean>(false);

    function handleImageClick(e: MouseEvent<HTMLDivElement>) {
        e.preventDefault();
        setIsHighlighted(true);
    }

    // function updateMediaIndex(direction: number) {
    //     setMediaIndex((mediaIndex + direction + media.length) % media.length);
    //   }

    return (
        <>
            <div className="col-span-12 flex flex-col order-2 mb-8  gap-4 cursor-pointer">
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    onClick={handleImageClick}
                    className={`
                        rounded-xl w-full
                        group-hover:opacity-85
                        transition duration-200
                        ${className}
                    `}
                />
            </div>
            <ExpandedView
                open={isHighlighted}
                setOpen={setIsHighlighted}
                thumbnailUrl={src}
                updateMediaIndex={() => {}}
                hasMultipleMedia={false}
            />
        </>
    );
}
