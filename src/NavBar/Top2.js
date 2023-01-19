import React from 'react'
import './Top2.css'
import {Link} from "react-router-dom";
import ReactCountryFlag from "react-country-flag"

const Top2 = () => {
    return (
        <div>
            <nav className='top2Nav'>
            <Link to ='/'><h2 className='midTop2Element'>Home</h2></Link>
            <Link to ='/Live'><h2 className='midTop2Element'>Live</h2></Link>
            <Link to ='/CheckTicket'><h2 className='midTop2Element'>CheckTicket</h2></Link>
            <Link to ='/Rules'><h2 className='midTop2Element'>Rules</h2></Link>
            <span className='iconSpan'/>
            <p className='flag'><ReactCountryFlag countryCode="GB" style={{
                    fontSize: '3.5vh',
                }} svg />      </p>English
       
            </nav>
        </div>
    )
}

export default Top2
