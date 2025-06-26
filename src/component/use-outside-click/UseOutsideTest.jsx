import React, { useRef, useState } from "react";
import useOutsideClick from "./useOutsideClick";

const UseOutsideTest = () => {
    const ref = useRef()
    const [showContent, setShowContent] = useState(false);
    useOutsideClick(ref,() => setShowContent(false))
  
  return (
    <div>
      {showContent ? (
        <div ref={ref} style={{border: '1px solid', margin:"50px"}}>
          <h1>This is pop-up Content</h1>
          <h3>
            If you click outside it will close if you click inside it won't close.
          </h3>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default UseOutsideTest;
