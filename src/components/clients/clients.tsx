import React from "react";

const eachClientImg = (client : number) => {
    return require(`../../assets/png/Oval${client}.png`)
}

const Clients = () => {
    const clientsDetails = [
        {
            comments : "“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”",
            img : eachClientImg(1),
            name: "Leslie Godwin",
            title: "Freelance React Developer"
        },
        {
            comments : "“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”",
            img : eachClientImg(2),
            name: "Jacob Jones",
            title: "Digital Marketer"
        },
        {
            comments : "“I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.”",
            img : eachClientImg(3),
            name: "Jenny Wilson",
            title: "Graphic Designer"
        }
    ]
    return (
       <div className="client">
        <p>Several reports say we are excellent</p>
        <h2>Our happy clients say about us</h2>
         <div className="clients">	

          
            {
              clientsDetails.map((detail, id) => (
                 <div className="clients__detail" key={id}>
                     <span>&#11088;&#11088;&#11088;&#11088;&#11088;</span>
                     <p>{detail?.comments}</p>
                     <div className="clients_p">
                      <img src={detail?.img} alt="clients " />
                       <div className="c-p"> 
                         <h2> {detail?.name}</h2>
                         <p>{detail?.title}</p>
                        </div>
                   
                      </div>
                 </div>
              ))
            }
         </div>
       </div>
    );
}

export default Clients;