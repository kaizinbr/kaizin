"use client";

import { DiReact } from "react-icons/di";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
    return (
        <div className="mt-20">
            
            <h2 className={`
                text-2xl font-semibold text-zinc-200 
                
            `}>Habilidades</h2>

            <div className="">
                <h4 className="font-semibold text-zinc-400 text-sm mt-2 mb-1">Aprendendo atualmente</h4>
                <div className={`
                    mb-4 flex flex-row gap-x-4 flex-wrap
                `}>
                    <span>
                        <DiReact className="inline text-violet-400 h-6 w-6" />{" "}
                        React
                    </span>
                    <span>
                        <SiNextdotjs className="inline text-violet-400 h-5 w-5" />{" "}
                        Next.Js
                    </span>
                    <span>
                        <SiTypescript className="inline text-violet-400 h-5 w-5" />{" "}
                        Typescript
                    </span>
                    <span>
                        <SiTailwindcss className="inline text-violet-400 h-5 w-5" />{" "}
                        TailwindCss
                    </span>
                </div>
                <h4 className="font-semibold text-zinc-400 text-sm mb-1">Já me sinto confiante</h4>
                <div className={`
                    mb-4 flex flex-row gap-x-4 flex-wrap
                `}>
                    <span>
                        <DiReact className="inline text-violet-400 h-6 w-6" />{" "}
                        React
                    </span>
                    <span>
                        <SiNextdotjs className="inline text-violet-400 h-5 w-5" />{" "}
                        Next.Js
                    </span>
                    <span>
                        <SiTypescript className="inline text-violet-400 h-5 w-5" />{" "}
                        Typescript
                    </span>
                    <span>
                        <SiTailwindcss className="inline text-violet-400 h-5 w-5" />{" "}
                        TailwindCss
                    </span>
                </div>
                <h4 className="font-semibold text-zinc-400 text-sm mb-1">Conheço a base</h4>
                <div className={`
                    mb-4 flex flex-row gap-x-4 flex-wrap
                `}>
                    <span>
                        <DiReact className="inline text-violet-400 h-6 w-6" />{" "}
                        React
                    </span>
                    <span>
                        <SiNextdotjs className="inline text-violet-400 h-5 w-5" />{" "}
                        Next.Js
                    </span>
                    <span>
                        <SiTypescript className="inline text-violet-400 h-5 w-5" />{" "}
                        Typescript
                    </span>
                    <span>
                        <SiTailwindcss className="inline text-violet-400 h-5 w-5" />{" "}
                        TailwindCss
                    </span>
                </div>
            </div>

            
        </div>
    )
}