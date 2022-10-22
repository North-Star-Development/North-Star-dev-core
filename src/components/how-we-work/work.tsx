// Copyright NorthStar Development 🕵🏻‍♂️ 2022 
// 17 U.S.C §§ 101-1511

// import relevant modules
import React, { useEffect } from "react";
import { useWindowWidth } from "@react-hook/window-size";

//import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';


// importing image
const workCard = require("../../assets/png/work.png");


// types
interface ListObjectTypes {
    slug : string,
    slug_header : string,
    slug_paragraph : string
}

// JSX Component
const HowWeWork = () => {
    const width = useWindowWidth();

    // array of of object list
    const workList:Array<ListObjectTypes> = [
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

    useEffect(() => {

      AOS.init();
      
    }, [])
    return (
     <div className="work" id="work">
       <div className="work__" data-aos-duration="1000" data-aos="fade-in">
         <div className="work__card">
             <p className="-we" data-aos-duration="1000" data-aos="fade-in" data-aos-delay="100">Here's how we work</p>
             <h2 data-aos-duration="1000" data-aos="fade-in" data-aos-delay="120">How we work</h2>
             <p className="-w" data-aos-duration="1000" data-aos="fade-in" data-aos-delay="140">Clarity gives you the blocks & components you need to create a truly professional website.</p>
         </div>
         {
             width >= 800 && <img src={workCard} alt="work card" />
         }
         

       </div>
       <div className="work__detail" data-aos-duration="1000" data-aos="fade-in" data-aos-delay="100">
           {
             workList.map((list, i) => (
                <div className="work__detail__list" key={i}>
                   <p className="p__list">{list?.slug}</p>
                   <h2>{list?.slug_header}</h2>
                   <p className="p2__list" data-aos-duration="1000" data-aos="fade-in" data-aos-delay="300">{list?.slug_paragraph}</p>
                 </div>
             ))
           }
   
       </div>
     </div>
    );
}

export default HowWeWork;