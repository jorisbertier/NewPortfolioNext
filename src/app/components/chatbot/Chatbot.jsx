'use client'
import React, { useState } from "react";
import { ChatbotLogo } from '../../utils/LogoDatas'

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Bonjour ! Comment puis-je vous aider ?" },
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { sender: "user", text: input };
        const botResponse = {
        sender: "bot",
        text: "Désolé, je ne comprends pas encore cette question. 😊",
        };

        setMessages([...messages, userMessage, botResponse]);
        setInput("");
    };

    return (
        // <div className="absolute top-0 left-0 flex flex-col w-full max-w-md mx-auto h-[500px] border rounded-2xl shadow-lg bg-white overflow-hidden">
        <div className="fixed bottom-10 right-10 bg-green-300 p-4 flex justify-center items-center rounded-full">
            {/* <img src={ChatbotLogo.chatbot} width={48} height={48} /> */}
            <video 
            src="/assets/video.mp4" 
            autoPlay 
            loop 
            muted 
            className="w-20 h-auto"
        />

        </div>
     
    );
};

export default Chatbot;
