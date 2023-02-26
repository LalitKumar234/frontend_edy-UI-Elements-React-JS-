
import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { HiOutlineDuplicate, HiOutlineArchive, HiOutlineDocumentRemove } from 'react-icons/hi';
import './MenuDropDown.css'

const MenuDropDown = () => {
    const [showDropDown, setShowDropDown] = useState(false)
    return (
        <div className='dropDownContainer'>
            <button className='dropDownButton'
                onClick={() => setShowDropDown(!showDropDown)}>
                Options
                <IoIosArrowDown />
            </button>
            <ul className="dropDownItems" style={{
                opacity: !showDropDown ? "0" : "1",
                transition: "0.3s ease",
                visibility: !showDropDown ? "hidden" : "visible",
                transform: !showDropDown ? "scale(0.9)" : "scale(1)",
                transformOrigin: "top right"
            }}>
                <li className="items" onClick={() => setShowDropDown(false)}>
                    <AiOutlineEdit size={22} /><span className='menuText'> Edit</span>
                </li>
                <li className="items" onClick={() => setShowDropDown(false)}>
                    <HiOutlineDuplicate size={22} /><span className='menuText'>Duplicate</span>
                </li>
                <li className="items" onClick={() => setShowDropDown(false)}>
                    <HiOutlineDocumentRemove size={22} /><span className='menuText'>Move</span>
                </li>
                <li className="items" onClick={() => setShowDropDown(false)}>
                    <HiOutlineArchive size={22} /><span className='menuText'>Archive</span>
                </li>
                <li className="items" onClick={() => setShowDropDown(false)}>
                    <AiOutlineDelete size={22} /><span className='menuText'>Delete</span>
                </li>
            </ul>
        </div>
    )
}
export default MenuDropDown


