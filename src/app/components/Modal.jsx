'use client'
import React from 'react'
import Backdrop from './Backdrop'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import LogoStack from './LogoStack'
import { useModal } from '@/app/context/ModalContext';

function Modal({handleClose, modalOpen,
    src,
    description, title,
    stack,
    texts

}) {
    const [size, setSize] = useState(25);
    const { selectedProject} = useModal();
    const [isImagesPreloaded, setIsImagesPreloaded] = useState(false);
    
    useEffect(() => {
    
        const updateSize = () => {
            if (window.innerWidth >= 450) {
                setSize(25);
            } else {
                setSize(20);
            }
        };
    
        window.addEventListener("resize", updateSize);
        updateSize();
    
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    useEffect(() => {
        if (modalOpen && src && src.length > 0) {
            let loaded = 0;
            src.forEach((image) => {
                const img = new Image();
                img.src = image;
                img.onload = () => {
                    loaded++;
                    if (loaded === src.length) {
                        setIsImagesPreloaded(true);
                    }
                };
            });
        }
    }, [modalOpen, src]);


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
            {modalOpen && isImagesPreloaded && (
            <motion.div
                className="max-w-[80vw] w-[250px] s:w-[350px] ss:w-[400px] sss:w-[550px] md:w-[700px] overflow-y-auto flex justify-center items-center h-[70vh] s:max-h-[80vh] m-auto p-0 z-50 rounded-2xl flex-col bg-shadow shadow-2xl"
                variants={dropIn}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={`relative w-full md:h-[1300px] bg-white rounded-xl overflow-hidden ${selectedProject.title === 'Nutri Track' ? 'h-[600px]' : 'h-[550px]'}`}>
                    <motion.img
                        key={currentIndex}
                        loading="eager"
                        src={src[currentIndex]}
                        className={`absolute rounded-xl w-full h-full md:h-full ${size > 20 ? 'object-fill aspect-3/2': 'object-fill aspect-3/2'}`}
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                    {/* <div className="absolute flex w-auto right-5 top-3 rounded-full bg-black p-2 text-black/80 text-2xl font-semibold z-10">
                        {stack.map((item, index) => (
                            <LogoStack key={index} logo={item} size={35}/>
                        ))}
                    </div> */}
                </div>
                <div className='w-full flex justify-center mt-5 mb-3'>
                    <div className="bottom-4 flex items-center space-x-3">
                        <div className='p-1 md:p-2 bg-primary mr-2 rounded-full cursor-pointer' onClick={() => prevImage()}>
                            <MdArrowBackIosNew fill="black" size={size} />
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
                        <div className='p-1 md:p-2 bg-primary ml-2 rounded-full cursor-pointer' onClick={() => nextImage()}>
                            <MdArrowForwardIos fill='black' size={size}/>
                        </div>
                    </div>
                </div>
                <div className='w-full text-left p-4 overflow-y-auto'>
                    <div className='flex justify-center items-center font-bold text-2xl md:text-4xl'>
                        <h2>{title}</h2>
                    </div>
                    <div className='mb-5'>
                        <h2 className='text-xl mt-3 md:mt-0 md:text-3xl mb-4 font-bold'>Description</h2>
                        <p className='text-sm leading-6 md:leading-0 md:text-base'>{description}
                        </p>
                    </div>
                    <div>
                        <h2 className='text-xl md:text-3xl font-bold mb-5'>Stack</h2>
                        <div className='flex gap-5 items-center'>
                            {stack.map((item, index) => (
                                <LogoStack key={index} logo={item} size={35}/>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl md:text-3xl font-bold mb-5 mt-5'>Main features</h2>
                        <div className='flex gap-5 flex-col'>
                        {Array.isArray(texts) && texts.length > 0 ? (
                            texts.map((item, index) => (
                                <React.Fragment key={index}>
                                    <span className='text-sm md:text-base'>- {item}</span>
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
            )}
        </Backdrop>
    )
}

export default Modal