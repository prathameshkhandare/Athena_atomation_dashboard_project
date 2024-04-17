import React from "react";


import './login.css';


const Login = () => {
  

    return(
        <div class="container">

            <form class="login-form">
                <img src="logo.jpg"></img>

                <input type="text" placeholder="Username or email" required/>

                <input type="password" placeholder="Password" required/>
                <button type="submit" class="login-button">Login</button>

                <div class="register-link">
                    <a href="#">Register now</a>

                </div>
                <div class="forgot-password-link">
                    <a href="#">Forgot password?</a>

                </div>
                <div class="social-login-options">
                    
                    <button class="twitter-login-button">LOGIN WITH TWITTER</button>
                    <button class="google-login-button">LOGIN WITH GOOGLE</button>

                </div>
            </form>
        

            <form class="Side-Pic">
              
                
            </form>







         </div>
    );
  
  
    
  };
  
  
  export default Login;