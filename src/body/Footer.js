import React from 'react'
import './Footer.css'
import {FaInstagram, FaFacebook, FaTelegram} from 'react-icons/fa'
const Footer = () => {
    return (
        <div>
            <nav>
                <table className='footerTable'>
                    <tbody>
                        <tr>
                            <td valign="top">
                                <h5 className='helpContact'>Help and Contact </h5>
                                <p className='address'>Addis Ababa, Ethiopia</p>
                                <p className='address'>+251968248490 | +251945450401 </p>
                                <p className='site'><a href="mailto:info@glorysport.bet">info@glorysport.bet</a></p>
                                
                            </td>
                            <td>
                                <div className='icons'>
                                <a href="https://www.instagram.com/glory_sport_bet/"><FaInstagram/><span/></a>
                                <a href="https://www.facebook.com/103472558840880"><FaFacebook/><span/></a>
                                <a href="https://t.me/glorysportbet"><FaTelegram/></a>   
                                </div>                           
                            </td>
                            <td>
                                <p className='addictive'><span/>Betting is addictive and can be physiologically harmful:</p>
                                <p className='lottery'>Glory Sport Bet is licensed and regulated by the National Lottery Administration of Ethiopia </p>
                                 <p className='age'>
                                  21+
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </nav>
            <nav>
                <div className='navText'>
                    Copyright 2021 Glory Sport Bet - All rights reserved
                </div>
            </nav>
        </div>
    )
}

export default Footer
