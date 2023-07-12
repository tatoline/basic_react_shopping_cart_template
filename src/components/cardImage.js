import React from "react"
import './style/cardImage.css'

const CardImage = ({image}) => {
    return(
        <div className="card-image">
            <img src={image} />
        </div>
    )
}

export default CardImage