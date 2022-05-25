import React from 'react'
import { Link } from 'react-router-dom'
import img from "../images/undraw_season_change_f99v.png"
import img1 from "../images/undraw_Weather_app_re_kcb1.png"
import img2 from "../images/undraw_Weather_re_qsmd.png"




const Home = () => {
  return (
    <>

      <div className='txt'>

            <p>Welcome to weather app</p>

            <h1 className='h11'> Get the latest <span> Weather </span> info of Your country </h1>

            <Link className='check' to='../Weather'>CHECK NOW</Link>

      </div>

      <div className='slider'>

            <figure className='slides'>

              <img className='im' src={img} alt='im' />
              <img className='im' src={img1} alt='im' />
              <img className='im' src={img2} alt='im' />

            </figure>

      </div>
    </>

  )
}

export default Home