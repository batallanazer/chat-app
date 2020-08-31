import React from 'react'
import ReactEmoji from 'react-emoji';
import './Message.css';
function Message({message:{user,text}, name}) {
    name = name.trim().toLowerCase();
    return (
        user === name ? (
            <div className="message__messageContainer message__justifyEnd">
            <p className="message__sentText message__pr-10">{name}</p>
            <div className="message__messageBox message__backgroundBlue">
              <p className="message__messageText message__colorWhite">{ReactEmoji.emojify(text)}</p>
            </div>
          </div>
        ):(
            <div className="message__messageContainer message__justifyStart">
            <div className="message__messageBox message__backgroundLight">
              <p className="message__messageText message__colorDark">{ReactEmoji.emojify(text)}</p>
            </div>
            <p className="message__sentText message__pl-10 ">{user}</p>
          </div>
        )
    )
}

export default Message
