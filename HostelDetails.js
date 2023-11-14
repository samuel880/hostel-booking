import React from 'react';
import { Link } from 'react-router-dom';
import './HostelDetails.css';
import hostel1 from './hostel1.png';
import hostel2 from './hostel2.png';
import hostel3 from './hostel3.jpg';
import hostel4 from './hostel4.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import muklogo from './muklogo.png';

export default function Home() {
  return (
    <div className='homepage'>
      <div>
        <h3 className='h3title'>WELCOME TO THE HOME OF HOSTELS</h3>
      </div>
      <div className="home">

   <Link to="/Login">Go To</Link>   
    </div>
    <div className='second'>
    <img src={muklogo} className="muklogo" alt="Hostel Logo" />
    </div>
    <div>
    <h5 className='h5title'><i>Please navigate through our lists for more </i></h5>
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