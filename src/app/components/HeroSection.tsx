'use client'
import { useEffect, useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from '../utils/useMousePosition';
import StackSection from '../section/StackSection';
import Projects from './projects';

export default function HeroSection() {
    const [isHovered, setIsHovered] = useState(false);
    const { x, y } = useMousePosition();
    const size = isHovered ? 300 : 40;

    return (
        <main className="relative h-[300vh] w-full flex flex-col text-[#afa18f] text-4xl leading-[66px] cursor-default">
            
            {/* Première section */}
            <div className="h-screen w-full flex items-center justify-center">
                <p className="leading-[100px] max-w-[1000px] uppercase p-10 text-center font-avantGarde text-[6rem] font-bold">
                    I develop<br></br> <span className="text-[#ec4e39]">{'things'} </span><br></br> for <br></br>the web
                </p>
            </div>
            {/* <StackSection/> */}
            <div className='z-40 m-0 p-0'>
                <Projects/>
            </div>

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
                <div className="h-screen w-full flex items-center justify-center">
                    <p 
                        className="max-w-[1000px] mt-20 p-10 text-[6rem] font-bold uppercase leading-[100px] text-center" 
                        onMouseEnter={() => setIsHovered(true)} 
                        onMouseLeave={() => setIsHovered(false)}
                    >
                                            I develop<br></br> <span className="text-[#afa18f]">{'applications'} </span><br></br> for  <br></br>the web<br></br>
                                            <span className='text-xl tracking-[0.5em]'>Joris Bertier</span>
                    </p>
                </div>
                <div className="h-screen w-full flex items-center justify-center">
                </div>
            </motion.div>

        </main>
    );
}
