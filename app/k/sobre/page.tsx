import Intro from "@/components/cards/Intro";

export default function Sobre() {
    return (
        <div className="flex">
            <div className="flex flex-col gap-4">
                <h1
                    className={`
                        text-4xl font-bold mb-6
                    `}
                >Sobre mim</h1>
                {/* <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam veritatis omnis saepe dicta labore possimus in. Deleniti aliquam voluptatibus debitis fuga nulla adipisci officiis consequuntur, neque necessitatibus non aperiam doloribus.</p> */}
                <p className="text-xl">
                    Graças ao meu curso técnico em informática, tenho
                    conhecimento em algumas linguagens de programação, como
                    Python, JavaScript e TypeScript. Atualmente busco aprimorar
                    meus conhecimentos em ReactJs, NextJs e TailwindCss.
                </p>
                <p className="text-xl">
                    Quanto ao design, tenho conhecimento em softwares como
                    Photoshop, Illustrator, Lightroom e InDesign, e atualmente
                    estou buscando aprimorar minhas noçoes de estética e
                    tipografia.
                </p>
                <p className="text-xl">
                    Já sobre coisas menores que apenas gosto ou sei fazer, tenho
                    conhecimento em softwares de edição de vídeo, pacote office
                    e adoro escrever alguns textos sobre assuntos interessantes.
                </p>
            </div>
        </div>
    );
}
