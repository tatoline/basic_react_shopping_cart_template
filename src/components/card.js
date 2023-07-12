import React, {useState} from "react"
import './style/card.css'
import CardTitle from "./cardTitle"
import CardInfo from "./cardInfo"
import CardImage from "./cardImage"

const Card = ({title, image, info, onClick}) => {
    const [rotateCard, setRotateCard] = useState(false)
    const handleRotate = () => setRotateCard(!rotateCard)
    const rotate = rotateCard ? "rotateY(360deg)" : "rotateY(0)"

    const [addedToCart, setAddedToCart] = useState(false)
    const addedToCartText = addedToCart ? "1" : "0"

    const addToCart = () =>{
        onClick()
        handleRotate()
        setAddedToCart(true)
        const timeout = setTimeout(() => {
            setAddedToCart(false)
          }, 1000)
      
    }

    return(
        <div className="full-card">
            <div></div>
            <div className="add-to-card-top" style={{ opacity: addedToCartText }}>Added to Cart</div>
            <div></div>
            <div className="add-to-card-left" style={{ opacity: addedToCartText }}>Added to Cart</div>
            <div className="card" onClick={() => addToCart()} style={{ transform: rotate }}>
                <div className="card-body">
                    <CardTitle title={title} />
                    <CardImage image={image} />
                    <CardInfo info={info} />
                    <div className="details">Details</div>
                </div>
            </div>
            <div className="add-to-card add-to-card-right">Click to Add to Cart</div>
            <div></div>
            <div className="add-to-card add-to-card-bottom">Click to Add to Cart</div>
            <div></div>
        </div>
    )
}

export default Card