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
                <h2 className="text-3xl gelica">Lyricard Gen</h2>
            </div>
            <div className="desc col-span-6 mb-8 order-3 md:order-2">
                <p>Um <abbr title="É ironia!"><i>fazedor</i></abbr> de cards de letras do spotify.</p>
            </div>
            <div className="col-span-6 flex-flex-row order-2 mb-8 md:order-3">
                <Image src="/lyricard.png" alt="print" width={800} height={450} className={`
                    rounded-xl w-full
                    group-hover:opacity-85
                    transition duration-200
                `} />
            </div>
            <Link href="https://lyricard-gen.vercel.app" target="_blank" className={`
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
                    Lyricard Generator
                </span>
                <FiExternalLink className="size-4"/>
            </Link>
        </main>
    )
}