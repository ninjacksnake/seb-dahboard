import React from 'react'
import './Card.css'

const Card = ({ text, quantity, optStyles }) => {
    return (

        <div className="card">
            <i className={optStyles} aria-hidden="true"></i>
            <div className="card_inner">
                <p className='text-primary-p'>{text}</p>
                <span className="font-bold text-title">{quantity}</span>
            </div>
        </div>

    )
}

export default Card