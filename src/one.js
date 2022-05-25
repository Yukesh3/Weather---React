import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import Weather from './component/Weather'
import About from './component/About'
import './index.css'
import App from "./component/App"

const One = () => {
  return (
    <>
    
<BrowserRouter>
<App/>

  <Routes>
  

      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/Weather" element={<Weather/>}/>


  </Routes>

  
</BrowserRouter>

  
  
    
    
    
    
    
    </>
  )
}

export default One