import React from 'react'
import { useState } from 'react'

const InputFields = ({onchange, errorMessage, inputStyles, cardStyles, label,...inputProps}) => {
  const [focused, setFocused] = useState(false)
  
  const handleFocus = (e) => {
    setFocused(true);
  }
  return (
    <div className= {cardStyles}>
      <label>{label} </label>
        <input className = {inputStyles} {...inputProps} onChange = {onchange} onBlur = {handleFocus} focused= {focused.toString()}/>
        <div className='error'>{errorMessage}</div>
    </div>
  )
}

export default InputFields