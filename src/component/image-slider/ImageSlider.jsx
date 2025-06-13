import React, { useEffect, useState } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import './imageslider.css'



const ImageSlider = ({ url, limit = 5, page = 1 }) => {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false)


    const fetchImages = async (getUrl) => {
        try {
            setLoading(true)

            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImages(data)
                console.log(data)
                setLoading(false)
            }


        } catch (error) {
            setErrorMsg(error.message)
            setLoading(false)
        }

    }

    const handlePrev = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }

    const handleNext = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }

    useEffect(() => {
        if (url !== '') {
            fetchImages(url)
        }
    }, [url])

    if (loading) {
        return <div>Images Loading...</div>
    }

    if (errorMsg !== null) {
        return <div>Error occoured : {errorMsg}</div>
    }


    return (
        <div className='container'>
            <FaArrowAltCircleLeft className='arrow arrow-left' onClick={handlePrev} />
            {
                images && images.length ?
                    images.map((imageItem, index) => (
                        <img key={imageItem.id} alt={imageItem.download_url} src={imageItem.download_url} className={currentSlide === index ? "current-image" : "current-image hide-current-image"} />
                    ))
                    : null
            }
            <FaArrowAltCircleRight className='arrow arrow-right' onClick={handleNext} />
            <span className="circle-indicators">
                {
                    images && images.length ? images.map((_, index) => (
                        <button key={index} className={currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"} onClick={() => setCurrentSlide(index)}></button>
                    )) : null
                }
            </span>
        </div>
    )
}

export default ImageSlider