// Copyright NorthStar Development 🕵🏻‍♂️ 2022 
// 17 U.S.C §§ 101-1511

// import relevant modules and component
import React from "react";
import Button from "../button/button";

// importing illustrations from assets
const dev = require('../../assets/illustrations/dev.png');
const ux = require('../../assets/illustrations/ux.png');
const brand = require('../../assets/illustrations/brand.png');
const motion = require('../../assets/illustrations/motion.png');


// types
interface listsObjectTypes {
    header: string,
    paragraph: string,
    imgUrl : string
}

// JSX Component
const OfferList = () => {

    // Array of Objects
    const lists: Array<listsObjectTypes>= [
        {
            header: "UI/UX Design",
            paragraph : "Our designers are experienced professionals who know how to deliver high-quality work at lightning speed. We'll get started on your project within minutes of hiring us and have it done in just 24 hours!",
            imgUrl : ux
        },
        {
            header : "Web & Software Development",
            paragraph : "We are the ultimate solution for developing softwares that help teams who want to be more productive, deliver products faster, and reduce costs.",
            imgUrl : dev
        },
        {
            header: "Branding",
            paragraph : "We don't cut corners. We only work with highly qualified and experienced designers who are passionate about their work. Our branding projects are always completed on time, on budget and offer the best value for your money!",
            imgUrl : brand 
        },
        {
            header : "Illustrations & Motion",
            paragraph: "We not only tell sbrand stories through design and software, we help brands communicate through illustrations and stunning motion designs. Your’s could be next.",
            imgUrl : motion
        }
    ]
    return (
      <div className="offer">
          <p>Whaat we do</p>
          <h2> Here are a list of services we offer</h2>
          <div className="offer__list">
              {lists.map((list, id) => (
                  <div className="offer__list_" key={id}>
                      <div className="offer__list_detail">
                        <h2 className="-head">{list?.header}</h2>
                        <p className="-t">{list?.paragraph}</p>
                      </div>
                      <img src={list?.imgUrl} alt="illustrate" />
                  </div>
              ))}
          </div>
          <Button text="Get Started" primary={true} />
      </div>
    );
}

export default OfferList;