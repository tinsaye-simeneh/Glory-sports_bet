import React, {useState} from 'react'
import Betsilp from '../../Betsilp'
import BetSlipHandler from '../../pages/BetSlipHandler'
import MatchesDisplay from './MatchesDisplay'
const Matches = (props) => {
    const [data1, setData1] = useState(true)
    const [data2, setData2] = useState(true)
    const [data3, setData3] = useState(true)

    function match1Selected(){
        setData1(false)
        if(!data1){
          console.log('one')
        }
    }
    function match1UnSelected(){
        setData1(true)
       }
       function match2UnSelected(){
        setData2(true)

    } function match3UnSelected(){
        setData3(true)

    }
    function match2Selected(){
        setData2(false)
        if(!data2){
            console.log('two')
        }
    }
    function match3Selected(){
        setData3(false)
        if(!data3){
            console.log('three')
        }
    }

    return (
        <div>
              {props.items.map((MatchesData)=> 
                <MatchesDisplay  
                
                sport_id={MatchesData.sport_id}
                sport_name={MatchesData.sport_name}
                key= {MatchesData.tournament_id}
                tournament_name={MatchesData.tournament_name}
                opp_1_name= {MatchesData.opp_1_name}
                opp_2_name={MatchesData.opp_2_name}
                opp_1_rate={MatchesData.opp_1_rate}
                opp_2_rate={MatchesData.opp_2_rate}
                draw_rate={MatchesData.draw_rate}
                match1Selected={match1Selected}
                match1UnSelected={match1UnSelected}
                match2Selected={match2Selected}
                match2UnSelected={match2UnSelected}
                match3Selected={match3Selected}
                match3UnSelected={match3UnSelected}

            />)}      
        </div>
    )
}

export default Matches
