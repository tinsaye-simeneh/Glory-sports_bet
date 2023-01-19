import React from 'react'
import {useState} from 'react'
import './Handler.css'
function LoginForm({Login, error}) {
    const [details, setDetails]= useState({name:'', password:''})

    function submitHadler(props){
        props.preventDefault();
        Login(details);
    }

    return (
      <form onSubmit={submitHadler}>
          <div className='loginForm'>
              <h2 className='login'>Login</h2>
              {(error!='')? (<div className='error'>{error}</div>):''}
              <div className='form-group'>
    
                <label htmlFor='password'>Password:</label>
                <input type='password' name='adminPassword' id='adminPassword '
                onChange={props=>setDetails({...details, adminPassword:props.target.value})} value={details.adminPassword}/>

               </div>
                                      
              <input type='submit' value="LOGIN"/>
          </div>
      </form>
    )
}

export default LoginForm
