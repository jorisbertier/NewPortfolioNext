'use client';

import { AnimatePresence } from 'framer-motion';
import Nav from '../../src/app/components/nav/index';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import HeroSection from './components/HeroSection';
import PathDrawing from './components/ArrowDrawing';
// import RevealName from './components/RevealName'
import ProjectsSection from '../app/section/ProjectSection'
import StackSection from '../app/section/StackSection'

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <div className='w-screen flex flex-col'>
      <div className='max-w-full'>
        {/* <RevealName /> */}
        {/* <p className=' text-[60px] top-[100px] left-[100px] text-white z-10 font-avantGarde font-bold absolute'>Hello .<span className='bg-white h-8 w-8 rounded-full z-10'></span></p> */}
        {/* Texte principal en arrière-plan */}
        <div className="absolute z-30">
          <div className="fixed right-0 z-10 p-7">
            <div
              onClick={() => setIsActive(!isActive)}
              className="w-20 h-20 flex items-center justify-center rounded-full bg-bgbrown cursor-pointer"
            >
              <div
                className={`relative w-full flex flex-col items-center transition-transform duration-300 
                `}
              >
                <span className={`block w-2/5 h-px bg-white transition-transform duration-300 transform origin-center mb-1 
                ${isActive ? 'translate-y-[4px] rotate-45' : ''}`}></span>
                <span className={`block w-2/5 h-px bg-white transition-transform duration-300 transform origin-center mt-1 
                ${isActive ? '-translate-y-[4px] -rotate-45' : ''}`}></span>
              </div>
            </div>
          </div>
        </div>
        <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
      </div>
      <PathDrawing bottom={0}/>
      <PathDrawing bottom={45}/>
      <HeroSection>
      </HeroSection>
      <ProjectsSection/>
      <StackSection />
    </div>
  );
}
