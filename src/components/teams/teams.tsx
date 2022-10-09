// Copyright NorthStar Development 🕵🏻‍♂️ 2022 
// 17 U.S.C §§ 101-1511

// import relevant modules
import React from "react";

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
          bg : "#C3F7B6",
          img: eachMemberImg(1),
          imgSide : eachMemberSide(1),
          name : "Andrew Zion",
          title: "CEO & Founder",
          alt: "member 1 emojis"
        },
        {
            bg : "#B0E3FF",
            img: eachMemberImg(2),
            imgSide : eachMemberSide(2),
            name : "Bukayo saka",
            title: "Lead Software Engineer",
            alt: "member 2 emojis"
       },
       {
            bg : "#FFDFB0",
            img: eachMemberImg(3),
            imgSide : eachMemberSide(3),
            name : "Devcenter Lore",
            title: "Software Engineer",
            alt: "member 3 emojis"
      },
      {
            bg : "#FFC0DE",
            img: eachMemberImg(4),
            imgSide : eachMemberSide(4),
            name : "Degarden Pous",
            title: "Software Engineer",
            alt: "member 3 emojis"
      } 
    ]
    return (
      <div className="team">
         <p>Baddasses you can back on</p> 
         <h2>Global Professional Creative</h2>
         <h2 className="subh"> Team Members</h2>
         <div className="teams">
         {
           teamMemojis.map((member, i) => (
             <div className="teams__member" 
                 key={i}
                  >
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