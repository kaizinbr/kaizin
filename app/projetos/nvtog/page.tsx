import ImageContainer from "@/components/images/ImgContainer";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const images = [
    "/nvtog/30072024-IMG_6636.webp",
    "/nvtog/30072024-IMG_6638.webp",
    "/nvtog/30072024-IMG_6646.webp",
    "/nvtog/30072024-IMG_6649.webp",
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
                    30/07/2024 | Fotografia
                </span>
                <h2 className="text-3xl gelica">
                    Fotografia acadêmica - Livro Ninguém Vai Te Ouvir Gritar
                </h2>
            </div>
            <div className="desc col-span-6 mb-8">
                <p className="mb-6">
                    Essas fotos são resultado de uma das aulas de Fotografia
                    Digital e Edição de Imagem que tive no IFPB. O livro
                    escolhido foi "Ninguém Vai Te Ouvir Gritar" de Mark Miller.
                    A ideia era criar um ensaio fotográfico que representasse o
                    livro, e para isso, escolhemos a temática de suspense e
                    mistério, dando destaque ao vermelho.
                </p>
                <p>
                    As fotos podem demorar um pouco para carregar por conta da
                    qualidade! E todos o créditos vão para o autor do livro,{" "}
                    <strong>Mark Miller</strong>, e para a editora <strong>Companhia Editora Nacional</strong>.
                </p>
            </div>
            <ImageContainer images={images} />
        </main>
    );
}
