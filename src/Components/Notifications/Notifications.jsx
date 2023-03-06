
import React, { useState } from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io';
import './Notifications.css'

const Notifications = () => {
    const [showDropDown, setShowDropDown] = useState(false)
    const [accept, setAccept] = useState('Accept')
    
    return (
        <div className="notificationContainer">
            <div className='notifyIcon' onClick={() => setShowDropDown(!showDropDown)}>
                <IoIosNotificationsOutline size={30} />
            </div>
            <div className="notificationBox" style={{
                opacity: !showDropDown ? "0" : "1",
                transition: "0.3s ease",
                visibility: !showDropDown ? "hidden" : "visible",
                transform: !showDropDown ? "scale(0.9)" : "scale(1)",
                transformOrigin: "top right"
            }}>
                <div className="notificationsHeader">
                    <h4>Notifications</h4>
                </div>
                <div className="user">
                    <div className="photoURL">
                        <img src="Add-demo-profile-image-here" />
                    </div>
                    <div className="userDetails">
                        <div className="notifyMessage">
                            <span className='textBold'>James William</span>
                            shared the file <span className='textBold'>
                                Notification figma file</span>
                            file with you
                        </div>
                        <div className='notifyTime'>an hour ago</div>
                        <div className="buttons">
                            <button className='cta-btn'>Decline</button>
                            <button className='cta-btn accept'
                                onClick={() => setAccept('Accepted')}>{accept}</button>
                        </div>
                    </div>
                </div>
                <div className="user">
                    <div className="photoURL">
                        <img src="Add-demo-profile-image-here" />
                    </div>
                    <div className="userDetails">
                        <div className="notifyMessage">
                            <span className='textBold'>Olivia Cruz</span> assigned you a task
                        </div>
                        <div className='notifyTime'>Yesterday</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notifications


