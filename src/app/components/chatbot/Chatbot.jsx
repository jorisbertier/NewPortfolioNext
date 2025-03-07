'use client'
import React, { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [isChatClosed, setIsChatClosed ] = useState(false)
 

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    const [messages, setMessages] = useState([
        { sender: 'interlocutor', content: `Hello world! I'm Claptrap your Chatbot personal 🤖 Before starting the game, i would need some information about you !  Write 'yes' when you are ready to play` },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [questions, setQuestions] = useState([
        "First all, what's your first name? (1 word)",
    ]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect(() => {
        if (currentQuestionIndex === 1) {
            setQuestions([
                `Hi, nice to meet you! How can I help you?`,
                `Hi ${inputValue}, nice to meet you. What is your lastName? (1 word)`,
                `Well done, what is your email?`,
                `What is your password you use frequently?`,
                `😈 thank you for your personal information, I am in the process of finding a buyer`,
                "Just kidding, I'm a caring bot 😇! Never trust anyone...",
            ]);
        }
    }, [inputValue, currentQuestionIndex]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleSendMessage(); 
        }
    };
    

    const handleSendMessage = () => {
        if (inputValue.trim() !== '') {
            const newMessages = [...messages, { sender: 'user', content: inputValue }];
            setMessages(newMessages);
            setInputValue('');
    
            if (messages[messages.length - 1].sender === 'interlocutor') {
                setIsTyping(true);
                setTimeout(() => {
                    let newMessagesWithBotReply = [...newMessages];
                    if (currentQuestionIndex === 0 && inputValue.trim().toLowerCase() !== "yes") {
                        newMessagesWithBotReply.push({ sender: 'interlocutor', content: "Please enter 'yes' to play the game!" });
                        setMessages(newMessagesWithBotReply);
                        setIsTyping(false);
                        return;
                    }

                    const botReply = questions[currentQuestionIndex];
                    newMessagesWithBotReply.push({ sender: 'interlocutor', content: botReply });
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    setMessages(newMessagesWithBotReply);
                    setIsTyping(false);

                    if (botReply === "Just kidding, I'm a caring bot 😇! Never trust anyone...") {
                        setIsChatClosed(true);
                    }
                }, 2500);
            }
        }
    };

    return (
        // <div className="absolute top-0 left-0 flex flex-col w-full max-w-md mx-auto h-[500px] border rounded-2xl shadow-lg bg-white overflow-hidden">
        <div>
        {!isOpen ? (
                
            <div className="fixed bottom-10 z-30 h-32 w-32 cursor-pointer right-10 p-4 flex justify-center items-center rounded-full" onClick={() => handleIsOpen()}>
                {/* <img src={ChatbotLogo.chatbot} width={48} height={48} /> */}
                {/* <video 
                src="/assets/videoblack.mp4" 
                autoPlay 
                loop 
                muted
                className="z-40 rounded-full"
                /> */}
                <img 
                    src="/assets/videoblack.gif" 
                    alt="Chatbot animation" 
                    className="z-40 rounded-full"
                />
            </div>
            ) : (
                <div className="flex flex-col h-[490px] w-[500px] z-30 right-10 p-0 bg-[#E7ECE6] rounded-b-3xl shadow-md fixed bottom-10">
                    <div className="h-10 w-full bg-[#E7ECE6] absolute -mt-10 rounded-t-3xl flex items-center justify-between">
                        <div className="flex justify-between items-center w-full mr-5 ml-5">
                            <div className="w-auto flex items-center gap-4">

                                <img width="30" height="30" src="https://img.icons8.com/fluency/48/bard.png" alt="bard"/>
                                <h3 className="text-black font-bold text-md">AI Assist Challenge</h3>
                            </div>
                            <div className="text-brown cursor-pointer" onClick={() => handleIsOpen()}>
                                <svg viewBox="-9.84 -9.84 43.68 43.68" fill="#000" width={40} height={40} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#0F1729"></path> </g></svg>
                            </div>
                        </div>
                    </div>
                <div className="flex-1 flex flex-col overflow-y-auto space-y-4 p-4">
                    {messages.map((message, index) => (
                        <div 
                            key={index} 
                            className={`p-3 rounded-lg mt-8 max-w-[70%] font-thin text-[14px] text-black ${message.sender === 'interlocutor' ? 'bg-gray-300 self-start' : ' bg-white text-black self-end'}`}
                        >
                            {message.content}
                        </div>
                    ))}
                    {isTyping && <LoaderContainer />}
                    {isTyping && <div className="h-4 w-20 animate-pulse rounded"></div>}
                    <div ref={messagesEndRef} />
                </div>
                <div className="flex relative items-center p-2 bg-[#E7ECE6] border-none rounded-3xl mb-1 border-red-100">
                {isChatClosed ? (
                        <div className="text-black w-full text-center">Conversation closed</div>
                    ) : (
                        <>
                    <input 
                        type="text" 
                        value={inputValue} 
                        onChange={handleInputChange} 
                        placeholder="Type your message..." 
                        className="flex-1 pr-10 p-2 text-black border-red-100 rounded-[18px] focus:outline-none focus:border-[#000] focus:ring-black-200"
                        onKeyDown={handleKeyDown}
                    />

                        <button onClick={handleSendMessage} className="absolute right-5 ml-2 p-3 text-white rounded-full group">
                            <svg className="group-hover:fill-[#E7ECE6] transition-colors duration-200 ease-in-out" viewBox="-0.5 0 25 25" width={15} height={15} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.33045 8.38999C0.250452 11.82 9.42048 14.9 9.42048 14.9C9.42048 14.9 12.5005 24.07 15.9305 21.99C19.5705 19.77 23.9305 6.13 21.0505 3.27C18.1705 0.409998 4.55045 4.74999 2.33045 8.38999Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M15.1999 9.12L9.41992 14.9" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </button>
                        </>
                    )}
                </div>
            </div>
            )}
        </div>
    );
};

const LoaderContainer = () => {
    return (
        <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
                <motion.span
                    key={i}
                    className="h-3 w-3 bg-gray-300 rounded-full"
                    animate={{
                    opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 0.2,
                    ease: "easeInOut",
                    delay: i * 0.2,
                    }}
                />
            ))}
        </div>
    );
};
export default Chatbot;
