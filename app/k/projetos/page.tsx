import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

export default function Projetos() {
    return (
        <div className="flex">
            <div className="flex flex-col gap-4">
                <h1
                    className={`
                        text-4xl font-bold mb-6
                    `}
                >
                    Meus melhores projetos
                </h1>

                <div className="flex flex-col gap-4">
                    <div className={`
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

                    </div>
                </div>
            </div>
        </div>
    );
}
