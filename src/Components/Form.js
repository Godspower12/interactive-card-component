import React, {useState} from 'react'
import InputFields from './InputFields'
import "./Form.css";
import Card from './Card';
import CardBack from './CardBack';
import DesktopBackground from "../images/bg-main-desktop.png";

const Form = () => {
const [cardName, setCardName] = useState('Jane Appleseed');
const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
const [cardExpMonth, setCardExpMonth] = useState("09");
const [cardExpYear, setCardExpYear] = useState("24");
const [cardCvv, setCardCvv] = useState("097");
const [value, setValue] = useState(null)


const handleSubmit = (e) => {
   e.preventDefault();
   setValue({
    name: cardName,
    number: cardNumber,
    expMonth: cardExpMonth,
    expYear: cardExpYear,
    cardCvv: cardCvv,
   });
   
} 
const handleClick = () => {
  setValue(null);
}
  
const handleChanges = (e) => {
  let val = e.target.value
 setCardNumber(val);
}


  return (
    <div className="main-card">
      <div className="background">
        <img src= {DesktopBackground} alt="background" />
      </div>
      <div className='card-section'>
      <Card cardName = {cardName} 
      cardNumber ={cardNumber} 
      cardExpMonth = {cardExpMonth}
      cardExpYear = {cardExpYear}/>
      <CardBack cardCvv = {cardCvv}/>

    </div>
    {value === null ? 
    
    <form className="main-input" onSubmit = {handleSubmit}>
      <InputFields 
        name = "card-name"
        type = "text"
        placeholder = "e.g Jane Appleseed"
        label = "CARDHOLDER NAME"
        cardStyles= "card-name" 
        errorMessage= "Please fill in card name" 
        required 
        onchange = {(e) => setCardName(e.target.value)}
         />
      
      <InputFields  
        name =  "card-number"
        type = "text"
        placeholder= "e.g 1234 5678 9123 0000"
        label= "CARD NUMBER"
        cardStyles= "card-number"
        errorMessage= "Please fill in card number"
        required 
        onchange = {handleChanges}
        />
       <div className="expcvv">
       <div className="expire">
       <div><h5>Expiry Date (MM/YY)</h5></div> 
       <div>
       <InputFields 
        name= "exp-month"
        type= "text"
        placeholder= "MM"
        cardStyles= "exp-month"
        errorMessage= "Can't be blank"
        required
        onchange = {(e) => setCardExpMonth(e.target.value)}
        />
    <InputFields  
    name = "exp-year" 
    type = "text" 
    placeholder = "YY"
    cardStyles= "exp-year"
    errorMessage= "Can't be blank"
    required
    onchange = {(e) => setCardExpYear(e.target.value)}
    />
       </div>
       
       </div>
       
    <div className="cvvcard">
    <InputFields 
    name= "cvv"
    type= "text"
    placeholder= "e.g 123"
    label= "CVC"
    cardStyles= "cvv"
    errorMessage= "Can't be blank"
    required
    onchange = {(e) => setCardCvv(e.target.value)}
    />

    </div>
       </div>
       <button type='submit' className='btn'>Confirm</button>
      </form>
   : <div className='main-input'>
    <div className="complete">
    <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg>
    <h1>Thank you!</h1>
    <h3 className='card-details'>We've added your card details</h3>
    <button onClick={handleClick} className='btn'>Continue</button>
    </div>
   </div> }
      
    
    </div>

  )
}






export default Form