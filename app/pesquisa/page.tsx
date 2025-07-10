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
            `}
            >
                <div className="md:col-span-12">
                    <h1 className={`text-5xl text-start gelica mb-6`}>
                        em construção...
                    </h1>
                    <p className={`text-pretty mb-6`}>
                        volta mais tarde, por favor!
                    </p>
                </div>
            </div>
        </main>
    );
}
