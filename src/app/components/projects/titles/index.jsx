'use client';
import React, { useRef, useState } from 'react';
import { useScroll, motion, useTransform, useMotionTemplate } from 'framer-motion';
import Modal from '../../Modal';

export default function Index({ data, setSelectedProject }) {
    const [modalOpen, setModalOpen] = useState(false);
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
        <div className="w-full border-t border-[rgba(183,171,152,0.25)] relative">
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
    const { title, speed, i } = data;
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", `${25 / speed}vw end`],
    });

    const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

    return (
        <div ref={container} className="border-b border-[rgba(183,171,152,0.25)] relative z-10 cursor-pointer">
            <div
                className="inline-block pl-[10%] h-[122px] w-full"
                onMouseOver={() => setSelectedProject(i)}
                onMouseLeave={() => setSelectedProject(null)}
                onClick={() =>
                    openModal(data)
                }
            >
                <motion.p
                    style={{ clipPath: clip }}
                    className="inline-block text-[8vw] leading-[7.5vw] font-bold uppercase text-[#b7ab98] relative z-10"
                >
                    {title}
                </motion.p>
                <p className="absolute top-0 text-[8vw] leading-[7.5vw] font-bold uppercase text-[#1c1c1c]">
                    {title}
                </p>
            </div>
        </div>
    );
}