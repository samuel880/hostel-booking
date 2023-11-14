import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

export default function Header() {
  return (
    <header className="header">
      <nav>
      <div class="p-3 mb-2 bg-info text-white">
        <ul className="nav-list">
          <li className="nav-item">
          <Link to="" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
          <Link to="contact" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
          <Link to="about" className="nav-link">
              About Us
            </Link>
          </li>
        </ul>
        </div>
      </nav>
    </header>
  );
};

