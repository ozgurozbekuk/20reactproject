import React, { useEffect, useState } from 'react'
import './scrollindicator.css'

const ScrollIndicator = ({ url }) => {

    const [data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [scrollPercentage, setScrollPercentage] = useState(0)

    const fetchData = async (getUrl) => {

        try {
            setLoading(true)
            const res = await fetch(getUrl)
            const data = await res.json();
            if (data && data.products && data.products.length > 0) {
                setData(data.products);
                setLoading(false)
            }

        } catch (error) {
            setLoading(false)
            console.log(error)
            setErrorMessage(error.message)
        }

    }

    const handleScrollPercentage = () => {
        // console.log(document.body.scrollTop, document.documentElement.scrollTop, document.documentElement.scrollHeight, document.documentElement.clientHeight)
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        
        setScrollPercentage((howMuchScrolled / height) * 100);
    }


    useEffect(() => {
        fetchData(url)
    }, [url])

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage)

        return () => {
            window.removeEventListener('scroll', () => { })
        }
    }, [])

    console.log(data, scrollPercentage);

    if(errorMessage) {
        return <p>Error! {errorMessage}</p>
    }

    if(loading){
        return <div>Loading Data please wait..</div>
    }



    return (
        <div>
            <div className="top-container">
                <h1>Scroll Indicator</h1>
            <div className="scroll-progress-container">
                <div className="current-progress-bar" style={{width : `${scrollPercentage}%`}}>

                </div>
            </div>
            </div>
            <div className="data-container">
                {
                    (data && data.length > 0 ? data.map(dataItem => <p>{dataItem.title}</p>) : null)
                }
            </div>
        </div>
    )
}

export default ScrollIndicator