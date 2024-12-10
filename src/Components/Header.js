


import React, { useState } from "react";
import '../styles/Header.css';
import image from '../image.png';
import { green } from "@mui/material/colors";
import { Link } from 'react-router-dom';  

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false); 

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header-container">
      <div style={{display: "flex", width: "100%"}}> 
        <div className="logo">
          <img src={image} alt="Logo" />
        </div>
        <div className="heading-container">
          <h1><span>DEEP</span> <span>NET</span></h1> 
          <h1 className="soft">SOFT</h1>
        </div>
        <div className="hamburger" onClick={toggleMobileMenu}>
          <span className={isMobileMenuOpen ? "line line1" : "line"}></span>
          <span className={isMobileMenuOpen ? "line line2" : "line"}></span>
          <span className={isMobileMenuOpen ? "line line3" : "line"}></span>
        </div>
        <nav className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="dropdown">
            <button className="dropdown-btn" onClick={toggleDropdown}>
              Add Menu
            </button>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <Link to="/createmenu">Create Menu</Link>
                <Link to="/additem">Add Menu Item</Link>
              </div>
            )}
          </div>
          <a href="/">Home</a>
          <a href="/">Menu</a>
          <a href="#">Make a Restaurant</a>
          <a href="#">Contact Us</a>

        
         
        </nav>
      </div>
    </header>
  );
};

export default Header;
