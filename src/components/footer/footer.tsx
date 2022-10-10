// Copyright NorthStar Development 🕵🏻‍♂️ 2022 
// 17 U.S.C §§ 101-1511

// importing relevant module
import React from "react";

// importing north star image
const northstarImg = require('../../assets/illustrations/northstar_sec.png');

//JSX Component
const Footer = () => {
    return (
      <div className="footer">
          <div className="footers">
            <img src={northstarImg} alt="footer img" />
             <div className="footers__">
                 <h3> Socials</h3>
                 <p>LinkedIn</p>
                 <p> Github</p>
                 <p> Facebook</p>
                 <p> Twitter</p>
             </div>
          </div>
          <p className="foot">©2022, Northstar LLC</p>
      </div>
    );

}

export default Footer;