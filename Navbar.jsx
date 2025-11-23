import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";
import searchIcon from "../assets/Search icon.png";
import cartIcon from "../assets/Cart.png";

function Navbar() {
  return (
    <nav className="navbar">

    

      <div className="navbar-left">
        <img src={logo} className="logo" alt="FloraVision Logo" />
        <span className="brand-name">FloraVision.</span>
      </div>

    
      <ul className="navbar-center">
        <li className="nav-item">Home</li>

        <li className="nav-item dropdown-item">
          Plants Type
        </li>
        <span className="dropdown-arrow"></span>

        <li className="nav-item">More</li>
        <li className="nav-item">Contact</li>
      </ul>
  

        
<div className="navbar-right">
        <img src={searchIcon} className="navbar-icon" alt="Search" />
        <img src={cartIcon} className="navbar-icon" alt="Cart" />

        <div className="menu-icon">
          <span className="line1"></span>
          <span className="line2"></span>
        </div>
      </div>    
         

    </nav>
  );
}

export default Navbar;
