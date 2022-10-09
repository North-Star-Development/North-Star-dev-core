// Copyright NorthStar Development 🕵🏻‍♂️ 2022 
// 17 U.S.C §§ 101-1511

// import relevant modules
import React from "react";

//importing Component
import Button from "../button/button";

// importing png or logo
const splashImg = require('../../assets/png/splash-img.png');

// JSX Component
const SplashSection = () => {
   return (
     <section className="splash">
         <div className="splash__section1">
             <p>Welcome to NorthStar</p>
             <h2>Software development at the speed of light</h2>
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