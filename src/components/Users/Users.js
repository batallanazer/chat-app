import React from 'react'
import onlineIcon from '../../icons/onlineIcon.png';
import { useStateValue } from '../../context/StateProvider';
import './Users.css';
function Users() {
    const [{users}] = useStateValue();
    return (
        <div className="users">
            <div>
                <h1>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h1>
                <h2>Created with React, Express, Node and Socket.IO <span role="img" aria-label="emoji">❤️</span></h2>
                <h2>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2>
            </div>
            {
                users
                  && (
                    <div>
                      <h1>People currently chatting:</h1>
                      <div className="users__activeContainer">
                        <h2>
                          {users.map((user,id) => (
                            <div key={id} className="users__activeItem">
                              <img className="users__onlineIcon" alt="Online Icon" src={onlineIcon}/>
                              {user.name}
                            </div>
                          ))}
                        </h2>
                      </div>
                    </div>
                  )
              }
        </div>
    )
}

export default Users
