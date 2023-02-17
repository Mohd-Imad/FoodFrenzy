import { useState } from "react"
import React from "react"
import ShowPopup from "./ShowPopup"

const Popup = () => {

  const [modal, setModal] = useState(false)

  const closeModal = () => setModal(false)

  return <>
    <button onClick={() => { setModal(true) }}
      style={{ backgroundColor: '#253d4e', padding: '0.5rem', color: '#fff', borderRadius: '10px',margin:'auto'}}>Open Modal</button>
    {
      modal ? <><ShowPopup closeModal={closeModal} /></> : null
    }
  </>
}

export default Popup
