import React, {useEffect, useState} from 'react'
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';
import { useStateValue } from '../../context/StateProvider';
import InforBar from '../InfoBar/InforBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import Users from '../Users/Users';

let socket;

function Chat({location}) {
    const [{user,messages},dispatch] = useStateValue();
    
    const ENDPOINT = 'localhost:5000';

    useEffect(()=>{
        const {name, room} = queryString.parse(location.search);
        
        socket = io(ENDPOINT);

        dispatch({
            type:"SET_USER",
            payload:{ name, room }
        });

        socket.emit('join',{name, room},(response) => {

        });

        return () =>{
            socket.emit('disconnect');
            socket.off();
        }
    },[ENDPOINT,location.search]);

    useEffect(() => {
        socket.on('message', (message) =>{
            dispatch({
                type:"ADD_TO_MESSAGES",
                payload: message
            });
        });
        socket.on("roomData", ({ user }) => {
            dispatch({
                type:"ADD_TO_USERS",
                payload: user
            });
        });
    }, []);
   
  
    return (
        <div className="chat">
            <div className="chat__container">
                <InforBar></InforBar>
                <Messages></Messages>
                <Input socket={socket}></Input>
            </div>
            {<Users></Users>}
        </div>
    )
}

export default Chat
