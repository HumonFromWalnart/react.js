import React from "react";
import { useNavigate } from "react-router-dom";


const Input = ({ value, setValue }) => {

    const navigateSecond = useNavigate();
  
    const KeyPressed = (e) => {
      if (e.key === 'Enter') {
        navigateSecond(`./${value}`)
      }
    }
    return (
        <input value={value} id='searchInput' type={'text'} placeholder='Search' onChange={(e) => setValue(e.target.value)} onKeyDown={(e) => KeyPressed(e)}/>
      )
}
    export default Input;