import React, { useState } from 'react';
import '../../assets/styles/Navbar.css';

const Navbar = () => {
  const [isClicked, setClicked] = useState(false);

  return (
    <nav>
      <div className='navbar container'>
        <div className='navbar-logo'>
          TRVL <i className='fab fa-typo3'></i>
        </div>

        <div className='menu-icon' onClick={() => setClicked(!isClicked)}>
          <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={`nav-links ${isClicked ? 'active' : ''}`}>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Services</a>
          </li>
          <li>
            <a href='#'>Products</a>
          </li>
          <li>
            <a href='#' className='sign-up'>
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
