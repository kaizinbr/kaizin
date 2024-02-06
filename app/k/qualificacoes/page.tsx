export default function Qualificacoes() {
    return (
        <div className="flex">
            <div className="flex flex-col gap-4">
                <h1
                    className={`
                        text-4xl font-bold mb-6
                    `}
                >
                    Algumas qualificações
                </h1>
                {/* <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam veritatis omnis saepe dicta labore possimus in. Deleniti aliquam voluptatibus debitis fuga nulla adipisci officiis consequuntur, neque necessitatibus non aperiam doloribus.</p> */}
                <div
                    className={`
                    grid grid-cols-[18px_1fr] gap-x-8
                    max-w-sm m-auto
                `}
                >
                    <div className="flex flex-col items-center w-18">
                        <div className="h-4">
                            <span className=" flex size-4 rounded-full bg-stone-600"></span>
                        </div>
                        <span className="flex min-h-16 h-full w-[1px]  bg-stone-600"></span>
                    </div>
                    <div className="flex flex-col items-start">
                        <p className="mb-6">
                            Atualmente curso o 3º período de Design Gráfico pelo
                            IFPB campus Cabedelo.
                        </p>
                    </div>
                    <div className="flex flex-col items-center w-18">
                        <div className="h-4">
                            <span className=" flex size-4 rounded-full bg-stone-600"></span>
                        </div>
                        <span className="flex min-h-16 h-full w-[1px]  bg-stone-600"></span>
                    </div>
                    <div className="flex flex-col items-start">
                        <p className="mb-6">
                            Atualmente estou aprendendo Reactjs, focando em
                            projetos com NextJs e TailwindCss
                        </p>
                    </div>
                    <div className="flex flex-col items-center w-18">
                        <div className="h-4">
                            <span className=" flex size-4 rounded-full bg-stone-600"></span>
                        </div>
                        <span className="flex min-h-16 h-full w-[1px]  bg-stone-600"></span>
                    </div>
                    <div className="flex flex-col items-start">
                        <p className="mb-6">
                            Tenho formação em técnico em informática pelo IFPB
                            Campus João Pessoa.
                        </p>
                    </div>
                    <div className="flex flex-col items-center w-18">
                        <div className="h-4">
                            <span className=" flex size-4 rounded-full bg-stone-600"></span>
                        </div>
                        <span className="flex min-h-16 h-full w-[1px]  bg-stone-600"></span>
                    </div>
                    <div className="flex flex-col items-start">
                        <p className="mb-6">
                            Obtive nota máxima no meu TCC do curso técnico, onde
                            (com minha dupla &lt;3) analisei a UI de um website
                            que desenvolvemos durante o curso.
                        </p>
                    </div>
                    <div className="flex flex-col items-center w-18">
                        <div className="h-4">
                            <span className=" flex size-4 rounded-full bg-stone-600"></span>
                        </div>
                        <span className="flex min-h-16 h-full w-[1px]  bg-stone-600"></span>
                    </div>
                    <div className="flex flex-col items-start">
                        <p className="mb-6">
                            Participei de um projeto de pesquisa onde trabalhei
                            com ESP32 e Arduíno para montar o projeto de um
                            biodigestor anaeróbio, para servir como fonte de
                            geração de energia renovável.
                        </p>
                    </div>
                    <div className="flex flex-col items-center w-18">
                        <div className="h-4">
                            <span className=" flex size-4 rounded-full bg-stone-600"></span>
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
                        <p className="mb-6">
                            Você vai me ver com fones de ouvido quase o tempo todo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
