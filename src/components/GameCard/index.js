import React from 'react';
import './style.css'
const GameCard = ({ title, developer, img, price}) => {
    return(
        <article className="card">
            <img src={img} />
            <div className="card__content">
                <div className="card__content-info">
                    <h2>{title}</h2>
                    <h3>{developer}</h3>
                </div>
                <div className="card__content-price">
                    <span>{price}</span>
                </div>
            </div>
        </article>
    );
}

export default GameCard;