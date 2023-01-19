import './Register.css';

const Register = props =>{
    
    return(
        <form className="form">
        <div className="header">
        <h3>Register</h3>
        </div>
        <div className="form-group phone">
            <label>Phone number, ID</label>
            <input type="text" className="form-control" placeholder="Enter your phone number, ID" />
        </div>

        <div className= "form-group phone">
        <label>Date of birth</label>   
        <input type="date" className= "form-control" placeholder="" />          
        </div>

        <div className= "form-group phone">
        <label>Password</label>   
        <input type="password" className= "form-control" placeholder="Enter a password" />          
        </div>

        <div className= "form-group">
        <label>Confirm Password</label>   
        <input type="password" className= "form-control" placeholder="Confirm your password" />          
        </div>
      <br/>

        <button type="submit" className="btn">REGISTER</button>
       <div className="extras">
       <p className="conditions">By clicking the button above, you agree to our rules</p>
       </div>


    </form>
    )

}

export default Register;