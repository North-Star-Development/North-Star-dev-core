import React from "react";

const workCard = require("../../assets/png/work.png")
const HowWeWork = () => {
    const workList = [
        {
            slug: "01",
            slug_header : "We Research",
            slug_paragraph : "We understand that you have an idea of how you want your project to be handled, do we partner with you to ensure that we capture that idea and effectively build on it to a chieve your desired result."
        },
        {
            slug: "02",
            slug_header : "We Design",
            slug_paragraph : "Once we’ve gotten a clear idea of what you want, our team of creative professional designers swing into action to turn tose ideas into stunning visuals that effectively gets the message accross."
        },
        {
            slug : "03",
            slug_header : "We Build",
            slug_paragraph : "After the designs have been approved, our team of badass engineers come in to turn the approved designs into functional solutions."
        },
        {
            slug : "04",
            slug_header : "Testing & Delivery",
            slug_paragraph: "After the build, we test extensively to ensure that every single feature works as expected then hand over your product with a smile on our faces."
        }
    ]
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
           {
             workList.map((list) => (
                <div className="work__detail__list">
                   <p className="p__list">{list?.slug}</p>
                   <h2>{list?.slug_header}</h2>
                   <p className="p2__list">{list?.slug_paragraph}</p>
                 </div>
             ))
           }
   
       </div>
     </div>
    );
}

export default HowWeWork;