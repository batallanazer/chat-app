import React,{useState} from 'react'
import './Input.css';
function Input({socket}) {
    const [message, setMessage] = useState('');
    const sendMessage = (event) => {
        event.preventDefault();

        if(message){
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }
    return (
        <div className="input">
            <form className="input__form">
            <input 
                className="input__textbox"
                type="text"
                placeholder="Type a message..."
                autoFocus
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="input__button" onClick={(e) => sendMessage(e)}>Send</button>
            </form>
        </div>
    )
}

export default Input
