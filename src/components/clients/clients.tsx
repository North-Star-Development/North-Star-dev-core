// Copyright NorthStar Development 🕵🏻‍♂️ 2022 
// 17 U.S.C §§ 101-1511

// import relevant modules

import React, { useEffect, useRef, useState } from "react";

import { useWindowWidth } from "@react-hook/window-size";

//import AOS

import AOS from 'aos';
import 'aos/dist/aos.css';

// dynamically gettting images of clients

const eachClientImg = (client : number) => {
    return require(`../../assets/png/Oval${client}.png`)
}

//client details types

interface clientDetailsTypes {
    comments :string,
    img: any,
    name : string,
    title : string,
}

//JSX Component

const Clients = () => {
  
    // Array of objects Lists

    const clientsDetails:Array<clientDetailsTypes> = [
        {
            comments : "“Seamless transaction. Extremely knowledgeable professionals who offered sound advice and guidance the entire build AND aftercare and follow up, Highly recommend”",
            img : eachClientImg(3),
            name: "Randal Parker",
            title: "CEO of Smiles for Miles Inc"
        },
        {
            comments : "“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”",
            img : eachClientImg(2),
            name: "Cesar Cruz",
            title: "Client"
        },
        {
            comments : "“This is single handedly the go-to business for my technology needs. they built and executed my music platform, I will be recommending this company to some of my friends in need of websites and apps.”",
            img : eachClientImg(4),
            name: "Patrick Rodgers",
            title: "Freelancer"
        },
        {
            comments : "“Northstar helped me build a new PC gaming system for my stream set up so now I can play COD and other FSP games, I will gladly recommend for gaming system and PC building. Aaron knows his onions.”",
            img : eachClientImg(5),
            name: "Robert Ireland",
            title: "Graphic Designer"
        },
        {
            comments : "“I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish. Incase you need landing pages done in seconds, North star got you covered.”",
            img : eachClientImg(1),
            name: "Jenny Wilson",
            title: "Developer & Freelancer"
        }
    ]


    const width = useWindowWidth();
    const delay = 3000;
    const [index, setIndex]:any = useState(0);
    const timeoutRef:any = useRef(null);

    const resetTimeOut = () => {
        timeoutRef.current && clearTimeout(timeoutRef.current)
    }
    useEffect(() => {
        AOS.init();
        resetTimeOut();
       timeoutRef.current = setTimeout(() => {
             setIndex((prevIndex) => 
              prevIndex === clientsDetails.length - 1 ? 0 : prevIndex + 1
             ) 
       }, delay);
       return () => {
           resetTimeOut();
       }
     
    }, [index])
    return (
       <div className="client" id="testimonials">
        <p data-aos-duration="1000" data-aos="fade-in">Several reports say we are excellent</p>
        <h2 data-aos-duration="1000" data-aos="fade-in">Our happy clients say about us</h2>
         <div className="clients " data-aos-duration="1000" data-aos-delay="100" data-aos="fade-in" style={{
            marginLeft: width>= 1250 ? "60rem" : "95rem",
         }}>	    
            {
              clientsDetails.map((detail, id) => (
                 <div className="clients__detail" key={id} style={{
        
                    transition: "ease 1000ms",
                    transform: `${width <= 750 ? `translate3d(${-index * 110}%, 0, 0)` : `translate3d(${-index * 70}%, 0, 0)`}`
              }}>
                     <span>&#11088;&#11088;&#11088;&#11088;&#11088;</span>
                     <p>{detail?.comments}</p>
                     <div className="clients_p">
                      <img src={detail?.img} alt="clients " />
                       <div className="c-p"> 
                         <h2> {detail?.name}</h2>
                         <p>{detail?.title}</p>
                        </div>
                   
                      </div>
                 </div>
              ))
            }
         </div>
         <div className="slideshowDots">
        {clientsDetails.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
       </div>
    );
}

export default Clients;