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
        background: 'white',
        borderRadius: '5px',
        zIndex: '5',
        width: '10rem',
        padding: '0px',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
    }

    return (
        <div className="sideNavOuter">
            <div className='sidenavContainer' style={{ width: toggle ? '15rem' : '2rem', transistion: '0.3s ease-in-out' }}>
                <div className="logo"><svg width="30" height="25" viewBox="0 0 59 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="21.3311" y="0.126953" width="30.1667" height="30.1667" transform="rotate(45 21.3311 0.126953)" fill="#E8ECFC" />
                    <rect x="37.5073" y="3.53553" width="25.1667" height="25.1667" transform="rotate(45 37.5073 3.53553)" stroke="#3661ED" stroke-width="5" />
                </svg>
                </div>
                <div className="collapseIcon" style={{ transform: toggle ? 'rotate(180deg)' : 'rotate(0deg)' }} onClick={() => setToggle(!toggle)}><MdKeyboardArrowLeft size={23} /></div>
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
                <div className="theme" style={{ width: toggle ? '14rem' : '2rem' }}>
                    {
                        !toggle ? <button className='collapseTheme btn'><BsSunFill /></button> : <><button className='btn btn-active'><BsSunFill />Light</button>
                            <button className='btn'><BsMoonStarsFill />Dark</button></>
                    }
                </div>
            </div>
        </div>
    )
}

export default SideNav