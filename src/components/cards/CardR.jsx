import React from 'react'
import './CardR.css'

const CardR = ({cardColor, cardText, ammount}) => {
    return (
        <div>
            <div className={cardColor}>
                <h1>{cardText}</h1>
                <p>${ammount}</p>
            </div>
        </div>
    )
}

export default CardR