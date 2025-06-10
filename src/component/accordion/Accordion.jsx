import React, { useState } from 'react'
import "./accordion.css"
import data from "./data.js"


const Accordion = () => {

    const [selected, setSeleceted] = useState(null)
    const [enableMulti, setEnableMulti] = useState(false)
    const [multiple, setMultiple] = useState([])




    const handleSingleSelection = (getCurrentId) => {
        setSeleceted(getCurrentId === selected ? null : getCurrentId)
    }

    const handleMultiSelection = (getCurrentId) => {
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId)
        if(findIndexOfCurrentId === -1) {copyMultiple.push(getCurrentId)}
        else {copyMultiple.splice(findIndexOfCurrentId , 1)}

        setMultiple(copyMultiple)

    }

    console.log(selected , multiple)

  return (
    <div className='wrapper'>
        <button onClick={() => setEnableMulti(!enableMulti)}>Enable Multi Selection</button>
        <div className="accordion">
            {data && data.length > 0 ? data.map(dataItem => <div className='item'>
                <div className='title' onClick={enableMulti ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}>
                   <h3>{dataItem.question}</h3>
                   <span>+</span>
                </div>
                <div className='content'>
                    {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? <div>{dataItem.answer}</div> : null}
                </div>
            </div>): <div>No data</div>}
        </div>
    </div>
  )
}

export default Accordion