import React from 'react'
import './Sidebar.css'
import {Link} from "react-router-dom";
import ReactCountryFlag from "react-country-flag"

const Sidebar = () => {
    return (
        <div className='side'>

            <Link to ='/premierLeague'><h2 class='sideList'><ReactCountryFlag countryCode="GB" style={{
                    fontSize: '4vh', paddingRight:'5px'
                }} svg />Premier league</h2></Link>
            <Link to ='/SpanishLaliga'><h2 class='sideList'><ReactCountryFlag countryCode="ES" style={{
                    fontSize: '4vh', paddingRight:'5px'
                }} svg />Spanish Laliga</h2></Link>
            <Link to ='/SeriaA'><h2 class='sideList'><ReactCountryFlag countryCode="IT" style={{
                    fontSize: '4vh', paddingRight:'5px'
                }} svg />Seria A</h2></Link>
            <Link to ='/Bundesliga'><h2 class='sideList'><ReactCountryFlag countryCode="DE" style={{
                    fontSize: '4vh', paddingRight:'5px'
                }} svg />Bundesliga</h2></Link>
            <Link to ='/UEFAChampionsLeague'><h2 class='sideList'><ReactCountryFlag countryCode="EU" style={{
                    fontSize: '4vh', paddingRight:'5px'
                }} svg />UEFA Champions League</h2></Link>
            <Link to ='/UEFAEuropaleague'><h2 class='sideList'><ReactCountryFlag countryCode="EU" style={{
                    fontSize: '4vh', paddingRight:'5px'
                }} svg />UEFA Europa league</h2></Link>
            <Link to ='/UEFAConferenceleague'><h2 class='sideList'><ReactCountryFlag countryCode="EU" style={{
                    fontSize: '4vh', paddingRight:'5px'
                }} svg />UEFA Conference league</h2></Link>
            <Link to ='/EreDevisie'><h2 class='sideList'><ReactCountryFlag countryCode="NL" style={{
                    fontSize: '4vh', paddingRight:'5px'
                }} svg />EreDevisie</h2></Link>
            <Link to ='/A-leaguemen'><h2 class='sideList'><ReactCountryFlag countryCode="AU" style={{
                    fontSize: '4vh', paddingRight:'5px'
                }} svg />A-league men</h2></Link>
            <Link to ='/ChinaSuperleague'><h2 class='sideList'><ReactCountryFlag countryCode="CN" style={{
                    fontSize: '4vh', paddingRight:'5px'
                }} svg />China Super league </h2></Link>
            <Link to ='/FirstDivisionA'><h2 class='sideList'><ReactCountryFlag countryCode="BE" style={{
                    fontSize: '4vh', paddingRight:'5px'
                }} svg />First Division A</h2></Link>
        </div>
    )
}

export default Sidebar
