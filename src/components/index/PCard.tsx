import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

export default function ProjectCard() {
    return (
        <div
            className={`
            flex flex-col space-y-4 justify-between items-start py-6
        `}
        >
            <h3 className="text-xl font-semibold">OtoLugar</h3>
            <figure>
                <Image
                    src="/img.png"
                    alt="OtoLugar"
                    className="rounded-xl"
                    width={380}
                    height={300}
                />
            </figure>

            <div className="flex flex-row gap-3">
                <span
                    className={`
                    px-3 py-1 rounded-xl bg-violet-400/20 text-zinc-300 text-xs
                `}
                >
                    HTML
                </span>
                <span
                    className={`
                    px-3 py-1 rounded-xl bg-violet-400/20 text-zinc-300 text-xs
                `}
                >
                    React
                </span>
                <span
                    className={`
                    px-3 py-1 rounded-xl bg-violet-400/20 text-zinc-300 text-xs
                `}
                >
                    NextJs
                </span>
            </div>

            <Link className="flex items-center" href="#">
                Detalhes <FaChevronRight className="h-2" />
            </Link>
        </div>
    );
}
