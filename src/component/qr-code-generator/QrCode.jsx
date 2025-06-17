import React, { useState } from 'react'
import QRCode from 'react-qr-code';
import './qrcode.css'

const QrCode = () => {

    const [qrCode , setQrCode] = useState('');
    const [input, setInput] = useState('');


    const handleClick = () => {
        setQrCode(input)
    }

  return (
    <div className='qr-cod-container'>
        <input type="text" name='qr-code' value={input} placeholder='Type your name' onChange={(e) => setInput(e.target.value)}/>
        <button onClick={handleClick} disabled={input && input.trim()!=='' ? false: true}>Generate Qr Code</button>

        <QRCode value={qrCode} size={400} />
    </div>
  )
}

export default QrCode