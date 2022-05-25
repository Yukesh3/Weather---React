import React from "react"
import { Link } from 'react-router-dom'
import img1 from "../images/snowflake.png"



export default function App() {

  return (
    <>
      <div className="nav">
              <Link to='/home'> 
                      <img className="snow" src={img1} alt="img"></img> 
              </Link>
             
              <ul className="ul">

                <Link className="link ln1" to='/home'>Littleninjas18</Link>

                 <Link className="link" to='/home'>Home</Link>

                <Link className="link" to='./Weather'>Weather</Link>

                <Link className="link" to='/about'>AboutUs</Link>

              </ul>

      </div>

      <div className="footer">Created with 💖 By Puddin_Dead </div>



    </>
  )
}


