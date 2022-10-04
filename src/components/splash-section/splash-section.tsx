import React from "react";
import Button from "../button/button";
const SplashSection = () => {
   return (
     <section className="splash">
         <div className="splash__section1">
             <p>Welcome to NorthStar</p>
             <h2>Software development at the speed of light</h2>
             <h3> Northstar is a design and software development agency that delivers affordable, professional, and fast service. We've got your back!</h3>
             <div className="splash__section1-buttons">
               <Button text="Get in Touch" />
               <Button text="Learn More" />
             </div>
         </div>
     </section>
   );
}

export default SplashSection;