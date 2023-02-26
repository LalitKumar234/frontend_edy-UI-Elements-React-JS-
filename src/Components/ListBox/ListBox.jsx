
import React, { useState } from 'react'
import './ListBox.css'
import { IoIosArrowDown } from 'react-icons/io';
import { BiCheck } from 'react-icons/bi';

const ListBox = () => {
    const [dropDown, showDropDown] = useState(false)
    const [select, setSelect] = useState('Terminator')
    let names = ['Terminator', 'Indestructible', 'Bumblebee', 'Party Wagon', 'Boomer Siren', 'Turtle Taxi']
    return (
        <div className='listBoxContainer'>
            <button className='listButton'
                onBlur={() => showDropDown(false)}
                onFocus={() => showDropDown(!dropDown)}>{select}<IoIosArrowDown
                    style={{
                        transform: dropDown ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: '0.3s ease-in-out'
                    }} /></button>
            <ul className='listItems' style={{
                opacity: !dropDown ? "0" : "1",
                transition: "0.3s ease",
                visibility: !dropDown ? "hidden" : "visible",
                transformOrigin: "top center"
            }}>
                {
                    names.map((name, index) => {
                        return (<li className='list' key={index}
                            onClick={() => { setSelect(name); showDropDown(false) }}
                            style={{ fontWeight: select === name ? '500' : '400' }}>
                            <span className='checkIcon'>
                                {select === name ? <BiCheck size={25} /> : null}
                            </span>
                            {name}
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}

export default ListBox