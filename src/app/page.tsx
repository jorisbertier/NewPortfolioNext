'use client';

import { AnimatePresence } from 'framer-motion';
import Nav from '../../src/app/components/nav/index';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <>
    <div className='w-full flex justify-center'>
    <h1 className='text-blue-500'>Test</h1>
    
    </div>
      <div className="relative">
        <div className="fixed right-0 z-10 p-7">
          <div
            onClick={() => setIsActive(!isActive)}
            className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-600 cursor-pointer"
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
    </>
  );
}
