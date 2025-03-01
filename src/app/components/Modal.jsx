import React from 'react'
import Backdrop from './Backdrop'
import { motion } from 'framer-motion'

function Modal({handleClose, modalOpen}) {

    const dropIn = {
        hidden: {
            y: '-100vh',
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 100,
                siffness: 500
            }
        },
        exit: {
             y: '100vh',
             opacity: 0,
        },

    }
    return (
        <Backdrop onClick={handleClose}>
            <motion.div
            // w-[clamp(50%,100px,90%)] h-[min(50%,300px)]
            className="w-96 flex justify-center items-center h-28 m-auto p-4 rounded-xl flex-col bg-black shadow-lg"
            onClick={(e) => e.stopPropagation()}
            variants={dropIn}
            >
                Test
            </motion.div>
        </Backdrop>
    )
}

export default Modal