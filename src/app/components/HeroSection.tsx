'use client'
import { useEffect, useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from '../utils/useMousePosition';
import StackSection from '../section/StackSection';

export default function HeroSection() {
    const [isHovered, setIsHovered] = useState(false);
    const { x, y } = useMousePosition();
    const size = isHovered ? 170 : 40;

    return (
        <main className="relative h-[200vh] w-full flex flex-col text-[#afa18f] text-4xl leading-[66px] cursor-default">
            
            {/* Première section */}
            <div className="h-screen w-full bg-blue-200 flex items-center justify-center relative">
                <p className="absolute z-10 max-w-[1000px] p-10 text-left font-avantGarde text-6xl font-bold">
                    Joris Bertier <br></br>
                    I develop <span className="text-[#ec4e39]">{'{*****}'} </span> for the web.
                </p>
            </div>
            <StackSection/>

            {/* Masque dynamique superposé */}
            <motion.div 
                className="absolute top-0 left-0 w-full h-full bg-[#ec4e39] text-black z-20 pointer-events-auto"
                animate={{
                    WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`, // Suppression de scrollY
                    WebkitMaskSize: `${size}px`,
                }}
                transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
                style={{   
                    WebkitMaskImage: "url('/mask.svg')",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskSize: "cover",
                }}
            >
                {/* Contenu superposé à la première section */}
                <div className="h-screen w-full bg-green-300 flex items-center justify-center">
                    <p 
                        className="max-w-[1000px] p-10 text-left text-6xl font-bold" 
                        onMouseEnter={() => setIsHovered(true)} 
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        Joris Bertier <br></br>
                        I develop <span className=" text-black">{'{things}'} </span> for the web.
                    </p>
                </div>
                <div className="h-screen w-full bg-green-300 flex items-center justify-center">
                    <p 
                        className="max-w-[1000px] p-10 text-left text-6xl font-bold" 
                        onMouseEnter={() => setIsHovered(true)} 
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        Joris Bertier <br></br>
                        I develop <span className=" text-black">{'{things}'} </span> for the web.
                    </p>
                </div>
            </motion.div>

        </main>
    );
}
