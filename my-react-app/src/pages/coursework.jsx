import { Link } from "react-router-dom" 
import {Button} from "react-bootstrap"

function Coursework() {

    return (
      <>
        <div>
          <p>Coursework</p>
          <input
            type="text"
            name="coursework"
          />
          <br/> 
          <Button><Link to="/availability">Previous</Link></Button>
          <Button><Link to="/generate">Generate schedule!</Link></Button>
        </div>
      </>
    )
  }
  
  export default Coursework