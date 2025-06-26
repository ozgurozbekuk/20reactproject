import React, { useState } from 'react'
import useFetch from './useFetch'

const UseFetchHookTest = () => {

    
    const {data,error,pending} = useFetch('https://dummyjson.com/products?limit=100',{})
    console.log(data)

  return (
    <div>
        <h1>UseFetch Hook Test</h1>
    {
        pending ? <p>{pending}</p> : null
    }
    {
      data && data.products && data.products.length ? data.products.map((dataItem) => <h2 key={dataItem.key}>{dataItem.title}</h2> ): null
    }
    </div>
  )
}

export default UseFetchHookTest