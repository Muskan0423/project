import React from 'react';
import './Navigation.css';
import logo from '../Images/image.png'

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        {/* <span>NATIONAL PEOPLE'S PARTY</span> */}
      </div>
      <div className="navbar-links">
        <a href="#">HOME</a>
        <a href="#">THE PARTY</a>
        <a href="#">CORE ISSUES</a>
        <a href="#">MEDIA</a>
        <a href="#">CANDIDATES WITH CRIMINAL ANTECEDENTS</a>
      </div>
      <div className="navbar-actions">
        <select className="language-select">
          <option value="en">English</option>
          <option value="other">Other</option>
        </select>
        <a href="#" className="join-link">JOIN NPP</a>
        <a href="#" className="donate-link">MAKE A DONATION</a>
      </div>
    </nav>
  );
};

export default NavigationBar;
