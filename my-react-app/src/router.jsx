import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 

import Home from './pages/home'
import Interests from './pages/interests'
import Availability from './pages/availability'
import Coursework from './pages/coursework'
import Generate from './pages/generate'

function WebRouter() {
    return (
      <Router>
        <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/interests" element={<Interests/>}></Route>
        <Route path="/availability" element={<Availability/>}></Route>
        <Route path="/coursework" element={<Coursework/>}></Route>
        <Route path="/generate" element={<Generate/>}></Route>
        <Route path="*" element={<Error/>}></Route>
        </Routes>
      </Router>
    )
}

export default WebRouter;