import Image from "next/image";
import Link from "next/link";

export default function Habilidades() {
    return (
        <main className="w-full lg:max-w-screen-lg m-auto">
            <div
                className={`
                flex flex-col md:flex-row md:gap-12
                py-4 w-full items-start justify-between
                md:px-12 lg:px-0 px-6
            `}
            >
                <picture
                    className={`md:w-2/4`}
                    >
                    <Image
                        src="/site-banner.png"
                        alt="Habilidades"
                        width={600}
                        height={800}
                        className="object-contain mb-6  max-w-[500px] w-full md:h-auto"
                    />
                </picture>
                <div className="texto flex flex-col w-full md:w-2/4">
                    <h1 className={`text-5xl text-start gelica mb-6`}>
                        se você veio até aqui, me chame de Kai.
                    </h1>
                    <p className={`text-pretty mb-6`}>
                        Se quiser saber mais sobre minhas habilidades, é nessa
                        página{" "}
                        <Link href="/habilidades" className={`underline`}>
                            aqui
                        </Link>
                        !
                    </p>
                    <p className={`text-pretty mb-6`}>
                        Olá! Me chamo Kaio, tenho 18 anos e sou um desenvolvedor web
                        junior e estudante de Design Gráfico. Moro em João Pessoa,
                        Paraíba e atualmente busco oportunidades de mostrar e
                        desenvolver minhas habilidades.
                    </p>
                    <p className={`text-pretty mb-6`}>
                        Sou natural do interior da Paraíba, e acredito que não ter
                        tanto contato assim com a tecnologia enquanto crescia me fez
                        ser ainda mais curioso para explorar novas coisas, além de
                        me fazer querer aprender mais sobre o mundo da tecnologia.
                        Em 2020, quando ingressei no IFPB para fazer o ensino médio
                        integrado ao curso Técnico em Informática, tive meu primeiro
                        contato com programação e soube que era com aquilo que
                        queria trabalhar. Graças ao curso tive contato com diversos
                        nichos da área de tecnologia, como desenvolvimento web,
                        mobile, banco de dados, redes e muito mais. Com isso, pude
                        descobrir que o desenvolvimento web, a estética e
                        usabilidade de páginas e softwares, era o que mais me
                        interessava.
                    </p>
                    <p className={`text-pretty mb-6`}>
                        Durante o curso de Informática, pude participar de diversos
                        eventos e projetos que me ajudaram a desenvolver tanto o
                        lado profissional quanto o social. Em especial, gosto de
                        mencionar o projeto de pesquisa Oficinas 4.0 do FabLab do
                        IFPB, onde desenvolvemos um biodigestor anaeróbio monitorado
                        remotamente por microprocessadores que transformaria
                        resíduos orgânicos em biogás para servir de fonte de
                        energia. Nesse projeto, pude desenvolver habilidades de
                        trabalho em equipe, além de ampliar meus conhecimentos em Arduíno e ESP32.
                    </p>
                    <p className={`text-pretty mb-6`}>
                        Já atualmente, curso Design Gráfico também no IFPB, onde estou melhorando (e aprendendo mais) minhas
                        habilidades com softwares de edição de imagem e vídeo, além de melhorar minhas noções de estética.
                    </p>
                    <p className={`text-pretty mb-6`}>
                        Meu principal objetivo no momento é ingressar no mercado de desenvolvimento web, e poder trabalhar com
                        o que gosto para consolidar meus conhecimentos!
                    </p>
                </div>
            </div>
        </main>
    );
    
}
