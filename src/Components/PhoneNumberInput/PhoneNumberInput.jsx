
import React, { useEffect, useState } from 'react'
import './PhoneNumberInput.css'
import { MdKeyboardArrowDown } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import Flag from 'react-world-flags' // Install this package for Country Flags
import countryCode from './CountryCode'; //Import JSON data which we have created

const PhoneNumberInput = () => {
    //Logic Part
    const [flag, setFlag] = useState('IN')
    const [dialCode, setDialCode] = useState('+' + 91)
    const [isActive, setIsActive] = useState(96)
    const [showDropDown, setShowDropDown] = useState(false)
    const [input, setInput] = useState('')
    const [filteredName, setFilteredName] = useState([])

    useEffect(() => {
        //If input is empty just set the state the Country code Array
        //else set state to filtered data
        if (input === '') {
            setFilteredName(countryCode)
        }
        else {
            const filteredCountry = countryCode.filter(item => {
                const searchItem = input.toLowerCase();
                const prodName = item.name.toLowerCase();
                return prodName.startsWith(searchItem)

            })
            setFilteredName(filteredCountry)
        }
    }, [input])



    //JSX Part
    return (
        <div className='phoneNumberContainer'>
            <div className="phoneInputBox">
                <div className="flagContainer"
                    onClick={() => setShowDropDown(!showDropDown)}>
                    <div className="flagImg">
                        <Flag code={flag} />
                    </div>
                    <div className="arrowIcon">
                        <MdKeyboardArrowDown size={20} />
                    </div>
                </div>
                <div className="inputBoxContainer">
                    <p>Phone Number*</p>
                    <div className="inputNumber">
                        <span>{dialCode}</span>
                        <input type="text" />
                    </div>
                </div>
            </div>
            <div className="flagDropDownBox" style={{
                opacity: !showDropDown ? "0" : "1",
                transition: "0.3s ease",
                visibility: !showDropDown ? "hidden" : "visible",
                transform: !showDropDown ? "scale(0.9)" : "scale(1)",
                transformOrigin: "top"
            }}>
                <div className="countrySearch">
                    <BiSearch size={25} />
                    <input type="text"
                        placeholder='Search for Countries'
                        value={input}
                        onChange={(e) => setInput(e.target.value)} />
                </div>


                <ul className='flagList'>
                    {
                        filteredName.map((flag, index) => {
                            return (
                                <li className={`flag 
                                ${isActive === index ? 'flagActive' : ''}`}
                                    onClick={() => {
                                        setFlag(flag.code);
                                        setDialCode(flag.dial_code);
                                        setIsActive(index)
                                    }}>
                                    <div className="flagImg">
                                        <Flag code={flag.code}
                                            fallback={<span>Unknown</span>} />
                                    </div>
                                    <div className="flagNames">
                                        <p className='flagName'>{flag.name}</p>
                                        <span>({flag.dial_code})</span>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default PhoneNumberInput





