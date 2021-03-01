/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../Service/services.css";
import Card from "../Card/";
import heavy from "../images/heavylugg.jpg";
import ship from "../images/shipcargo.jpg";
import small from "../images/smalllugg.jpg";
import train from "../images/bytrain.jpg";
function Services() {
  return (
    
    <section className="service-section">
      <div className="my-5">
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
             <Card image = {heavy} btntxt = "Book Now" title ="Heavy luggage" />
              <Card image={ship} btntxt = "Book Now" title ="Transport via Ship"/>
              <Card image={small} btntxt = "Book Now" title ="Small luggage"/>
              <Card image={train} btntxt = "Book Now" title ="Via train"/>
            </div>
          </div>
        </div>
      </div>
      </section>
    
  );
}

export default Services;
