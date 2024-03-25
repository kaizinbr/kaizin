import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectCard() {
    return (
        <div
            className={`

                    `}
        >
            <Link
                href="/projetos/kaizin"
                className={`
                    flex flex-col justify-start items-center
                    hover:text-neutral-800 hover:underline
                    transition duration-200
                    w-fit group
                `}
            >
                <Image src="/print.png" alt="print" width={800} height={450} className={`
                    rounded-xl w-full
                    group-hover:opacity-85
                    transition duration-200
                `} />
                <h2
                    className={`
                        text-2xl font-bold mt-4 mb-2
                    `}
                >
                    Kaizin
                </h2>
            </Link>
            {/* <p>Site pessoal</p>
                    <FiExternalLink className="size-4" /> */}
        </div>
    );
}
