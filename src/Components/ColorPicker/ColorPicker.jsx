
import React, { useState } from 'react'
import './ColorPicker.css'

const ColorPicker = () => {
    const [pickColor, setPickColor] = useState('#FEC971');
    return (
        <div className='colorPickerContainer'>
            <div className='colorBox' style={{ backgroundColor: `${pickColor}` }}></div>
            <div className='colorPalatte'>
                <div className="color" id="c1" onClick={() => setPickColor('#FEC971')}></div>
                <div className="color" id="c2" onClick={() => setPickColor('#FE9B71')}></div>
                <div className="color" id="c3" onClick={() => setPickColor('#B592FD')}></div>
                <div className="color" id="c4" onClick={() => setPickColor('#00D4FE')}></div>
                <div className="color" id="c5" onClick={() => setPickColor('#E3EE8E')}></div>
                <div className="color" id="c6" onClick={() => setPickColor('#a5f747')}></div>
                <div className="inputBox">
                    <div className='hex'>HEX:</div>
                    <input type="text" value={pickColor} className='colorInput' id="hex" 
                    onChange={(e) => setPickColor(e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default ColorPicker



