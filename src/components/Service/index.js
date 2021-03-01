/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../Service/services.css";
import Card from "../Card/";
import heavy from "../images/heavylugg.jpg";
import ship from "../images/smallship.jpg";
import small from "../images/smalllugg.jpg";
import train from "../images/trainsmall.jpg";
function Services() {
  return (
    
    <section className="service-section">
      
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
             <Card image = {heavy} btntxt = "Book Now" title ="Transfer by Road" maintext="To send luggage within states book this service"/>
              <Card image={ship} btntxt = "Book Now" title ="Transfer via Ship" maintext="To send luggage via ship book this service"/>
              <Card image={small} btntxt = "Book Now" title ="Within Town" maintext="To send luggage within town book this service"/>
              <Card image={train} btntxt = "Book Now" title =" Transfer Via train" maintext="To send luggage via train book this service"/>
            </div>
          </div>
        </div>
      </div>
      </section>
    
  );
}

export default Services;
