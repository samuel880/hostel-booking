import React, { useState } from 'react';
import muklogo from './Images/muklogo.png';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const LoginForm = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('user');
  const [password, setPassword] = useState('passwd');
//  function LoginForm() {

   const handleLogin = async () => {


    
        try {

      // Make an API request to authenticate the user
      const response = await axios.post('http://your-api-url/login', {
        username,
        password,
      });

      // Assuming the API returns a token upon successful authentication
      // const token = response.data.token;

      // Store the token in localStorage or a secure storage
      // localStorage.setItem('token', token);

      // Set the loggedIn state to true
      setLoggedIn(true);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

   

  return (
    <div>
     
      <h4>Please login here</h4>
        <div className="loginform">
        <img src={muklogo} className="muklogo" alt="logo" />
      <p>Username</p>
      <input type="text" 
            className="username-input" 
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            />
      <p>Password</p>
      <input type="password" 
             className="password-input" 
             value={password}
             onChange={(e) => setPassword(e.target.value)} 
             />
      
      <div className="d-grid gap-2">
       <Button  onClick={handleLogin} className='loginbutton'> 
        Login
       </Button>
      </div>
      <Link to="/Register"><div className='signup'>Don't have an account?</div></Link>
      <Link to=""><div className='signup'>Forgot password?</div></Link>
      </div>
      
    </div>
  );
}

export default LoginForm;


// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = ({ setLoggedIn }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       // Make an API request to authenticate the user
//       const response = await axios.post('http://your-api-url/login', {
//         username,
//         password,
//       });

//       // Assuming the API returns a token upon successful authentication
//       const token = response.data.token;

//       // Store the token in localStorage or a secure storage
//       localStorage.setItem('token', token);

//       // Set the loggedIn state to true
//       setLoggedIn(true);
//     } catch (error) {
//       console.error('Login failed', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;