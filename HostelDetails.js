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


//Dreamworld hostel located in Makerere Kikoni just off Sir Apollo Kaggwa road.
 // It is one of those decent hostels one can always opt for if looking for a campus experience at an affordable cost. 
    //Its double rooms go for a fee of 650,000 shillings and 750,000 shillings that is with and without a balcony respectively.
   // A single room is at 1,250,000 million shillings. 
  //It is one of the few hostels with fair rates amongst the different hostels around Makerere University.
//A number of the rooms are spacious enough and self contained while a few of them are not depending on how deep one’s pockets are.
//Access to the balcony is a big deal at dreamworld as seen in the premium paid by those interested in rooms that have a balcony.
//All payments are made to the custodian who also doubles as the accountant receiving both booking fees and full payments.
//In order to secure a place at this hostel, one has to pay booking fees of 
  //200,000 shillings for the double room or 300,000 shillings for the single and this is on a first come first served basis.
//When it comes to the issue of meals. there is no need for one to walk all over kikoni searching for what to eat as the hostel has its own canteen and restaurant. 
//The restaurant serves a wide range of local delicacies that are rotated on a daily basis and also does door to door delivery at no extra cost.

//Dreamworld hostel has a team of security personnel who ensure that the safety of the residents is observed. 
//The askaris make sure that every guest that walks through the gate is registered and identified and that they do not exceed their visitation hours that is past 11pm.
//However, there is a gray area when it comes to sleep overs since depending on which askari is on duty a visitor can bribe his way to spending a night or two over without any interference from the security guards.


//Located in Kavule

//This hostel was constructed in 2013, 3 years back. Its visibly a a mansion and accommodates around 500 students with enough big rooms. Olympia is the best place to stay, it has all the facilities that enable us pass. We are fully satisfied with all that we want. For example, a swimming pool, gym, free kitchens on every flow, free WiFi or internet and so much more.

//Unit types at property

//Nakiyingi HOSTEL offers a variety of unit types to suit your needs. Below are the different types of units and the rent fees for each unit.

//Self-contained singles UGX 1400000 

//Self-contained Doubles UGX 900000 

//Not Self-contained Doubles UGX 700000 

