import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";


export default function Projetos() {
    return (
        <main
            className={`
            w-full lg:max-w-screen-lg m-auto py-14
            flex flex-col  
            md:grid md:grid-cols-12 md:gap-8
            md:px-12 lg:px-0 px-6
        `}
        >
            <div className="col-span-12 mb-10 order-1">
                <span className="text-sm gelica-menu text-neutral-600">
                    04/07/2024 | Website
                </span>
                <h2 className="text-3xl gelica">Spotfaker</h2>
            </div>
            <div className="desc col-span-6 mb-8 order-3 md:order-2">
                <p>
                    O projeto consiste em um web app que permite ao usuário
                    criar uma imagem de Máquina do Tempo idêntica a criada pelo
                    recurso do app Spotify, mas totalmente personalizável pelo
                    usuário. Junto dela, aprimorei uma ferramenta de criação de
                    cards com letras que já havia feito antes, também no mesmo
                    design do spotify, mas sem as limitações de linhas e
                    tamanho.
                </p>
            </div>
            <div className="col-span-6 flex-flex-row order-2 mb-8 md:order-3">
                <Image
                    src="/spot.webp"
                    alt="print"
                    width={400}
                    height={850}
                    className={`
                    rounded-xl w-full
                    group-hover:opacity-85
                    transition duration-200
                `}
                />
            </div>
            <Link
                href="https://spotfaker.kaizin.work/"
                target="_blank"
                className={`
                flex justify-start items-center
                hover:text-neutral-200 hover:underline
                transition duration-200
                m-auto gelica
                mb-3 w-fit px-6 py-3 rounded-full
                bg-outrageous-orange-400 text-mortar-50
                order-4 col-span-12
            `}
            >
                <span
                    className={`
                        text-2xl mr-3
                    `}
                >
                    Spotfaker
                </span>
                <FiExternalLink className="size-4" />
            </Link>
            
            <Link
                href="https://github.com/kaizinbr/spotfaker"
                target="_blank"
                className={`
                flex justify-start items-center
                hover:text-neutral-200 hover:underline
                transition duration-200
                m-auto gelica
                mb-3 w-fit px-6 py-3 rounded-full
                bg-outrageous-orange-400 text-mortar-50
                order-4 col-span-12
            `}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-github"
                >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span
                    className={`
                        text-2xl mx-3
                    `}
                >
                    Veja mais no github
                </span>
                <FiExternalLink className="size-4" />
            </Link>
        </main>
    );
}
