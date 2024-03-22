import Image from "next/image";
import Link from "next/link";

export default function Habilidades() {
    return (
        <main className="w-full">
            <div
                className={`
                flex flex-col  
                py-4 w-full
                md:px-12 px-6
            `}
            >
                <h1 className={`text-5xl text-start gelica mb-6`}>
                    Aqui estão algumas habilidades
                </h1>
                <p className={`text-pretty mb-6`}>
                    Como explico melhor na página{" "}
                    <Link href="/sobre" className={`underline`}>
                        sobre mim
                    </Link>
                    , sempre procuro novos assuntos para entender e aprender,
                    para usar em conjunto com o que já sei. Aqui tem algumas
                    coisas que aprendi, tanto no meio acadêmico quanto por pura
                    curiosidade, e que gosto de fazer.
                </p>
                <h2 className="gelica mb-2 font-bold">
                    Habilidades mais gerais
                </h2>
                <ul className="mb-6">
                    <li>Design de embalagens</li>
                    <li>Identidade visual</li>
                    <li>Web Design</li>
                    <li>Edição de vídeo</li>
                    <li>Edição de imagem</li>
                </ul>

                <h2 className="gelica mb-2 font-bold">Algumas ferramentas</h2>
                <ul className="mb-6">
                    <li>Illustrator</li>
                    <li>Photoshop</li>
                    <li>InDesign</li>
                    <li>Lightroom</li>
                    <li>Premiere</li>
                    <li>Figma</li>
                </ul>

                <h2 className="gelica mb-2 font-bold">
                    Relacionado a programação
                </h2>
                <ul className="mb-6">
                    <li>Javascript, HTML e CSS</li>
                    <li>Typescript</li>
                    <li>React</li>
                    <li>NodeJs</li>
                    <li>NextJs</li>
                    <li>ExpressJs</li>
                    <li>Prisma</li>
                    <li>TailwindCss</li>
                    <li>Python</li>
                    <li>Git e GitHub</li>
                </ul>
            </div>
        </main>
    );
}
