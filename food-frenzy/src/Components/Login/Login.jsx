import React, { useEffect, useState } from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import validation from './LoginValidation'


const Login = () => {
    const [values, setValues] = useState({
        username : '',
        password : ''
    })
    const [errors,setErrors] = useState({})

    useEffect(()=>{
        if(Object.keys(errors).length === 0 && values.username!='' && values.password!=''){
           alert('Form submitted')
        }
    },[errors])

    const changeHandler = (e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    }

    const loginHandler = (e)=>{
        e.preventDefault()
        setErrors(validation(values))
    }

    return <>
        <div className='Login-page-wrapper'>
            <h1 className='login-heading'>Login</h1>
            <div className="login-container">
                <form onSubmit={loginHandler} className='login-form'>
                    <div className="login-content">
                        <label className='login-label'>Username or email address <span style={{ color: 'red' }}>*</span></label>
                        <input type="text" name='username' value={values.username} className='login-input' onChange={changeHandler} />
                        <p style={{color:'red'}}>{errors.username}</p>
                    </div>
                    <div className="login-content">
                        <label className='login-label'>Password <span style={{ color: 'red' }}>*</span></label>
                        <input type="password" name='password' value={values.password} className='login-input' onChange={changeHandler}  />
                        <p style={{color:'red'}}>{errors.password}</p>
                    </div>
                    <div className="submit-form-cont">
                        <input type="submit" value='Log in' className='login-btn' />
                        <Link to='/reset' className="lost-password">Lost your password?</Link>
                        <span className="exist-account-msg">Don't have an account? <Link to='/' className='navigate'>Register</Link></span>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default Login
