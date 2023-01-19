import React from 'react'
import './CheckTicket.css'
const CheckTicket = () => {
    return (
        <div className='checkTicket'>
               <form>
                <div className="ticketHeader">
                <h3>CheckTicket</h3>
                </div>
                <div className="slipId">
                    <label>Slip ID</label>
                    <br/>
                    <input type="text" className="ticketInput" placeholder="Enter your Slip ID" />
                </div>
                <br/>
                <button type="submit" className="ticketButton">Search</button>              
            </form>
        </div>
    )
}

export default CheckTicket
