import Index from "@/components/index/IndexIntro";
import About from "@/components/index/About";
import ProjectsIndex from "@/components/index/Projects";
import Skills from "@/components/index/Skills";

export default function Home() {
    return (
        <div className="">
            <div className={`
                index
            `}>
                <Index />
                <ProjectsIndex />
                <Skills />
            </div>
        </div>
    );
}
