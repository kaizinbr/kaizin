import { SiAdobeillustrator, SiAdobephotoshop, SiCss3, SiExpress, SiFigma, SiHtml5, SiJavascript, SiMicrosoftoffice, SiNextdotjs, SiNodedotjs, SiPrisma, SiPython, SiReact, SiTailwindcss, SiVisualstudiocode } from "react-icons/si";


export default function Sobre() {
    return (
        <div className="flex">
            <div className="flex flex-col gap-4">
                <h1
                    className={`
                        text-4xl font-bold mb-6
                    `}
                >
                    Algumas habilidades
                </h1>
                {/* <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam veritatis omnis saepe dicta labore possimus in. Deleniti aliquam voluptatibus debitis fuga nulla adipisci officiis consequuntur, neque necessitatibus non aperiam doloribus.</p> */}
                <div
                className={`
                w-full 
                grid grid-cols-1 lg:grid-cols-2
                gap-x-14
                justify-start items-center
            `}
            >
               
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
            </div>
        </div>
    );
}
