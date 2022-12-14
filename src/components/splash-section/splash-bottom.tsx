// Copyright NorthStar Development 🕵🏻‍♂️ 2022 
// 17 U.S.C §§ 101-1511

// import relevant modules
import React from "react";


//importing illustration
const splashBottomImg = require('../../assets/png/splash_.png');

//JSX component
const SplashBottom = () => {

    return (
      <div className="splash__bottom" style={{
        background: "white",
        width: "100%",
      }}>
       <img
        style={{
            // background: "blue",
            marginTop: "-6.2rem",
            width: "100%"
        }} 
        className="buttom"
        src={splashBottomImg} alt="splash bottom" />
      </div>
    );
}

export default SplashBottom