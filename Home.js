import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import emoji from './Images/emoji.jpg';
import Olympia from './Images/Olympia.PNG';

export default function Home() {
  return (
    <div className='homepage'>
<img src={emoji} className="emoji" alt="logo" />
      <div className="home">
       <p><h6>Warm Greeting</h6></p>
          <p>Welcome to our cozy hostel! Your home away from home. 
Whether you're a student, a traveler, or simply seeking a comfortable stay, 
we're delighted to host you. Explore our modern facilities and find the perfect 
accommodation for your needs.</p>

     
   <Link to="/Login">Go To</Link>   
    </div>
    <div className='second'>
    <img src={Olympia} className="Olymp" alt="Olympia Logo" />
    </div>
    <div>
    <h5><i>Please navigate through our lists for more </i></h5>
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