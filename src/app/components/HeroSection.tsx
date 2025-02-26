'use client'
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from '../utils/useMousePosition';

export default function HeroSection() {
    const [isHovered, setIsHovered] = useState(false);
    const { x, y } = useMousePosition();
    const size = isHovered ? 170 : 40;

    return (
        <main className="relative h-screen w-full flex items-center justify-center text-[#afa18f] text-4xl leading-[66px] cursor-default">
            
            {/* Texte principal en arrière-plan */}
            <p className="absolute z-0 max-w-[1000px] p-10 text-center font-avantGarde text-6xl font-bold">
                I'm a <span className="text-[#ec4e39]">selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.
            </p>

            {/* Masque dynamique au-dessus */}
            <motion.div 
                className="absolute w-full h-full flex items-center justify-center bg-[#ec4e39] text-black z-10"
                animate={{
                    WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
                    WebkitMaskSize: `${size}px`,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
                style={{   
                    maskImage: "url('/mask.svg')",
                    maskRepeat: "no-repeat",
                    maskSize: "cover",
                }}
            >
                <p 
                    className="max-w-[1000px] p-10 text-center text-6xl font-bold" 
                    onMouseEnter={() => setIsHovered(true)} 
                    onMouseLeave={() => setIsHovered(false)}
                >
                    A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good.
                </p>
            </motion.div>

        </main>
    );
}
