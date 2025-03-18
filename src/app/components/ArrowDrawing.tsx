"use client"

import * as motion from "motion/react-client"

// const draw = {
//     hidden: { pathLength: 0, opacity: 0 },
//     visible: (i: number) => {
//         const delay = i * 0.5
//         return {
//             pathLength: 1,
//             opacity: 1,
//             transition: {
//                 pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
//                 opacity: { delay, duration: 0.01 },
//             },
//         }
//     },
// }
const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: { 
            duration: 2, 
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
};


export default function ArrowDrawing({ bottom }: { bottom: number }) {
    return (
        <div className={`absolute flex justify-center w-screen`} style={{ bottom: `-${bottom}px` }}>
            <motion.svg width="115" height="300" viewBox="0 0 200 400" fill="none">
                {/* Tige de la flèche */}
                <motion.ellipse
                    x1="100"
                    y1="300"
                    x2="100"
                    y2="240"
                    stroke="#4ff0b7"
                    variants={draw}
                    custom={1}
                    style={shape}
                    initial="hidden"
                    animate="visible"
                />

                {/* Pointe de la flèche */}
                <motion.line
                    x1="80"
                    y1="280"
                    x2="100"
                    y2="300"
                    stroke="#afa18f"
                    variants={draw}
                    custom={1.5}
                    style={shape}
                    initial="hidden"
                    animate="visible"
                />
                <motion.line
                    x1="120"
                    y1="280"
                    x2="100"
                    y2="300"
                    stroke="#afa18f"
                    variants={draw}
                    custom={2}
                    style={shape}
                    initial="hidden"
                    animate="visible"
                />
            </motion.svg>
        </div>
    )
}

/**
 * ==============   Styles   ================
 */

const image: React.CSSProperties = {
    maxWidth: "80vw",
}

const shape: React.CSSProperties = {
    strokeWidth: 10,
    strokeLinecap: "round",
    fill: "transparent",
}
