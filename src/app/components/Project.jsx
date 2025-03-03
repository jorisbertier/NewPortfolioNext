import React from 'react';
import LogoStack from './LogoStack';

export default function Project({ title, alt, description, src, stack1, stack2, stack3, stack4, onClick }) {
    return (
        <div onClick={onClick} className='cursor-pointer'>
            <div className="relative h-[200px] w-[400px] rounded-2xl overflow-hidden group">
                <img
                    src={src}
                    alt="Futur project"
                    className="h-full w-full object-cover rounded-2xl"
                />
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm font-thin leading-[1.1rem] opacity-0 transition-opacity duration-300 ease-in-out w-[400px] h-[202px] flex justify-center items-center group-hover:opacity-100 backdrop-blur-md">
                {description}
                </p>
                <div className="absolute left-5 top-2 opacity-0 p-1 flex rounded-full backdrop-blur-md group-hover:opacity-100">
                    {stack1 ? <LogoStack logo={stack1} /> : null}
                    {stack2 ? <LogoStack logo={stack2} /> : null}
                    {stack3 ? <LogoStack logo={stack3} /> : null}
                    {stack4 ? <LogoStack logo={stack4} /> : null}
                </div>
            </div>
            <h3 className='font-semibold mt-4 text-[30px]'>: : {title}</h3>
            <br />
        </div>
    );
};
