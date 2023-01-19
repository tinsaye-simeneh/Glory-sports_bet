import React from 'react'
import Betsilp from '../../Betsilp'
import Matches from './Matches'

const MatchesData = () => {
    const MatchesData=[
        {
            sport_id: '1',  
            sport_name: 'Football',
            tournament_id: '123',
            tournament_name:'England. Premier League',
            opp_1_name: 'Man UTD',
            opp_2_name: 'Arsenal',
            opp_1_rate: '1.2',
            opp_2_rate:'4.2',
            draw_rate:'2.0'
        }
        ,
        {
            sport_id: '1',  
            sport_name: 'Football',
            tournament_id: '123',
            tournament_name:'England. Premier League',
            opp_1_name: 'Man UTD',
            opp_2_name: 'Arsenal',
            opp_1_rate: '1.3',
            opp_2_rate:'4.2',
            draw_rate:'3.0'
        }
        ,
        {
            sport_id: '1',  
            sport_name: 'Football',
            tournament_id: '123',
            tournament_name:'England. Premier League',
            opp_1_name: 'Man UTD',
            opp_2_name: 'chelsea',
            opp_1_rate: '1.2',
            opp_2_rate:'5.2',
            draw_rate:'1.0'
        }
        
    ]
    return (
        <div>
            <Matches items={MatchesData}/> 
        </div>
    )
}

export default MatchesData
