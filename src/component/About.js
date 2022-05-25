import React from 'react'
import fe from "../images/front-end-developer.png"
import { Link } from 'react-router-dom'



const About = () => {
  return (
    <>
      <div className='fe'>

              <img className='fe1' src={fe} alt="img"></img>
              <div className='shadow'></div>

      </div>



      <div className='txt1'>

              <p>Hi👋! Yukesh Here</p>

              <h1 className='h111'>I Am <span> Front-End </span> Developer </h1>

              <Link className='check' to='../Weather'>CHECK NOW</Link>

      </div>



    </>
  )
}

export default About