import { HiOutlineMail,  } from "react-icons/hi";
import { FaInstagram,FaBehance } from "react-icons/fa";

export default function Footer() {
    return (
        <footer
            className={`
            w-full
            flex flex-row justify-between items-start
            border-t border-neutral-200
            p-12
        `}
        >
            <div className="flex flex-col w-1/3">
                <p
                    className={`
                    text-2xl gelica mb-5
                `}
                >
                    Gostasse?
                </p>
                <p
                    className={`
                    text-base mb-3
                    text-pretty
                `}
                >
                    Se você gostou do meu trabalho e quer falar sobre algum projeto, ideia ou tem alguma crítica, fique à vontade para entrar em contato comigo.
                </p>
                <p
                    className={`
                    text-base mb-3
                    text-pretty
                `}
                >
                    Atualmente meu foco é em desenvolvimento front end, no estudo de UI e Web Design no geral, mas estou sempre disposto a aprender e me aventurar em novas áreas. Qualquer que seja a proposta, ficarei feliz em dar uma olhada!
                </p>
            </div>
            <div className="flex flex-row items-center justify-end w-2/5 gap-3">
                <HiOutlineMail className="size-6" />
                <FaBehance className="size-6" />
                <FaInstagram className="size-5" />
            </div>
        </footer>
    );
}