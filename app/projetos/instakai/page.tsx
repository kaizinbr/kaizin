import Image from "next/image"
import Link from "next/link"
import { FiExternalLink } from "react-icons/fi"

export default function Projetos() {

    return (
        <main className={`
            w-full lg:max-w-screen-lg m-auto py-14
            flex flex-col  
            md:grid md:grid-cols-12 md:gap-8
            md:px-12 lg:px-0 px-6
        `}>
            <div 
                className="col-span-12 mb-10 order-1"
            >
                <h2 className="text-3xl gelica">Insta Clone</h2>
            </div>
            <div className="desc col-span-6 mb-8 order-3 md:order-2">
                <p>Um clone simples do instagram, para mostragem de alguns criativos que fiz.</p>
            </div>
            <div className="col-span-6 flex-flex-row order-2 mb-8 md:order-3">
                <Image src="/instakai.png" alt="print" width={800} height={450} className={`
                    rounded-xl w-full
                    group-hover:opacity-85
                    transition duration-200
                `} />
            </div>
            <Link href="https://instakai.vercel.app" target="_blank" className={`
                flex justify-start items-center
                hover:text-neutral-200 hover:underline
                transition duration-200
                m-auto gelica
                mb-3 w-fit px-6 py-3 rounded-full
                bg-outrageous-orange-400 text-mortar-50
                order-4 col-span-12
            `}>
                <span
                    className={`
                        text-2xl mr-3
                    `}
                >
                    Insta Clone
                </span>
                <FiExternalLink className="size-4"/>
            </Link>
        </main>
    )
}