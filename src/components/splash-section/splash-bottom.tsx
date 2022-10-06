import React from "react";
const splashBottomImg = require('../../assets/png/splash_.png');

const SplashBottom = () => {
    return (
      <div className="splash__bottom" style={{
        background: "white",
        width: "100%"
      }}>
       <img
        style={{
            marginTop: "-5rem",
            width: "100%"
        }} 
        src={splashBottomImg} alt="splash bottom" />
      </div>
    );
}

export default SplashBottom