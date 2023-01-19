import React from 'react'
import './Nav.css';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <nav className='middle'>
            <Link to ='/Soccer'><h2 className='midNavElement'>Soccer</h2></Link>
            <Link to ='/Basketball'><h2 className='midNavElement'>Basketball</h2></Link>
            <Link to ='/Tennis'><h2 className='midNavElement'>Tennis</h2></Link>
            <Link to ='/Rugby'><h2 className='midNavElement'>Rugby</h2></Link>
            </nav>
        </div>
    )
}

export default Nav
