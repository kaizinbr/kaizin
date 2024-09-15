import ContainerCards from "@/components/cards/ContainerCards";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main
            className={`m-auto flex min-h-screen w-full max-w-screen-lg flex-col gap-6 px-6 py-4 md:px-12 lg:px-0`}
        >
        <div
            className={`
                            font-bold mielle-title text-5xl mt-8 m-auto
                        `}
        >
            kaizin
        </div>
        <div
            className={`gelica mb-28 mt-12 flex min-h-[calc(60vh-48px)] items-center text-pretty px-6 text-center text-3xl md:px-16`}
        >
            <p className={` `}>
                Trilhando novos{" "}
                <span className="text-[#C47B5A]">caminhos </span> através de
                linhas de <span className="text-[#4B4553]">código{""}</span>
                , ótimas paletas e muita{" "}
                <span className="text-[#FE552A]">criatividade</span>.
                Perfeito para conversar sobre músicas, livros e boas
                tipografias.
            </p>
        </div>

        <div className="col-span-full flex flex-col gap-4">
            <h1 className={`mb-6 text-center text-2xl font-bold`}>
                agora alguns projetos
            </h1>

                <ContainerCards />

            </div>
        </main>
    );
}
