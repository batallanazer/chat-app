import React, {useState} from 'react'
import { Link } from "react-router-dom";

import './Join.css';
function Join() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    

    return (
        <div className="join">
            <div className="join__info">
                <h1 className="join__heading">Join</h1>
                <div><input placeholder="Name" className="join__input" type="text" onChange={(e) => setName(e.target.value)} value={name}/></div>
                <div><input placeholder="Room" className="join__input mt-20" type="text" onChange={(e) => setRoom(e.target.value)} value={room}/></div>
                <Link onClick={(e) => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="join__button mt-20" type="submit">Sign In</button>
                </Link>
            </div>
        </div>
    )
}

export default Join
