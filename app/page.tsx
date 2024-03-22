import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import {
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiCss3,
    SiExpress,
    SiFigma,
    SiHtml5,
    SiJavascript,
    SiMicrosoftoffice,
    SiNextdotjs,
    SiNodedotjs,
    SiPrisma,
    SiPython,
    SiReact,
    SiTailwindcss,
    SiVisualstudiocode,
} from "react-icons/si";

import ProjectCard from "@/components/cards/ProjectCard";

export default function Home() {
    return (
        <main
            className={`
            flex flex-col gap-6 
            py-4
            m-auto max-w-6xl w-full min-h-screen h-[200vh]
            md:px-12 px-6
        `}
        >

            <div className={`
                    min-h-[calc(60vh-48px)] text-center px-6 md:px-16 mt-12 mb-28 text-3xl gelica text-pretty
                    flex items-center
                `}>
                <p className={`
                    
                `}>
                    Trilhando novos <span className="text-[#C47B5A]">caminhos{" "}</span> através de linhas de <span className="text-[#4B4553]">código{""}</span>, ótimas
                    paletas e muita <span className="text-[#FE552A]">criatividade</span>. Perfeito para conversar sobre
                    músicas, livros e boas tipografias.
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

                <div className={`
                    grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24
                `}>
                    <ProjectCard />
                    <ProjectCard />
                    {/* <div className={`
                        mb-4
                    `}>
                        <Link 
                            href="/k/projetos/kaizin"
                            className={`
                                flex justify-start items-center
                                hover:text-neutral-200 hover:underline
                                transition duration-200
                                mb-3 w-fit
                            `}
                        >
                            <h2
                                className={`
                                    text-2xl font-bold mr-3
                                `}
                            >
                                Kaizin
                            </h2>
                                <FiExternalLink className="size-4"/>
                        </Link>
                        <p>
                            Site pessoal
                        </p>

                    </div>
                    <div className={`
                        mb-4
                    `}>
                        <Link 
                            href="https://instakai.vercel.app"
                            target="_blank"
                            className={`
                                flex justify-start items-center
                                hover:text-neutral-200 hover:underline
                                transition duration-200
                                mb-3 w-fit
                            `}
                        >
                            <h2
                                className={`
                                    text-2xl font-bold mr-3
                                `}
                            >
                                Instaclone
                            </h2>
                                <FiExternalLink className="size-4"/>
                        </Link>
                        <p>
                            Um clone simples do Instagram feito em React e Next. 
                            Fiz para expor alguns posts que faço como designer freelancer.
                        </p>

                    </div>
                    <div className={`
                        mb-4
                    `}>
                        <Link 
                            href="https://xisbank.vercel.app"
                            target="_blank"
                            className={`
                                flex justify-start items-center
                                hover:text-neutral-200 hover:underline
                                transition duration-200
                                mb-3 w-fit
                            `}
                        >
                            <h2
                                className={`
                                    text-2xl font-bold mr-3
                                `}
                            >
                                xis Bank
                            </h2>
                                <FiExternalLink className="size-4"/>
                        </Link>
                        <p>
                            Uma landing page de um banco fictício.

                        </p>

                    </div>
                    <div className={`
                        mb-4
                    `}>
                        <Link 
                            href="https://lyricard-gen.vercel.app/"
                            target="_blank"
                            className={`
                                flex justify-start items-center
                                hover:text-neutral-200 hover:underline
                                transition duration-200
                                mb-3 w-fit
                            `}
                        >
                            <h2
                                className={`
                                    text-2xl font-bold mr-3
                                `}
                            >
                                Lyricard Generator
                            </h2>
                                <FiExternalLink className="size-4"/>
                        </Link>
                        <p>
                            Um <abbr title="É ironia!"><i>fazedor</i></abbr> de cards de letras do spotify.
                        </p>

                    </div> */}
                </div>
            </div>
        </main>
    );
}
