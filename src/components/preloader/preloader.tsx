import React, { useEffect, useRef, useState } from "react";
const preloaderImg = require('../../assets/illustrations/preloader.png');

const Preloader = () => {

    const [loading, setLoading]: any= useState(false)
    const [img, setimg]:any = useState(false);
    const [onload, setonload] = useState(false);
    const [hidden, setHidden]:any = useState(false)
    const slideUpAnimate = () => {
    
        setTimeout(() => {
            setLoading(true);
        }, 2000)

        setTimeout(() => {
            setimg(true);
        }, 2600)
        setTimeout(() => {
            setonload(true);
        }, 150);
        
        setTimeout(() => {
            setHidden(true);
        }, 5000)
    }
    useEffect(() => {
            slideUpAnimate()
    }, [])
    
    return (
       <div className="preloader" style={{
           display: hidden && "none"
       }} >
         <div className={`preloader__overlay ${loading && "overlay"} `}>
             <ul>
                <li className={`preloader__1 ${loading && "preloaders__1"}`}></li>
                <li className={`preloader__2 ${loading && "preloaders__2"}`}></li>
                <li className={`preloader__3 ${loading && "preloaders__3"}`}></li>
                <li className={`preloader__4 ${loading && "preloaders__4"}`}></li>
             </ul> 
           <div className="content">
            <img src={preloaderImg} alt="preloader" style={{
                display : img && "none"
            }} />  
           <div className="text" style={{
                display : img && "none"
            }}>
          {onload && 'Northstar ⭐️'} 
           </div>
            {/* <h1 style={{
                display : img && "none"
            }} ></h1> */}
           </div>  
         
         </div>
      
       </div>
    );
}

export default Preloader;