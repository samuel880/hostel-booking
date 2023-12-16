import React, { useState } from 'react';
import "./App.css";
import Sidebar from './Components/Sidebar';
// import { useState } from 'react';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import BookingForm from './Components/BookingForm';
import HostelLists from './Components/HostelLists';
import HostelDetails from './Components/HostelDetails';
import UserProfile from './Components/UserProfile';


function App(){

       const [token, setToken] = useState(null);


       if(!token) {
        return <Login setToken={setToken} />
       }


     
return (
       <BrowserRouter>
       <div>
              
            <div>
              <Header />
              <Sidebar />
            </div> 
            <div>
              <Routes>
                     <Route path='/' element={<Home />}></Route>
                     <Route path='/order' element={<Order />}></Route>
                     <Route path='/register' element={<Register />}></Route>
                     <Route path='/login' element={<Login />}></Route>
                     <Route path='/bookingform' element={<BookingForm />}></Route>
                     <Route path='/hostellists' element={<HostelLists />}></Route>
                     <Route path='/userprofile' element={<UserProfile />}></Route>
                     <Route path='/hosteldetails' element={<HostelDetails />}></Route>
              </Routes>
            </div> 
       </div>
       </BrowserRouter>
)
}
export default App;


function Order(){
       return <h2>Order component</h2>
}

// This is sharif please
// hlo this is sharif, we need to rearrange the files 






















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
