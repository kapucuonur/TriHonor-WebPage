// client/src/components/Chatbot.jsx
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', text: "Hello! I'm TriHonor AI. How can I help you today?" }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!inputValue.trim() || isLoading) return;

        const userMessage = { role: 'user', text: inputValue };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            const TARGET_URL = import.meta.env.PROD ? 'https://trihonor-webpage.onrender.com/api' : (import.meta.env.VITE_API_URL || 'http://localhost:5000/api');
            const response = await axios.post(`${TARGET_URL}/ai/chat`, {
                message: inputValue,
                history: messages.map(m => ({
                    role: m.role === 'assistant' ? 'model' : 'user',
                    parts: [{ text: m.text }]
                }))
            });

            const assistantMessage = { role: 'assistant', text: response.data.reply };
            setMessages(prev => [...prev, assistantMessage]);
        } catch (error) {
            console.error('Chat error:', error);
            setMessages(prev => [...prev, {
                role: 'assistant',
                text: "Sorry, I'm having trouble connecting right now. Please try again later."
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
            {/* Floating Button */}
            {!isOpen && (
                <button className="chat-toggle-btn" onClick={toggleChat} aria-label="Open Chat">
                    <i className="fas fa-comment-dots"></i>
                </button>
            )}

            {/* Chat Windows */}
            {isOpen && (
                <div className="chat-window animate__animated animate__fadeInUp">
                    <div className="chat-header">
                        <div className="chat-title">
                            <i className="fas fa-robot"></i>
                            <span>TriHonor AI</span>
                        </div>
                        <button className="chat-close-btn" onClick={toggleChat}>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>

                    <div className="chat-messages">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`message ${msg.role}`}>
                                <div className="message-content">{msg.text}</div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="message assistant loading">
                                <div className="typing-indicator">
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <form className="chat-input-area" onSubmit={handleSend}>
                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            disabled={isLoading}
                        />
                        <button type="submit" disabled={isLoading || !inputValue.trim()}>
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
