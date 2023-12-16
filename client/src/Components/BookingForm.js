import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BookingForm.css';
const BookingForm = () => {
  // const hostelBooking=[
  //   {id:1, name:'sharon', checkInDate:'2023-10-10', checkOutDate:'2023-10-12', roomType:'Double', numberOfGuests:2},
  //   {id:2, name:'sharon', checkInDate:'2023-10-23', checkOutDate:'2023-11-9', roomType:'Single', numberOfGuests:4},
  //   {id:3, name:'sharon', checkInDate:'2023-10-23', checkOutDate:'2023-11-9', roomType:'Suit', numberOfGuests:2},
  //   {id:4, name:'sharon', checkInDate:'2023-10-23', checkOutDate:'2023-11-9', roomType:'single', numberOfGuests:1},
  //   {id:5, name:'sharon', checkInDate:'2023-10-23', checkOutDate:'2023-11-9', roomType:'Double', numberOfGuests:2},

  // ];
  const [bookingID, setBookingID] = useState('');
  const [studentName, setStudentName] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [roomType, setRoomType] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Add your booking logic here
    console.log('Booking submitted:', {
      bookingID,
      studentName,
      checkInDate,
      checkOutDate,
      roomType,
      numberOfGuests,
    });
  };

  return (
    
    <form onSubmit={handleFormSubmit}>
      <div className='booking'>

      <div className='booking-form'>
        <div><h2>Book Here</h2></div>
        <div>
        <label>Student Name:</label>
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        </div>
        <label>Check-In Date:</label>
        <DatePicker
          selected={checkInDate}
          onChange={(date) => setCheckInDate(date)}
          dateFormat="dd/MM/yyyy"
        />
      </div>

      <div className='booking-form'>
        <label>Check-Out Date:</label>
        <DatePicker
          selected={checkOutDate}
          onChange={(date) => setCheckOutDate(date)}
          dateFormat="dd/MM/yyyy"
        />
      </div>

      <div className='booking-form'>
        <label>Room Type:</label>
        <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
          <option value="">Select Room Type</option>
          <option value="single">Single Room</option>
          <option value="double">Double Room</option>
          <option value="suite">Suite</option>
        </select>
      </div>

      <div className='booking-form'>
        <label>Number of Guests:</label>
        <input
          type="number"
          value={numberOfGuests}
          onChange={(e) => setNumberOfGuests(e.target.value)}
        />
      </div>

      <button type="submit" className="book-now" onclick={handleFormSubmit}>Book Now</button>
      </div>
    </form>
  );
};

export default BookingForm;