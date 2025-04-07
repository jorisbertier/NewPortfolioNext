'use client'

import { motion } from "framer-motion";

export default function RevealName({name}) {
    return (
        <section className="py-10 sm:py-20 z-10 ml-[10%] text-brown w-full sm:w-[300px]">
        {/* <FlipLink href="#">Joris</FlipLink> */}
        {/* <FlipLink href="#">Linkedin</FlipLink> */}
        {/* <FlipLink href="#">Facebook</FlipLink> */}
        <FlipLink href="#">{name}</FlipLink>
        </section>
    );
    };

    const DURATION = 0.25;
    const STAGGER = 0.025;

    const FlipLink = ({ children, href }) => {
    return (
        <motion.a
        initial="initial"
        whileHover="hovered"
        href={href}
        className="relative z-20 block overflow-hidden w-auto whitespace-nowrap text-[3rem] s:text-[3.5rem] sm:text-[80px] font-avantGarde font-bold"
        style={{
            lineHeight: 1,
        }}
        >
        <div>
            {children.split("").map((l, i) => (
            <motion.span
                variants={{
                initial: {
                    y: 0,
                },
                hovered: {
                    y: "-110%",
                },
                }}
                transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
                }}
                className="inline-block"
                key={i}
            >
                {l}
            </motion.span>
            ))}
        </div>
        <div className="absolute inset-0">
            {children.split("").map((l, i) => (
            <motion.span
                variants={{
                initial: {
                    y: "100%",
                },
                hovered: {
                    y: 0,
                },
                }}
                transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
                }}
                className="inline-block"
                key={i}
            >
                {l}
            </motion.span>
            ))}
        </div>
        </motion.a>
    );
};