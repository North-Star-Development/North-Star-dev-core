import React from "react";

const workCard = require("../../assets/png/work.png")
const HowWeWork = () => {
    return (
     <div className="work">
       <div className="work__">
         <div className="work__card">
             <p className="-we">Here's how we work</p>
             <h2>How we work</h2>
             <p className="-w" >Clarity gives you the blocks & components you need to create a truly professional website.</p>
         </div>
         <img src={workCard} alt="work card" />

       </div>
       <div className="work__detail">

       </div>
     </div>
    );
}

export default HowWeWork;