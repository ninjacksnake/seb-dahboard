import "./Chart_right.css";
import CardR  from "../../cards/CardR";
import React from 'react'


const Chart_right = ({ chartName, chartNameDetail, cards }) => {
    return (
        <div className="charts__right">
            <div className="charts__right__title">
                <div>
                    <h1>{chartName}</h1>
                    <p>{chartNameDetail}</p>
                </div>
                <i className="fa fa-use">$$</i>
            </div>

            <div className="charts__right__cards">
                {cards.map((card, index) => {
                    return (
                        <CardR
                            key={index}
                            cardColor={card.cardColor}
                            cardText={card.cardText}
                            ammount={card.ammount}
                        />
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Chart_right



