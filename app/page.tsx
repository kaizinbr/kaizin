import ContainerCards from "@/components/cards/ContainerCards2";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main
            className={`m-auto flex min-h-screen w-full max-w-screen-lg flex-col gap-6 px-6 py-4 md:px-12 lg:px-0`}
        >
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

                {/* <div
          className={`grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-24`}
          // gap-12 md:gap-24
        >
          <div className={` `}>
            <Link
              href="/projetos/djamena"
              className={`group flex w-fit flex-col items-center justify-start transition duration-200 hover:text-neutral-800 hover:underline`}
            >
              <Image
                src="/djamena.png"
                alt="print"
                width={800}
                height={450}
                className={`w-full rounded-xl transition duration-200 group-hover:opacity-85`}
              />
              <h2 className={`mb-2 mt-4 text-2xl font-bold`}>Djamena Agency</h2>
            </Link>
          </div>
          <div className={` `}>
            <Link
              href="/projetos/xisbank"
              className={`group flex w-fit flex-col items-center justify-start transition duration-200 hover:text-neutral-800 hover:underline`}
            >
              <Image
                src="/xisbank.png"
                alt="print"
                width={800}
                height={450}
                className={`w-full rounded-xl transition duration-200 group-hover:opacity-85`}
              />
              <h2 className={`mb-2 mt-4 text-2xl font-bold`}>xisbank</h2>
            </Link>
          </div>

          <div className={` `}>
            <Link
              href="https://www.behance.net/gallery/187066273/SouDigital-Identidade-Visual"
              target="_blank"
              className={`group flex w-fit flex-col items-center justify-start transition duration-200 hover:text-neutral-800 hover:underline`}
            >
              <Image
                src="/sd.png"
                alt="print"
                width={800}
                height={450}
                className={`w-full rounded-xl transition duration-200 group-hover:opacity-85`}
              />
              <h2 className={`mb-2 mt-4 text-2xl font-bold`}>
                Identidade Visual SouDigital
              </h2>
            </Link>
          </div>
          <div className={` `}>
            <Link
              href="https://www.behance.net/gallery/181561229/Cartaz-tipografico-Marilia-Mendonca"
              target="_blank"
              className={`group flex w-fit flex-col items-center justify-start transition duration-200 hover:text-neutral-800 hover:underline`}
            >
              <Image
                src="/marilia.png"
                alt="print"
                width={800}
                height={450}
                className={`w-full rounded-xl transition duration-200 group-hover:opacity-85`}
              />
              <h2 className={`mb-2 mt-4 text-2xl font-bold`}>
                Cartaz tipográfico Marília Mendonça
              </h2>
            </Link>
          </div>
          <div className={` `}>
            <Link
              href="https://www.behance.net/gallery/180723801/Drip-Coffee-KAFFA"
              target="_blank"
              className={`group flex w-fit flex-col items-center justify-start transition duration-200 hover:text-neutral-800 hover:underline`}
            >
              <Image
                src="/kaffa.png"
                alt="print"
                width={800}
                height={450}
                className={`w-full rounded-xl transition duration-200 group-hover:opacity-85`}
              />
              <h2 className={`mb-2 mt-4 text-2xl font-bold`}>
                Embalagem Drip Coffee KAFFA
              </h2>
            </Link>
          </div>

          <div className={` `}>
            <Link
              href="/projetos/lyricard"
              className={`group flex w-fit flex-col items-center justify-start transition duration-200 hover:text-neutral-800 hover:underline`}
            >
              <Image
                src="/lyricardmain.png"
                alt="print"
                width={800}
                height={450}
                className={`w-full rounded-xl transition duration-200 group-hover:opacity-85`}
              />
              <h2 className={`mb-2 mt-4 text-2xl font-bold`}>
                Lyricard Generator
              </h2>
            </Link>
            {/* <p>Site pessoal</p>
                    <FiExternalLink className="size-4" /> 
          </div>
          <div className={` `}>
            <Link
              href="/projetos/instakai"
              className={`group flex w-fit flex-col items-center justify-start transition duration-200 hover:text-neutral-800 hover:underline`}
            >
              <Image
                src="/instakai.png"
                alt="print"
                width={800}
                height={450}
                className={`w-full rounded-xl transition duration-200 group-hover:opacity-85`}
              />
              <h2 className={`mb-2 mt-4 text-2xl font-bold`}>
                Instagram Clone
              </h2>
            </Link>
            {/* <p>Site pessoal</p>
                    <FiExternalLink className="size-4" /> 
          </div>
        </div> */}
            </div>
        </main>
    );
}
