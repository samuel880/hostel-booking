import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar(){

    return(
        <div className='sidebar'>
           
           <i className="dashboard">
            <span className=''>Dashboard</span>
           </i>
          
           <hr className='hr' />

           <ul className="ordered">
            <div className='listelements'>
            <li className='list-items'>
            <Link to="/"> 
                <i className=""></i>
                <span className='lists'>Home</span>
            </Link>
            </li>
            </div>
            <hr className=''/>
            <div className='listelements'>
            <li className='list-items'>
            <Link to="bookingform">
                <i className=''></i>
                <span className='lists'>Booking </span>
            </Link>
            </li>
            </div>
            <hr className=''/>
            <div className='listelements'>
            <li className='list-items'>
            <Link to="hostellists">
                <i className=''></i>
                <span className='lists'>Hostel Lists</span>
            </Link>
            </li>
            </div>
            <hr className=''/>
            <div className='listelements'>
            <li className='list-items'>
            <Link to="hosteldetails">
                <i className=''></i>
                <span className='lists'>More Details</span>
            </Link>
            </li>
            </div>
            <hr className=''/>
            <div className='listelements'>
            <li className='list-items'>
            <Link to="userprofile">
                <i className=''></i>
                <span className='lists'>User Profile</span>
            </Link>
            </li>
            
            </div>
            <div className="sidebar-footer">
                <hr className=''/>
                <i className=''></i>
                <span>By Samuel</span>
            </div>
           </ul>
        </div>
    )
}
export default Sidebar;