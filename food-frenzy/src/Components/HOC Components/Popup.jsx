import React from 'react'
import '../Popup/ShowPopup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
const Popup = (Component) => {
    let newPopup=()=>{

        return <>
        <div className="modal-wrapper">
            <div className="modal-container">
             <FontAwesomeIcon icon={faClose} className='close-icon'  />
                <Component />
            </div>
        </div>
    </>
        
    }
    return newPopup
   
}

export default Popup