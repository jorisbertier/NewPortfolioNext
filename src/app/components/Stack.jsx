import React from 'react'
import { motion } from 'framer-motion'

function Stack({svg, skew, gradient, startY = 10, stack}) {

    return (
        <motion.div
            className={`w-12 h-12 sm:h-20 sm:w-20 ${gradient} shadow-customStack rounded-2xl z-30 flex justify-center items-center cursor-pointer relative group transition-transform duration-300 ease-in-out hover:-translate-y-2`}
            animate={{y : [-startY, startY, -startY]}}
            initial={{ skewX: -skew }} 
            transition={{
                duration: 7,
                ease: 'easeInOut',
                repeat: Infinity
            }}
            whileHover={{ y: 0 }} 
        >
            {svg}
            <div className='absolute z-10 bg-black/50 w-auto text-white text-sm font-normal -bottom-5 pr-2 pl-2 rounded-md opacity-0  group-hover:opacity-100 transition-opacity duration-300'>{stack}</div>
        </motion.div>
    )
}

export default Stack