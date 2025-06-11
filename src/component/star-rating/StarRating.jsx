import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './starrating.css';

const StarRating = ({numOfStars = 5}) => {
    const [rating,setRating] = useState(0);
    const [hover,setHover] = useState(0)
    
    
    const handleClick = (getCurrentIndex) => {
        setRating(getCurrentIndex)
    }

    const handleMouseOn = (getCurrentIndex) => {
        setHover(getCurrentIndex)
    }

    const handleMouseLeave = () => {
        setHover(rating)
    }

  return (
    <div className='star-rating'>
        {
            [...Array(numOfStars)].map((_,index) => {
                index += 1
                return <FaStar 
                    key={index}
                    className={index <= (hover || rating) ? 'active' : 'inactive'}
                    onClick={()=>handleClick(index)}
                    onMouseMove={() => handleMouseOn(index)}
                    onMouseLeave={() => handleMouseLeave()}
                    size={40}
                />

            })
        }
    </div>
  )
}

export default StarRating