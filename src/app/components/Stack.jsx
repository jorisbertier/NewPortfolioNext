import React from 'react'
import { motion } from 'framer-motion'

function Stack({svg, skew, gradient, delay = 0}) {
    return (
        <motion.div
        className={`h-20 w-20 ${gradient} shadow-customStack rounded-2xl flex justify-center items-center`}
        animate={{y : [-10, 10, -10]}}
        initial={{ skewX: -skew }} 
        transition={{
            duration: 7,
            ease: 'easeInOut',
            repeat: Infinity,
            delay
        }}
    >
        {svg}
    </motion.div>
    )
}

export default Stack