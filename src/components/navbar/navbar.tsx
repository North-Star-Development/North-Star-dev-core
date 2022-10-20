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
            <div className='nav__content' style={{
              zIndex : "1"
            }}>
              <p>
                <span>
                  <a href="#home"
                    style={{
                    textDecoration: "none",
                    color: "white",
                 }}>
                   Home
                  </a>
                </span>
              </p>
              <p>
                <span>
                  <a href='#about' 
                    style={{
                    textDecoration: "none",
                    color: "white"
                 }}>
                   About
                  </a>
                </span>
              </p>
              <p>
                <span>
                  <a href='#services' 
                  style={{
                    textDecoration: "none",
                    color: "white"
                 }}>
                   Services
                 </a>
                 </span>
              </p>
              <p>
                <span>
                  <a href='#work' 
                  style={{
                    textDecoration: "none",
                    color: "white"
                 }}>
                   How we work
                  </a>
                </span>
              </p>
              <p>
                <span>
                  <a href='#testimonials' 
                  style={{
                    textDecoration: "none",
                    color: "white"
                 }}>
                  Testimonials
                </a>
                </span>
              </p>
              <p>
                <span>
                  <a href="#team"
                    style={{
                    textDecoration: "none",
                    color: "white"
                   }}>
                   Team
                 </a>
                </span>
               </p>
              <p>
                <span>
                  <a href="#contact" 
                    style={{
                    textDecoration: "none",
                    color: "white"
                     }}
                  >
                   Contact Us
                  </a>
                </span>
              </p>
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
                }} >
                </div>
               <div className="bar3" style={{
                background :  toggleMenu && "#2851E3"
                }}>
                </div>
            </div>
            <div 
              className=
               {`nav-overlay ${toggleMenu ?
                    "overlay-slide-right": 
                    "overlay-slide-left"}`}
                id="nav-overlay" >
             <div className="nav-bar"> 
            <ul>
                <li onClick={() => setToggleMenu(!toggleMenu)} id="nav-1" className={`${toggleMenu ? "slide-in-1" : "slide-out-1"} `}><a href="#home">Home</a></li>
                <li onClick={() => setToggleMenu(!toggleMenu)} id="nav-2" className={`${toggleMenu ? "slide-in-2" : "slide-out-2"} `}><a href="#about">About</a></li>
                <li onClick={() => setToggleMenu(!toggleMenu)} id="nav-3" className={`${toggleMenu ? "slide-in-3" : "slide-out-3"} `}><a href="#services" >Services</a></li>
                <li onClick={() => setToggleMenu(!toggleMenu)} id="nav-4" className={`${toggleMenu ? "slide-in-4" : "slide-out-4"} `}><a href="#work">How we work</a></li>
                <li onClick={() => setToggleMenu(!toggleMenu)} id="nav-5" className={`${toggleMenu ? "slide-in-5" : "slide-out-5"} `}><a href="#testimonials">Testimonials</a></li>
                <li onClick={() => setToggleMenu(!toggleMenu)} id="nav-6" className={`${toggleMenu ? "slide-in-6" : "slide-out-6"} `}><a href="#team">Team</a></li>
                <li onClick={() => setToggleMenu(!toggleMenu)} id="nav-7" className={`${toggleMenu ? "slide-in-7" : "slide-out-7"} `}><a href="#contact">Contact Us</a></li>
              </ul>
           </div>
             </div>
            </>
      
             
          }
      </nav>
    );
}

export default Navbar;