import React from 'react'
import './ShowPopup.css'
import Login from '../Login/Login'
import Register from '../Register/Register'

const ShowPopup = ({ closeModal }) => {
    return <>
        <div className="modal-wrapper">
            <div className="modal-container">
                {/* <Register closeModal = {closeModal}  /> */}
                <Login closeModal = {closeModal} />
                {/* <h2>My Popup</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique porro labore odio pariatur. Ex vero explicabo saepe cupiditate quia sunt tempore culpa fugiat repellendus sed. Animi rem officia iste quasi!</p>*/}
            {/* <button onClick={closeModal}>Accept</button> */}
            </div> 
        </div>
    </>
}

export default ShowPopup
