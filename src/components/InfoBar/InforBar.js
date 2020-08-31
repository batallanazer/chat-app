import React from 'react'
import './InforBar.css';
import { useStateValue } from '../../context/StateProvider';
import onlineIcon from  "../../icons/onlineIcon.png";
import closeIcon from "../../icons/closeIcon.png";
function InforBar() {
    const [{user}] = useStateValue();
    return (
        user &&(
        <div className="infoBar">
            <div className="infoBar__left">
                <img className="infoBar__onlineIcon" src={onlineIcon} alt="online image"/>
                <h3>{user.room}</h3>
            </div>
            <div className="infoBar__right">
                <a href="/"><img className="infoBar__closeIcon" src={closeIcon} alt="close image"/></a>
            </div>
        </div>)
    )
}

export default InforBar
