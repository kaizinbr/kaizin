import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main
            className={`
            flex flex-col gap-6 
            py-4
            m-auto max-w-screen-lg w-full min-h-screen
            md:px-12 lg:px-0 px-6
        `}
        >
            <div
                className={`
                    min-h-[calc(60vh-48px)] text-center px-6 md:px-16 mt-12 mb-28 text-3xl gelica text-pretty
                    flex items-center
                `}
            >
                <p
                    className={`
                    
                `}
                >
                    Trilhando novos{" "}
                    <span className="text-[#C47B5A]">caminhos </span> através de
                    linhas de <span className="text-[#4B4553]">código{""}</span>
                    , ótimas paletas e muita{" "}
                    <span className="text-[#FE552A]">criatividade</span>.
                    Perfeito para conversar sobre músicas, livros e boas
                    tipografias.
                </p>
            </div>

            <div className="flex flex-col col-span-full gap-4">
                <h1
                    className={`
                        text-2xl font-bold mb-6 text-center
                    `}
                >
                    agora alguns projetos
                </h1>

                <div
                    className={`
                    grid grid-cols-1 md:grid-cols-2 
                    gap-12 md:gap-24
                `}
                    // gap-12 md:gap-24
                >
                    <div
                        className={`

                    `}
                    >
                        <Link
                            href="/projetos/xisbank"
                            className={`
                                flex flex-col justify-start items-center
                                hover:text-neutral-800 hover:underline
                                transition duration-200
                                w-fit group
                            `}
                        >
                            <Image
                                src="/xisbank.png"
                                alt="print"
                                width={800}
                                height={450}
                                className={`
                                    rounded-xl w-full
                                    group-hover:opacity-85
                                    transition duration-200
                                `}
                            />
                            <h2
                                className={`
                                    text-2xl font-bold mt-4 mb-2
                                `}
                            >
                                xisbank
                            </h2>
                        </Link>
                    </div>


                    
                    <div
                        className={`

                    `}
                    >
                        <Link
                            href="https://www.behance.net/gallery/187066273/SouDigital-Identidade-Visual"
                            target="_blank"
                            className={`
                                flex flex-col justify-start items-center
                                hover:text-neutral-800 hover:underline
                                transition duration-200
                                w-fit group
                            `}
                        >
                            <Image
                                src="/sd.png"
                                alt="print"
                                width={800}
                                height={450}
                                className={`
                                    rounded-xl w-full
                                    group-hover:opacity-85
                                    transition duration-200
                                `}
                            />
                            <h2
                                className={`
                                    text-2xl font-bold mt-4 mb-2
                                `}
                            >
                                Identidade Visual SouDigital
                            </h2>
                        </Link>
                    </div>
                    <div
                        className={`

                    `}
                    >
                        <Link
                            href="https://www.behance.net/gallery/181561229/Cartaz-tipografico-Marilia-Mendonca"
                            target="_blank"
                            className={`
                                flex flex-col justify-start items-center
                                hover:text-neutral-800 hover:underline
                                transition duration-200
                                w-fit group
                            `}
                        >
                            <Image
                                src="/marilia.png"
                                alt="print"
                                width={800}
                                height={450}
                                className={`
                                    rounded-xl w-full
                                    group-hover:opacity-85
                                    transition duration-200
                                `}
                            />
                            <h2
                                className={`
                                    text-2xl font-bold mt-4 mb-2
                                `}
                            >
                                Cartaz tipográfico Marília Mendonça
                            </h2>
                        </Link>
                    </div>
                    <div
                        className={`

                    `}
                    >
                        <Link
                            href="https://www.behance.net/gallery/180723801/Drip-Coffee-KAFFA"
                            target="_blank"
                            className={`
                                flex flex-col justify-start items-center
                                hover:text-neutral-800 hover:underline
                                transition duration-200
                                w-fit group
                            `}
                        >
                            <Image
                                src="/kaffa.png"
                                alt="print"
                                width={800}
                                height={450}
                                className={`
                                    rounded-xl w-full
                                    group-hover:opacity-85
                                    transition duration-200
                                `}
                            />
                            <h2
                                className={`
                                    text-2xl font-bold mt-4 mb-2
                                `}
                            >
                                Embalagem Drip Coffee KAFFA
                            </h2>
                        </Link>
                    </div>

                    <div
                        className={`

                    `}
                    >
                        <Link
                            href="/projetos/lyricard"
                            className={`
                                flex flex-col justify-start items-center
                                hover:text-neutral-800 hover:underline
                                transition duration-200
                                w-fit group
                            `}
                        >
                            <Image
                                src="/lyricardmain.png"
                                alt="print"
                                width={800}
                                height={450}
                                className={`
                                    rounded-xl w-full
                                    group-hover:opacity-85
                                    transition duration-200
                                `}
                            />
                            <h2
                                className={`
                                    text-2xl font-bold mt-4 mb-2
                                `}
                            >
                                Lyricard Generator
                            </h2>
                        </Link>
                        {/* <p>Site pessoal</p>
                    <FiExternalLink className="size-4" /> */}
                    </div>
                    <div
                        className={`

                    `}
                    >
                        <Link
                            href="/projetos/instakai"
                            className={`
                                flex flex-col justify-start items-center
                                hover:text-neutral-800 hover:underline
                                transition duration-200
                                w-fit group
                            `}
                        >
                            <Image
                                src="/instakai.png"
                                alt="print"
                                width={800}
                                height={450}
                                className={`
                                    rounded-xl w-full
                                    group-hover:opacity-85
                                    transition duration-200
                                `}
                            />
                            <h2
                                className={`
                                    text-2xl font-bold mt-4 mb-2
                                `}
                            >
                                Instagram Clone
                            </h2>
                        </Link>
                        {/* <p>Site pessoal</p>
                    <FiExternalLink className="size-4" /> */}
                    </div>
                </div>
            </div>
        </main>
    );
}
