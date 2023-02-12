import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

const Login = () => {
    return <>
        <div className='Login-page-wrapper'>
            <h1 className='login-heading'>Login</h1>
            <div className="login-container">
                <form className='login-form'>
                    <div className="login-content">
                        <label className='login-label'>Username or email address <span style={{ color: 'red' }}>*</span></label>
                        <input type="text" className='login-input' />
                    </div>
                    <div className="login-content">
                        <label className='login-label'>Password <span style={{ color: 'red' }}>*</span></label>
                        <input type="password" className='login-input' />
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
