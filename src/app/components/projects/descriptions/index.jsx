'use client';
import React from 'react';
import Stack from '../../Stack';
import LogoStack from '../../LogoStack';

export default function Index({ data, selectedProject }) {

    const crop = (string, maxLength) => {
        return string.substring(0, maxLength);
    };
    
    return (
        <div className="absolute top-[3px] h-full w-full z-20 pointer-events-none">
            {data.map((project, i) => {
                const { title, descriptionShort } = project;
                return (
                    <div 
                        key={i} 
                        className="bg-[#ec4e39] h-[122px] flex justify-between items-center px-[10%] transition-[clip-path] duration-400"
                        style={{ clipPath: selectedProject == i ? "inset(0 0 0)" : "inset(50% 0 50%)" }}
                    >
                        <p className="text-[8vw] leading-[7.5vw] font-bold uppercase text-[#010101] relative z-10 m-0">
                            {crop(title, 9)}
                        </p>
                        <div className="w-[32%] text-black text-[1vw] font-bold flex">
                            {descriptionShort.length > 12 ? descriptionShort.slice(0, 50) : descriptionShort}
                            {/* {project.stack.map((item, index) => (
                                <LogoStack key={index} logo={item} size={40}/>
                            ))} */}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}