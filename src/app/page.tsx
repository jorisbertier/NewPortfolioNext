'use client';
import { AnimatePresence } from 'framer-motion';
import Nav from '../../src/app/components/nav/index';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import HeroSection from './components/HeroSection';
import PathDrawing from './components/ArrowDrawing';
import Chatbot from '../app/components/chatbot/Chatbot'

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const [marginLeft, setMarginLeft] = useState("0");

  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  const handleMouse = () => {
    setMarginLeft('-50px')
  }
  const handleMouseLeave = () => {
    setMarginLeft("0");
  };

  return (
    <div className='w-screen flex flex-col'>
      <div className='fixed top-8 font-extrabold z-30 text-3xl left-10 text-brown'>
        <img src={'/assets/logoPortfolio.png'} alt="Logo portfolio Joris Bertier" width={40} height={40} className='rounded-full'/>
      </div>
      <div
        className="fixed bottom-8 font-bold z-40 text-sm left-12 text-brown w-16 h-4 overflow-hidden"
        onMouseEnter={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="transition-all duration-500 ease-in-out"
          style={{ marginLeft }}
        >
          2025 © portfolio
        </div>
      </div>
      <div className='max-w-full'>
        {/* <p className=' text-[60px] top-[100px] left-[100px] text-white z-10 font-avantGarde font-bold absolute'>Hello .<span className='bg-white h-8 w-8 rounded-full z-10'></span></p> */}
        {/* Texte principal en arrière-plan */}
        <div className="absolute z-50">
          <div className="fixed right-6 z-10 p-7">
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
      <Chatbot/>
    </div>
  );
}
