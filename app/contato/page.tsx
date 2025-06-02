import Image from "next/image";
import Link from "next/link";

export default function Habilidades() {
    return (
        <main className="w-full lg:max-w-screen-lg m-auto">
            <div
                className={`
                flex flex-col  
                md:grid md:grid-cols-12 md:gap-8
                py-4 w-full
                md:px-12 lg:px-0 px-6
                min-h-[calc(100vh-180px)]
            `}
            >
                <div className="md:col-span-12 flex flex-col">
                    <h1 className={`text-5xl text-start gelica mb-6`}>
                        entre em contato comigo
                    </h1>
                    <p
                        className={`
                            text-base mb-3 
                            text-pretty
                            md:max-w-1/2
                        `}
                    >
                        Se você gostou do meu trabalho e quer falar sobre algum
                        projeto, ideia ou tem alguma crítica, fique à vontade
                        para entrar em contato comigo.
                    </p>
                    <p
                        className={`
                            text-base mb-3
                            text-pretty
                            md:max-w-1/2
                        `}
                    >
                        Atualmente meu foco é em desenvolvimento front end, no
                        estudo de UI e Web Design no geral, mas estou sempre
                        disposto a aprender e me aventurar em novas áreas.
                        Qualquer que seja a proposta, ficarei feliz em dar uma
                        olhada!
                    </p>

                    <p
                        className={`
                            text-base mb-3
                            text-pretty
                            md:max-w-1/2
                        `}
                    >
                        Pode me mandar um e-mail ou falar comigo no Instagram,
                        como preferir:
                    </p>

                    <Link
                        href={"mailto:kaizin.work@gmail.com"}
                        target="_blank"
                        className="text-3xl text-[#FE552A] text-pretty font-bold mb-3 gelica"
                    >
                        kaizin.work@gmail.com
                    </Link>
                    {/* <Link
                        href="https://www.instagram.com/kaizin.work"
                        target="_blank"
                        className="text-xl text-[#FE552A] text-pretty font-bold mb-3 gelica"
                    >
                        instagram.com/kaizin.work
                    </Link> */}

                </div>
            </div>
        </main>
    );
}
