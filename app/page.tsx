import Image from "next/image";
import Link from "next/link";
import {
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiCss3,
    SiExpress,
    SiFigma,
    SiHtml5,
    SiJavascript,
    SiMicrosoftoffice,
    SiNextdotjs,
    SiNodedotjs,
    SiPrisma,
    SiPython,
    SiReact,
    SiTailwindcss,
    SiVisualstudiocode,
} from "react-icons/si";
import Sobre from "@/components/cards/Sobre";
import Qualificacoes from "@/components/cards/Qualificacoes";
import Projetos from "@/components/cards/Projetos";
import Habilidades from "@/components/cards/Habilidades";
import Contato from "@/components/cards/Contato";
import Intro from "@/components/cards/Intro";

export default function Home() {
    return (
        <main
            className={`
            grid grid-cols-12 grid-rows-8 gap-6 
            py-4
            m-auto max-w-6xl w-full min-h-screen
        `}
        >
            <Intro />

            <Qualificacoes />

            <Projetos />

            <Sobre />

            <Habilidades />

            <Contato />

            

            
        </main>
    );
}
