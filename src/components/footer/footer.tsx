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

  }, [])

    return (
      <div className="footer" data-aos-duration="1000" data-aos="fade-in">
          <div className="footers" >
            <img src={northstarImg} alt="footer img" />
             <div className="footers__">
                 <h3> Socials</h3>
                 <p>
                  <a href="https://www.linkedin.com/company/tech-with-aj-inc/"
                   style={{
                      textDecoration: "none",
                      color : "#52525B"
                    }}
                   >
                   LinkedIn
                   </a>
                  </p>
                 <p>
                   <a  href="https://github.com/North-Star-Development"
                    style={{
                      textDecoration: "none",
                      color : "#52525B"
                     }}>
                     Github
                     </a>
                 </p>
                 <p> 
                   <a href="Aaronfrazier@northstardevelopmentllc.com"    
                    style={{
                      textDecoration: "none",
                      color : "#52525B"
                     }}> 
                     Mail
                    </a> 
                  </p>
                  <p> 
                   <a href="tel:+17027439271"    
                    style={{
                      textDecoration: "none",
                      color : "#52525B"
                     }}> 
                     Tel
                    </a> 
                  </p>
             </div>
          </div>
          <p className="foot">©2022, Northstar LLC</p>
      </div>
    );

}

export default Footer;