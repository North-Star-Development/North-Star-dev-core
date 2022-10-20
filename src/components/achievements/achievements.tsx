// Copyright NorthStar Development 🕵🏻‍♂️ 2022 
// 17 U.S.C §§ 101-1511

// import relevant modules
import React, { useEffect } from "react";

//import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// types
interface achievementsTypes {
    number : number,
    slug : string
}

//JSX Component
const Achievements = () => {

    // Array of object in a list
   const achievementsDetails:Array<achievementsTypes> = [
       {
           number : 53,
           slug : "Satisfied global clients"
       },
       {
           number : 100,
           slug : "Customer return rate"
       },
       {
           number : 23,
           slug : "Successfully finished projects",

       },
       {
           number : 5,
           slug : "Agency Awards"
       }
   ]

 useEffect(() => {
     AOS.init();
 }, [])
    return(
     <div className="achievements" id="achievements">
         <p data-aos-duration="1000" data-aos="fade-in">The numbers don't lie</p>
         <h2 data-aos-duration="1000" data-aos="fade-in"> Our Achievements</h2>
         <div className="achievements_" data-aos-delay="100" data-aos-duration="1000" data-aos="fade-zoom-in" >
          {
              achievementsDetails.map((detail, i) => (
               <div className="achievements__detail" key={i}>
                    <h2 className="-h2" data-aos-delay="150" data-aos-duration="1000" data-aos="fade-in">
                        {detail?.number === 100 
                          ? `${detail?.number}%` 
                          : detail?.number === 5
                          ? `${detail?.number}+` 
                          : detail?.number }
                     </h2>
                    <p className="-a" data-aos-delay="200" data-aos-duration="1000" data-aos="fade-in">{detail?.slug}</p>
                </div>
              ))
          }
      </div>
     </div>
    
    );
}

export default Achievements;