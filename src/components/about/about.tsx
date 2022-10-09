// Copyright NorthStar Development 🕵🏻‍♂️ 2022 
// 17 U.S.C §§ 101-1511

// import relevant modules
import React from "react";
import Button from "../button/button";

//illustration image
const aboutImg = require('../../assets/png/about.png');

//JSX Component
const About = () => {
    return (
      <div className="about">
        <img className="about__img" src={aboutImg} alt="about northstar" />
        <div className="about__contents">
          <p>About us</p>
          <h2>Your one stop shop for design and development</h2>
          <p className="about-p">Northstar is a design and software development agency that helps startups to Fortune 500 companies execute their digital strategy. It's fast, professional, and affordable. We've got a diverse team that has different backgrounds, cultures, and perspectives!</p>
          <Button primary={true} text="Get in Touch" />
        </div>     

      </div>
    );
}

export default About;