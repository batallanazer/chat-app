import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message';
import { useStateValue } from '../../context/StateProvider';
import './Messages.css';
function Messages() {
    const [{user,messages}] = useStateValue();

    return (
        <ScrollToBottom className="messages">
            {messages.map((message,index) => (
                <div key={index}>
                    <Message message={message} name={user.name}></Message>
                </div>))}
        </ScrollToBottom>
    )
}

export default Messages
