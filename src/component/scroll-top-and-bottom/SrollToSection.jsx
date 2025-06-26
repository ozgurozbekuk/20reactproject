import React, { useRef } from 'react'

const SrollToSection = () => {

    const ref = useRef()

    const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "grey",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
      },
    },
  ];

  function handleScrollSection() {
    let position = ref.current.getBoundingClientRect().top

    window.scrollTo(
       { top:position,
        behavior:"smooth"}
    )
  }


  return (
    <div>
        <h1>Scroll to Section</h1>
        <button onClick={handleScrollSection}>Scroll To Section</button>
        {
            data.map((section,index) => (<div ref={(index + 1) === 4 ? ref :null} style={section.style}><h1>{section.label}</h1></div>))
        }
    </div>
  )
}

export default SrollToSection