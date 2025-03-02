import React from 'react'
import Backdrop from './Backdrop'
import { motion } from 'framer-motion'
import {ProjectPicture} from '../utils/LogoDatas'

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
                className="max-w-[90vw] w-[500px] flex justify-center items-center h-auto m-auto p-0 rounded-2xl flex-col bg-white shadow-lg"
                variants={dropIn}
            >
                <div className='relative w-full h-60 rounded-xl overflow-hidden'>
                    <img src={ProjectPicture.Futur1} className='w-full h-full object-cover'/>
                    <h2 className="absolute top-5 left-5 text-white text-2xl font-bold z-10">FUTUR</h2>
                </div>
                <div className="p-4 text-center">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                        More about
                    </button>
                </div>
            </motion.div>
        </Backdrop>
    )
}

export default Modal