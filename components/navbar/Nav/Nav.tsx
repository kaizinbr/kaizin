import { motion } from "framer-motion";
import { links, footerLinks } from "./data";
import { perspective, slideIn } from "./anim";
import Link from "next/link";
import localFont from "next/font/local";

const uglyDave = localFont({
    src: "../../../resources/fonts/UglyDaveRegular.otf",
    display: "swap",
});

export default function Nav({
    setIsActive,
}: {
    setIsActive: (arg: boolean) => void;
}) {
    return (
        <div
            className={`flex flex-col justify-between pt-10 px-10 pb-10 h-full`}
        >
            <div className={`flex gap-3 flex-col`}>
                <motion.div
                    variants={slideIn}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    custom={0}
                >
                    <Link
                        href="/"
                        className={
                            uglyDave.className +
                            `
                                font-bold text-3xl mb-12 uppercase
                            `
                        }
                        onClick={() => {
                            setIsActive(false);
                        }}
                    >
                        kaizin
                    </Link>
                </motion.div>
                {links.map((link, i) => {
                    const { title, href } = link;
                    return (
                        <motion.div
                            key={`b_${i}`}
                            custom={i + 1}
                            variants={slideIn}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                        >
                            <Link
                                href={href}
                                className={`
                                        text-5xl gelica-menu
                                        hover:text-[#4b4553] hover:underline
                                        hover:decoration-[#4b4553] hover:decoration-2
                                        transition-all duration-200 ease-in-out
                                    `}
                                onClick={() => {
                                    setIsActive(false);
                                }}
                            >
                                {title}
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
            <motion.div className={`flex flex-wrap`}>
                {footerLinks.map((link, i) => {
                    const { title, href } = link;
                    return (
                        <motion.a
                            variants={slideIn}
                            custom={i}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            key={`f_${i}`}
                            className="w-1/2 mt-2"
                            href={href}
                        >
                            {title}
                        </motion.a>
                    );
                })}
            </motion.div>
        </div>
    );
}
