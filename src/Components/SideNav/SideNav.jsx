import React, { useEffect, useState } from 'react'
import './SideNav.css'
import { AiOutlineHome, AiOutlineCalendar, AiOutlinePieChart } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { TbDiscount2 } from 'react-icons/tb';
import { MdKeyboardArrowDown, MdKeyboardArrowLeft } from 'react-icons/md';
import { GrFormAdd } from 'react-icons/gr';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';

const SideNav = () => {
    const [toggle, setToggle] = useState(true)
    const [dropDown, showDropDown] = useState(false)

    const divStyle = {
        visibility: !toggle ? 'hidden' : 'visible',
    }
    const dropDownBox = {
        position: 'absolute',
        border: '1px solid red',
        background: 'white',
        zIndex: '5',
        width: '10rem',
        padding: '0px'
    }

    return (
        <div className='sidenavContainer' style={{ width: toggle ? '15rem' : '2rem', transistion: '0.3s ease-in-out' }}>
            <div className="logo">logo</div>
            <div className="collapseIcon" onClick={() => setToggle(!toggle)}><MdKeyboardArrowLeft size={23} /></div>
            <ul className='menuItems'>
                <li className='menu'>
                    <div className="menuItemContainer">
                        <AiOutlineHome size={20} className="menuIcon" /><span className='menuText' style={divStyle}>Dashboard</span>
                    </div>
                </li>
                <li className='menu'>
                    <div className="menuItemContainer">
                        <FiUsers size={20} className="menuIcon" /><span className='menuText' style={divStyle}>Audience</span>
                    </div>
                </li>
                <li className='menu'>
                    <div className="menuItemContainer">
                        <HiOutlineDocumentText size={20} className="menuIcon" /><span className='menuText' style={divStyle}>Profile</span>
                    </div>
                </li>
                <li className='menu'>
                    <div className="menuItemContainer">
                        <AiOutlineCalendar size={20} className="menuIcon" /><span className='menuText' style={divStyle}>Schedules</span>
                    </div>
                </li>
                <li className='menu' onClick={() => showDropDown(!dropDown)}>
                    <div className='menuItemContainer'  >
                        <AiOutlinePieChart size={20} className="menuIcon" />
                        <span className='menuText' style={divStyle}>Income</span>
                    </div>
                    <MdKeyboardArrowDown size={23} />
                </li>
                {
                    dropDown ? <ul className='menuDropDownItems' style={!toggle ? dropDownBox : null} >
                        <li className='menu' >Earnings</li>
                        <li className='menu' >Refunds</li>
                        <li className='menu' >Declines</li>
                        <li className='menu' >Payouts</li>
                    </ul> : null
                }

                <li className='menu'>
                    <div className='menuItemContainer'>
                        <TbDiscount2 size={20} className="menuIcon" /><span className='menuText' style={divStyle}>Promote</span>
                    </div>
                </li>
            </ul>
            <div className="uploadImg" >
                {
                    !toggle ? <button className='btn'>ADD</button> : <><div className='addIcon'>
                        <GrFormAdd size={25} />
                    </div>
                        <h3>Upload new image</h3>
                        <p>Drag and drop</p></>
                }

            </div>
            <div className="theme">
                {
                    !toggle ? <button className='collapseTheme btn'><BsSunFill /></button> : <><button className='btn btn-active'><BsSunFill />Light</button>
                        <button className='btn'><BsMoonStarsFill />Dark</button></>
                }
            </div>
        </div>
    )
}

export default SideNav