'use client'
import React, { useState, useEffect, useRef } from "react";
import { ChatbotLogo } from '../../utils/LogoDatas'

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(true)

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    const [messages, setMessages] = useState([
        { sender: 'interlocutor', content: `Hi there! I'm Claptrap your Chatbot personal 🤖 I need your personal information which I will then encrypt to show you the extent of the possibilities offered by the web !! Are you ready to discover the universe? Write 'yes' when you are ready` },
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
                `Well done, what is your password?`,
                `😈 thank you for your personal information, I am in the process of finding a buyer`,
                "Just kidding, I'm a caring bot 😇! Never trust anyone...",
            ]);
        }
    }, [inputValue, currentQuestionIndex]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
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
                    if (currentQuestionIndex === 0 && inputValue.trim() !== "yes") {
                        newMessagesWithBotReply.push({ sender: 'interlocutor', content: "Please enter 'yes' to play the game!" });
                        setMessages(newMessagesWithBotReply);
                        setIsTyping(false);
                        return;
                    }
                    newMessagesWithBotReply.push({ sender: 'interlocutor', content: questions[currentQuestionIndex] });
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    setMessages(newMessagesWithBotReply);
                    setIsTyping(false);
                }, 2000);
            }
        }
    };

    return (
        // <div className="absolute top-0 left-0 flex flex-col w-full max-w-md mx-auto h-[500px] border rounded-2xl shadow-lg bg-white overflow-hidden">
        <div>
        {!isOpen ? (
                
            <div className="fixed bottom-10 z-30 right-10 bg-green-300 p-4 flex justify-center items-center rounded-full" onClick={() => handleIsOpen()}>
                {/* <img src={ChatbotLogo.chatbot} width={48} height={48} /> */}
                <video 
                src="/assets/video.mp4" 
                autoPlay 
                loop 
                muted
                className="w-20 h-20 rounded-full"
                />
            </div>
            ) : (
                <div className="flex flex-col h-[450px] w-80 z-30 right-10 p-0 bg-gray-100 rounded-lg shadow-md fixed bottom-10">
                    <div className="h-10 w-full bg-red-400 absolute -mt-5 rounded-xl">
                        <div className="flex pl-5 pr-5 justify-between items-center">
                            <img src={'/assets/logoStack/api-light.png'} width={40} height={40} className="object-cover"/>
                            <h3>Your AI assistant</h3>
                            <div className="" onClick={() => handleIsOpen()}>X</div>
                        </div>
                    </div>
                <div className="flex-1 overflow-y-auto space-y-4 p-2">
                    {messages.map((message, index) => (
                        <div 
                            key={index} 
                            className={`p-3 rounded-lg max-w-[60%] ${message.sender === 'interlocutor' ? 'bg-gray-300 self-start' : 'bg-teal-500 text-white self-end'}`}
                        >
                            {message.content}
                        </div>
                    ))}
                    {isTyping && <div className="h-4 w-20 bg-teal-500 animate-pulse rounded"></div>}
                    <div ref={messagesEndRef} />
                </div>
                <div className="flex items-center p-2 bg-white rounded-lg shadow">
                    <input 
                        type="text" 
                        value={inputValue} 
                        onChange={handleInputChange} 
                        placeholder="Type your message..." 
                        className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <button onClick={handleSendMessage} className="ml-2 p-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition">
                        {/* <LogoStack logo={Logos.Send} size={'20'} /> */}
                    </button>
                </div>
            </div>
            )}
        </div>
    );
};

export default Chatbot;
