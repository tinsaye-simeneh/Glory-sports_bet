import React from 'react'
import './MatchesDisplay.css'
import { useState } from 'react'
import BetSlipHandler from '../../pages/BetSlipHandler'
import Betsilp from '../../Betsilp'
import { padding } from '@mui/system'
const MatchesDisplay = (props) => {

    const [select, setSelect] = useState(true)
    const [select2, setSelect2] = useState(true)
    const [select3, setSelect3] = useState(true)
    const [position, setPosition] = useState('white')


    const [value, setValue] = useState('')
    const [name, setName] = useState('')
    const [result, setResult] = useState('')

    function match1Selected(){
        setSelect(!select)
        setSelect2(true)
        setSelect3(true)
        if(select===true){
            setValue(props.opp_1_rate)
            setName(props.opp_1_name +' vs '+ props.opp_2_name)
            setResult('Match result: 1')
        }
        else{
            setValue('') 
            setName('')  
            setResult('')
        } 
      
    }
    function match2Selected(){
        setSelect2(!select2)
        setSelect(true)
        setSelect3(true)
        if(select2===true){
            setValue(props.draw_rate)
            setName(props.opp_1_name +' vs '+ props.opp_2_name)
            setResult('Match result: X')
        }
        else{
            setValue('') 
            setName('')  
            setResult('')
        }        

    }
    function match3Selected(){
        setSelect3(!select3)
        setSelect2(true)
        setSelect(true)
        if(select3===true){
            setValue(props.opp_2_rate)
            setName(props.opp_1_name +' vs '+ props.opp_2_name)
            setResult('Match result: 2')

        }
        else{
            setValue('')   
            setName('')
            setResult('')
        }       
        return(<p>ho</p>)
    }

    return (

        <div className='box'>  

            <div className='matchesBox'>
            <p>{props.opp_1_name} Vs {props.opp_2_name}</p>
            <table className='matchesTable'>
                <tbody>
                    <tr>
                        <td ><button onClick={ match1Selected} style={{backgroundColor: !select? '#FCD609' :'' }} className='opp1Button'>
                        {props.opp_1_name} <span/>
                        {props.opp_1_rate}</button>
                        {!select?props.match1Selected():props.match1UnSelected()}
                        </td>
                        <td><button onClick={match2Selected} style={{backgroundColor: !select2? '#FCD609' :'' }}className='drawButton'>X
                         <p className='spanMatches'>
                        </p>{props.draw_rate}
                        {!select2?props.match2Selected():props.match2UnSelected()}
                        </button></td>
                        <td><button onClick={match3Selected} style={{backgroundColor: !select3? '#FCD609' :''  }} className='opp2Button'>
                        {props.opp_2_name}<span/>
                        {props.opp_2_rate}
                        {!select3?props.match3Selected():props.match3UnSelected()}</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div className='details' style={{visibility: !select || !select2 || !select3 ? 'visible' :'hidden', color:position}  }>
            <p className='detailsP'>
            {name}
            </p>
            <p className='detailsP2'>{value}</p>
            <p className='detailsP3'>

            {result}
            </p>
            </div>

            
        </div>
    )
}


export default MatchesDisplay

