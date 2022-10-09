import React from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Button from "../button/button";
const mail = require('../../assets/png/mail.png');

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
          <p>Send us a message</p>
           <form>
             <input type="text" placeholder="What is your Name"/>
             <input type="text" placeholder="What is your email address"/>
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
    );
}

export default Contacts;