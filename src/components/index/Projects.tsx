"use client";

import { FaChevronRight } from "react-icons/fa6";
import ProjectCard from "./PCard";
import { motion } from "framer-motion";

export default function ProjectsIndex() {
    return (
        <div>
            
            <h2 className={`
                text-2xl font-semibold text-zinc-200 
                
            `}>Projetos</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  divide-y divide-violet-400/30">
                <ProjectCard /> 
                <ProjectCard /> 
                <ProjectCard /> 
            </div>

            <motion.a
                className={`
                    px-6 py-2 rounded-xl bg-violet-400/20 text-zinc-100
                    border border-violet-400/30
                    hover:bg-violet-600 font-semibold space-grotesk text-base
                    text-center flex items-center justify-center
                `}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="/about"
            >
                    Ver todos <FaChevronRight className=" inline h-3" />
            </motion.a>
        </div>
    )
}