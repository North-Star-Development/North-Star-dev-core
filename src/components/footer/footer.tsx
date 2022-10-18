// Copyright NorthStar Development 🕵🏻‍♂️ 2022 
// 17 U.S.C §§ 101-1511

// importing relevant module
import React, { useEffect } from "react";

//import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// importing north star image
const northstarImg = require('../../assets/illustrations/northstar_sec.png');

//JSX Component
const Footer = () => {
  useEffect(() => {
    AOS.init()
  })
    return (
      <div className="footer" data-aos-duration="1000" data-aos="fade-in">
          <div className="footers" >
            <img src={northstarImg} alt="footer img" />
             <div className="footers__">
                 <h3> Socials</h3>
                 <p>LinkedIn</p>
                 <p> Github</p>
                 <p> Facebook</p>
                 <p> Twitter</p>
             </div>
          </div>
          <p className="foot">©2022, Northstar LLC</p>
      </div>
    );

}

export default Footer;