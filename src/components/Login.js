
import '../bootstrap/css/bootstrap.min.css';
import './Login.css';

const Login = props =>{

    return(
      
         <form className="form login">
                <div className="header">
                <h3>Login</h3>
                </div>
                <div className="form-group phone">
                    <label>Phone number, ID</label>
                    <input type="text" className="form-control" placeholder="Enter your phone number, ID" />
                </div>

                <div className= "form-group">
                  <label>Password</label>
                  <input type ="password"  className="form-control" placeholder = "Enter your password" />
                </div>
              <br/>

                <button type="submit" className="btn">LOGIN</button>
               <div className="extras">
               <a href="None">Restore password</a>
               </div>
              
            </form>
            
    );
}

export default Login;