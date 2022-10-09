// Copyright NorthStar Development 🕵🏻‍♂️ 2022 
// 17 U.S.C §§ 101-1511

// import relevant modules and component
import React from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Button from "../button/button";

// importing images
const mail = require('../../assets/png/mail.png');

// JSX Component
const Contacts = () => {

    return (
     <div className="contact">
        <div className="contacts__1">
          <p>Say hello to Northstar</p>
          <h2>Love to hear from you, Get in touch <span className="wave">👋🏽</span></h2>
          <p className="text">We exist to make your lives better and bring your ideas to live. Is there something you’d need our help with? Please feel free to share.</p>
          <img src={mail} alt="mail" />
        </div>
        <div className="contacts__2">
          <div className="-c2">
             <p>Send us a message</p>
           <form>
             <input type="text" placeholder="What is your Name?"/>
             <input type="text" placeholder="What is your email address?" />
             <PhoneInput
                country={'us'}
                // value={this.state.phone}
                // onChange={phone => this.setState({ phone })}
                />
               <input className="messages" type="text" placeholder="Write your message"/>
               <Button primary={true} text="Send Message" />
           </form>
        </div>  
          </div>
         
     </div>
    );
}

export default Contacts;