import React, { useState } from 'react';
import RevealName from '../components/RevealName';
import {Contact} from '../utils/LogoDatas'

export default function AboutSection() {
    const [messageSuccess, setMessageSuccess] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "979b0b7e-3e07-40e5-8175-642d2b9d1811");
        
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            setMessageSuccess(true);
            console.log("Success", res);
        }
    };

    return (
        <div className="z-30 mt-10 ss:m-0" id="contact">
            <RevealName name={'Contact'}/>
            <div className="flex max-w-full w-full justify-center items-center rounded-lg h-[70vh] mt-20 ss:mt-0 mb-10">
                <div className="flex flex-col gap-8 w-full text-center md:items-center">
                    <h2 className="text-white text-3xl leading-loose">
                        {/* Let's Talk <br /> on something <span className="text-teal-500">great</span> <br /> together ☕ */}
                    </h2>
                    {[{ href: "mailto:joris.bertier@gmail.com", img: Contact.gitDark, text: "joris.bertier@gmail.com", title: 'Email' },
                        { href: "", img: Contact.gitGreen, text: "+33 6 67 41 38 68" , title: 'Phone'},
                        { href: "https://github.com/jorisbertier", img: Contact.gitDark, text: "Joris Bertier", title: 'Github' }]
                            .map(({ href, img, text, title }) => (
                                <a href={href} key={`${img}-${href}`} target="_blank" rel="noopener noreferrer"
                                    className="flex flex-col ml-[8%] mr-[8%] md:w-[50%] justify-center text-center w-[84%] items-start p-4 text-white text-bold gap-6 border-b-2 border-white">
                                    {/* <img src={img} alt="contact icon" className="h-10 w-10" /> */}
                                    <h4 className='text-xl text-brown'>{title}</h4>
                                    <div className='flex'>
                                        <div className="text-2xl font-normal">{text}</div>
                                        {/* {text === 'joris.bertier@gmail.com' &&
                                            <div className='text-2xl ml-10 relative z-40' >
                                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z" stroke="#afa18f" strokeWidth="2"></path> <path opacity="0.5" d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5" stroke="#afa18f" strokeWidth="1.5"></path> </g></svg>
                                                <div onClick={() => console.log('click')} className='absolute z-50 top-0 left-20 -translate-x-1/2 text-lg w-32 bg-black/50 rounded-md'>Copy adress</div>
                                            </div>
                                            
                                            } */}
                                    </div>
                            </a>
                        ))}
                </div>
                {/* <div className="w-1/2 flex flex-col items-center">
                    <form onSubmit={onSubmit} className="w-4/5 rounded-lg p-4 text-start">
                        <input type="text" name="name" placeholder="Name..."
                            className="w-4/5 bg-gray-900 text-white font-semibold rounded-lg p-4 opacity-75 mt-8" />
                        <input type="email" name="email" placeholder="Email..."
                            className="w-4/5 bg-gray-900 text-white font-semibold rounded-lg p-4 opacity-75 mt-8" />
                        <input type="text" name="object" placeholder="Web site, contact..."
                            className="w-4/5 bg-gray-900 text-white font-semibold rounded-lg p-4 opacity-75 mt-8" />
                        <textarea name="subject" rows="5" placeholder="Hi, I need information..."
                            className="w-5/6 font-avantGarde bg-gray-900 text-white font-semibold rounded-lg p-4 mt-8" />
                        <button type="submit" onClick={() => setMessageSuccess(false)}
                            className="w-5/6 mt-8 p-3 rounded-xl bg-teal-500 text-white font-semibold text-sm cursor-pointer shadow-md transition hover:opacity-70">
                            Send Message
                        </button>
                        {messageSuccess && (
                            <div className="mt-8 flex justify-center items-center w-4/5 bg-white font-semibold text-lg p-5 rounded-lg shadow-lg">
                                Your message has been sent successfully
                                <svg className="w-10 h-10 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                    <g fill="#008080"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-2.17938 -0.59,-4.21686 -1.60547,-5.97852l-11.24805,11.24609c-0.187,0.187 -0.44103,0.29297 -0.70703,0.29297c-0.265,0 -0.52003,-0.10497 -0.70703,-0.29297l-4.45313,-4.45312c-0.391,-0.391 -0.391,-1.02306 0,-1.41406c0.391,-0.391 1.02306,-0.391 1.41406,0l3.74609,3.74609l10.80078,-10.80078c-2.201,-2.655 -5.52223,-4.3457 -9.24023,-4.3457zM24.24023,7.3457c0.43165,0.52058 0.81351,1.08435 1.1543,1.67383l2.3125,-2.3125c0.391,-0.392 0.391,-1.02306 0,-1.41406c-0.391,-0.391 -1.02306,-0.391 -1.41406,0z"></path></g>
                                </svg>
                            </div>
                        )}
                    </form>
                </div> */}
            </div>
        </div>
    );
};
