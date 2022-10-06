import React from 'react'

const Button = ({text, primary}) => {
    return (
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
    )
}

export default Button;