import React, { useEffect, useState } from 'react'
import './Filter.css'
import checked from '../../Assets/checked.svg'
import unChecked from '../../Assets/unchecked.svg'
import { MdKeyboardArrowDown } from 'react-icons/md';

const Filter = () => {

    const professions = ['Java', 'Designer', 'QA', 'PHP', 'iOS/macOS', 'C++', 'Project Manager', 'DevOps', 'Front End Developer']
    const pro = [{
        profs: 'Java',
        isChecked: false,
        id: 1
    },
    {
        profs: 'Designer',
        isChecked: false,
        id: 2
    },
    {
        profs: 'QA',
        isChecked: false,
        id: 3

    }]
    const [show, setShow] = useState(true)
    const [checkedItems, setCheckedItems] = useState(pro)
    // const [isChecked, setIsChecked] = useState(false)

    const handleChecked = (item, index) =>{
        pro[index].isChecked = pro[index].isChecked ? false : true
        setCheckedItems(pro)
    }
    console.log(checkedItems, 'ch')
    console.log(pro)



    return (
        <div className='sideNavContainer'>
            <h3>Filter</h3>
            <div className="profession">
                <div className="profDropDown" onClick={() => { setShow(!show) }}>
                    <h5>Profession</h5>
                    <MdKeyboardArrowDown size={22} />
                </div>
                <ul className='professionItems' style={{ opacity: show ? '1' : '0' }}>
                    {
                        checkedItems.map((prof, index) => {
                            return (<li className='proItems'
                                onClick={() => handleChecked(prof, index)}
                                key={index}>
                                <img src={prof.isChecked ? checked : unChecked} alt="" />{prof.profs}</li>)
                                
                        })
                    }

                </ul>
            </div>
        </div>
    )
}

export default Filter