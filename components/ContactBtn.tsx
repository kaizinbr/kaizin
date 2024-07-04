"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactBtn() {
    return (
        <div
            className={`
            
        `}
        >
            <button
                className={`
                    relative flex flex-col items-center justify-start
                    group
                    bg-outrageous-orange-100
                    text-stone-900
                    rounded-full
                    w-44 h-14
                    overflow-hidden
                `}
            >
                
                <div className="py-3 px-6 w-44 h-16 transition-all duration-300 group-hover:-translate-y-16">
                    <p
                        className={`
                            m-0 z-10
                            
                            text-xl 
                        `}
                    >
                        Contato
                    </p>
                </div>
                <div className={`
                        rounded-full group-hover:-translate-y-full bg-[#fff98e]  
                        py-3 px-6 w-44 h-14
                        transition-all duration-300 
                    `}>
                        <p
                        className={`
                            
                            text-xl 
                        `}
                    >
                        Contato2
                    </p>
                    </div>
                {/* <ArrowRight className="transition-all duration-300 translate-x-12 group-hover:-translate-x-2" /> */}
            </button>
        </div>
    );
}
