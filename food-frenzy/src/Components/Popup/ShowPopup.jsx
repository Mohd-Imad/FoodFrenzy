import React, { useState } from 'react'
import './ShowPopup.css'
import Login from '../Login/Login'
import Register from '../Register/Register'

const ShowPopup = ({ closeModal}) => {

    return <>
        <div className="modal-wrapper">
            <div className="modal-container">
                <Login closeModal={closeModal} />
                <Register closeModal={closeModal} />
            </div>
        </div>
    </>
}

export default ShowPopup
