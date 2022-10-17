// Copyright NorthStar Development 🕵🏻‍♂️ 2022 
// 17 U.S.C §§ 101-1511

// import relevant modules
import React, { useEffect } from 'react';

//import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// importing images
const icon = require('../../assets/png/Icon.png');
const service = require('../../assets/png/services.png');

// JSX Components
const Services = () => {

  useEffect(() => {
    AOS.init();
  }, [])
    const services:String[] = ['ReactJs', 'Typescript', "Figma & XD", "NodeJs", "Python", "GoLang", "Solidity", "AWS, and more"]
    return (
       <div className="services">
          <div className='services__1'  data-aos-duration="1000" data-aos="fade-zoom-in">
            <p>We’ve got you covered</p>  
            <h2>We help you turn your deas into tangible solutions</h2>
            <p className='-p'>Northstar has the expertise to make your website come to life. Our developers are experts in all of the latest trends, from WordPress to Shopify, so you know that you're in good hands.</p>
            <div className='services__1-skills'>
              {
                services.map((skill, id) => (
                    <div className='skill' key={id}>
                      <img src={icon} alt="sklill" /> <p className='-p2'>{skill}</p>
                    </div>
                ))
              }
            </div>
        </div>        
          <img src={service} alt='service' className='services__2' data-aos-duration="1000" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" />
       </div>
    );
}

export default Services;