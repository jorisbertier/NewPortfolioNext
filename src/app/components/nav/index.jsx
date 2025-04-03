import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from './anim';
import Link from './Link';
import Curve from './Curve';

    const navItems = [
    { title: "Home", href: "#home" },
    { title: "Work", href: "#work" },
    { title: "Stack", href: "#stack" },
    { title: "Contact", href: "#contact" },
];

export default function Index() {

    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    const smoothScroll = (targetY) => {
        window.scrollTo({
            top: targetY,
            behavior: "smooth"
        });
    };
    
    const handleClick = (e, href) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const section = document.querySelector(href);
            if (section) {
                const targetY = section.getBoundingClientRect().top + window.scrollY;
                smoothScroll(targetY);
                window.history.pushState(null, "", href);
            }
        }
    };
    return (
        <motion.div 
            variants={menuSlide} 
            initial="initial" 
            animate="enter" 
            exit="exit" 
            className="fixed top-0 right-0 h-screen bg-gray-900 text-white z-40"
        >
            <div className="h-full flex flex-col justify-between p-24">
                <div 
                onMouseLeave={() => setSelectedIndicator(pathname)} 
                className="flex flex-col z-50 text-5xl gap-3 mt-20 text-white"
                >
                {navItems.map((data, index) => (
                    <Link 
                    key={index} 
                    data={{ ...data, index }} 
                    isActive={selectedIndicator === data.href} 
                    setSelectedIndicator={setSelectedIndicator}
                    onClick={(e) => handleClick(e, data.href)}
                    scroll={false}
                    />
                ))}
                </div>
            </div>
            <Curve />
        </motion.div>
    );
}
