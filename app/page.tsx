import Image from "next/image";
import { SiAdobeillustrator, SiAdobephotoshop, SiCss3, SiExpress, SiFigma, SiHtml5, SiJavascript, SiMicrosoftoffice, SiNextdotjs, SiNodedotjs, SiPrisma, SiPython, SiReact, SiTailwindcss, SiVisualstudiocode } from "react-icons/si";

export default function Home() {
    return (
        <main
            className={`
            flex min-h-screen flex-col justify-center items-start m-auto max-w-4xl 
        `}
        >
            <div
                className={`
                m-auto max-w-4xl w-full h-[calc(100vh-8rem)] 
                flex flex-col gap-y-11
                mt-8
            `}
            >
                <div
                    className={`
                        w-full h-full
                        flex flex-row justify-center lg:justify-between items-center
                        gap-x-8
                    `}
                >
                    <div
                        className={`
                        flex flex-col justify-center items-start
                        w-1/2
                    `}
                    >
                        <h1
                            className={`
                            text-5xl font-bold
                            text-stone-900
                            mb-5
                            eigerdals
                        `}
                        >
                            Olá, eu sou o{" "}
                            <span className="text-[#BA5624]">Kai</span>
                        </h1>
                        <p
                            className={`
                            text-xl
                            text-stone-900
                            mb-4
                        `}
                        >
                            Desenvolvedor Front-end e Designer
                        </p>
                        <p
                            className={`
                            text-base
                            text-stone-900
                            mb-4
                        `}
                        >
                            Trilhando novos caminhos através de linhas de
                            código, ótimas paletas e muita criatividade.
                            Perfeito para conversar sobre músicas, livros e boas
                            tipografias.
                        </p>
                    </div>
                    <div
                        className={`
                        w-1/2
                        flex justify-center items-center
                    `}
                    >
                        <Image
                            src="/1.jpeg"
                            alt="Kaizin"
                            width={512}
                            height={512}
                            className={`
                                    rounded-full
                                    size-80
                                `}
                        />
                    </div>
                </div>
                <div className="flex justify-start">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                </div>
            </div>


            <div
                className={`
                w-full 
                grid grid-cols-1 lg:grid-cols-2
                gap-x-14
                justify-start items-center
                my-64 
            `}
            >
                <div className="w-full col-span-1 lg:col-span-2 flex-1 flex flex-col items-center mb-24">
                    <h1 id="about" className="font-bold text-4xl eigerdals">
                        Sobre mim
                    </h1>
                    <span className="">Minha introdução</span>
                </div>
                <picture>
                    <Image
                        src="/3.jpg"
                        alt="Kaizin"
                        width={512}
                        height={512}
                        className="rounded-md max-h-[432px] w-full object-cover"
                    />
                </picture>
                <div className="flex flex-col gap-4">
                    <p className="text-xl">
                        Olá, meu nome é Kaio, mas pode me chamar de Kai. Sou um
                        desenvolvedor front-end e designer, apaixonado por
                        tecnologia e design.
                    </p>
                    <p className="text-xl">
                        Atualmente estou cursando o 2º ano do ensino médio, e
                        estou estudando desenvolvimento web desde o início de
                        2021.
                    </p>
                    <p className="text-xl">
                        Meu objetivo é me tornar um desenvolvedor full-stack,
                        mas atualmente estou focado em me tornar um ótimo
                        desenvolvedor front-end.
                    </p>
                </div>
            </div>

            <div
                className={`
                w-full 
                grid grid-cols-1 lg:grid-cols-2
                gap-x-14
                justify-start items-center
                my-64 
            `}
            >
                <div className="w-full col-span-1 lg:col-span-2 flex-1 flex flex-col items-center mb-24">
                    <h1 id="skills" className="font-bold text-4xl eigerdals">
                        Habilidades
                    </h1>
                    <span className="">Minha introdução</span>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-xl">
                        Graças ao meu curso técnico em informática, tenho
                        conhecimento em algumas linguagens de programação, como
                        Python, JavaScript e TypeScript. Atualmente busco aprimorar meus conhecimentos em ReactJs,
                        NextJs e TailwindCss.
                    </p>
                    <p className="text-xl">
                        Quanto ao design, tenho conhecimento em softwares como
                        Photoshop, Illustrator, Lightroom e InDesign, e atualmente estou
                        buscando aprimorar minhas noçoes de estética e tipografia.
                    </p>
                    <p className="text-xl">
                        Já sobre coisas menores que apenas gosto ou sei fazer, tenho
                        conhecimento em softwares de edição de vídeo, pacote office
                        e adoro escrever alguns textos sobre assuntos interessantes.
                    </p>
                </div>
                <div className={`
                    grid grid-cols-3 gap-x-4 gap-y-8
                    
                `}>
                    <SiAdobeillustrator className="size-16 m-auto" />
                    <SiAdobephotoshop className="size-16 m-auto" />
                    <SiJavascript className="size-16 m-auto" />
                    <SiHtml5 className="size-16 m-auto" />
                    <SiCss3 className="size-16 m-auto" />
                    <SiMicrosoftoffice className="size-16 m-auto" />
                    <SiReact className="size-16 m-auto" />
                    <SiNextdotjs className="size-16 m-auto" />
                    <SiTailwindcss className="size-16 m-auto" />
                    <SiPython className="size-16 m-auto" />
                    <SiPrisma className="size-16 m-auto" />
                    <SiFigma className="size-16 m-auto" />
                </div>
            </div>

            <div
                className={`
                w-full 
                grid grid-cols-1 lg:grid-cols-1
                gap-x-14
                justify-start items-center
                my-64 
            `}
            >
                <div className="w-full col-span-1 lg:col-span- flex-1 flex flex-col items-center mb-24">
                    <h1 id="about" className="font-bold text-4xl eigerdals">
                        Qualificações
                    </h1>
                    <span className="">Alguns pontos</span>
                </div>
                <div
                    className={`
                    grid grid-cols-[18px_1fr] gap-x-8
                    max-w-sm m-auto
                `}
                >
                    <div className="flex flex-col items-center w-18">
                        <div className="h-4">
                            <span className=" flex size-4 rounded-full bg-stone-600"></span>
                        </div>
                        <span className="flex min-h-16 h-full w-[1px]  bg-stone-600"></span>
                    </div>
                    <div className="flex flex-col items-start">
                        <p className="mb-6">
                            Atualmente curso o 3º período de Design Gráfico pelo
                            IFPB campus Cabedelo.
                        </p>
                    </div>
                    <div className="flex flex-col items-center w-18">
                        <div className="h-4">
                            <span className=" flex size-4 rounded-full bg-stone-600"></span>
                        </div>
                        <span className="flex min-h-16 h-full w-[1px]  bg-stone-600"></span>
                    </div>
                    <div className="flex flex-col items-start">
                        <p className="mb-6">
                            Atualmente estou aprendendo Reactjs, focando em
                            projetos com NextJs e TailwindCss
                        </p>
                    </div>
                    <div className="flex flex-col items-center w-18">
                        <div className="h-4">
                            <span className=" flex size-4 rounded-full bg-stone-600"></span>
                        </div>
                        <span className="flex min-h-16 h-full w-[1px]  bg-stone-600"></span>
                    </div>
                    <div className="flex flex-col items-start">
                        <p className="mb-6">
                            Tenho formação em técnico em informática pelo IFPB
                            Campus João Pessoa.
                        </p>
                    </div>
                    <div className="flex flex-col items-center w-18">
                        <div className="h-4">
                            <span className=" flex size-4 rounded-full bg-stone-600"></span>
                        </div>
                        <span className="flex min-h-16 h-full w-[1px]  bg-stone-600"></span>
                    </div>
                    <div className="flex flex-col items-start">
                        <p className="mb-6">
                            Obtive nota máxima no meu TCC do curso técnico, onde
                            (com minha dupla &lt;3) analisei a UI de um website
                            que desenvolvemos durante o curso.
                        </p>
                    </div>
                    <div className="flex flex-col items-center w-18">
                        <div className="h-4">
                            <span className=" flex size-4 rounded-full bg-stone-600"></span>
                        </div>
                        <span className="flex min-h-16 h-full w-[1px]  bg-stone-600"></span>
                    </div>
                    <div className="flex flex-col items-start">
                        <p className="mb-6">
                            Participei de um projeto de pesquisa onde trabalhei
                            com ESP32 e Arduíno para montar o projeto de um
                            biodigestor anaeróbio, para servir como fonte de
                            geração de energia renovável.
                        </p>
                    </div>
                    <div className="flex flex-col items-center w-18">
                        <div className="h-4">
                            <span className=" flex size-4 rounded-full bg-stone-600"></span>
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
                        <p className="mb-6">
                            Você vai me ver com fones de ouvido quase o tempo todo.
                        </p>
                    </div>
                </div>
            </div>


        </main>
    );
}
