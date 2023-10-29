import { Link } from "react-router-dom" 
import React, { useContext, useState} from 'react';
import AppContext from '../FormContext'; 

function Coursework() {
  const { data, updateData } = useContext(AppContext);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handlebuttonClick = () => {
    updateData({...data, coursework: inputText})
  };

    return (
      <>
        <div>
          <p>Coursework</p>
          <input
            type="text"
            name="coursework"
            value={inputText}
            onChange={handleInputChange}
          />
          <br/> 
          <button><Link to="/availability">Previous</Link></button>
          <button onClick={handlebuttonClick}><Link to="/generate">Generate schedule!</Link></button>
        </div>
      </>
    )
  }
  
  export default Coursework