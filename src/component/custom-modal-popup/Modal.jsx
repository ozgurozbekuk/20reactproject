import React, { useEffect, useRef } from 'react'

const Modal = ({id,header,body,footer,onClose,showModalPopup}) => {

    const popupRef = useRef(null)

    const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      onClose(); 
    }
  };


    useEffect(() => {
        if(showModalPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

     return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    },[showModalPopup])
  return (
    <div id={id} className='modal'>
        <div className="modal-content" ref={popupRef}>
            <div className="header">
                <span className='close-modal-icon' onClick={onClose}>&times;</span>
                <h2>
                    {
                    header ? header : "Header"
                    }
                </h2>
            </div>
            <div className="body">
                {
                    body ? (body) : (<div><p>This is popup body.</p></div>)
                }
            </div>
            <div className="footer">
                {footer ? footer : <h3>This is footer.</h3>}
            </div>
        </div>
    </div>
  )
}

export default Modal