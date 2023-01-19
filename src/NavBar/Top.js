import React from 'react'
import { useState } from 'react';
import './Top.css'
import {Link} from "react-router-dom";

const Top = () => {
var showDate=new(Date);
var todayDate=showDate.getDate()+'/'+(showDate.getMonth()+1)+'/'+ showDate.getFullYear();
var time= ' '+ new Date().toLocaleTimeString();
const [currentTime, setCurrentTime] = useState(time)
const updateTime =()=>{
    time = new Date().toLocaleTimeString();
    setCurrentTime(time);
}
setInterval(updateTime, 1000)
    return (
        <div>
            <nav className='topNav'>
            <img class='topLogo' src='/images/logo.png' alt='logo'/>
            <div className='date'>
                {todayDate},
                {time}<span/>
                |
                <span/>
                <Link to ='/Account'> <button className='account'>
                    Account
                </button></Link>
               
            </div>
            </nav>



        </div>
    )
}

export default Top
