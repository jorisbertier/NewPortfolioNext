import React from 'react'
import { motion } from 'framer-motion'

function Stack({svg, skew, gradient, startY = 10 }) {
    return (
        <motion.div
        className={`h-20 w-20 ${gradient} shadow-customStack rounded-2xl flex justify-center items-center`}
        animate={{y : [-startY, startY, -startY]}}
        initial={{ skewX: -skew }} 
        transition={{
            duration: 7,
            ease: 'easeInOut',
            repeat: Infinity
        }}
    >
        {svg}
    </motion.div>
    )
}

export default Stack