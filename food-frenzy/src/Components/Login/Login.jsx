import React from 'react'
import './Login.css'

const Login = () => {
    return <>
        <h1>Login</h1>
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
                <div className="submit-form">
                    <input type="submit" value='Log in' className='login-btn' />
                    <span className="lost-password">Lost your password?</span>
                </div>
            </form>
        </div>
    </>
}

export default Login
