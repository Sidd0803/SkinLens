'use client'
import React, { useState } from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faVideo, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faPlus, faMicrophone } from '@fortawesome/free-solid-svg-icons';


const Chatbox = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (message.trim() !== '') {
            setMessages([...messages, message]);
            setMessage('');
        }
    };

    return (
        <div className="chatbox">
            <div className="chat-header">
                <button className="back-button">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <div className="chat-title">Dr. Menash T.</div>
                <div className="chat-actions">
                    <button className="icon-button">
                        <FontAwesomeIcon icon={faPhone} /> {/* Phone call icon */}
                    </button>
                    <button className="icon-button">
                        <FontAwesomeIcon icon={faVideo} /> {/* Video chat icon */}
                    </button>
                </div>
            </div>
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
            <div className="chat-input">
            <button className="icon-button attachment-button">
        <FontAwesomeIcon icon={faPlus} />
    </button>

                <input type="text" placeholder="Write a message..." value={message} onChange={(e) => setMessage(e.target.value)} />
                <button onClick={handleSendMessage}>Send</button>
                            
            </div>
        </div>
    );
};

export default Chatbox;
