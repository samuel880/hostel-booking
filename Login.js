import React from 'react';
import muklogo from './Images/muklogo.png';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function LoginForm() {

   const handleLogin = (event) => {


    
    alert('Login button clicked');

   
   };

  return (
    <div>
     
      <h4>Please login here</h4>
    <div className="loginform">
      
      <img src={muklogo} className="muklogo" alt="logo" />
      <p>Username</p>
      <input type="text" className="username-input" />
      <p>Password</p>
      <input type="password" className="password-input" />
      
      <div className="d-grid gap-2">
      {/* <button className="loginbutton" onClick={handleLogin}>
        Login
      </button>  */}
       <Button  onClick={handleLogin}> 

    
        Login
      </Button>{' '} 
    </div>
      <Link to="/Register"><div className='signup'>Don't have an account?</div></Link>
      <Link to=""><div className='signup'>Forgot password?</div></Link>
      </div>
      
      
    </div>
  );
}
