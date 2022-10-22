import React from 'react';
import frontcardimg from "../images/bg-card-front.png"


const Card = ({cardName, cardNumber, cardExpMonth, cardExpYear}) => {
  return (
    <div className='hard-card'>
    <img src= {frontcardimg} alt="front-card" />
        <div className="circles">
        <div className="big-circle"></div>
        <div className="small-circle"></div>
        </div>
        <div className="number">
       <h2>{cardNumber}</h2>
        </div>

        <div className="bottom">
        <div className="namecard">
          <h4>{cardName}</h4>
        </div>
        <div>
            <h4>{cardExpMonth}/{cardExpYear}</h4>
        </div>

        </div>
        
    </div>
  )
}

export default Card