import React from 'react'
import {motion} from 'framer-motion'

function Backdrop({children, onClick}) {
    return (
        <motion.div         
        className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50 overflow-hidden"
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
    >
        {children}
    </motion.div>
    )
}

export default Backdrop