'use client';
import { AnimatePresence } from 'framer-motion';
import Nav from '../../src/app/components/nav/index';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import HeroSection from './components/HeroSection';
import PathDrawing from './components/ArrowDrawing';
import Chatbot from '../app/components/chatbot/Chatbot'
import ScrollProgressBar from './components/ScrollProgressBar'

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
      {/* <div
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
      </div> */}
        <div className='fixed bottom-8 flex flex-col gap-4 font-bold text-sm left-11 z-50'>
          <div className=' bg-bgbrown z-50 p-2 rounded-xl'>
        <svg viewBox="0 0 20 20" width={20} height={20} version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>

          </div>
          <div className=' bg-bgbrown z-50 p-2 rounded-xl'>
        <svg viewBox="0 0 20 20" width={20} height={20} version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>

          </div>
        </div>
      <ScrollProgressBar/>
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

const SplineViewer = () => {
  return (
      <div className="w-full h-screen flex justify-center items-center z-50 bg-white">
          <iframe
          allow="xr-spatial-tracking"
              src="https://my.spline.design/3droomexample-e89c41cdd2b4b9133e5704fb338452c5/"
              className="w-[800px] h-[600px] border-none rounded-lg shadow-lg"
              allowFullScreen
          ></iframe>
      </div>
  );
};
