import React from 'react';
import Button from '../button/button';
const northStarLogo = require('../../assets/png/northstar.png');

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