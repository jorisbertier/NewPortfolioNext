import React from 'react'
import {motion} from 'framer-motion'

function Backdrop({children, onClick}) {
    return (
        <div className='w-full m-auto flex justify-center items-center bg-red-500 '>
        <motion.div         
            className="absolute w-96 h-96 bg-white flex justify-center items-center 
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-xl"
            onClick={onClick}
            initial={{opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
        >
            {children}
            </motion.div>

        </div>
    )
}

export default Backdrop