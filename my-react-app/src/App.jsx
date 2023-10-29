import WebRouter from './router'
import AppProvider from './provider';
import Navbar from './components/navbar.jsx'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
     <AppProvider>
     <WebRouter/> 
      <Navbar/>
      
      </AppProvider>
    </>
  )
}

export default App
