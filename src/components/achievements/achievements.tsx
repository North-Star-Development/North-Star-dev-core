import React from "react";

const Achievements = () => {
   const achievementsDetails:Array<any> = [
       {
           number : 483,
           slug : "Satisfied global clients"
       },
       {
           number : 100,
           slug : "Customer return rate"
       },
       {
           number : 854,
           slug : "Successfully finished projects",

       },
       {
           number : 12,
           slug : "Agency Awards"
       }
   ]
    return(
     <div className="achievements">
         <p>The numbers don't lie</p>
         <h2> Our Achievements</h2>
         <div className="achievements_">
          {
              achievementsDetails.map((detail, i) => (
               <div className="achievements__detail" key={i}>
                    <h2 className="-h2">
                        {detail?.number === 100 
                          ? `${detail?.number}%` 
                          : detail?.number === 12
                          ? `${detail?.number}+` 
                          : detail?.number }
                     </h2>
                    <p className="-a">{detail?.slug}</p>
                </div>
              ))
          }
      </div>
     </div>
    
    );
}

export default Achievements;