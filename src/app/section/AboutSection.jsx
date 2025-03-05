import React, { useState } from 'react';
import RevealName from '../components/RevealName';
import {Contact} from '../utils/LogoDatas'
// import Linkedin from '../assets/contact/icons8-linkedin-50.png';
// import Git from '../assets/contact/icons8-github-60.png';
// import Email from '../assets/contact/icons8-mail-48.png';

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
        <div className="text-center">
            <RevealName name={'About'}/>
            <div className="flex max-w-full rounded-lg h-[70vh] mb-24">
                <div className="flex flex-col items-center gap-8 w-1/2">
                    <h2 className="text-white text-3xl leading-loose mt-8">
                        Let's Talk <br /> on something <span className="text-teal-500">great</span> <br /> together ☕
                    </h2>
                    {[{ href: "mailto:joris.bertier@gmail.com", img: Contact.gitDark, text: "joris.bertier@gmail.com" },
                      { href: "https://github.com/jorisbertier", img: Contact.gitGreen, text: "Joris Bertier" },
                      { href: "https://www.linkedin.com/in/joris-bertier-505369260/", img: Contact.linkedin, text: "Joris Bertier" }]
                        .map(({ href, img, text }) => (
                            <a href={href} key={`${img}-${href}`} target="_blank" rel="noopener noreferrer"
                                className="w-4/5 flex items-center rounded-lg p-4 bg-gray-900 text-white gap-6 transition transform hover:opacity-70 hover:shadow-md hover:-translate-y-2">
                                <img src={img} alt="contact icon" className="h-10 w-10" />
                                <div className="font-medium text-lg">{text}</div>
                            </a>
                        ))}
                </div>
                <div className="w-1/2 flex flex-col items-center">
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
                </div>
            </div>
        </div>
    );
};
