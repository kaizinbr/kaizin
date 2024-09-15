// import Icon from "@/components/core/Icon";
// import LazyImage from "@/components/core/LazyImage";
import { MouseEvent, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";

interface Props {
    hasMultipleMedia?: boolean;
    open: boolean;
    setOpen: (open: boolean) => void;
    thumbnailUrl: string;
    updateMediaIndex: (direction: number) => void;
}

export default function ExpandedView({
    hasMultipleMedia,
    open,
    setOpen,
    thumbnailUrl,
    updateMediaIndex,
}: Props) {
    useEffect(() => {
        if (open) document.documentElement.style.overflow = "hidden";
        else document.documentElement.style.overflow = "unset";
    }, [open]);

    function handleClose(e: MouseEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();
        setOpen(false);
    }

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex h-dvh w-full items-center justify-center bg-black/90 backdrop-blur-md p-4 lg:p-16">
            <Image
                key={thumbnailUrl}
                alt="image"
                src={thumbnailUrl}
                width={800}
                height={800}
                // contain
                className="size-full object-contain"
            />
            <div
                onClick={handleClose}
                className="jelly absolute right-4 top-4 cursor-pointer rounded-full bg-black/30 p-2 hover:scale-110"
            >
                <X className="size-4 cursor-pointer text-white" >x</X>
            </div>
            {hasMultipleMedia && (
                <>
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                            updateMediaIndex(-1);
                        }}
                        className="absolute left-24 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black-real/70 p-20"
                    >
                        <p  className="w-4 text-white" >X</p>
                    </div>
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                            updateMediaIndex(1);
                        }}
                        className="absolute right-24 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black-real/70 p-20"
                    >
                        <p  className="w-4 text-white" >X</p>
                    </div>
                </>
            )}
        </div>
    );
}
