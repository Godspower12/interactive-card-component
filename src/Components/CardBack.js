import React from 'react';
import backcardimg from "../images/bg-card-back.png";
const CardBack = ({cardCvv}) => {
  return (
    <div className='hard-card-back'>
        <img src= {backcardimg} alt="backcardimg" />
       
       <div className="cvv-container">
        <h4>{cardCvv}</h4>
        </div> 
        
    </div>
  )
}

export default CardBack