
import React, { useState } from 'react'
import './Validation.css'
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

//Logic Part

const FormInput = () => {
    const [pass, setPass] = useState('')
    const [passWordNotMatch, setPasswordNotMatch] = useState()
    const [showPassword, setShowPassword] = useState(false)
    const [passSuccess, setPassSuccess] = useState(false)
    const demoPass = 'frontEnd_edy' //Demo Password

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(pass)
        pass !== demoPass ? setPasswordNotMatch(true) :
            setPasswordNotMatch(false);
        setPassSuccess(true)
    }
    const inputStyle = {
        animation: 'shake 0.5s',
        border: '2px solid #ff7171'
    }
    const success = {
        border: '2px solid #74e39a'
    }






    //JSX Part

    return (
        <div className='formContainer'>
            <form onSubmit={(e) => handleSubmit(e)} id="form1">
                <div className="inputContainer" tabIndex={0}
                    style={passWordNotMatch ? inputStyle :
                        passSuccess ? success : null}>
                    <BsFillShieldLockFill size={20} />
                    <input className="passInput"
                        type={showPassword ? 'Text' : 'password'}
                        placeholder='Enter Password'
                        value={pass}
                        onChange={(e) => {
                            setPass(e.target.value);
                            setPasswordNotMatch(false);
                            setPassSuccess(false)
                        }} />
                    <div onClick={() => { setShowPassword(!showPassword) }}>
                        {
                            showPassword ? <AiFillEye size={22} /> :
                                <AiFillEyeInvisible size={22} />
                        }
                    </div>
                </div>
            </form>
            <div className='message'>{passWordNotMatch ? 'Wrong Password' : ''}</div>
            <button type="submit" form="form1" value="Submit"
                className='submitBtn'>Login</button>
        </div>
    )
}

export default FormInput



