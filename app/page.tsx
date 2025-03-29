import Feed from "@/components/cards/Feed";
import localFont from "next/font/local";

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
                    uglyDave.className + ` m-auto mt-8 text-5xl font-bold uppercase `
                }
            >
                kaizin<span className="animate-wiggle changecolor">.work</span>
            </div>
            <div
                className={`gelica mt-12 mb-28 flex min-h-[calc(60vh-48px)] items-center px-6 text-center text-3xl text-pretty md:px-16`}
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
                <h1 className={`gelica mb-6 text-center text-2xl font-bold`}>
                    alguns projetos
                </h1>

                <Feed />
            </div>
        </main>
    );
}
