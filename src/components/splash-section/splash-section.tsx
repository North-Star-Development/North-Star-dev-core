import React from "react";
import Button from "../button/button";

const splashImg = require('../../assets/png/splash-img.png');
//resoure
const SplashSection = () => {
   return (
     <section className="splash">
         <div className="splash__section1">
             <p>Welcome to NorthStar</p>
             <h2>Software development at the speed of light</h2>
             <p> Northstar is a design and software development agency that delivers affordable, professional, and fast service. We've got your back!</p>
             <div className="splash__section1-buttons">
               <Button text="Get in Touch" />
               <Button text="Learn More" />
             </div>
         </div>
         
         <img src={splashImg} alt="splash section" /> 
     </section>
   );
}

export default SplashSection;