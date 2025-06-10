import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = ({numOfStars = 5}) => {

    const [rating,setRating]=useState(0);
    const [hover,setHover] = useState(0);


    const handleClick = (getCurrentIndex) => {
        console.log(getCurrentIndex)
    }

    const handleMouseEnter = (getCurrentIndex) => {
        console.log(getCurrentIndex)
    }

    const handleMouseLeave = (getCurrentIndex) => {
        console.log(getCurrentIndex)
    }

  return (
    <div className='star-rating'>
        {
            [...Array(numOfStars)].map((_,index) => {

                index += 1

                return <FaStar 
                key={index}
                onClick={() => handleClick(index)}
                onMouseMove={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                size={40}
                />
            })
        }
    </div>
  )
}

export default StarRating