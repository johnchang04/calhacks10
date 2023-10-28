import { Link } from "react-router-dom" 
import React, { useContext, useState} from 'react';
import AppContext from '../FormContext'; 
import {Button} from 'react-bootstrap'

function Availability() {
  const { data, updateData } = useContext(AppContext);

    return (
      <>
        <div>
          <p>Availability</p>
          <input
            type="text"
            name="availability"
          />
          
          <br/> 
          <Button><Link to="/interests">Previous</Link></Button>
          <Button><Link to="/coursework">Next</Link></Button> 
        </div>
      </>
    )
  }
  
  export default Availability