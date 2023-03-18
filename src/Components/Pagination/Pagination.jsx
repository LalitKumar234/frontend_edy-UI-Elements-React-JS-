
import React, { useEffect, useState } from 'react'
import './Pagination.css'
import axios from 'axios'
import { GoKebabVertical } from 'react-icons/go';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

//Logic Part
const Pagination = () => {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)

    const URL = ('https://dummyjson.com/users') //Dummy API end Point

    const fetchUsers = () => { //Fetch the users data using axios
        axios.get(URL)
            .then(res => {
                const persons = res.data;
                setUsers(persons.users)
                console.log(users)
            })
    }
    const selectPageHandle = (selectedPage) => { // Pagination Logic
        if (selectedPage >= 1 &&
            selectedPage <= users.length / 5 &&
            selectedPage !== page) {
            setPage(selectedPage)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])
return (
        <div className='userTable'>
            <h1 className='heading'>
                Users
            </h1>
            <table>
                <tr>
                    <th className='userHeading'>User</th>
                    <th className='userBirth'>Date of Birth</th>
                    <th className='userPhone'>Phone Number</th>
                    <th className='userAddress'>Location</th>
                    <th className='contact'>Contact</th>
                    <th className='userAction'>Action</th>
                </tr>
                {
                    users.slice(page * 5 - 5, page * 5).map((user, index) => {
                        return (<tr>
                            <td>
                                <div className='userDetails'>
                                    <div className='userPic'>
                                        <img src={user.image} alt={user.firstName} />
                                    </div>
                                    <div className='userHandles'>
                                        <p className='userName'>{user.firstName}</p>
                                        <div className='userEmail'>{user.email}</div>
                                    </div>
                                </div>
                            </td>
                            <td className='userBirth f-weight'>{user.birthDate}</td>
                            <td className='userPhone f-weight'>{user.phone}</td>
                            <td className='userAddress f-weight'>{user.address.city}</td>
                            <td className='contact'><button className='contactCTA'>Contact</button></td>
                            <td className='userAction'><GoKebabVertical /></td>
                        </tr>)
                    })
                }
            </table>


            {/* JSX PArt */}
            {
                users.length > 0 && <div className='pagination'>
                    <div className='arrows' onClick={() => selectPageHandle(page - 1)}>
                        <MdKeyboardArrowLeft size={25} />
                    </div>
                    <div className='pageNumbers'>
                        {
                            [...Array(users.length / 5)].map((n, i) => {
                                return <div 
                                className={`num ${page === i + 1 ? `numActive` : ''}`} 
                                onClick={() => selectPageHandle(i + 1)}>{i + 1}</div>
                            })
                        }
                    </div>
                    <div className='arrows' onClick={() => selectPageHandle(page + 1)}>
                        <MdKeyboardArrowRight size={25} />
                    </div>
                </div>
            }
        </div>
    )
}

export default Pagination





