
import React, { useState } from 'react'
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';
import './Toggle.css'

const Toggle = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <div className='toggleContainer'
            style={{ background: toggle ? 'rgb(1, 46, 64)' : 'rgb(185, 233, 252)' }}>
            <div className='icons'>
                <BsSunFill className='sunIcon' size={45}
                    style={{
                        transform: toggle ? 'translate(0px, 30px)' : 'translate(0px, 0px)',
                        visibility: toggle ? 'hidden' : 'visible',
                        transition: '0.3s ease-in-out',
                        opacity: toggle ? '0' : '1',
                        color: "rgb(235, 168, 24)"
                    }} />
                <BsMoonStarsFill className='moonIcon' size={40}
                    style={{
                        transform: !toggle ? 'translate(0px, 30px)' : 'translate(0px, 0px)',
                        visibility: !toggle ? 'hidden' : 'visible',
                        transition: '0.3s ease-in-out', opacity: !toggle ? '0' : '1',
                        color: "rgb(192, 192, 255)"
                    }} /> </div>
            <label className="switch">
                <input type="checkbox" onClick={() => setToggle(!toggle)} />
                <span className="slider round"></span>
            </label>
        </div>
    )
}
export default Toggle




