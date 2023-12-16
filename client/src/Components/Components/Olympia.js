import React from 'react'
import Olympialogo from './Images/Olympialogo.PNG';

export default function Olympia() {
  return (
    <div className='hostels'>
      <h5>Welcome to Olympia Hostel</h5>
      <img variant="top" src={Olympialogo} className="smallerlogo" alt="Hostel Logo" />
    </div>
  )
}


