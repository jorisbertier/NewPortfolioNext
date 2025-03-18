'use client'
import React from 'react'
import Backdrop from './Backdrop'
import { motion } from 'framer-motion'
import {Logos, ProjectPicture} from '../utils/LogoDatas'
import { useState, useEffect } from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import LogoStack from './LogoStack'

function Modal({handleClose, modalOpen,
    src,
    description, title,
    stack,
    texts

}) {
    console.log('text', texts)
    useEffect(() => {
        document.body.style.overflowY = modalOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflowY = "auto";
        };
    }, [modalOpen]);
    
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
    
    const nextImage = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % src.length;
            console.log('Image suivante:', newIndex);
            return newIndex;
        });
    };
    
    const prevImage = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex === 0 ? src.length - 1 : prevIndex - 1;
            console.log('Image précédente:', newIndex);
            return newIndex;    
        });
    };

    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                className="max-w-[80vw] w-[700px] overflow-y-auto flex justify-center items-center max-h-[80vh] m-auto p-0 z-40 rounded-2xl flex-col bg-shadow shadow-2xl"
                variants={dropIn}
                onClick={(e) => e.stopPropagation()}
            >
                <div className='relative w-full h-[800px] bg-black rounded-xl overflow-hidden'>
                    <motion.img
                        key={currentIndex}
                        src={src[currentIndex]}
                        className='absolute w-full h-full object-fill aspect-3/2'
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                    <div className='absolute top-5 left-5 backdrop-blur-lg'>
                    <h2 className="absolute top-5 left-5 text-white text-2xl font-bold z-10">{title}</h2>

                    </div>
                </div>
                <div className='w-full flex justify-center mt-5 mb-3'>
                    <div className="bottom-4 flex items-center space-x-3">
                        <div className='p-2 bg-primary mr-2 rounded-full cursor-pointer' onClick={() => prevImage()}>
                            <MdArrowBackIosNew fill="black" size={25} />
                        </div>
                            {src.map((_, index) => (
                                <motion.div
                                    key={index}
                                    className="h-2 rounded-full bg-primary"
                                    animate={index === currentIndex ? { width: 20 } : { width: 8 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                    style={{ width: 8 }}
                                />
                            ))}
                        <div className='p-2 bg-primary ml-2 rounded-full cursor-pointer' onClick={() => nextImage()}>
                            <MdArrowForwardIos fill='black' size={25}/>
                        </div>
                    </div>
                </div>
                <div className='w-full text-left p-4 overflow-y-auto'>
                    <div className='mb-5'>
                        <h2 className='text-3xl mb-4 font-bold'>Description</h2>
                        <p className='text-base'>{description}
                        </p>
                    </div>
                    <div>
                        <h2 className='text-3xl font-bold mb-5'>Stack</h2>
                        <div className='flex gap-5 items-center'>
                            {stack.map((item, index) => (
                                <LogoStack key={index} logo={item} size={50}/>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className='text-3xl font-bold mb-5 mt-5'>Main features</h2>
                        <div className='flex gap-5 flex-col'>
                        {Array.isArray(texts) && texts.length > 0 ? (
                            texts.map((item, index) => (
                                <React.Fragment key={index}>
                                    <span className='text-base'>- {item}</span>
                                </React.Fragment>
                            ))
                        ) : (
                            <p className='text-base'>No features available.</p>
                        )}
                    </div>
                    </div>
                </div>
                {/* <div className="p-4 text-center">
                <button
                    className="inline-block px-5 py-2 text-lg font-bold text-blue-500 border-2 border-blue-500 bg-transparent rounded-md cursor-pointer transition-all duration-300 ease-in-out shadow-[8px_6px_0_2px_#1d1e30] hover:bg-blue-500 hover:text-white"
                    >
                    More about
                    </button>
                </div> */}
            </motion.div>
        </Backdrop>
    )
}

export default Modal