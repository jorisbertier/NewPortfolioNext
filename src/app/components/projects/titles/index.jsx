'use client';
import React, { useRef,useEffect, useState } from 'react';
import { useScroll, motion, useTransform, useMotionTemplate } from 'framer-motion';
import Modal from '../../Modal';
import { useModal } from '@/app/provider/ModalContext';

export default function Index({ data, setSelectedProject }) {
    // const [modalOpen, setModalOpen] = useState(false);
    const { modalOpen, setModalOpen } = useModal();
    const [selectedProject, setSelectedProjectState] = useState(null);

    const close = () => {
        setModalOpen(false);
        setSelectedProjectState(null);
    };

    const open = (project) => {
        setSelectedProjectState(project);
        setModalOpen(true);
    };



    return (
        <div className="w-full border-t border-[rgba(183,171,152,0.25)] relative mb-20 ss:mt-0 ss:mb-0">
            {data.map((project, i) => (
                <Title key={i} data={{ ...project, i }} setSelectedProject={setSelectedProject} openModal={open} />
            ))}

            {modalOpen && selectedProject && (
                <Modal
                    modalOpen={modalOpen}
                    handleClose={close}
                    title={selectedProject.title}
                    description={selectedProject.description}
                    src={selectedProject.src}
                    stack={selectedProject.stack}
                    texts={selectedProject.texts}
                />
            )}
        </div>
    );
}

function Title({ data, setSelectedProject, openModal }) {
    let { title, speed, i } = data;
    const container = useRef(null);
    const [speedValue, setSpeedValue] = useState(data.speed || 0.1);
    
    useEffect(() => {
    
        const updateSize = () => {
            if (window.innerWidth >= 450) {
                setSpeedValue(0.4);
            } else {
                setSpeedValue(0.1);
            }
        };
    
        window.addEventListener("resize", updateSize);
        updateSize();
    
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", `${15 / speedValue}vw end`],
    });

    const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

    return (
        <div ref={container} className="border-b border-[rgba(183,171,152,0.25)] relative z-10 cursor-pointer">
            <div
                className=" pl-[10%] h-[80px] ss:h-[122px] flex items-center"
                onMouseOver={() => setSelectedProject(i)}
                onMouseLeave={() => setSelectedProject(null)}
                onClick={() =>
                    openModal(data)
                }
            >
                <motion.p
                    style={{ clipPath: clip }}
                    className="ss:text-[8vw] text-[1.7rem] leading-[7.5vw] font-bold uppercase text-[#b7ab98] relative z-10"
                >
                    {title}
                </motion.p>
                <p className="absolute top-1/2 -translate-y-1/2 ss:text-[8vw] text-[1.7rem] leading-[7.5vw] font-bold uppercase text-[#1c1c1c]">
                    {title}
                </p>
            </div>
        </div>
    );
}