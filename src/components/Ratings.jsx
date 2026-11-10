import { Star, StarFill, StarHalf } from "react-bootstrap-icons"
import { useState } from "react"

const Rating = () =>{

    const styles = {
        display: 'flex',
        gap: '2px',
    }

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0)

    return(
        <div className="rating" style={styles}>
            {[...Array(5)].map((_, index) => (
               <span key={index} onClick={() => setRating(index + 1)} onMouseEnter={() => setHover(index + 1)} onMouseLeave={() => setHover(0)}>
                    {index + 1 <= (hover || rating) ? (
                        <StarFill size={30} fill="gold" />
                    ) : (
                        <Star size={30} />
                    )}
               </span>
                
            )
            )}
        </div>
    )
}

export default Rating