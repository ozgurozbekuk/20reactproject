import React, { useEffect, useState } from 'react'
import './loadmore.css'

const LoadMore = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0)


    const fetchProducts = async () => {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20
                }`)

            const data = await response.json();
            console.log(data)

            if (data && data.products && data.products.length) {
                setProducts((prevData) => [...prevData,...data.products])
                setLoading(false)
            }

        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [count])

    if (loading) {
        return <div>Products Loading...</div>
    }


    return (
        <div className="load-more-container">
            <div className='product-container'>
                {products && products.length ? products.map(item => (
                    <div className='product' key={item.id}>
                        <img src={item.thumbnail} alt={item.title} /> 
                        <p>{item.title}</p>
                    </div>
                )) : null }
            </div>
            <div className='button-container'>
                <button onClick={() => setCount(count + 1)}>Load More Products</button>
            </div>
        </div>
    )
}

export default LoadMore