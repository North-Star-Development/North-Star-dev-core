// Copyright NorthStar Development 🕵🏻‍♂️ 2022 
// 17 U.S.C §§ 101-1511

// import relevant modules
import React, { useEffect } from "react";
import Button from "../button/button";

//import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';


//illustration image
const aboutImg = require('../../assets/png/black-people-computer.jpeg');
// const ss = require('../../assets/illustrations/sha.png');
// const ss2 = require('../../assets/illustrations/shape.png');

//JSX Component
const About = () => {
  useEffect(() => {
    AOS.init();
  }, [])
    return (
      <section className="about" id="about">
        {/* <img className="alt" src={ss} alt="ss" data-aos="fade-in" data-aos-duration="2000"/> */}
        <img className="about__img" src={aboutImg} alt="about northstar" data-aos="fade-in" data-aos-duration="2000"/>
        {/* <img className="alt2" src={ss2} alt="ss" data-aos="fade-in" data-aos-duration="2000"/> */}
        <div className="about__contents"  data-aos="fade-up" data-aos-duration="2000">
          <p >About us</p>
          <h2>Your one stop shop for design and development</h2>
          <p className="about-p" data-aos="fade-in" data-aos-duration="2000">Northstar is a design and software development agency that helps startups to Fortune 500 companies execute their digital strategy. It's fast, professional, and affordable. We've got a diverse team that has different backgrounds, cultures, and perspectives!</p>
          <Button primary={true} text="Get in Touch" data-aos="fade-in" />
        </div>     

      </section>
    );
}

export default About;