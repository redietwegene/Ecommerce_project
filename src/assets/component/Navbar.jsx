// Navbar.js
import React from "react";
// import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className='top_nav'>
        <div className="logo">
          <img className="logo_pic" src="logo.webp" alt='logo'/> 
          <h4>sam shopping</h4>
        </div>
        <div className="nav_bar">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact me</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
