import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from './anim';
import Link from './Link';
import Curve from './Curve';

    const navItems = [
    { title: "Home", href: "/" },
    { title: "Work", href: "/work" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
];

export default function Index() {
    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    return (
        <motion.div 
        variants={menuSlide} 
        initial="initial" 
        animate="enter" 
        exit="exit" 
        className="fixed top-0 right-0 h-screen bg-gray-900 text-white"
        >
        <div className="h-full flex flex-col justify-between p-24">
            <div 
            onMouseLeave={() => setSelectedIndicator(pathname)} 
            className="flex flex-col text-5xl gap-3 mt-20"
            >
            <div className="text-gray-500 border-b border-gray-500 uppercase text-xs mb-10">
                <p>Navigation</p>
            </div>
            {navItems.map((data, index) => (
                <Link 
                key={index} 
                data={{ ...data, index }} 
                isActive={selectedIndicator === data.href} 
                setSelectedIndicator={setSelectedIndicator} 
                />
            ))}
            </div>
        </div>
        <Curve />
        </motion.div>
    );
}
