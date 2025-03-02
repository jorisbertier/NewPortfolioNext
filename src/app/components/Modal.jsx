'use cleint'
import React from 'react'
import Backdrop from './Backdrop'
import { motion } from 'framer-motion'
import {ProjectPicture} from '../utils/LogoDatas'
import { useState } from 'react'

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
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselImages = [
        ProjectPicture.Futur1, 
        ProjectPicture.Entracte1, 
        ProjectPicture.calendar1, 
        ProjectPicture.calendar2
    ];

    // Fonction pour passer à l'image suivante
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
        console.log('Image suivante:', currentIndex + 1);
    };

    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                className="max-w-[90vw] w-[700px] flex justify-center items-center h-auto m-auto p-0 z-30 rounded-2xl flex-col bg-white shadow-lg"
                variants={dropIn}
                onClick={(e) => e.stopPropagation()}
            >
                <div className='relative w-full h-80 rounded-xl overflow-hidden'>
                <motion.img
            key={currentIndex}
            src={carouselImages[currentIndex]}
            className='absolute w-full h-full object-cover'
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            onClick={nextImage}
        />
                    <h2 className="absolute top-5 left-5 text-white text-2xl font-bold z-10">FUTUR</h2>
                </div>
                <div className="p-4 text-center">
                    <h2>Description</h2>
                    <h2>Stack </h2>
                <button
                    className="inline-block px-5 py-2 text-lg font-bold text-blue-500 border-2 border-blue-500 bg-transparent rounded-md cursor-pointer transition-all duration-300 ease-in-out shadow-[8px_6px_0_2px_#1d1e30] hover:bg-blue-500 hover:text-white"
                    >
                    More about
                    </button>
                </div>
            </motion.div>
        </Backdrop>
    )
}

export default Modal