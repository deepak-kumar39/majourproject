import React from "react";
import web from "../images/why-us.png";
import "../About/about.css";
// import { NavLink } from "react-router-dom";
// import Common from "../Common/";
import { Link } from "react-router-dom";
function About() {
  return (
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1 className="brand-name">About Us</h1>
                <h4>
                   LMS is a luggage management company
                  which provide all services related to luggage transfer at one
                  place so that user don't need to go to differet website for
                  different services, this is not appropriate for any user
                  that's why we are here to help you. Here you can book service
                  according to your luggage. We always give priority to our user.
                </h4>
                <div className="mt-3">
                  <Link to="/contact" className="btn btn-danger">
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={web} className="img-fluid animated" alt="about" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section className="about-section ">
    //   <Common
    //     name="Welcome to About us"
    //     visit="/contact"

    //     imgsrc={web}
    //     btn="Contact Now"
    //   />
    //   <div className="about-info container">Hello, Welcome to LMS. LMS is a luggage management
    //     company which provide all services related to luggage transfer at one place so that user don't need to go to differet website for different services, this is not appropriate for any user that's why we are here to help you. Here you can book service according to your luggage.
    //     We always give priority to our user so that he/she can experience smooth and efficient service.
    //   </div>
    //   </section>
  );
}

export default About;
