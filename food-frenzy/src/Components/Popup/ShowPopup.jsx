import React from 'react'
import './ShowPopup.css'
import Login from '../Login/Login'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const ShowPopup = ({ closeModal }) => {
    return <>
        <div className="modal-wrapper">
            <div className="modal-container">
                <div className='close'>
                    <FontAwesomeIcon icon={faClose} />
                </div>
                <Login />
                {/* <h2>My Popup</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique porro labore odio pariatur. Ex vero explicabo saepe cupiditate quia sunt tempore culpa fugiat repellendus sed. Animi rem officia iste quasi!</p>*/}
            <button onClick={closeModal}>Accept</button>
            </div> 
        </div>
    </>
}

export default ShowPopup
