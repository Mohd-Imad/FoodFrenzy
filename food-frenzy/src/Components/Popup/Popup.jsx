import { useState } from "react"
import React from "react"
import ShowPopup from "./ShowPopup"
import Register from "../Register/Register"

const Popup = () => {

  const [modal, setModal] = useState(false)

  const closeModal = () => setModal(false)

  return <>
    <button onClick={() => { setModal(true) }}
      style={{ backgroundColor: '#253d4e', padding: '0.5rem', color: '#fff', borderRadius: '10px',margin:'auto'}}>Open Modal</button>
      
    {
      modal ? <><div className="modal-wrapper">
      <div className="modal-container">
          {/* <Login closeModal={closeModal} /> */}
          <Register closeModal={closeModal} />
      </div>
  </div></> : null
    }
  </>
}

export default Popup
