
import React, { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { BsFillPhoneFill } from 'react-icons/bs';
import './ToolTip.css'

const ToolTip = () => {
    const [show, setShow] = useState()
    const info = [{icon: <FaUserAlt size={25} />,toolTip: 'Full Name'},
    {icon: <MdOutlineAlternateEmail size={25} />,toolTip: 'Email'},
    {icon: <BsFillPhoneFill size={25} />,toolTip: 'Phone Number'},

    ]
    return (
        <ul className='toolItems'>
            {
                info.map((inf, index) => {
                    return (<li className='Toolitem' 
                    onMouseOver={() => setShow(index)} 
                    onMouseLeave={() => setShow('')}>
                        {inf.icon}
                        <div className="details">
                            <h5>{inf.heading}</h5>

                        </div>
                        {
                            show === index ? <div className="toolTip">
                                {inf.toolTip}
                            </div> : null
                        }
                    </li>)
                })
            }
        </ul>
    )
}

export default ToolTip




