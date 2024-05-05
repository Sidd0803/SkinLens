'use client'
import React, { useState } from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navigation from '../../components/nav';
import { faVideo, faPhone, faPlus, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const Chatbox = () => {
    const [messages, setMessages] = useState([{ text: 'Hello, how can I help you today?', type: 'received' }]);
    const [message, setMessage] = useState('');
    const [currentChat, setCurrentChat] = useState({ name: "Dr. Menash T.", imageUrl: "path/to/image" }); 

    const chatList = [
        { name: "Dr. Mensah T.", imageUrl: "https://img.freepik.com/premium-photo/tablet-black-man-portrait-doctor-healthcare-services-telehealth-analysis-hospital-network-young-medical-professional-digital-technology-clinic-research-consulting-planning_590464-213559.jpg" },
        { name: "Dr. Bellamy N.", imageUrl: "https://media.istockphoto.com/id/138205019/photo/happy-healthcare-practitioner.jpg?s=612x612&w=0&k=20&c=b8kUyVtmZeW8MeLHcDsJfqqF0XiFBjq6tgBQZC7G0f0=" },
        { name: "Dr. Sasha Y.", imageUrl: "https://c8.alamy.com/comp/2BE42N7/smiling-asian-female-doctor-in-white-coat-2BE42N7.jpg" }
    ];

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (message.trim() !== '') {
            setMessages([...messages, { text: message, type: 'sent' }]);
            setMessage('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();  // Prevents the default action of submitting the form
            handleSendMessage(e);
        }
    };

    const selectChat = (chat) => {
        setCurrentChat(chat);
        setMessages([{ text: `Starting chat with ${chat.name}`, type: 'received' }]);
    };

    const handleNewChat = () => {
        console.log('Initiate new chat');
    };

    return (
        <div className="container">
            <div className="chat-selector">
                <div className="chat-selector-header">
                    Chats
                    <button className="new-chat-button" onClick={handleNewChat}>
                        <FontAwesomeIcon icon={faPencilAlt} />
                    </button>
                </div>
                {chatList.map((chat, index) => (
                    <div key={index} className={`chat-item ${currentChat.name === chat.name ? 'active' : ''}`} onClick={() => selectChat(chat)}>
                        <img src={chat.imageUrl} alt={chat.name} className="chat-image" />
                        {chat.name}
                    </div>
                ))}
            </div>
            <div className="chatbox">
                <div className="chat-header">
                    <div className="chat-title">{currentChat.name}</div>
                    <div className="chat-actions">
                        <button className="icon-button">
                            <FontAwesomeIcon icon={faPhone} />
                        </button>
                        <button className="icon-button">
                            <FontAwesomeIcon icon={faVideo} />
                        </button>
                    </div>
                </div>
                <div className="chat-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.type}`}>{msg.text}</div>
                    ))}
                </div>
                <div className="chat-input">
                    <button className="icon-button attachment-button">
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <input type="text" placeholder="Write a message..." value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={handleKeyDown} />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Chatbox;


