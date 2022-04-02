import React, {useState} from "react";
import "./Login.css";
import SignIn from "./SignIn";
function Login() {

    const [signIn, setSignIn] = useState(false)
  return (
    <div className="loginpage">
      <div className="login">
        <img
          className="netflix_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix logo"
        />

        <button className="login_button"  onClick={()=> setSignIn(true)} >Sign In</button>
        <div className="login_gradiant"/>

        <div className="login__body">
            {signIn  ? (<SignIn/>) : (
               <>
               <h1>Unlimited films, Web series, TV programms and more.. </h1>
               <h2>Watch anywhere. Cancel at anytime</h2>
               <h3>Ready to watch ? Enter your email to create or restart your membership</h3>
               <div className="login_input" > 
               <form>
                 <input type="email" placeholder="Enter your email" />
                 <button className="get_start" onClick={() => setSignIn(true)} >GET STARTED</button>
   
               </form>
                </div>
               </>
            )}
          
        </div>
      </div>
    </div>
  );
}

export default Login;
