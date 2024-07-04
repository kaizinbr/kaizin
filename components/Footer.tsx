import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram, FaBehance, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import ContactBtn from "./ContactBtn";

export default function Footer() {
    return (
        <div
            className="relative h-[calc(100dvh-68px)]  w-full"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <footer className="fixed bottom-0 h-[calc(100dvh-68px)] w-full m-auto border-t border-neutral-200 text-outrageous-orange-50 bg-[#FE552A]">
                <div
                    className={`
            
                    flex flex-col md:flex-row
                    max-w-screen-lg m-auto
            
                    justify-between items-start
                    py-12 md:px-12 lg:px-0 px-6
                `}
                >
                    <div className="flex flex-col w-full md:w-1/3 mb-5">
                        <p
                            className={`
                            text-4xl gelica mb-5
                        `}
                        >
                            Gostasse?
                        </p>
                        {/* <ContactBtn /> */}
                        <p
                            className={`
                            text-base mb-3
                            text-pretty
                        `}
                        >
                            Se você gostou do meu trabalho e quer falar sobre
                            algum projeto, ideia ou tem alguma crítica, fique à
                            vontade para entrar em contato comigo.
                        </p>
                        <p
                            className={`
                            text-base mb-3
                            text-pretty
                        `}
                        >
                            Atualmente meu foco é em desenvolvimento front end,
                            no estudo de UI e Web Design no geral, mas estou
                            sempre disposto a aprender e me aventurar em novas
                            áreas. Qualquer que seja a proposta, ficarei feliz
                            em dar uma olhada!
                        </p>
                    </div>
                    <div className="flex flex-row items-center justify-start md:justify-end w-full md:w-2/5 gap-3">
                        <Link
                            href="mailto:kaiolucas1812@gmail.com"
                            target="_blank"
                        >
                            <HiOutlineMail className="size-6" />
                        </Link>
                        <Link
                            href="https://www.behance.net/kaizin"
                            target="_blank"
                        >
                            <FaBehance className="size-6" />
                        </Link>
                        <Link
                            href="https://www.instagram.com/05kaizin"
                            target="_blank"
                        >
                            <FaInstagram className="size-5" />
                        </Link>
                        <Link
                            href="https://github.com/kaizinbr"
                            target="_blank"
                        >
                            <FaGithub className="size-5" />
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
