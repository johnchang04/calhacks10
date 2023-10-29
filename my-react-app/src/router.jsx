import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 

import Home from './pages/home'
import Interests from './pages/interests'
import Availability from './pages/availability'
import Coursework from './pages/coursework'
import Generate from './pages/generate'
import About from './pages/about'

function WebRouter() {
    return (
        <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route path="/interests" element={<Interests/>}></Route>
        <Route path="/availability" element={<Availability/>}></Route>
        <Route path="/coursework" element={<Coursework/>}></Route>
        <Route path="/generate" element={<Generate/>}></Route>
        <Route path="*" element={<Error/>}></Route>
        </Routes>
    )
}

export default WebRouter;