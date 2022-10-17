// Copyright NorthStar Development 🕵🏻‍♂️ 2022 
// 17 U.S.C §§ 101-1511

// import relevant modules
import React, { useEffect } from "react";

//importing Component
import Button from "../button/button";

//import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
// importing png or logo
const splashImg = require('../../assets/png/splash-img.png');



// JSX Component
const SplashSection = () => {
  useEffect(() => {
    AOS.init();
  }, [])
   return (
     <section className="splash">
         <div className="splash__section1">
             <p data-aos="fade-in" data-aos-delay="5000">Welcome to NorthStar</p>
             <h2>Software development <br/> at the speed of  <span>light </span>💫</h2>
             <p className="splash__section1-p"> Northstar is a design and software development agency that delivers affordable, professional, and fast service. We've got your back!</p>
             <div className="splash__section1-buttons">
               <Button primary={true} text="Get in Touch"  />
               <Button primary={false} text="Learn More" />
             </div>
         </div>  
         <img src={splashImg} alt="splash section" /> 
     </section>
   );
}

export default SplashSection;