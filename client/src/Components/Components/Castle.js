import React from 'react'
import CastleVillelogo from './Images/CastleVillelogo.PNG';
export default function Castle() {
  return (
    <div className='hostels'>
        <h5>Welcome to Castle Ville Hostel</h5>
        <img variant="top" src={CastleVillelogo} className="biggerlogo" alt="Hostel Logo" />

    </div>
  )
}
