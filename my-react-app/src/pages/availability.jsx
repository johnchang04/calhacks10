import { Link } from "react-router-dom" 
import React, { useContext, useState} from 'react';
import AppContext from '../FormContext';
import SelectableBox from "../calendar/box"; 

function Availability() {
  const { data, updateData } = useContext(AppContext);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = () => {
    updateData({...data, availability: inputText})
  };


    return (
      <>
        <div>
          <p>Availability</p>
          <SelectableBox/>
          <input
            type="text"
            name="availability"
            value={inputText}
            onChange={handleInputChange}
          />
          
          <br/> 
          <button><Link to="/interests">Previous</Link></button>
          <button onClick={handleButtonClick}><Link to="/coursework">Next</Link></button> 
        </div>
      </>
    )
  }
  
  export default Availability