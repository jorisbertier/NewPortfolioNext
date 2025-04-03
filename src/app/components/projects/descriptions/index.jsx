'use client';
import React from 'react';

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
                        className="bg-primary h-[80px] ss:h-[122px] flex justify-between items-center px-[10%] transition-[clip-path] duration-400"
                        style={{ clipPath: selectedProject == i ? "inset(0 0 0)" : "inset(50% 0 50%)" }}
                    >
                        <p className="ss:text-[8vw] text-[1.7rem] leading-[7.5vw] font-bold uppercase text-[#010101] relative z-10 m-0">
                            {crop(title, 9)}
                        </p>
                        <div className="w-[32%] text-black text-[0.8rem] sm:text-[1.2rem] font-bold flex leading-[30px]">
                            {descriptionShort.length > 12 ? descriptionShort.slice(0, 40) : descriptionShort}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}