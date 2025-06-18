import React, { useState } from 'react'
import Modal from './Modal';
import './popup.css'

const ModalTest = () => {
    const [showModalPopup,setShowModalPopup]= useState(false);


    const handleTogglePopup = () =>{
        setShowModalPopup(!showModalPopup)
    }

    const onClosePopup = () => {
        setShowModalPopup(false)
    }
  return (
    <div>
        <button onClick={handleTogglePopup}>Open Popup</button>
        {
            showModalPopup && <Modal showModalPopup={showModalPopup} onClose={onClosePopup}/>
        }
    </div>
  )
}

export default ModalTest