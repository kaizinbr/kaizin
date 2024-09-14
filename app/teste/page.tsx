import ContainerCards from "@/components/cards/ContainerCards";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main
            className={`m-auto flex min-h-screen w-full max-w-screen-lg flex-col gap-6 px-6 py-4 md:px-12 lg:px-0`}
        >

            <div className="col-span-full flex flex-col gap-4">
                <div className="h-screen bg-blue-800/20">
                    <h1 className={`mb-6 text-center text-2xl font-bold`}>
                        agora alguns projetos
                    </h1>
                </div>

                <ContainerCards />

            </div>
        </main>
    );
}
