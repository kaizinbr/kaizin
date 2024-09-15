import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";


export default function ExternalLink(
    { text, url, className }: { text: string, url: string, className?: string }
) {
    return (
            <Link
                href={url}
                target="_blank"
                className={`
                flex justify-start items-center
                hover:text-neutral-200 hover:underline
                transition duration-200
                m-auto gelica
                mb-3 w-fit px-6 py-3 rounded-full
                bg-outrageous-orange-400 text-mortar-50
                col-span-12
                ${className}
            `}
            >
                <span
                    className={`
                        text-2xl mr-3
                    `}
                >
                    {text}
                </span>
                <FiExternalLink className="size-4" />
            </Link>
            
    );
}
