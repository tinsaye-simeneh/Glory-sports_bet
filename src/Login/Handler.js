import React from 'react'
import {useState} from 'react'
import LoginForm from './LoginForm'
import { adminUser} from './Admins'
import Arrangement from '../body/Arrangement'
import './Handler.css'
import Footer from '../body/Footer'
function Handler() {
  
 const [user, setUser] = useState({name:'', password:''})
 const [error, setError]= useState('')

 function Login(details){

  if (details.adminPassword === adminUser.password ){
    setUser({
      password: details.password
    }
    )
  }

  else{
    setError("Details don't match")
  }
 } 
  return (
    <div>
        {(user.name !=='') ? (
          <div>
            <Arrangement/>
            <Footer/>            
            </div>
        ): <div className='App'>(<LoginForm Login={Login} error={error}/>)</div>}
    </div>
  );
}

export default Handler;
