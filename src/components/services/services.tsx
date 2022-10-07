import React from 'react';
const icon = require('../../assets/png/Icon.png');
const service = require('../../assets/png/services.png');

const Services = () => {
    const services:String[] = ['ReactJs', 'Typescript', "Figma & XD", "NodeJs", "Python", "GoLang", "Solidity", "AWS, and more"]
    return (
       <div className="services">
          <div className='services__1'>
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
          <img src={service} alt='service' className='services__2' />
       </div>
    );
}

export default Services;