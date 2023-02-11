import React from 'react'
import './Register.css'
import {Link} from 'react-router-dom'

const Register = () => {
  return <>
    <div className='Register-page-wrapper'>
      <h1 className='register-heading'>Registration</h1>
      <div className="register-container">
        <form className='register-form'>
          <div className="register-content name-wrapper">
            <div className="name-cols">
              <label className='register-label'>FirstName <span style={{ color: 'red' }}>*</span></label>
              <input type="text" className='register-input' />
            </div>
            <div className="name-cols">
              <label className='register-label'>LastName (optional)</label>
              <input type="text" className='register-input' />
            </div>
          </div>
          <div className="register-content">
            <label className='register-label'>Mobile Number <span style={{ color: 'red' }}>*</span></label>
            <input type="text" className='register-input' />
          </div>
          <div className="register-content">
            <label className='register-label'>Email ID <span style={{ color: 'red' }}>*</span></label>
            <input type="text" className='register-input' />
          </div>
          <div className="register-content">
            <label className='register-label'>Password <span style={{ color: 'red' }}>*</span></label>
            <input type="password" className='register-input' />
          </div>
          <div className="register-content">
            <label className='register-label'>Confirm Password <span style={{ color: 'red' }}>*</span></label>
            <input type="password" className='register-input' />
          </div>
          <div className="submit-register-cont">
            <div className="terms-wrapper">
            <input type="checkbox" className='checkbox'/> <span className='terms-msg'>I accept all terms & conditions</span>
            </div>
            <input type="submit" value='Register' className='register-btn' />
            <span className="exist-account-msg">Already have an account? <Link to='/Login' className='navigate'>Login</Link></span>
          </div>
        </form>
      </div>
    </div>
  </>
}

export default Register
