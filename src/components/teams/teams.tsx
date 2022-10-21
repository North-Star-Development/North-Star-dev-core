// Copyright NorthStar Development 🕵🏻‍♂️ 2022 
// 17 U.S.C §§ 101-1511

// import relevant modules
import React, { useEffect } from "react";

//import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';


// dynamically importing member images
const eachMemberImg = (member : number) => {
    return require(`../../assets/illustrations/Memoji${member}.png`);
}

// dynamically importing member images
const eachMemberSide = (eachmember : number) => {
  return require(`../../assets/illustrations/member${eachmember}.png`)
}


// types
interface teamMemojisTypes {
    bg : string,
    img: any,
    imgSide : any,
    name : string,
    title : String,
    alt : string
}

// JSX Component
const Teams = () => {

 // Array of Objects Lists
    const teamMemojis:Array<teamMemojisTypes> = [
        {
          bg : "#B0E3FF",
          img: eachMemberImg(2),
          imgSide : eachMemberSide(2),
          name : "Aaron Frazier",
          title: "CEO & Founder",
          alt: "member 1 emojis"
        },
        {
            bg : "#FFC0DE",
            img: eachMemberImg(4),
            imgSide : eachMemberSide(4),
            name : "Zaid Abukhadier",
            title: "Lead Software Engineer",
            alt: "member 3 emojis"
        },
        {
            bg : "#C3F7B6",
            img: eachMemberImg(1),
            imgSide : eachMemberSide(1),
            name : "Benita Kirui",
            title: "Head Of Product",
            alt: "member 2 emojis"
       },
       
      {
            bg : "#FFDFB0", 
            img: eachMemberImg(3),
            imgSide : eachMemberSide(3),
            name : "Kin Kalid",
            title: "Lead Software Engineer",
            alt: "member 3 emojis"
      } 
    ]

    useEffect(() => {
      AOS.init()
    })
   
    return (
      <div className="team" id="team">
         <p data-aos="fade-in" data-aos-duration="1000">Baddasses you can back on</p> 
         <h2 data-aos="fade-in" data-aos-duration="1000">Global Professional Creative</h2>
         <h2 className="subh" data-aos="fade-in" data-aos-duration="1000"> Team Members</h2>
         <div className="teams">
         {
           teamMemojis.map((member, i) => (
             <div className="teams__member" 
                 key={i}
                 data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100" >
                   <div className="img_o"            
                      style={{
                      background:member?.bg         
                    }}>
                    <img className="img" src={member?.img} alt={member?.alt} />
                    </div>
                    <div className="members">
                     <img 
                        className="img_"
                        src={member?.imgSide}
                         alt={member?.alt} />
                      <h2>{member?.name}</h2>
                      <p>{member?.title}</p>  
                    </div>
                    
                 </div>
             ) )
         }
         </div>
    
      </div>
    );
}


export default Teams;