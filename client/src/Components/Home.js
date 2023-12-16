import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
// import emoji from './Images/emoji.jpg';
import Olympialogo from './Images/Olympialogo.PNG';

export default function Home() {
  return (
    <div className='homepage'>
{/* <img src={emoji} className="emoji" alt="logo" /> */}
      <div className="home">
       <p><h6>Warm Greeting</h6></p>
          <p>Welcome to makerere booking site! Your home away from home. 
Whether you're a student, a traveler, or simply seeking a comfortable stay, 
we're delighted to host you. Explore our modern facilities and find the perfect 
accommodation for your needs.</p>
<p>
  Our site offers fast, secure, accessible and most efficient navigation
  to all users whether novice or regular <Link to=''>More</Link>
</p>
  
    </div>
    <div className='second'>
    <img src={Olympialogo} className="olymp" alt="Olympia Logo" />
    </div>
    <div>
    
    </div>
    <div className='card-container'>
      <div className='card'>

    </div>
    <div className='card'>

    </div>
    <div className='card'>

    </div>
    <div className='card'>

    </div>
     </div>
    </div>
  );
}