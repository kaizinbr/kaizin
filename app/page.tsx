import Feed from "@/components/cards/Feed";
import localFont from "next/font/local";
import Image from "next/image";

const uglyDave = localFont({
    src: "../resources/fonts/UglyDaveRegular.otf",
    display: "swap",
});

export default function Home() {
    return (
        <main
            className={`m-auto flex min-h-screen w-full max-w-screen-lg flex-col gap-6 px-6 py-4 md:px-12 lg:px-0`}
        >
            <div
                className={
                    uglyDave.className +
                    ` m-auto mt-8 text-2xl font-bold uppercase text-pretty md:text-3xl
                        flex flex-col items-center gap-2 text-center
                    `
                }
            >
                <Image 
                    src="/kaio.svg"
                    alt="Kaizin Logo"
                    width={100}
                    height={100}
                />
                <h1>kaizin</h1>
            </div>
            {/* <div
                className={`gelica mt-12 mb-28 flex  items-center px-6 text-center text-xl text-pretty md:px-16`}
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
                <p className={` `}>
                    Olá...
                </p>
            </div> */}

            <div className="col-span-full flex flex-col gap-4">
                <h1 className={`gelica  text-2xl font-bold`}>
                    alguns projetos
                </h1>

                <Feed />
            </div>
        </main>
    );
}
