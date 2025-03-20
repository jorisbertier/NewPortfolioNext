'use client'
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from '../utils/useMousePosition';
import StackSection from '../section/StackSection';
import Projects from './projects';
import RevealName from './RevealName';

export default function HeroSection() {
    const [isHovered, setIsHovered] = useState(false);
    const { x, y } = useMousePosition();
    const size = isHovered ? 300 : 40;

    return (
        <main className="relative h-[300vh] w-full flex flex-col text-brown text-4xl leading-[66px] cursor-default">
            
            {/* Première section */}
            <div className="h-screen w-full flex items-center justify-center" id="home">
                <p className="leading-[100px] max-w-[1000px] uppercase p-10 text-center font-avantGarde text-[6rem] font-bold">
                    I develop<br></br> <span className="text-primary">{'things'} </span><br></br> for <br></br>the web
                </p>
            </div>
            {/* <StackSection/> */}
            <div className='z-30 m-0 p-0' id="work">
                <RevealName name={'Works'}/>
                <Projects/>
            </div>
            <StackSection/>

            {/* Masque dynamique superposé */}
            <motion.div 
                className="absolute top-0 left-0 w-full h-full bg-primary text-black z-20 pointer-events-auto"
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
                {/* First section */}
                <div className="h-screen w-full flex items-center justify-center">
                    <p 
                        className="max-w-[1000px] mt-20 p-10 text-[6rem] font-bold uppercase leading-[100px] text-center" 
                        onMouseEnter={() => setIsHovered(true)} 
                        onMouseLeave={() => setIsHovered(false)}
                    >
                                            I develop<br></br>{'applications'} <br></br> for  <br></br>the web<br></br>
                                            <span className='text-xl tracking-[0.5em]'>Joris Bertier</span>
                    </p>
                </div>
                {/* Second section */}
                <div className="h-screen w-full flex items-center justify-center">
                    
                </div>
                {/* Third section */}
                <div className="h-screen w-full flex items-center justify-evenly">
                    {/* <div className='h-20 w-20'></div> */}
                    <div className='w-[84%] mr-[8%] ml-[8%] mt-3 flex justify-around gap-8 text-center'>
                        <div className='flex flex-col'>
                            <h2 className="text-6xl font-bold -mt-[110px] ml-14"
                                onMouseEnter={() => setIsHovered(true)} 
                                onMouseLeave={() => setIsHovered(false)}
                            >Front
                            </h2>
                            <div className='flex flex-wrap justify-center h-auto gap-10 max-w-96'>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-6xl font-bold -mt-[110px] ml-14"                                 onMouseEnter={() => setIsHovered(true)} 
                                onMouseLeave={() => setIsHovered(false)}>Back</h2>
                            <div className='flex flex-wrap justify-center h-auto gap-10 max-w-96'>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-6xl font-bold -mt-[110px]"                                 onMouseEnter={() => setIsHovered(true)} 
                                onMouseLeave={() => setIsHovered(false)}>Tools</h2>
                            <div className='flex flex-wrap justify-center h-auto gap-10 max-w-96'>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

        </main>
    );
}
