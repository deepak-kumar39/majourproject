import React from "react";
import web from "../images/home1.png";
import "../Home/home.css";
import Common from "../Common/";
// import { NavLink } from "react-router-dom";
function Home() {
  return (
    <section className="home-section">
      <Common
        name="Move freely without being worry about your luggage with"
        visit="/services"
        imgsrc={web}
        btn="Get Started"
      />
      </section>
    
  );
}

export default Home;
