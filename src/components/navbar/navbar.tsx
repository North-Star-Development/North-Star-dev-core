// Copyright NorthStar Development 🕵🏻‍♂️ 2022 
// 17 U.S.C §§ 101-1511

// import relevant modules and button component
import React, { useState } from 'react';
import Button from '../button/button';
import { useWindowWidth } from '@react-hook/window-size';

//import

// importing image
const northStarLogo = require('../../assets/png/northstar.png');

//JSX Component
const Navbar = () => {
  const width = useWindowWidth();
  const [toggleMenu, setToggleMenu] = useState(false);

    return (
      <nav className='nav'>
          <img alt='northstar logo' src={northStarLogo}/>
          {
          width >= 850 ?
          <>
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
          </> : 

            <div className={`menu-bars ${toggleMenu && "change" }`} id="menu-bars" onClick={() => setToggleMenu(!toggleMenu)}>
                  <div className="bar1"  ></div>
                  {/* <div className="bar2"></div> */}
                  <div className="bar3"></div>
            </div>
             
          }
      </nav>
    );
}

export default Navbar;