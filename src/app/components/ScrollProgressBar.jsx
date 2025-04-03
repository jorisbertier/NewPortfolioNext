import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollProgressBar = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = (scrollTop / documentHeight) * 100;
            setScrollPercentage(scrollProgress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-1/2 left-3 sm:left-14 transform -translate-y-1/2 h-[300px] w-2 z-40 rounded-md">
            <motion.div
                className="w-full bg-bgbrown rounded-md"
                animate={{ height: `${scrollPercentage}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
            />
        </div>
    );
};

export default ScrollProgressBar;
