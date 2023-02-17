import { useState } from "react"
import React from "react"
import ShowPopup from "./ShowPopup"

const Popup = () => {

  const [modal, setModal] = useState(false)

  const closeModal = () => setModal(false)

  return <>
    <button onClick={() => { setModal(true) }}>Open Modal</button>
    {
      modal ? <ShowPopup closeModal={closeModal} /> : null
    }
  </>
}

export default Popup
