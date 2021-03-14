import React from "react";
import home from "../images/mainhome.png";
import "../Home/home.css";
import { Link } from "react-router-dom";

// import { NavLink } from "react-router-dom";
function Home() {
  return (
    <section id="home-header" className="d-flex align-items-center">
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1 className="brand-name">Welcome</h1>
              <h3>We are here to take care of your luggage move freely without being worry about your luggage with  <strong className="brand-name"> LMS</strong></h3>

              <div className="mt-3">
                <Link to="/services" className="btn btn-danger">Get Started</Link>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 header-img">
              <img src={home}
              className="img-fluid animated"
              alt="home"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   
    
  );
}

export default Home;
