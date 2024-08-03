import React from 'react'
import './Navbar.css'
import { IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

function Navbar() {
  return (
    <div>
     <div className="navbar">
      <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo" />
      <div className="nav-links">
        <h4 className="text">Home</h4>
        <h4 className="text">TV Shows</h4>
        <h4 className="text">Movies</h4>
        <h4 className="text">Recently Added</h4>
        <h4 className="text">My List</h4>
        </div>
        
      <h4 className='logo1'><FaSearch /></h4>
      <h4 className='logo2'><IoIosNotifications /></h4> 
 
 
         <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
         <h4 className='logo3'><FaCaretDown /></h4>
         
    </div>
    </div>
  )
}

export default Navbar
