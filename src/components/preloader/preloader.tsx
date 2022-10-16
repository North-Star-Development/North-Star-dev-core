import React, { useEffect, useRef, useState } from "react";
const preloaderImg = require('../../assets/illustrations/preloader.png');

const Preloader = () => {

    const [loading, setLoading]: any= useState(false)
    const [img, setimg]:any = useState(false);

    const imgRef = useRef(null);
    const slideUpAnimate = () => {
    
        setTimeout(() => {
            setLoading(true);
        }, 1000)

        setTimeout(() => {
            setimg(true)
        }, 2000)
        
    }
    useEffect(() => {
            slideUpAnimate()
        
    }, [])
    return (
       <div className="preloader" >
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
            <h1 style={{
                display : img && "none"
            }} > Northstar</h1>
           </div>  
         
         </div>
      
       </div>
    );
}

export default Preloader;