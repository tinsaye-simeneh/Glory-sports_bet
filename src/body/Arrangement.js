import React from 'react'
import Sidebar from './Sidebar';
import {BrowserRouter as Router,  Routes,Route,Link} from "react-router-dom";
import Advertisement from './Middle/Advertisement.js'
import Betsilp from './Betsilp';
import Nav from './Middle/Nav';
import Home from './pages/Home';
import Top2 from '../NavBar/Top2';
import RegistrationPage from '../components/RegistrationPage';
import Top from '../NavBar/Top';
import CheckTicket from './pages/CheckTicket';
import MatchesData from './Middle/Matches/MatchesData';
import {matchContext} from '../context/matchContext.js'
import Rules from './Rules';

const Arrangement = () => {
    return (
        <div>
        <Router>
        <Top/>
        <Top2/>
        <Routes>
        <Route path='/Account' element={<RegistrationPage/>}/>
        <Route path='/CheckTicket' element={<CheckTicket/>}/>
        <Route path='/Rules' element={<Rules/>}/>
        </Routes>
            <table className='table'>
                <tbody>
                    <tr> 
                        <td valign="top">
                        <Routes>
                        <Route path='/' element={<Sidebar/>}/>
                        <Route path='/Live' element={<Sidebar/>}/>
                        <Route path ='/premierLeague' element={<Sidebar/>}/>
                        <Route path='/SpanishLaliga' element={<Sidebar/>}/>
                        <Route path='/SeriaA' element={<Sidebar/>}/>
                        <Route path='/Bundesliga'  element={<Sidebar/>}/>
                        <Route path='/UEFAChampionsLeague'  element={<Sidebar/>}/>
                        <Route path='/UEFAEuropaleague'  element={<Sidebar/>}/>
                        <Route path='/UEFAConferenceleague'  element={<Sidebar/>}/>
                        <Route path='/EreDevisie'  element={<Sidebar/>}/>
                        <Route path='/A-leaguemen' element={<Sidebar/>}/>
                        <Route path='/ChinaSuperleague'  element={<Sidebar/>}/>
                        <Route path='/FirstDivisionA'  element={<Sidebar/>}/>
                        <Route path='/Soccer'  element={<Sidebar/>}/>
                        <Route path='/Basketball'  element={<Sidebar/>}/>
                        <Route path='/Tennis'  element={<Sidebar/>}/>
                        <Route path='/Rugby'  element={<Sidebar/>}/>
                        </Routes>
                        </td>
                        <td valign="top">
                        <Routes>
                        <Route path='/' element={<Advertisement/>}/>
                        <Route path='/Live' element={<Advertisement/>}/>
                        <Route path ='/premierLeague' element={<Advertisement/>}/>
                        <Route path='/SpanishLaliga' element={<Advertisement/>}/>
                        <Route path='/SeriaA' element={<Advertisement/>}/>
                        <Route path='/Bundesliga'  element={<Advertisement/>}/>
                        <Route path='/UEFAChampionsLeague'  element={<Advertisement/>}/>
                        <Route path='/UEFAEuropaleague'  element={<Advertisement/>}/>
                        <Route path='/UEFAConferenceleague'  element={<Advertisement/>}/>
                        <Route path='/EreDevisie'  element={<Advertisement/>}/>
                        <Route path='/A-leaguemen' element={<Advertisement/>}/>
                        <Route path='/ChinaSuperleague'  element={<Advertisement/>}/>
                        <Route path='/FirstDivisionA'  element={<Advertisement/>}/>                        
                        <Route path='/Soccer'  element={<Advertisement/>}/>
                        <Route path='/Basketball'  element={<Advertisement/>}/>
                        <Route path='/Tennis'  element={<Advertisement/>}/>
                        <Route path='/Rugby'  element={<Advertisement/>}/>
                        </Routes>
                    <Routes>
                    <Route path='/' element={<Nav/>}/>
                        <Route path='/Live' element={<Nav/>}/>
                        <Route path ='/premierLeague' element={<Nav/>}/>
                        <Route path='/SpanishLaliga' element={<Nav/>}/>
                        <Route path='/SeriaA' element={<Nav/>}/>
                        <Route path='/Bundesliga'  element={<Nav/>}/>
                        <Route path='/UEFAChampionsLeague'  element={<Nav/>}/>
                        <Route path='/UEFAEuropaleague'  element={<Nav/>}/>
                        <Route path='/UEFAConferenceleague'  element={<Nav/>}/>
                        <Route path='/EreDevisie'  element={<Nav/>}/>
                        <Route path='/A-leaguemen' element={<Nav/>}/>
                        <Route path='/ChinaSuperleague'  element={<Nav/>}/>
                        <Route path='/FirstDivisionA'  element={<Nav/>}/>  
                        <Route path='/Soccer'  element={<Nav/>}/>
                        <Route path='/Basketball'  element={<Nav/>}/>
                        <Route path='/Tennis'  element={<Nav/>}/>
                        <Route path='/Rugby'  element={<Nav/>}/>
                    </Routes>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                    </Routes>
                    <Routes>
                    <Route path ='/premierLeague' element={<MatchesData/>}/>
                    <Route path='/Soccer'  element={<MatchesData/>}/>
                    <Route path='/SpanishLaliga' element={<MatchesData/>}/>
                        <Route path='/SeriaA' element={<MatchesData/>}/>
                        <Route path='/Bundesliga'  element={<MatchesData/>} />
                        <Route path='/UEFAChampionsLeague'  element={<MatchesData/>}/>
                        <Route path='/UEFAEuropaleague'  element={<MatchesData/>}/>
                        <Route path='/UEFAConferenceleague'  element={<MatchesData/>}/>
                        <Route path='/EreDevisie'  element={<MatchesData/>}/>
                        <Route path='/A-leaguemen' element={<MatchesData/>}/>
                        <Route path='/ChinaSuperleague'  element={<MatchesData/>}/>
                        <Route path='/FirstDivisionA'  element={<MatchesData/>}/>  
                    </Routes>
                        </td>
                        <td valign="top">
                        <Routes>
                        <Route path='/' element={<Betsilp/>}/>
                        <Route path='/Live' element={<Betsilp/>}/>
                        <Route path ='/premierLeague' element={<Betsilp/>}/>
                        <Route path='/SpanishLaliga' element={<Betsilp/>}/>
                        <Route path='/SeriaA' element={<Betsilp/>}/>
                        <Route path='/Bundesliga'  element={<Betsilp/>} />
                        <Route path='/UEFAChampionsLeague'  element={<Betsilp/>}/>
                        <Route path='/UEFAEuropaleague'  element={<Betsilp/>}/>
                        <Route path='/UEFAConferenceleague'  element={<Betsilp/>}/>
                        <Route path='/EreDevisie'  element={<Betsilp/>}/>
                        <Route path='/A-leaguemen' element={<Betsilp/>}/>
                        <Route path='/ChinaSuperleague'  element={<Betsilp/>}/>
                        <Route path='/FirstDivisionA'  element={<Betsilp/>}/>  
                        <Route path='/Soccer'  element={<Betsilp/>}/>
                        <Route path='/Basketball'  element={<Betsilp/>}/>
                        <Route path='/Tennis'  element={<Betsilp/>}/>
                        <Route path='/Rugby'  element={<Betsilp/>}/>
                        </Routes>
                        </td>
                    </tr>
                </tbody>
            </table>
    </Router>
    </div>
    )
}

export default Arrangement
