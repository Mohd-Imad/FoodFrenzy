import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

const Login = () => {
    return <>
        <div className='Login-page-wrapper'>
            <h1 className='login-heading'>Login</h1>
            <div className="form-container">
                <form className='login-form'>
                    <div className="form-content">
                        <label className='form-label'>Username or email address <span style={{ color: 'red' }}>*</span></label>
                        <input type="text" className='form-input' />
                    </div>
                    <div className="form-content">
                        <label className='form-label'>Password <span style={{ color: 'red' }}>*</span></label>
                        <input type="password" className='form-input' />
                    </div>
                    <div className="submit-form-cont">
                        <input type="submit" value='Log in' className='login-btn' />
                        <span className="lost-password">Lost your password?</span>
                        <span className="exist-account-msg">Don't have an account? <Link to='/' className='navigate'>Register</Link></span>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default Login
