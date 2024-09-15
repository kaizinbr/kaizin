import ExternalLink from "@/components/ExternalLink";
import ImageContainer from "@/components/images/ImgContainer";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const images = [
    "/social/1.webp",
    "/social/2.webp",
    "/social/3.webp",
    "/social/4.webp",
];

export default function Projetos() {
    return (
        <main
            className={`
            w-full lg:max-w-screen-lg m-auto py-14
            flex flex-col  
            md:grid md:grid-cols-12 md:gap-8
            md:px-12 lg:px-0 px-6
        `}
        >
            <div className="col-span-12 mb-10">
                <span className="text-sm gelica-menu text-neutral-600">
                    03/09/2024 | Editorial
                </span>
                <h2 className="text-3xl gelica">Livreto de projeto social</h2>
            </div>
            <div className="desc col-span-6 mb-8">
                <p className="mb-6">
                    Este projeto consistiu na realização de uma ação social para
                    a cadeira de <strong>Design, Sociedade e Cultura</strong> do
                    curso de Design Gráfio no IFPB. A ação foi a realização de
                    uma intervenção em uma turma de pré-adolescentes do 6º ano
                    da EEEF Des. Boto de Menezes, em João Pessoa.
                </p>
                <p className="mb-6">
                    Depois do projeto realizado, ficamos encarregados de montar
                    um relatório em formato de livreto utilizando conceitos de
                    editoração e fotografias da realização, para as cadeiras de
                    Design Editorial e Fotografia Digital, respectivamente.
                </p>
            </div>
            <iframe
                allowFullScreen
                scrolling="no"
                className="fp-iframe col-span-full"
                style={{border: '1px solid lightgray', width: '100%', height: '400px'}}
                src="https://heyzine.com/flip-book/4830b68615.html"
            ></iframe>

            <ImageContainer images={images} />
        </main>
    );
}
