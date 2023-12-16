import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import muklogo from './Images/muklogo.png';
import Douglas from './Components/Douglas';

export default function Header() {
  return (
    <header className="header">
      <nav>
      <div className="wrapper">

      <div className='twologo'>
      <img src={muklogo} className="muklogo1" alt="logo" />
      <h5 className='h5home'>MAKERERE HOSTELS BOOKING SITE</h5>
      <img src={muklogo} className="muklogo1" alt="logo" />
      <hr />
      </div>
      
        
        <input type='text' className='search' placeholder='search here for your hostel' />
     
        <ul className="nav-list">
        <li className="nav-item">
          <Link to="/aboutus" className="nav-link">About Us</Link>
          </li>

          <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
          </li>

          <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
          </li>

          <li className="nav-item">
          <Link to="/register" className="nav-link">Register</Link>
          </li>
        </ul>

        </div>
      </nav>
    </header>
  );
};

