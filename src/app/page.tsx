'use client';
import { AnimatePresence } from 'framer-motion';
import Nav from '../../src/app/components/nav/index';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import HeroSection from './components/HeroSection';
import Chatbot from '../app/components/chatbot/Chatbot'
import ScrollProgressBar from './components/ScrollProgressBar'
import { useModal } from './context/ModalContext';
import Link from 'next/link';

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const [size, setSize] = useState("48px");
  const [isClient, setIsClient] = useState(false);

  const { modalOpen } = useModal();
  
  useEffect(() => {
      setIsClient(true);
  }, []);
  
  useEffect(() => {
      if (!isClient) return;
  
      const updateSize = () => {
          if(window.innerWidth >= 640) {
              setSize("20")
          }
          else {
              setSize("18")
          }
      };
  
      window.addEventListener("resize", updateSize);
      updateSize();
  
      return () => window.removeEventListener("resize", updateSize);
  }, [isClient]);
  //comments
  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <div className='w-screen flex flex-col max-w-full'>
      <div className='fixed left-2 top-4 sm:left-10 sm:top-8 font-extrabold z-30 text-2xl invisible sm:visible sm:text-3xl text-brown'>
        JB
      </div>
        <div className='fixed left-2 bottom-4 sm:bottom-8 sm:left-11 flex flex-col gap-4 font-bold text-sm z-50'>
          <Link href="https://github.com/jorisbertier" target='_blank'>
            <div className='z-50 p-1 sm:p-2 rounded-lg sm:rounded-xl cursor-pointer bg-brown transition-all ease-in hover:scale-90 hover:bg-[#5efc8d]'>
              <svg viewBox="0 0 20 20" width={size} height={size} version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/joris-bertier-505369260/" target="_blank">
            <div className='z-50 p-1 sm:p-2 rounded-lg sm:rounded-xl bg-bgbrown transition-all ease-in cursor-pointer hover:scale-90 hover:bg-[#5efc8d]'>
              <svg viewBox="0 0 20 20" width={size} height={size} version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>linkedin [#161]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -7479.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z" id="linkedin-[#161]"> </path> </g> </g> </g> </g></svg>
            </div>
          </Link>
        </div>
      <ScrollProgressBar/>
      <div className={`max-w-full -mb-10 s:mb-0`}>
        <div className={`absolute z-50 ${modalOpen ? 'invisible' : 'visible'}`}>
          <div className="fixed -right-2 sm:right-2 z-10 p-4 sm:p-6">
            <div
              onClick={() => setIsActive(!isActive)}
              className="h-14 w-14 xs:w-20 xs:h-20 flex items-center justify-center rounded-full bg-bgbrown cursor-pointer"
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
      <HeroSection>
      </HeroSection>
      <Chatbot/>
    </div>
  );
}
