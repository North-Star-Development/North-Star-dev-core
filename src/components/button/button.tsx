// Copyright NorthStar Development 🕵🏻‍♂️ 2022 
// 17 U.S.C §§ 101-1511

// import relevant modules
import React from 'react'

//JSX component with props
const Button = ({text, primary}) => {
    return (
      <a href={`${primary ? "#contact" : "#about"}`}
        style={{
        textDecoration: "none",
        color: "white",
       }}
       >
      <button 
       className=''
        style={{
           background: primary ? "#C3F7B6" : "#2851E3",
           border : primary ? "#C3F7B6" : "solid 1px #fff",
           color: primary? "#25136D" : "#fff"
        }}
       >
       {text}
      </button>
      </a>
    )
}

export default Button;