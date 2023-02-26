
import React, { useState } from 'react'
import './ModalPopUp.css'
import { MdClose } from 'react-icons/md';

const ModalPopUp = () => {
    const [showPopup, setShowPopup] = useState(false)
    return (
        <div className='modalContainer'>
            <button className='btn btn-primary'
                onClick={() => setShowPopup(!showPopup)}>
                Show Popup
            </button>
            <div className='modalPopup'
                style={{
                    visibility: showPopup ? 'visible' : 'hidden',
                    opacity: showPopup ? '1' : '0',
                    transition: '0.3s ease-in-out'
                }}>
                <div className="modalBorder"></div>
                <div className="modalForm" style={{transform: !showPopup ? 'rotate(0deg)': 'rotate(-5deg)', transistion: '0.10s ease-in-out'}}>
                    <MdClose size={25} className="closeIcon"
                        onClick={() => setShowPopup(false)} />
                    <div className='modalContent'>
                        <h2>Stay with your business</h2>
                        <p>Sign up to ensure that you don't miss
                            the next promotion and other important
                            events in personal Account?
                        </p>
                        <div className="btns">
                            <button className='btn btn-primary'>Sign up</button>
                            <button className='btn btn-secondary'
                                onClick={() => setShowPopup(false)}>
                                Next time
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalPopUp





