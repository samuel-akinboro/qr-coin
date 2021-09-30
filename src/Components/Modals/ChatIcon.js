import React from 'react';
import chatIcon from '../../Assets/chatIcon.svg';
import './modals.css';

export default function ChatIcon() {
    return (
        <div className="msg-chat">
            <img src={chatIcon} alt="chat" />
        </div>
    )
}
