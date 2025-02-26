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
            <p className="absolute z-0 max-w-[1000px] p-10 text-center font-avantGarde text-6xl font-bold">
            I develop <span className="text-[#ec4e39]">{'{things}'} </span> for the web.
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
                    I develop <span className="text-[#afa18f]">{'{things}'} </span> for the web.
                </p>
            </motion.div>

        </main>
    );
}
