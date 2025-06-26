import React from 'react'
import useWindowResize from './useWindowResize'

const UseWindowResizeTest = () => {

    const windowSize = useWindowResize()

    const {width,height} = windowSize;

  return (
    <div>
        <h1>Use Window Resize Hook</h1>
        <p>Width : {width}</p>
        <p>Height : {height}</p>
    </div>
  )
}

export default UseWindowResizeTest