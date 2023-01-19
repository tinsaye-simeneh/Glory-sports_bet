import React, {useState} from 'react'
import  './Betslip.css'
import BetSlipHandler from './pages/BetSlipHandler'
import MatchesDisplay from './Middle/Matches/MatchesDisplay'
import MatchesData from './Middle/Matches/MatchesData'

const Betsilp = () => {
    const [odd, setOdd] = useState('0')

        return (
            <div className='slipContainer'>
                <p className='slip'>
                    BETSLIP
                    <hr className='slipHr'/>
                </p>
    
            </div>
        )
}

export default Betsilp
