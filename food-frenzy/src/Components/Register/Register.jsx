import React from 'react'
import './Register.css'
import {Link} from 'react-router-dom'

const Register = () => {
  return <>
    <div className='Register-page-wrapper'>
      <h1 className='login-heading'>Registration</h1>
      <div className="form-container">
        <form className='login-form'>
          <div className="form-content name-wrapper">
            <div className="name-cols">
              <label className='form-label'>FirstName <span style={{ color: 'red' }}>*</span></label>
              <input type="text" className='form-input' />
            </div>
            <div className="name-cols">
              <label className='form-label'>LastName (optional)</label>
              <input type="text" className='form-input' />
            </div>
          </div>
          <div className="form-content">
            <label className='form-label'>Mobile Number <span style={{ color: 'red' }}>*</span></label>
            <input type="text" className='form-input' />
          </div>
          <div className="form-content">
            <label className='form-label'>Email ID <span style={{ color: 'red' }}>*</span></label>
            <input type="text" className='form-input' />
          </div>
          <div className="form-content">
            <label className='form-label'>Password <span style={{ color: 'red' }}>*</span></label>
            <input type="password" className='form-input' />
          </div>
          <div className="form-content">
            <label className='form-label'>Confirm Password <span style={{ color: 'red' }}>*</span></label>
            <input type="password" className='form-input' />
          </div>
          <div className="submit-form-cont">
            <div className="terms-wrapper">
            <input type="checkbox" className='checkbox'/> <span className='terms-msg'>I accept all terms & conditions</span>
            </div>
            <input type="submit" value='Register' className='login-btn' />
            <span className="exist-account-msg">Already have an account? <Link to='/Login' className='navigate'>Login</Link></span>
          </div>
        </form>
      </div>
    </div>
  </>
}

export default Register
