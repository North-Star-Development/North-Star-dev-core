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
  const [toggleMenu, setToggleMenu]:any = useState(false);

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
            <> 
             <div  style={{
               background: toggleMenu && "unset",
               color :  toggleMenu && "#2851E3"
             }}
             className={`menu-bars ${toggleMenu && "change" }`} 
              id="menu-bars" 
              onClick={() => setToggleMenu(!toggleMenu)}>
              <div className="bar1" style={{
                background :  toggleMenu && "#2851E3"
              }} ></div>
                {/* <div className="bar2"></div> */}
              <div className="bar3" style={{
                background :  toggleMenu && "#2851E3"
              }}></div>
            </div>
            <div className={`nav-overlay ${toggleMenu ? "overlay-slide-right": "overlay-slide-left"}`} id="nav-overlay" >
             <div className="nav-bar"> 
            <ul>
                <li onClick={() => setToggleMenu(!toggleMenu)} id="nav-1" className={`${toggleMenu ? "slide-in-1" : "slide-out-1"} `}><a href="#home">Home</a></li>
                <li onClick={() => setToggleMenu(!toggleMenu)} id="nav-2" className={`${toggleMenu ? "slide-in-2" : "slide-out-2"} `}><a href="#about">About</a></li>
                <li onClick={() => setToggleMenu(!toggleMenu)} id="nav-3" className={`${toggleMenu ? "slide-in-3" : "slide-out-3"} `}><a href="#skills"  >Tools & Technologies</a></li>
                <li onClick={() => setToggleMenu(!toggleMenu)} id="nav-4" className={`${toggleMenu ? "slide-in-4" : "slide-out-4"} `}><a href="#projects">Projects</a></li>
                <li onClick={() => setToggleMenu(!toggleMenu)} id="nav-5" className={`${toggleMenu ? "slide-in-5" : "slide-out-5"} `}><a href="#contact">Contact</a></li>
                <li onClick={() => setToggleMenu(!toggleMenu)} id="nav-6" className={`${toggleMenu ? "slide-in-6" : "slide-out-6"} `}><a href="#contact">Contact</a></li>
                <li onClick={() => setToggleMenu(!toggleMenu)} id="nav-7" className={`${toggleMenu ? "slide-in-7" : "slide-out-7"} `}><a href="#contact">Contact</a></li>
              </ul>
         </div>
             </div>
            </>
      
             
          }
      </nav>
    );
}

export default Navbar;