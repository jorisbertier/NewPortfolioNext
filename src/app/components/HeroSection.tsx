'use client'
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from '../utils/useMousePosition';

export default function HeroSection() {
    const [isHovered, setIsHovered] = useState(false);
    const { x, y } = useMousePosition();
    const size = isHovered ? 170 : 40;

    return (
        <>
        <main className="relative h-min-full h-screen w-full flex items-center justify-center text-[#afa18f] text-4xl leading-[66px] cursor-default">
            <p className="absolute z-0 max-w-[1000px] p-10 text-left font-avantGarde text-6xl font-bold">
            Joris Bertier <br></br>I develop <span className="text-[#ec4e39]">{'{things}'} </span> for the web.
            </p>

            {/* <motion.div className='flex flex-col z-20'                     onMouseEnter={() => setIsHovered(true)} 
                    onMouseLeave={() => setIsHovered(false)}>
            <p className='w-full justify-center flex mt-96'>Test</p>
            <p className='w-full justify-center flex mt-96'>Test</p>
            <p className='w-full justify-center flex mt-96'>Test</p>
            <p className='w-full justify-center flex mt-96'>Test</p>
                <div className='h-96 w-full bg-green-500'></div>

            </motion.div> */}

            {/* Masque dynamique au-dessus */}
            <motion.div 
                className=" w-full h-full flex items-center justify-center bg-[#ec4e39] text-black z-10"
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
                    className="max-w-[1000px] p-10 text-left text-6xl font-bold" 
                    onMouseEnter={() => setIsHovered(true)} 
                    onMouseLeave={() => setIsHovered(false)}
                >
                    Joris Bertier <br></br>I develop <span className="text-[#afa18f]">{'{things}'} </span> for the web.
                </p>
            </motion.div>
        </main>
        </>
    );
}
