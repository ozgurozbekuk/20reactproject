import React, { useRef } from 'react'
import useFetch from '../use-fetch/useFetch'

const ScrollTopAndBottom = () => {
    const {data,error,pending} = useFetch('https://dummyjson.com/products?limit=100',{})
    const bottomRef = useRef(null)
  
    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior:"smooth",
        })
    }

    function handleScrollToBottom() {
        bottomRef.current.scrollIntoView({behavior:"smooth"})
    }
  
    return (
    <div>
        <h1>Scroll Top and Bottom feature</h1>
        <h3>Here top section</h3>
        <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
        <ul> 
        {
            data && data.products && data.products.length ? data.products.map((dataItem) => <li>{dataItem.title}</li>) : null 
        }
        <button onClick={handleScrollToTop}>Scroll To Top</button>
        <div ref={bottomRef}></div>
        <h3>Here bottom section</h3>
        </ul>
    </div>
  )
}

export default ScrollTopAndBottom