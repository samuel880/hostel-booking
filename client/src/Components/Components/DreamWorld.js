import React from 'react'
import DreamWorldlogo from './Images/DreamWorldlogo.PNG';

export default function DreamWorld() {
  return (
    <div className='hostels'>
        <h5>Welcome to DreamWorld Hostel</h5>
        <img variant="top" src={DreamWorldlogo} className="biggerlogo" alt="Hostel Logo" />

    </div>
  )
}
