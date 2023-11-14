import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import hostel1 from './hostel1.png';
import hostel2 from './hostel2.png';
import hostel3 from './hostel3.jpg';
import hostel4 from './hostel4.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function Home() {
  return (
    <div className='homepage'>
      <div>
        <h3>WELCOME TO THE HOME OF HOSTELS</h3>
        
      </div>
      <div className="home">
       <p><h6>Warm Greeting</h6></p>
<p>Welcome to our cozy hostel! Your home away from home. 
Whether you're a student, a traveler, or simply seeking a comfortable stay, 
we're delighted to host you. Explore our modern facilities and find the perfect 
accommodation for your needs.</p>

     
   <Link to="/Login">Go To</Link>   
    </div>
    <div className='second'>
    <img src={hostel1} className="hostel1" alt="Hostel Logo" />
    </div>
    <div>
    <h5><i>Please navigate through our lists for more </i></h5>
    </div>
    <div className='card-container'>
      <div className='card'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={hostel1} className="emojilogo" alt="Hostel Logo" />
      <Card.Body>
        <Card.Title>Olympia</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">More..</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='card'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={hostel2} className="emojilogo" alt="Hostel Logo" />
      <Card.Body>
        <Card.Title>God is Able</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">More..</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='card'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={hostel3} className="emojilogo" alt="Hostel Logo" />
      <Card.Body>
        <Card.Title>Nakiyingi</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">More..</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='card'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={hostel4} className="emojilogo" alt="Hostel Logo" />
      <Card.Body>
        <Card.Title>JB</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">More..</Button>
      </Card.Body>
    </Card>
    </div>
     </div>
    </div>
  );
}