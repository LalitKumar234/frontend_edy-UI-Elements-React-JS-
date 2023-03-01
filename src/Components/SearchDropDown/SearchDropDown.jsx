

import React, { useEffect, useState } from 'react'
import './SearchDropDown.css'
import { AiOutlineSearch } from 'react-icons/ai';
import notFound from '../../Assets/download.png'

// Logic Part

const SearchDropDown = () => {
    const [text, setText] = useState('')
    const [dropDown, showDropDown] = useState(false)
    const [response, setResponse] = useState([])
    const [filteredItem, setFilteredItem] = useState([])

    const handleChange = (e) => {
        setText(e.target.value);
        showDropDown(true)
    }
    const getdata = async () => {
        const data = await fetch('https://dummyjson.com/products') // Demo API to get Products
        const res = await data.json()
        setResponse(res.products)
    }
    useEffect(() => {
        getdata()
        text === '' && showDropDown(false)
        const final = response.filter(item => {
            const searchItem = text.toLowerCase();
            const prodName = item.title.toLowerCase();
            return prodName.startsWith(searchItem)
        })
        setFilteredItem(final)
    }, [text])





    // JSX Part

    return (
        <div className='searchDropDownContainer'>
            <div className="searchBoxInput">
                <AiOutlineSearch size={25} />
                <input type="text" value={text}
                    onChange={(e) => { handleChange(e) }}
                    placeholder="Search Products"
                    autoFocus />
            </div>
            {
                dropDown ? <div className="searchDropDown">
                    {
                        <ul className='searchDropDownItems'>
                            {
                                filteredItem.length !== 0 ?
                                    filteredItem.map((item, index) => {
                                        return (<li key={index}>{item.title}</li>)
                                    }) : <div className='notFound'>
                                        <img src={notFound} alt="" />
                                        Not Found</div>
                            }
                        </ul>
                    }
                </div> : null
            }

        </div>
    )
}

export default SearchDropDown





