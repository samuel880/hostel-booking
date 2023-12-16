import React from 'react'
import Karelogo from './Images/Karelogo.PNG';

export default function Kare() {
  return (
    <div className='hostels'>
        <h5>Welcome to Kare Hostel</h5>
        <img variant="top" src={Karelogo} className="biggerlogo" alt="Hostel Logo" />

    </div>
  )
}
