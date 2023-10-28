import { Link } from "react-router-dom" 
import {Button} from "react-bootstrap"
import {useContext} from "react"; 
import AppContext from '../FormContext'; 

function Generate() {
  const { data, updateData } = useContext(AppContext);
  console.log(JSON.stringify(data)); 

    return (
      <>
        <div>
          <Button><Link to="/coursework">Previous</Link> </Button>
          <Button><Link to="/generate">Regenerate</Link> </Button>
        </div>
      </>
    )
  }
  
  export default Generate