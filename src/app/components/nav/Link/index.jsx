// import styles from './style.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../anim';

export default function Index({data, isActive, setSelectedIndicator}) {

const { title, href, index} = data;

return (
    <motion.div className="relative flex items-center" onMouseEnter={() => {setSelectedIndicator(href)}} custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
        <motion.div variants={scale} animate={isActive ? "open" : "closed"} className="w-2.5 h-2.5 bg-brown absolute rounded-full left-[-30px]"></motion.div>
        <Link href={href}>{title}</Link>
    </motion.div>
)
}