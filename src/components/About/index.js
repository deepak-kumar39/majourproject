import React from "react";
import web from "../images/about2.png";
import "../About/about.css";
// import { NavLink } from "react-router-dom";
import Common from "../Common/";
function About() {
  
  return (
    <section className="about-section ">
      <Common
        name="Welcome to About us"
        visit="/contact"
        
        imgsrc={web}
        btn="Contact Now"
      />
      <div className="about-info">Hello, Welcome to LMS. We are always happy to provide you best services.
        LMS is a luggage management 
        company which provide all services related to luggage transfer at one place so that user don't need to go to differet website for different services.This is not appropriate for any user that's why we are here to help you. Here you can book service according to your luggage like if there is need of small luggage transfer within town then we have small luggage service and so on.
        We always give priority to our user so that he/she can experience smooth and efficient service. 
      </div>
      </section>
    
  );
}

export default About;
