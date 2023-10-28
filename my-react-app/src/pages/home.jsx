import { Link } from "react-router-dom" 

function Home() {
  return (
    <>
      <div>
        <p>Home</p>
        <Link to="/interests">Get started!</Link> 
      </div>
    </>
  )
}

export default Home; 