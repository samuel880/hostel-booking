import React from 'react';
import { Link } from 'react-router-dom';
import './HostelDetails.css';
import Olympia from './Images/Olympia.PNG';
import GodIsAble from './Images/GodIsAble.PNG';
import LynModern from './Images/LynModern.PNG';
import Muhika from './Images/Muhika.PNG';
import Kaan from './Images/Kaan.PNG';
import Kare from './Images/Kare.PNG';
import Helican from './Images/Helican.PNG';
import Douglas from './Images/Douglas.PNG';
import Nalikka from './Images/Nalikka.PNG';
import DreamWorld from './Images/DreamWorld.PNG';
import CastleVille from './Images/CastleVille.PNG';
import Apex from './Images/Apex.PNG';
import muklogo from './Images/muklogo.png';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import { Card, Button } from 'react-bootstrap';

export default function HostelDetails() {
  return (
    <div className='homepage'>
      <div>
        <h3 className='h3title'>WELCOME TO THE HOME OF HOSTELS</h3>
      </div>
      <div className="home">

   <Link to="/Login">Go To</Link>   
    </div>
    <div className='second'>
    {/* <img src={muklogo} className="muklogo" alt="Hostel Logo" /> */}
    </div>
    <div>
    <h5 className='h5title'><i>Please navigate through our lists for more </i></h5>
    </div>
    <div className='card-container'>
      <div className='card'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Olympia} className="Olympia" alt="Hostel Logo" />
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
      <Card.Img variant="top" src={GodIsAble} className="emojilogo" alt="Hostel Logo" />
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
      <Card.Img variant="top" src={muklogo} className="emojilogo" alt="Hostel Logo" />
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
      <Card.Img variant="top" src={muklogo} className="emojilogo" alt="Hostel Logo" />
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
    <div className='card'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={LynModern} className="emojilogo" alt="Hostel Logo" />
      <Card.Body>
        <Card.Title>Lyn Modern</Card.Title>
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
      <Card.Img variant="top" src={Muhika} className="emojilogo" alt="Hostel Logo" />
      <Card.Body>
        <Card.Title>Muhika</Card.Title>
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
      <Card.Img variant="top" src={Kaan} className="emojilogo" alt="Hostel Logo" />
      <Card.Body>
        <Card.Title>Kaan</Card.Title>
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
      <Card.Img variant="top" src={Kare} className="emojilogo" alt="Hostel Logo" />
      <Card.Body>
        <Card.Title>Kare</Card.Title>
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
      <Card.Img variant="top" src={Helican} className="emojilogo" alt="Hostel Logo" />
      <Card.Body>
        <Card.Title>Helican</Card.Title>
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
      <Card.Img variant="top" src={Douglas} className="emojilogo" alt="Hostel Logo" />
      <Card.Body>
        <Card.Title>Douglas Villa</Card.Title>
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
      <Card.Img variant="top" src={Nalikka} className="emojilogo" alt="Hostel Logo" />
      <Card.Body>
        <Card.Title>Nalikka</Card.Title>
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
      <Card.Img variant="top" src={muklogo} className="emojilogo" alt="Hostel Logo" />
      <Card.Body>
        <Card.Title>Frama</Card.Title>
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
      <Card.Img variant="top" src={DreamWorld} className="emojilogo" alt="Hostel Logo" />
      <Card.Body>
        <Card.Title>Dream World</Card.Title>
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
      <Card.Img variant="top" src={CastleVille} className="emojilogo" alt="Hostel Logo" />
      <Card.Body>
        <Card.Title>Castle Ville</Card.Title>
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
      <Card.Img variant="top" src={Apex} className="emojilogo" alt="Hostel Logo" />
      <Card.Body>
        <Card.Title>Apex Girls</Card.Title>
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