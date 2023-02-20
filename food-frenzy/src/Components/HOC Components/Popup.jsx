import React, { useState } from 'react'
import './Popup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Popup = (Component) => {
    const [popup, setPopup] = useState(false)

    const closePopup = () => {
        setPopup(false)
    }   

    let newPopup = () => {
        return <>
            {/* <Link to='/' style={{ backgroundColor: '#253d4e', padding: '0.5rem', textDecoration: 'none', color: '#fff', borderRadius: '10px', margin: 'auto' }}>Open Popup</Link> */}
            {
                popup ? <>
                    <div className="modal-wrapper">
                        <div className="modal-container">
                            <FontAwesomeIcon icon={faClose} className='close-icon' onClick={closePopup} />
                            <Component />
                        </div>
                    </div>
                </> : null
            }
        </>
    }
    return newPopup
}


export default Popup