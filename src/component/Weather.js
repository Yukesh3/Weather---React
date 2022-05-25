import React from 'react'
import imgp from "../images/celsius.png"
import imgq from "../images/thermometer.png"



const Weather = () => {

    let d = new Date()
    let dd = d.getDate()

    let day = d.getDay()
    let month = d.getMonth()

    switch (day) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;

        default:
            day = "Saturday"
            break;
    }

    return (
        <>

            <input className='in' type='search' placeholder='Enter Your City Name'></input>
            <input className='search' type='button' value='Search'></input>


            <div className='date'>{day}</div>
            <div className='date2'>{dd} - {month} </div>

            <div className='main'>

                        <p> &nbsp;&nbsp; &nbsp;  {"Get O/P"}</p>

                        <img className='cel' src={imgp} alt="img"></img>
                        <img className='cel1' src={imgq} alt="img"></img>

                        <div className='rl'>

                            <div className='roll'></div>
                            <div className='roll1'></div>
                            <div className='roll2'></div>
                            <div className='roll3'></div>

                        </div>

            </div>








        </>
    )
}

export default Weather