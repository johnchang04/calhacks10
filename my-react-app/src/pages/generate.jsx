import { Link } from "react-router-dom" 
import {useContext} from "react"; 
import AppContext from '../FormContext'; 

function Generate() {
  const { data, updateData } = useContext(AppContext);
  console.log(JSON.stringify(data)); 

    return (
      <>
        <div>
          <button><Link to="/interests">Edit Preferences</Link> </button>
          <br/><br/>
          <button><Link to="/generate">Regenerate</Link> </button>
        </div>
      </>
    )
  }
  
  export default Generate