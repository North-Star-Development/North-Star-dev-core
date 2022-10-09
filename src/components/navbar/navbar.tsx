// Copyright NorthStar Development 🕵🏻‍♂️ 2022 
// 17 U.S.C §§ 101-1511

// import relevant modules and button component
import React from 'react';
import Button from '../button/button';

// importing image
const northStarLogo = require('../../assets/png/northstar.png');

//JSX Component
const Navbar = () => {
    return (
      <nav className='nav'>
          <img alt='northstar logo' src={northStarLogo}/>
          <div className='nav__content'>
              <p><span>Home</span></p>
              <p><span> About</span></p>
              <p><span>Services</span></p>
              <p><span>How we work</span></p>
              <p><span>Testimonials</span></p>
              <p><span>Team</span></p>
              <p><span>Contact Us</span></p>
          </div>
            <Button primary={true} text='Get in Touch' />
      </nav>
    );
}

export default Navbar;