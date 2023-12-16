import React, { useState } from 'react';
import "./App.css";
import Sidebar from './Components/Sidebar';
// import { useState } from 'react';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import BookingForm from './Components/BookingForm';
import HostelLists from './Components/HostelLists';
import HostelDetails from './Components/HostelDetails';
import UserProfile from './Components/UserProfile';
import ProtectedRoute from './Components/ProtectedRoute';
import Olympia from './Components/Components/Olympia';
import Apex from './Components/Components/Apex';
import Nakiyingi from './Components/Components/Nakiyingi';
import Castle from './Components/Components/Castle';
import Douglas from './Components/Components/Douglas'; 
import DreamWorld from './Components/Components/DreamWorld';
import Frama from './Components/Components/Frama';
import GodIsAble from './Components/Components/GodIsAble';
import Helican from './Components/Components/Helican';
import JB from './Components/Components/JB';
import Kaan from './Components/Components/Kaan';
import Kare from './Components/Components/Kare';
import LynModern from './Components/Components/LynModern';
import Muhika from './Components/Components/Muhika';
import Nalikka from './Components/Components/Nalikka';

function App(){

       const [loggedIn, setLoggedIn] = useState(false);
       // const logIn = () => {
       //        setIsLoggedIn(true);
       //      };

     
return (
       <div>
       <BrowserRouter>
       <div>
              {/* <Login /> */}
            <div>
              <Header />
              <Sidebar />
              
            </div> 
            <div>
              <Routes>
              <Route
                    path="/login"
                    render={(props) => <Login {...props} setLoggedIn={setLoggedIn} />}
                    />
                     {/* <ProtectedRoute path="/home" component={Home} loggedIn={loggedIn} /> */}
                     {/* Add more ProtectedRoute components for other protected pages */}
                     {/* <Redirect from="/" to="/login" /> */}
                     <Route path='/' element={<Home />}></Route>
                     <Route path='/order' element={<Order />}></Route>
                     <Route path='/register' element={<Register />}></Route>
                     <Route path='/login' element={<Login />}></Route>
                     <Route path='/bookingform' element={<BookingForm />}></Route>
                     <Route path='/hostellists' element={<HostelLists />}></Route>
                     <Route path='/userprofile' element={<UserProfile />}></Route>
                     <Route path='/hosteldetails' element={<HostelDetails />}></Route>
                     <Route path='/olympia' element={<Olympia />}></Route>
                     <Route path='/apex' element={<Apex />}></Route>
                     <Route path='/castle' element={<Castle />}></Route>
                     <Route path='/douglas' element={<Douglas />}></Route>
                     <Route path='/dreamworld' element={<DreamWorld />}></Route>
                     <Route path='/frama' element={<Frama />}></Route>
                     <Route path='/godisable' element={<GodIsAble />}></Route>
                     <Route path='/helican' element={<Helican />}></Route>
                     <Route path='/jb' element={<JB />}></Route>
                     <Route path='/kaan' element={<Kaan />}></Route>
                     <Route path='/kare' element={<Kare />}></Route>
                     <Route path='/lynmodern' element={<LynModern />}></Route>
                     <Route path='/muhika' element={<Muhika />}></Route>
                     <Route path='/nalikka' element={<Nalikka />}></Route>
                     <Route path='/nakiyingi' element={<Nakiyingi />}></Route>
                     <Route path='/contact' element={<Contact />}></Route>
                     <Route path='/aboutus' element={<AboutUs />}></Route>

              </Routes>
            </div> 
       </div>
       </BrowserRouter>
       </div>
)
}
export default App;


function Order(){
       return <h2>Order component</h2>
}

// auth 0

// import {
//        Home,
//        Register,
//        Login,
//        AboutUs,
//        Contact,
//        BookingForm,
//        HostelLists,
//        HostelDetails,
//        UserProfile
//      } from './Components';


// export { default as Home } from './Home';
// export { default as Register } from './Register';
// export { default as Login } from './Login';
// export { default as AboutUs } from './AboutUs';
// export { default as Contact } from './Contact';
// export { default as BookingForm } from './BookingForm';
// export { default as HostelLists } from './HostelLists';
// export { default as HostelDetails } from './HostelDetails';
// export { default as UserProfile } from './UserProfile';























// import React from 'react';
// import Instructions from './Components/Instructions';
// import LoginForm from './Components/LoginForm';
// import RegisterForm from './Components/RegisterForm';
// import Header from './Components/Header';
// import Home from './Components/Home';
// import AboutUs from './Components/AboutUs';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import 'antd/dist/antd.css';

// import './App.css';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// function App() {

// return(
//  <div className="container">
//  <h1>Hello, World</h1>
 
 
 
//         <BrowserRouter>
//         <Header />
//         <Routes>
       
//                           {/* <Route path="/" exact component={Home} />
//                           <Route path="/about" component={AboutUs} /> */}

//         </Routes>
//         <Home />
//         <Instructions />
//          <LoginForm />
//         <RegisterForm /> 
//         </BrowserRouter>

//  </div>
//  )
// }

// export default App;
