import { Link } from "react-router-dom"
import React, { useContext, useState} from 'react';
import AppContext from '../FormContext'; 

function Interests() {
  const { data, updateData } = useContext(AppContext);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = () => {
    updateData({...data, interests: inputText})
  };

  return (
    <div>
      <p>Interests</p>
      <input
        type="text"
        placeholder="Enter text"
        value={inputText}
        onChange={handleInputChange}
      />
      <br/>
      
      <br/> 
      <button onClick={handleButtonClick}><Link to="/availability">Next</Link></button>
       
      </div> 
    )
  }
  
  export default Interests;