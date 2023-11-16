import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import muklogo from './Images/muklogo.png';

export default function Header() {
  return (
    <header className="header">
      <nav>
      <div class="p-3 mb-2 bg-info text-white">
      <div className='twologo'>
      <img src={muklogo} className="muklogo1" alt="logo" />
      <h5 className='h5home'>WELCOME TO MAKERERE HOSTELS BOOKING</h5>
      <img src={muklogo} className="muklogo1" alt="logo" />
      </div>
        <ul className="nav-list">
          {/* <li className="nav-item">
          <Link to="" className="nav-link">
              Home
            </Link>
          </li> */}
          <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className="nav-item">
          <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>
        </ul>
        </div>
      </nav>
    </header>
  );
};

