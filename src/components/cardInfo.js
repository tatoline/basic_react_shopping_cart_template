import React from "react"
import './style/cardInfo.css'

const CardInfo = ({info}) => {
    return(
        <div className="card-info">
            {info.length > 200 ? info.substring(0, 200) + '...' : info}
        </div>
    )
}

export default CardInfo