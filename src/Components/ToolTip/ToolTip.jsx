import React, { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { BsFillPhoneFill } from 'react-icons/bs';
import './ToolTip.css'

const ToolTip = () => {
    const [show, setShow] = useState()
    const info = [
        {
            heading: 'Full Name',
            icon: <FaUserAlt size={25} />,
            toolTip: 'Email addres'
        },
        {
            heading: 'Email',
            icon: <MdOutlineAlternateEmail size={25} />,
            toolTip: 'Name'
        },
        {
            heading: 'Phone Number',
            icon: <BsFillPhoneFill size={25} />,
            toolTip: 'Phone Number'
        },

    ]
    return (
        <ul className='toolItems'>
            {/* <li className='Toolitem'>
                <FaUserAlt size={25}/>
                <div className="details">
                    <h5>Full Name</h5>
                    <p>Respondent's first and last name</p>
                </div>
            </li> */}

            {
                info.map((inf, index) => {
                    return (<li className='Toolitem' onMouseOver={()=>setShow(index)} onMouseLeave={()=>setShow('')}>
                        {inf.icon}
                        <div className="details">
                            <h5>{inf.heading}</h5>
                            <p>Respondent's first and last name</p>
                            {
                                show === index ? <div className="toolTip">
                                    
                                {/* <div className="tool"> */}
                                    {inf.toolTip}
                                {/* </div> */}

                            </div> : null
                            }
                            
                        </div>
                    </li>)
                })
            }
            {/* <li className='Toolitem'>
                <MdOutlineAlternateEmail size={25}/>
                <div className="details">
                    <h5>Full Name</h5>
                    <p>Respondent's first and last name</p>
                </div></li>
            <li className='Toolitem'>
                <BsFillPhoneFill size={25}/>
                <div className="details">
                    <h5>Full Name</h5>
                    <p>Respondent's first and last name</p>
                </div></li> */}
        </ul>
    )
}

export default ToolTip